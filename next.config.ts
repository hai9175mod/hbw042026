/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  
  // Tối ưu ảnh: Cho phép cache ảnh lâu hơn để server không phải xử lý lại
  images: {
    minimumCacheTTL: 2592000, // Cache ảnh 1 tháng
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.wp.com', 
      },
      {
        protocol: 'https',
        hostname: 'api2.hbw.com.vn', // Cho phép tải ảnh từ WordPress của bạn
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'secure.gravatar.com',
      }
    ],
  },

  // Giảm log không cần thiết để tiết kiệm I/O
  logging: {
    fetches: {
      fullUrl: false,
    },
  },
};

export default nextConfig;