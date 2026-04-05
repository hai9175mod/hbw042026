// src/app/not-found.tsx
import Link from 'next/link';
import { Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <h1 className="text-9xl font-black text-gray-200">404</h1>
      <h2 className="text-2xl font-bold text-secondary -mt-10 mb-4">
        Không tìm thấy trang này
      </h2>
      <p className="text-gray-500 mb-8 max-w-md">
        Có vẻ như đường dẫn bị hỏng hoặc bài viết đã bị xóa.
      </p>
      
      <div className="flex gap-4">
        <Link 
          href="/" 
          className="flex items-center gap-2 px-6 py-3 bg-primary text-secondary font-bold rounded-lg hover:bg-white border-2 border-primary transition-all"
        >
          <Home size={20} /> Về trang chủ
        </Link>
        <Link 
          href="/san-pham" 
          className="flex items-center gap-2 px-6 py-3 bg-white text-secondary font-bold rounded-lg border-2 border-gray-200 hover:border-primary transition-all"
        >
          <Search size={20} /> Xem sản phẩm
        </Link>
      </div>
    </div>
  );
}