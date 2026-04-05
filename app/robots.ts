// src/app/robots.ts
import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://hbw.com.vn' // Domain thật

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
      },
      // Chặn GPTBot hoặc các bot AI nếu không muốn bị lấy dữ liệu training (Tùy chọn)
      // {
      //   userAgent: 'GPTBot',
      //   disallow: '/',
      // },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}