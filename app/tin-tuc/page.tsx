import { getPostsByCategory } from "@/lib/api";
import { Newspaper } from "lucide-react";
import NewsList from "@/components/NewsList"; 
import { fetchMoreNews } from "./actions"; // Import server action CỦA RIÊNG MỤC TIN TỨC

export const metadata = {
  title: "Tin tức & Sự kiện | HBW",
  description: "Cập nhật tin tức mới nhất về hoạt động và sự kiện của HBW.",
};

export default async function NewsPage() {
  const { posts, pageInfo } = await getPostsByCategory("tin-tuc", 6);

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      
      {/* HEADER */}
      <div className="relative bg-secondary text-white pt-24 pb-20 overflow-hidden">
        {/* ... (Phần Decor giữ nguyên) ... */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex p-3 bg-white/10 rounded-full mb-4">
             <Newspaper size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-wide">
             Tin tức & Sự kiện
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg font-light">
            Theo dõi những hoạt động nổi bật, sự kiện cộng đồng và thông báo mới nhất từ HBW.
          </p>
        </div>
      </div>

      {/* DANH SÁCH TIN TỨC */}
      <div className="container mx-auto px-4 -mt-12 relative z-20">
        {posts.length > 0 ? (
          /* TRUYỀN ACTION CỦA TIN TỨC VÀO ĐÂY */
          <NewsList 
            initialPosts={posts} 
            initialPageInfo={pageInfo} 
            categoryLabel="Tin tức"
            loadMoreAction={fetchMoreNews} 
          />
        ) : (
          <div className="text-center py-24 bg-white rounded-3xl shadow-sm border border-gray-100">
            <p className="text-gray-500">Chưa có tin tức nào.</p>
          </div>
        )}
      </div>
    </main>
  );
}