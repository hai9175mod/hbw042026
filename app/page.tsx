import Link from "next/link";
import Image from "next/image";
import { getPostsByCategory, formatDate } from "@/lib/api";
import { 
  ArrowRight, 
  CheckCircle, 
  Palette, 
  Target, 
  Ruler, 
  Truck, 
  RefreshCcw, 
  Wrench, 
  ShieldCheck, 
  Globe,
  MessageCircle,
  CalendarDays
} from "lucide-react";

// Server Component (Async) để lấy dữ liệu tin tức mới nhất
export default async function Home() {
  // SỬA LỖI Ở ĐÂY:
  // 1. Dùng destructuring { posts } để lấy mảng bài viết ra khỏi object kết quả
  // 2. Truyền số 3 vào tham số thứ 2 để API chỉ lấy đúng 3 bài (Tối ưu tốc độ)
  const { posts } = await getPostsByCategory("tin-tuc", 3);
  
  // Gán vào biến latestNews (nếu posts null thì gán mảng rỗng để tránh lỗi)
  const latestNews = posts || [];

  return (
    <main className="w-full overflow-hidden bg-white">
      
      {/* 1. HERO SECTION: Typography & Decor */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-4 bg-gradient-brand overflow-hidden">
        {/* Decor Images (Absolute positioning) */}
        <div className="absolute top-0 left-0 w-full h-full z-0 opacity-10 pointer-events-none">
           <Image 
             src="/decor/banner-website-hbw-1.webp" 
             alt="Decor Pattern" 
             fill 
             className="object-cover"
             priority
           />
        </div>
        
        {/* Abstract Shapes */}
        <div className="absolute top-10 right-10 w-40 h-40 bg-yellow-400/20 rounded-full blur-3xl animate-pulse z-0"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl z-0"></div>

        <div className="relative z-10 max-w-5xl mx-auto space-y-4">
          <h1 className="text-[5rem] sm:text-[8rem] md:text-[12rem] font-black text-secondary tracking-tighter leading-[0.8] select-none opacity-90 mix-blend-multiply">
            HBW
          </h1>
          <h2 className="text-2xl md:text-5xl font-bold text-primary uppercase tracking-widest bg-white/50 backdrop-blur-sm inline-block px-6 py-2 rounded-lg shadow-sm">
            Xe đạp của thanh xuân
          </h2>
          <p className="text-secondary/80 text-lg md:text-2xl max-w-2xl mx-auto pt-4 font-medium leading-relaxed">
            Kiến tạo văn hóa giao thông xanh và phong cách sống tự lập cho thế hệ trẻ Việt Nam.
          </p>
          
          <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/san-pham" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-secondary text-white font-bold rounded-full hover:bg-primary transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 text-lg"
            >
              Xem bộ sưu tập
              <ArrowRight size={22} />
            </Link>
            <a 
              href="https://zalo.me/4161110732021895940"
              target="_blank"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-secondary font-bold rounded-full border-2 border-secondary hover:bg-gray-50 transition-all text-lg"
            >
              <MessageCircle size={22} /> Chat Zalo
            </a>
          </div>
        </div>
      </section>

      {/* 2. RIDERIGHT PROJECT SECTION */}
      <section className="py-24 bg-secondary text-white relative overflow-hidden">
        {/* Background Decor */}
        <div className="absolute inset-0 z-0 opacity-20">
           <Image 
             src="/decor/banner-website-hbw-2.webp" 
             alt="RideRight Background" 
             fill 
             className="object-cover grayscale"
           />
        </div>
        <div className="absolute inset-0 bg-secondary/80 z-0"></div>

        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <span className="inline-block py-2 px-4 rounded-full bg-primary/20 text-primary text-sm font-bold mb-6 uppercase tracking-[0.2em] border border-primary/30 backdrop-blur-md">
            Dự án cộng đồng
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            RideRight <br className="md:hidden" /> <span className="text-primary font-light">Đi học khỏe & An toàn</span>
          </h2>
          <p className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            Dự án vì thanh thiếu niên Việt Nam. Chúng tôi xây dựng văn hóa giao thông an toàn và ý thức bảo vệ môi trường ngay từ ghế nhà trường.
          </p>
          <Link 
            href="/du-an-rideright" 
            className="inline-block px-10 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-secondary font-bold text-lg transition-all duration-300 uppercase tracking-widest rounded-lg"
          >
            Tìm hiểu ngay
          </Link>
        </div>
      </section>

      {/* 3. FEATURED PRODUCT (SERIMA) */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left: Product Info */}
            <div className="lg:w-1/2 space-y-8 order-2 lg:order-1">
              <div>
                <h3 className="text-primary font-bold tracking-widest uppercase mb-2 flex items-center gap-2">
                  <span className="w-8 h-[2px] bg-primary block"></span> Sản phẩm nổi bật
                </h3>
                <h2 className="text-5xl md:text-6xl font-black text-secondary leading-tight">
                  SERIMA <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-500">MTB U500</span>
                </h2>
              </div>
              
              <p className="text-secondary/70 text-lg md:text-xl leading-relaxed text-justify">
                Thiết kế mạnh mẽ, khung sườn nhôm siêu nhẹ, phù hợp cho mọi địa hình. Người bạn đồng hành tuyệt vời cho những chuyến đi khám phá thế giới xung quanh của học sinh.
              </p>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <ul className="space-y-4 text-secondary font-bold text-lg">
                  <li className="flex items-center gap-3"><CheckCircle size={24} className="text-primary flex-shrink-0"/> Khung hợp kim nhôm 6061 siêu nhẹ</li>
                  <li className="flex items-center gap-3"><CheckCircle size={24} className="text-primary flex-shrink-0"/> Bộ truyền động Shimano Nhật Bản</li>
                  <li className="flex items-center gap-3"><CheckCircle size={24} className="text-primary flex-shrink-0"/> Phuộc nhún dầu êm ái</li>
                </ul>
              </div>

              <div className="flex gap-4 pt-2">
                 <Link 
                   href="/san-pham" 
                   className="flex-1 sm:flex-none text-center px-8 py-4 bg-secondary text-white font-bold rounded-xl hover:bg-primary transition-all shadow-lg"
                 >
                   Mua ngay
                 </Link>
                 <Link 
                   href="/san-pham" 
                   className="flex-1 sm:flex-none text-center px-8 py-4 bg-white text-secondary font-bold rounded-xl border-2 border-gray-200 hover:border-primary transition-all"
                 >
                   Xem chi tiết
                 </Link>
              </div>
            </div>
            
            {/* Right: Product Image */}
            <div className="lg:w-1/2 w-full order-1 lg:order-2 relative">
               {/* Decor background blob */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-brand rounded-full blur-3xl opacity-30 z-0"></div>
               
               <div className="relative z-10 w-full aspect-[5/4]">
                 <Image
                   src="/product/serima/xe-dap-serima-new3-768x613.webp"
                   alt="Xe đạp Serima MTB U500"
                   fill
                   className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                   sizes="(max-width: 768px) 100vw, 50vw"
                   priority 
                 />
                 
                 {/* Badge */}
                 <div className="absolute top-0 right-0 bg-red-600 text-white font-bold px-4 py-2 rounded-bl-2xl shadow-lg animate-bounce">
                    HOT SALE
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EDUCATION: CHỌN ĐÚNG XE ĐẠP */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Decor corner */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none">
           <Image src="/decor/banner-website-hbw-3.webp" alt="Decor" fill className="object-contain" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-secondary mb-6">CHỌN ĐÚNG XE ĐẠP</h2>
            <p className="text-xl text-secondary/70 font-light">
              HBW muốn cùng phụ huynh xây dựng một hệ tư tưởng đúng đắn về bảo vệ môi trường và sức khỏe, bắt đầu từ việc chọn phương tiện đi lại.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Palette, title: "Đúng Gu", desc: "Chọn loại xe, màu xe theo sở thích cá nhân để tạo động lực và niềm vui mỗi khi đạp xe." },
              { icon: Target, title: "Đúng Mục Đích", desc: "Chọn dòng xe (địa hình, đường phố) phù hợp với nhu cầu di chuyển để đảm bảo an toàn." },
              { icon: Ruler, title: "Đúng Kích Thước", desc: "Xe đúng size giúp người lái thoải mái, tránh các chấn thương cột sống và xương khớp." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-secondary transition-colors">
                  <item.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">{item.title}</h3>
                <p className="text-secondary/60 text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MỚI: SECTION GÓC NHÌN CHUYÊN SÂU --- */}
      <section className="py-24 bg-white relative border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* Tiêu đề Section */}
          <div className="text-center mb-16">
             <h2 className="text-4xl font-black text-secondary uppercase tracking-tight">Góc nhìn chuyên sâu</h2>
             <div className="w-20 h-1.5 bg-primary mx-auto mt-4 rounded-full"></div>
             <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
               Những tư duy giáo dục hiện đại giúp con trưởng thành và cha mẹ hạnh phúc hơn.
             </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
             
             {/* BÀI VIẾT 1: HỌC SINH PHẢI ĐI XE ĐẠP */}
             <Link 
               href="/hoc-sinh-phai-di-phuong-tien-cua-hoc-sinh-do-la-di-xe-dap" 
               className="group relative h-[450px] rounded-[2.5rem] overflow-hidden shadow-lg border border-gray-100"
             >
                {/* Ảnh nền */}
                <Image 
                  src="/decor/banner-website-hbw-8.webp" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  alt="Học sinh đi xe đạp an toàn" 
                />
                
                {/* Lớp phủ gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent"></div>
                
                {/* Nội dung bài viết */}
                <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white w-full">
                   <div className="flex items-center gap-3 mb-4">
                      <span className="bg-primary text-secondary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Quan điểm</span>
                      <div className="h-px bg-white/50 flex-grow"></div>
                   </div>
                   
                   <h3 className="text-2xl md:text-3xl font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
                      Học sinh phải đi phương tiện của học sinh
                   </h3>
                   <p className="text-gray-200 line-clamp-2 mb-6 font-light">
                      Tại sao xe máy không dành cho lứa tuổi học đường? Phân tích lợi ích to lớn của việc đạp xe đối với sự phát triển thể chất.
                   </p>
                   
                   <span className="inline-flex items-center gap-2 font-bold uppercase text-sm tracking-widest border-b-2 border-primary pb-1 group-hover:border-white transition-colors">
                      Đọc ngay <ArrowRight size={16}/>
                   </span>
                </div>
             </Link>

             {/* BÀI VIẾT 2: CON TỰ LẬP - CHA MẸ TỰ DO */}
             <Link 
               href="/con-tu-lap-cha-me-tu-do" 
               className="group relative h-[450px] rounded-[2.5rem] overflow-hidden shadow-lg border border-gray-100"
             >
                {/* Ảnh nền */}
                <Image 
                  src="/decor/banner-website-hbw-5.webp" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  alt="Con tự lập cha mẹ tự do" 
                />
                
                {/* Lớp phủ gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                
                {/* Nội dung bài viết */}
                <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white w-full">
                   <div className="flex items-center gap-3 mb-4">
                      <span className="bg-white text-secondary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Gia đình</span>
                      <div className="h-px bg-white/50 flex-grow"></div>
                   </div>
                   
                   <h3 className="text-2xl md:text-3xl font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
                      Con tự lập - Cha mẹ tự do
                   </h3>
                   <p className="text-gray-200 line-clamp-2 mb-6 font-light">
                      Giải pháp giúp phụ huynh thoát cảnh đưa đón 4 lần/ngày và rèn luyện kỹ năng sống bản lĩnh cho con trước ngưỡng cửa trưởng thành.
                   </p>
                   
                   <span className="inline-flex items-center gap-2 font-bold uppercase text-sm tracking-widest border-b-2 border-white pb-1 group-hover:border-primary transition-colors">
                      Tìm hiểu giải pháp <ArrowRight size={16}/>
                   </span>
                </div>
             </Link>

          </div>
        </div>
      </section>

      {/* 5. VĂN HÓA XE ĐẠP */}
      <section className="py-24 bg-secondary text-white relative overflow-hidden">
         {/* Background Decor */}
         <div className="absolute inset-0 z-0 opacity-10">
            <Image 
              src="/decor/banner-website-hbw-4.webp" 
              alt="Culture Background" 
              fill 
              className="object-cover"
            />
         </div>

        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <h2 className="text-5xl md:text-6xl font-black text-primary mb-8 leading-none">Văn Hóa <br/> Xe Đạp</h2>
            <div className="space-y-6 text-gray-300 text-lg font-light leading-relaxed text-justify">
              <p>
                Văn hóa xe đạp (Bicycle culture) là sự ủng hộ sử dụng xe đạp như một phương tiện giao thông chính yếu hàng ngày. Đây là phong trào tích cực mang lại lợi ích to lớn cho sức khỏe, môi trường và kinh tế.
              </p>
              <p>
                Nó giúp xây dựng một cộng đồng gắn kết thông qua việc chia sẻ không gian giao thông văn minh.
              </p>
            </div>
          </div>
          <div className="bg-white/10 p-10 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl">
             <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-primary rounded-full text-secondary">
                   <Globe size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Các quốc gia tiêu biểu</h3>
                  <p className="text-sm text-gray-400">Chỉ số văn hóa xe đạp top đầu thế giới</p>
                </div>
             </div>
             
             <div className="grid grid-cols-2 gap-4">
                {['Hà Lan', 'Đan Mạch', 'Đức', 'Nhật Bản'].map((country) => (
                  <div key={country} className="text-center py-4 bg-secondary/50 rounded-xl font-bold text-primary hover:bg-primary hover:text-secondary transition-all cursor-default border border-primary/20 hover:border-primary">
                    {country}
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* 6. MISSION: SỨ MỆNH HBW */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-start">
             
             {/* Decor Image Side */}
             <div className="md:w-1/3 relative">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden relative shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500">
                   <Image 
                     src="/decor/banner-website-hbw-5.webp" 
                     alt="HBW Mission" 
                     fill 
                     className="object-cover"
                   />
                </div>
             </div>

             {/* Text Content */}
             <div className="md:w-2/3">
                <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Việc chúng tôi phải làm</h2>
                <h3 className="text-5xl font-black text-secondary mb-8">SỨ MỆNH CỦA HBW</h3>
                
                <div className="prose prose-lg prose-p:text-secondary/70 max-w-none text-justify space-y-6">
                  <p>
                    Góp phần nâng cao nhận thức của Phụ huynh và giáo dục các em học sinh ý thức mạnh mẽ về tinh thần trách nhiệm đối với bảo vệ môi trường, nâng cao sức khỏe bản thân bằng cách cung cấp các mẫu xe đạp phù hợp cho học sinh theo cách cá nhân hóa.
                  </p>
                  <p>
                    Bên cạnh các câu chuyện truyền cảm hứng của HBW, việc tự mình sở hữu 01 chiếc xe đạp còn giúp các em học sinh tuổi teen tự tin, tự lập, tự chủ.
                  </p>
                  <blockquote className="border-l-8 border-primary pl-6 py-4 italic text-2xl text-secondary font-bold bg-gray-50 rounded-r-2xl">
                    "Cùng nhau, chúng ta có thể thay đổi thế giới? Đúng vậy, chúng tôi tin rằng những vấn đề phức tạp nhất như ô nhiễm và biến đổi khí hậu sẽ được giải quyết thông qua một cách đơn giản – đó là đi xe đạp."
                  </blockquote>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 7. FEATURES GRID & COMMITMENT */}
      <section className="py-20 bg-gradient-brand">
         <div className="container mx-auto px-4 md:px-6">
            
            {/* Top Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
               {[
                 { icon: Truck, title: "Miễn phí giao hàng", sub: "Nội thành TP. HCM" },
                 { icon: RefreshCcw, title: "07 ngày đổi trả", sub: "Hoàn trả miễn phí*" },
                 { icon: Wrench, title: "Bảo hành tận nhà", sub: "An tâm sử dụng" }
               ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center p-8 bg-white/50 backdrop-blur-sm rounded-3xl border border-white hover:bg-white transition-colors">
                     <div className="w-14 h-14 bg-secondary text-primary rounded-full flex items-center justify-center mb-4 shadow-lg">
                        <item.icon size={24} />
                     </div>
                     <h4 className="font-bold text-xl text-secondary mb-1">{item.title}</h4>
                     <p className="text-sm text-secondary/70">{item.sub}</p>
                  </div>
               ))}
            </div>

            {/* Detailed Commitment */}
            <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl border-4 border-white">
               <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                     <h3 className="text-4xl font-bold text-secondary mb-2">Đạp xe An toàn & An tâm</h3>
                     <h4 className="text-2xl font-bold text-primary mb-8">với CAM KẾT từ HBW</h4>
                     <ul className="space-y-4">
                        {[
                           "07 ngày đổi trả miễn phí",
                           "Bảo hành khung sườn 05 năm",
                           "Sửa chữa tận nơi trong 30 ngày sau mua",
                           "Bảo hành linh kiện khác 01 năm",
                           "Free Ship toàn TP. HCM, không cần cọc"
                        ].map((item, idx) => (
                           <li key={idx} className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl">
                              <ShieldCheck className="text-green-600 flex-shrink-0" size={24} />
                              <span className="text-secondary font-bold text-lg">{item}</span>
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-6 bg-secondary text-white p-10 rounded-[2rem] text-center relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-primary rounded-full blur-3xl opacity-20"></div>
                     
                     <h3 className="text-2xl font-bold z-10">Bạn cần tư vấn thêm?</h3>
                     <p className="text-gray-300 z-10">Đội ngũ kỹ thuật của HBW luôn sẵn sàng hỗ trợ bạn 24/7</p>
                     
                     <Link href="/san-pham" className="w-full max-w-xs py-4 bg-primary text-secondary font-bold text-center rounded-xl hover:bg-white transition-all shadow-lg uppercase z-10">
                        Mua ngay / Tư vấn Online
                     </Link>
                     <a href="https://zalo.me/4161110732021895940" target="_blank" className="w-full max-w-xs py-4 border-2 border-primary text-primary font-bold text-center rounded-xl hover:bg-primary hover:text-secondary transition-all uppercase z-10">
                        Chat Zalo
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 8. LATEST NEWS (Real Data from API) */}
      <section className="py-24 bg-white border-t border-gray-100">
         <div className="container mx-auto px-4 md:px-6">
            <div className="flex justify-between items-end mb-12">
               <div>
                  <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm block mb-2">Tin tức & Sự kiện</span>
                  <h2 className="text-4xl font-black text-secondary">Hoạt động mới nhất</h2>
               </div>
               <Link href="/tin-tuc" className="hidden md:flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors text-lg group">
                  Xem tất cả <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
               </Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
               {latestNews.length > 0 ? (
                 latestNews.map((post: any) => {
                   const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0];
                   // Logic ảnh chuẩn cho cả REST và GraphQL
                   const imgUrl = featuredMedia?.sourceUrl || featuredMedia?.source_url;
                   
                   return (
                     <Link key={post.id} href={`/${post.slug}`} className="group cursor-pointer block h-full">
                        <div className="aspect-[16/10] bg-gray-100 rounded-2xl mb-6 overflow-hidden relative shadow-md">
                           {imgUrl ? (
                             <Image 
                               src={imgUrl} 
                               alt={post.title.rendered} 
                               fill 
                               className="object-cover group-hover:scale-110 transition-transform duration-700"
                             />
                           ) : (
                             <div className="absolute inset-0 bg-secondary flex items-center justify-center">
                                <span className="text-primary font-black text-4xl opacity-20">HBW</span>
                             </div>
                           )}
                           <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                        </div>
                        
                        <div className="flex items-center gap-2 text-sm text-gray-400 mb-3 font-medium">
                           <CalendarDays size={16} className="text-primary" />
                           {formatDate(post.date)}
                        </div>

                        <h3 
                          className="text-2xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-snug"
                          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                        />
                        
                        <p 
                          className="text-gray-500 line-clamp-3 text-justify"
                          dangerouslySetInnerHTML={{ __html: post.excerpt?.rendered?.replace(/<[^>]*>?/gm, "") || "" }}
                        />
                     </Link>
                   )
                 })
               ) : (
                 <div className="col-span-3 text-center py-10 bg-gray-50 rounded-2xl">
                    <p className="text-gray-400">Đang cập nhật tin tức...</p>
                 </div>
               )}
            </div>
            
            <div className="mt-10 text-center md:hidden">
               <Link href="/tin-tuc" className="inline-block py-3 px-8 bg-gray-100 text-secondary font-bold rounded-full">
                  Xem tất cả tin tức
               </Link>
            </div>
         </div>
      </section>

    </main>
  );
}