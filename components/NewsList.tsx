"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/api";
import { CalendarDays, ArrowRight, ImageOff, Loader2 } from "lucide-react";

// Định nghĩa kiểu dữ liệu cho Props
type NewsListProps = {
  initialPosts: any[];
  initialPageInfo: any;
  categoryLabel: string; // Ví dụ: "Tin tức" hoặc "Kiến thức"
  // Quan trọng: Hàm server action được truyền vào như một prop
  loadMoreAction: (cursor: string) => Promise<any>; 
};

export default function NewsList({ 
  initialPosts, 
  initialPageInfo, 
  categoryLabel, 
  loadMoreAction 
}: NewsListProps) {
  const [posts, setPosts] = useState(initialPosts);
  const [pageInfo, setPageInfo] = useState(initialPageInfo);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = async () => {
    if (isLoading || !pageInfo.hasNextPage) return;
    
    setIsLoading(true);
    try {
      // Gọi hàm được truyền từ cha xuống (Dynamic)
      const newData = await loadMoreAction(pageInfo.endCursor);
      
      if (newData) {
        setPosts((prev) => [...prev, ...newData.posts]);
        setPageInfo(newData.pageInfo);
      }
    } catch (error) {
      console.error("Lỗi tải thêm:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post: any) => {
          const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0];
          // Logic ảnh robust của bạn
          const imageUrl = featuredMedia?.sourceUrl || featuredMedia?.source_url;
          const excerpt = post.excerpt?.rendered?.replace(/<[^>]*>?/gm, "") || "";

          return (
            <Link key={post.id} href={`/${post.slug}`} className="group h-full">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                {/* ẢNH ĐẠI DIỆN */}
                <div className="relative aspect-video overflow-hidden bg-gray-200">
                  {imageUrl ? (
                    <Image
                      src={imageUrl}
                      alt={post.title.rendered}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 gap-2 bg-gray-100">
                      <ImageOff size={32} />
                      <span className="text-xs font-bold uppercase tracking-wider opacity-50">HBW</span>
                    </div>
                  )}
                  {/* Badge hiển thị động theo props */}
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {categoryLabel}
                  </div>
                </div>

                {/* NỘI DUNG */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-3 font-bold uppercase tracking-wider">
                    <CalendarDays size={14} className="text-primary" />
                    {formatDate(post.date)}
                  </div>
                  
                  <h3 
                    className="text-xl font-bold text-secondary line-clamp-2 mb-3 group-hover:text-primary transition-colors leading-tight"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />

                  <p 
                    className="text-gray-500 mb-6 line-clamp-3 text-sm flex-grow text-justify leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: excerpt.substring(0, 120) + "..." }}
                  />

                  <div className="mt-auto border-t border-gray-100 pt-4 flex items-center justify-between text-sm">
                     <span className="font-bold text-secondary group-hover:text-primary transition-colors">Xem chi tiết</span>
                     <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                        <ArrowRight size={16} />
                     </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* NÚT LOAD MORE */}
      {pageInfo?.hasNextPage && (
        <div className="mt-12 text-center">
          <button
            onClick={handleLoadMore}
            disabled={isLoading}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-primary text-secondary font-bold rounded-full hover:bg-primary hover:text-white transition-all shadow-sm hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wide"
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin" size={20} /> Đang tải...
              </>
            ) : (
              <>
                Xem thêm <ArrowRight size={20} />
              </>
            )}
          </button>
        </div>
      )}
    </>
  );
}