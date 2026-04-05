import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // 1. Kích hoạt chế độ xuất file tĩnh (ra thư mục 'out')
  //output: 'export',

  // 2. Tắt tối ưu hóa ảnh (Bắt buộc vì export tĩnh không có server xử lý ảnh)
  images: {
    unoptimized: true,
  },

  // Các cấu hình khác nếu có...
};

export default nextConfig;