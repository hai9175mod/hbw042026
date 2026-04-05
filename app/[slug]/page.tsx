import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getPostBySlug, getAllPostSlugs, formatDate } from "@/lib/api";
import { CalendarDays, Folder, ArrowLeft } from "lucide-react";

// CẤU HÌNH DOMAIN CHÍNH (QUAN TRỌNG CHO SEO)
const MAIN_DOMAIN = "https://hbw.com.vn";

// --- 1. PRE-RENDER (Tạo trang tĩnh HTML) ---
export async function generateStaticParams() {
  const posts = await getAllPostSlugs();
  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

// --- 2. DYNAMIC METADATA (SEO Nâng cao) ---
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Không tìm thấy bài viết",
      description: "Nội dung bạn tìm kiếm không tồn tại hoặc đã bị xóa.",
    };
  }

  // Lấy dữ liệu an toàn
  const title = post.title.rendered;
  // Loại bỏ thẻ HTML trong excerpt để làm description sạch
  const rawDescription = post.excerpt?.rendered?.replace(/<[^>]*>?/gm, "").trim();
  const description = rawDescription ? rawDescription.slice(0, 160) + "..." : `Bài viết ${title} từ HBW.`;
  
  const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
  const ogImage = featuredMedia?.source_url || `${MAIN_DOMAIN}/images/og-default.jpg`; // Ảnh mặc định nếu bài không có ảnh
  
  const publishedTime = post.date;
  const modifiedTime = post.modified;

  return {
    title: title,
    description: description,
    
    // CANONICAL URL (CỰC KỲ QUAN TRỌNG)
    // Trỏ về domain chính, không qua thư mục trung gian theo yêu cầu của bạn
    alternates: {
      canonical: `${MAIN_DOMAIN}/${slug}`,
    },

    // Open Graph (Hiển thị đẹp trên Facebook/Zalo)
    openGraph: {
      title: title,
      description: description,
      url: `${MAIN_DOMAIN}/${slug}`,
      siteName: "HBW - Xe đạp của thanh xuân",
      locale: "vi_VN",
      type: "article",
      publishedTime: publishedTime,
      modifiedTime: modifiedTime,
      authors: ["HBW Team"],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    // Twitter Card
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: [ogImage],
    },
  };
}

// --- 3. COMPONENT CHÍNH ---
export default async function SinglePostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  // Dữ liệu hiển thị
  const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
  const featuredImage = featuredMedia?.source_url;
  const categoryName = post._embedded?.['wp:term']?.[0]?.[0]?.name || "Tin tức";
  
  // Logic nút quay lại thông minh (dựa trên category)
  // Nếu là kiến thức thì về trang kiến thức, còn lại về tin tức
  const backLink = categoryName.toLowerCase().includes("kiến thức") ? "/kien-thuc" : "/tin-tuc";
  const backText = categoryName.toLowerCase().includes("kiến thức") ? "Kiến thức" : "Tin tức";

  // --- 4. STRUCTURED DATA (JSON-LD) ---
  // Giúp Google hiểu cấu trúc bài viết
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title.rendered,
    "image": featuredImage ? [featuredImage] : [],
    "datePublished": post.date,
    "dateModified": post.modified,
    "author": [{
      "@type": "Organization",
      "name": "HBW",
      "url": MAIN_DOMAIN
    }],
    "publisher": {
      "@type": "Organization",
      "name": "HBW",
      "logo": {
        "@type": "ImageObject",
        "url": `${MAIN_DOMAIN}/logo.png` // Thay bằng đường dẫn logo thật của bạn
      }
    },
    "description": post.excerpt?.rendered?.replace(/<[^>]*>?/gm, "").trim()
  };

  // --- 5. XỬ LÝ NỘI DUNG (Content Cleaning) ---
  // Thay thế các link trỏ về wordpress.com thành link nội bộ (nếu có lỡ tay chèn trong bài)
  const cleanContent = post.content.rendered.replace(
    /https:\/\/hbwcontent\.wordpress\.com/g, 
    "" // Hoặc MAIN_DOMAIN nếu muốn giữ link
  );

  return (
    <main className="min-h-screen bg-white pb-20">
      
      {/* Inject JSON-LD cho Google đọc */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HEADER BÀI VIẾT */}
      <div className="bg-secondary text-white pt-24 pb-16 relative overflow-hidden">
        {/* Background mờ ảo nếu cần */}
        <div className="absolute inset-0 bg-primary/10"></div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
            <Link href={backLink} className="inline-flex items-center gap-2 text-gray-400 hover:text-primary mb-6 text-sm uppercase font-bold transition-colors">
                 <ArrowLeft size={16} /> Quay lại {backText}
            </Link>
            
            <h1 
              className="text-3xl md:text-5xl font-bold mb-6 leading-tight" 
              dangerouslySetInnerHTML={{ __html: post.title.rendered }} 
            />
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-300 font-medium">
              <span className="flex items-center gap-2">
                <CalendarDays size={18} className="text-primary" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-2">
                <Folder size={18} className="text-primary" />
                {categoryName}
              </span>
            </div>
        </div>
      </div>

      {/* ẢNH ĐẠI DIỆN (Featured Image) */}
      {featuredImage && (
        <div className="container mx-auto px-4 max-w-5xl -mt-10 relative z-20">
          <div className="aspect-video relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100">
            <Image
              src={featuredImage}
              alt={post.title.rendered}
              fill
              className="object-cover"
              priority={true} // Priority: Tải ngay lập tức để tối ưu LCP
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
        </div>
      )}

      {/* NỘI DUNG BÀI VIẾT */}
      <article className="container mx-auto px-4 max-w-3xl mt-12">
        <div 
          className="prose prose-lg prose-slate max-w-none 
          prose-headings:font-bold prose-headings:text-secondary 
          prose-a:text-primary prose-a:no-underline hover:prose-a:underline
          prose-img:rounded-xl prose-img:shadow-lg prose-img:mx-auto
          /* Ép ảnh responsive chuẩn kỹ thuật */
          [&_img]:!max-w-full [&_img]:!h-auto [&_img]:block"
          
          dangerouslySetInnerHTML={{ __html: cleanContent }}
        />
        
        {/* Chữ ký / Kết bài */}
        <div className="mt-16 pt-8 border-t border-gray-100">
           <p className="font-bold text-secondary text-lg">HBW - Xe đạp của thanh xuân</p>
           <p className="text-gray-500 italic">Kiến tạo tương lai xanh cho thế hệ trẻ.</p>
        </div>
      </article>

    </main>
  );
}