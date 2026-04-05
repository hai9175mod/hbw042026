import Link from "next/link";
import Image from "next/image";
import { 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight, 
  ExternalLink, 
  Facebook, 
  Instagram, 
  Youtube, 
  Twitter 
} from "lucide-react";

export default function Footer() {
  // Dữ liệu Link Hướng dẫn
  const instructionLinks = [
    { name: "Hướng dẫn mua hàng", url: "/huong-dan-mua-hang" },
    { name: "Hướng dẫn thanh toán", url: "/huong-dan-thanh-toan" },
    { name: "Hướng dẫn giao nhận", url: "/huong-dan-giao-nhan" },
  ];

  // Dữ liệu Link Chính sách
  const policyLinks = [
    { name: "Chính sách bảo hành - đổi trả", url: "/chinh-sach-bao-hanh-doi-tra" },
    { name: "Chính sách bảo mật thông tin", url: "/chinh-sach-bao-mat" },
    { name: "Chính sách vận chuyển", url: "/chinh-sach-van-chuyen-lap-dat" },
    { name: "Chính sách thanh toán", url: "/chinh-sach-thanh-toan-va-dat-hang" },
    { name: "Chính sách kiểm hàng", url: "/chinh-sach-kiem-hang" },
  ];

  // Dữ liệu Social Media
  const socialLinks = [
    { icon: <Facebook size={20} />, url: "https://www.facebook.com/hbw.goodlife", label: "Facebook" },
    { icon: <Instagram size={20} />, url: "https://www.instagram.com/hbw.official/", label: "Instagram" },
    { icon: <TikTokIcon />, url: "https://www.tiktok.com/@hbwgoodlife", label: "TikTok" },
    { icon: <XIcon />, url: "https://x.com/hbwgoodlife", label: "X (Twitter)" },
    { icon: <ThreadsIcon />, url: "https://www.threads.com/@hbw.official", label: "Threads" },
    { icon: <PinterestIcon />, url: "https://www.pinterest.com/hibikeway/", label: "Pinterest" },
    { icon: <Youtube size={20} />, url: "https://www.youtube.com/@xedapHBW", label: "YouTube" },
  ];

  return (
    <footer className="bg-gradient-to-b from-secondary to-black text-white pt-20 pb-10 relative overflow-hidden">
      
      {/* Background Pattern Decor */}
      <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
         <Image 
           src="/decor/banner-website-hbw-1.webp" 
           alt="Footer Pattern" 
           fill 
           className="object-cover grayscale"
         />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* COL 1: Về HBW & Social */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-primary uppercase tracking-wide mb-4">
                Về HBW
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed text-justify">
                HBW – Xe đạp của thanh xuân là thương hiệu xe đạp được thành lập với
                sứ mệnh xanh hóa môi trường giao thông học đường. Chúng tôi tập
                trung vào thế hệ trẻ Việt Nam, các em từ 12 – 18 tuổi, lứa tuổi
                tràn đầy nhựa sống thanh xuân và là tương lai của đất nước.
              </p>
            </div>
            
            {/* Social Icons Grid */}
            <div>
               <h4 className="text-sm font-bold text-gray-400 uppercase mb-3">Kết nối với chúng tôi</h4>
               <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, idx) => (
                    <a 
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary hover:text-secondary transition-all hover:-translate-y-1"
                      title={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
               </div>
            </div>
          </div>

          {/* COL 2: Liên hệ */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary uppercase tracking-wide">
              Liên hệ
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              HBW luôn sẵn lòng lắng nghe và phục vụ bạn bằng sự tận tâm và niềm
              đam mê.
            </p>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-primary group-hover:animate-shake" />
                <a href="tel:0939585748" className="hover:text-primary transition-colors font-bold">
                  0939 58 57 48
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:info@hbw.com.vn" className="hover:text-primary transition-colors">
                  info@hbw.com.vn
                </a>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-primary mt-1" />
                <Link href="/xuat-xu-xe-dap-cua-hbw" className="hover:text-primary transition-colors">
                  Tìm hiểu chất lượng xe đạp HBW
                </Link>
              </li>
              <li className="flex items-start gap-3">
                <ExternalLink className="w-5 h-5 text-primary mt-1" />
                <a 
                  href="https://zalo.me/4161110732021895940" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Góp ý - Khiếu nại – CSKH
                </a>
              </li>
            </ul>
          </div>

          {/* COL 3: Hướng dẫn */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary uppercase tracking-wide">
              Hướng dẫn
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {instructionLinks.map((item, index) => (
                <li key={index}>
                  <Link href={item.url} className="hover:text-primary transition-colors block py-1 hover:translate-x-1 duration-200">
                    • {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 4: Chính sách */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary uppercase tracking-wide">
              Chính sách
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {policyLinks.map((item, index) => (
                <li key={index}>
                  <Link href={item.url} className="hover:text-primary transition-colors block py-1 hover:translate-x-1 duration-200">
                    • {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom: Copyright & Certifications */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col items-center gap-6">
          
          {/* Copyright Text */}
          <div className="text-center text-xs text-gray-500">
            <p className="mb-2 uppercase tracking-widest text-primary/50 font-bold">HBW - Good Life</p>
            <p>© {new Date().getFullYear()} HBW.COM.VN. All rights reserved.</p>
            <p className="mt-1">Xe đạp cho học sinh - Kiến tạo tương lai xanh.</p>
          </div>

          {/* Certifications (Bộ Công Thương & DMCA) */}
          <div className="flex items-center justify-center gap-6">
             {/* Bộ Công Thương */}
             <a 
               href="http://online.gov.vn/Home/WebDetails/108375" 
               target="_blank" 
               rel="noreferrer"
               className="hover:opacity-80 transition-opacity"
             >
                {/* Image of Bộ Công Thương logo */}
                <Image 
                  src="/global/logoSaleNoti.webp" 
                  alt="Đã thông báo Bộ Công Thương" 
                  width={150} 
                  height={57} 
                  className="w-auto h-10 object-contain" 
                />
             </a>

             {/* DMCA */}
             <a 
               href="https://www.dmca.com/Protection/Status.aspx?ID=17727806-ca1b-40c7-8ab2-c00cddc575a5&refurl=https://hbw.com.vn/" 
               target="_blank" 
               rel="noreferrer"
               className="hover:opacity-80 transition-opacity"
             >
                {/* Image of DMCA Badge */}
                <Image 
                  src="/global/dmca-badge-w150-5x1-07.webp" 
                  alt="DMCA Protected" 
                  width={100} 
                  height={50} 
                  className="w-auto h-8 object-contain" 
                />
             </a>
          </div>

        </div>
      </div>
    </footer>
  );
}

// --- Custom SVGs for Icons not in standard Lucide imports ---

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );
}

function ThreadsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M12.005 6.375a5.625 5.625 0 1 0 5.625 5.625 5.631 5.631 0 0 0-5.625-5.625Zm0 9a3.375 3.375 0 1 1 3.375-3.375 3.379 3.379 0 0 1-3.375 3.375Zm7.61-9.925a1.125 1.125 0 0 0-1.59 1.59 9.375 9.375 0 1 1-12.05 0 1.125 1.125 0 1 0-1.59-1.59 11.625 11.625 0 1 0 15.23 0ZM17.25 12a5.228 5.228 0 0 1-1.07 3.19l.79 1.185a.562.562 0 0 0 1.015-.29V12a6.002 6.002 0 0 0-11.537-2.365.563.563 0 0 0 1.047.39A4.877 4.877 0 0 1 17.25 12Z" />
    </svg>
  );
}

function PinterestIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.399.165-1.487-.695-2.419-2.875-2.419-4.629 0-3.773 2.75-7.229 7.929-7.229 4.163 0 7.398 2.967 7.398 6.947 0 4.133-2.6 7.464-6.211 7.464-1.216 0-2.359-.635-2.75-1.378l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
    </svg>
  );
}