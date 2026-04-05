import { getPostsByCategory } from "@/lib/api";
import { BookOpen } from "lucide-react";
import NewsList from "@/components/NewsList"; 
import { fetchMoreNews } from "./actions"; // Import server action CỦA RIÊNG MỤC KIẾN THỨC

export const metadata = {
  title: "Kiến thức Xe đạp | HBW",
  description: "Chia sẻ kinh nghiệm, kiến thức bảo dưỡng và chọn mua xe đạp hữu ích.",
};

export default async function KnowledgePage() {
  // Lấy dữ liệu lần đầu
  const { posts, pageInfo } = await getPostsByCategory("kien-thuc", 6);

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      
      {/* HEADER */}
      <div className="relative bg-primary text-white pt-24 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex p-3 bg-white/10 rounded-full mb-4">
             <BookOpen size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-wide">
             Kiến thức & Chia sẻ
          </h1>
          <p className="text-white/90 max-w-2xl mx-auto text-lg font-light">
            Cẩm nang sử dụng, bảo dưỡng xe đạp và những kinh nghiệm quý báu.
          </p>
        </div>
      </div>

      {/* DANH SÁCH BÀI VIẾT */}
      <div className="container mx-auto px-4 -mt-12 relative z-20">
        {posts.length > 0 ? (
          /* TRUYỀN ACTION CỦA KIẾN THỨC VÀO ĐÂY */
          <NewsList 
            initialPosts={posts} 
            initialPageInfo={pageInfo} 
            categoryLabel="Kiến thức"
            loadMoreAction={fetchMoreNews} 
          />
        ) : (
          <div className="text-center py-24 bg-white rounded-3xl shadow-sm border border-gray-100">
            <p className="text-gray-500">Chưa có bài viết kiến thức nào.</p>
          </div>
        )}
      </div>
    </main>
  );
}