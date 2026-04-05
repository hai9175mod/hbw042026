import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/api"; // Bạn cần đảm bảo hàm này lấy được TẤT CẢ bài (hoặc 100 bài mới nhất)

const BASE_URL = "https://demo.hbw.com.vn"; // Domain thật

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Lấy danh sách bài viết từ WordPress
  // Lưu ý: Hàm getAllPosts trong api.ts hiện tại có thể đang giới hạn 10 bài. 
  // Bạn nên sửa api.ts để thêm hàm getAllPostsForSitemap lấy 100 bài.
  const posts = await getAllPosts(); 

  // 2. Map dữ liệu bài viết sang chuẩn Sitemap
  const postsUrls = posts.map((post: any) => ({
    url: `${BASE_URL}/bai-viet/${post.slug}`,
    lastModified: new Date(post.modified || post.date),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // 3. Các trang tĩnh cố định
  const staticRoutes = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${BASE_URL}/san-pham`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/tin-tuc`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/kien-thuc`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.7,
    },
  ];

  return [...staticRoutes, ...postsUrls];
}