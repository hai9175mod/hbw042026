import Link from "next/link";
import Image from "next/image";
import { 
  ShieldAlert, 
  HeartPulse, 
  Clock, 
  CheckCircle2, 
  Palette, 
  DollarSign, 
  Award, 
  Ruler, 
  ArrowRight,
  MessageCircle,
  Quote
} from "lucide-react";

export const metadata = {
  title: "Học sinh phải đi phương tiện của học sinh | HBW",
  description: "Tại sao xe đạp là giải pháp an toàn nhất? Hướng dẫn chọn xe đạp đúng chuẩn cho học sinh cấp 2, 3.",
};

export default function StudentVehiclePage() {
  // Sử dụng lại gallery khách hàng từ dữ liệu chung
  const customerGallery = Array.from({ length: 6 }, (_, i) => `/product/serima/khach-hang-serima-${i + 1}.webp`);

  return (
    <main className="min-h-screen bg-white text-secondary overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-24 md:py-32 bg-secondary text-white overflow-hidden">
        {/* Decor Background */}
        <div className="absolute inset-0 z-0 opacity-20">
            <Image 
              src="/decor/banner-website-hbw-4.webp" 
              alt="Decor Background" 
              fill 
              className="object-cover grayscale"
              priority
            />
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] z-0"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <span className="inline-block py-2 px-4 rounded-full border border-primary text-primary font-bold text-sm uppercase tracking-widest mb-6 bg-secondary/80 backdrop-blur-md">
            Góc nhìn chuyên sâu
          </span>
          <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight">
            HỌC SINH PHẢI ĐI <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">
              PHƯƠNG TIỆN CỦA HỌC SINH
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-300 uppercase tracking-widest">
            ĐÓ LÀ ĐI XE ĐẠP
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-8"></div>
        </div>
      </section>

      {/* 2. THE "WHY" - 3 LÝ DO CỐT LÕI */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
           <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Xe đạp là giải pháp an toàn nhất</h2>
              <p className="text-lg text-gray-500">
                Để học sinh đến trường một cách trọn vẹn, chúng ta cần nhìn thẳng vào thực tế.
              </p>
           </div>

           <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1: An toàn */}
              <div className="bg-red-50 p-8 rounded-3xl border border-red-100 hover:shadow-xl transition-all group">
                 <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mb-6 text-red-600 group-hover:scale-110 transition-transform">
                    <ShieldAlert size={32} />
                 </div>
                 <h3 className="text-xl font-bold text-red-600 mb-3 uppercase">Phương tiện an toàn</h3>
                 <p className="text-gray-700 text-justify leading-relaxed">
                   <strong className="text-red-600">90%</strong> nạn nhân thương vong do TNGT là người đi xe máy. Các em học sinh chưa đủ nhận thức và kỹ năng để làm chủ phương tiện tốc độ cao như xe gắn máy.
                 </p>
              </div>

              {/* Card 2: Sức khỏe */}
              <div className="bg-green-50 p-8 rounded-3xl border border-green-100 hover:shadow-xl transition-all group">
                 <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6 text-green-600 group-hover:scale-110 transition-transform">
                    <HeartPulse size={32} />
                 </div>
                 <h3 className="text-xl font-bold text-green-600 mb-3 uppercase">Tốt cho sức khỏe</h3>
                 <p className="text-gray-700 text-justify leading-relaxed">
                   Đạp xe để vận động, cơ thể ra mồ hôi tương tự các môn thể thao. Đặc biệt ở thành phố lớn, các em lười vận động hơn rất nhiều so với thế hệ trước.
                 </p>
              </div>

              {/* Card 3: Tự lập */}
              <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 hover:shadow-xl transition-all group">
                 <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform">
                    <Clock size={32} />
                 </div>
                 <h3 className="text-xl font-bold text-blue-600 mb-3 uppercase">Không phụ thuộc</h3>
                 <p className="text-gray-700 text-justify leading-relaxed">
                   Các em cần tập dần thói quen tự chủ và có trách nhiệm với thời gian, lịch học của bản thân trước ngưỡng cửa trưởng thành, thay vì chờ cha mẹ đưa đón.
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* 3. THE "HOW" - CHỌN XE THẾ NÀO */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
         {/* Decor */}
         <div className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none">
            <Image src="/decor/banner-website-hbw-10.webp" alt="Decor" fill className="object-contain" />
         </div>

         <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-16">
               <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Cần tìm hiểu kỹ</span>
               <h2 className="text-4xl md:text-5xl font-black text-secondary mb-6">CHỌN XE ĐẠP NHƯ THẾ NÀO?</h2>
               <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                 Nhiều phụ huynh chọn xe qua loa dẫn đến chọn sai, nhanh chán hoặc thậm chí gây chấn thương, nguy hiểm khi lưu thông.
               </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-12">
               
               {/* Item 01 */}
               <div className="flex gap-6 bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border-l-8 border-primary group">
                  <div className="flex-shrink-0">
                     <span className="text-5xl font-black text-gray-100 group-hover:text-primary/20 transition-colors">01</span>
                  </div>
                  <div>
                     <h3 className="text-2xl font-bold text-secondary mb-2 flex items-center gap-2">
                        <Ruler className="text-primary" /> Đúng Size
                     </h3>
                     <p className="text-gray-600 text-justify">
                        Điều này cực kỳ quan trọng. Dựa vào chiều cao để chọn kích thước phù hợp, giúp đảm bảo an toàn và tránh chấn thương cột sống khi đạp lâu.
                     </p>
                  </div>
               </div>

               {/* Item 02 */}
               <div className="flex gap-6 bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border-l-8 border-green-500 group">
                  <div className="flex-shrink-0">
                     <span className="text-5xl font-black text-gray-100 group-hover:text-green-500/20 transition-colors">02</span>
                  </div>
                  <div>
                     <h3 className="text-2xl font-bold text-secondary mb-2 flex items-center gap-2">
                        <DollarSign className="text-green-500" /> Đúng Giá
                     </h3>
                     <p className="text-gray-600 text-justify">
                        Cấu hình, chất lượng linh kiện (khung, vành, phuộc, bộ đề…) phải tương xứng với tầm giá. Tránh các sản phẩm "ngáo giá", hét giá lung tung.
                     </p>
                  </div>
               </div>

               {/* Item 03 */}
               <div className="flex gap-6 bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border-l-8 border-blue-500 group">
                  <div className="flex-shrink-0">
                     <span className="text-5xl font-black text-gray-100 group-hover:text-blue-500/20 transition-colors">03</span>
                  </div>
                  <div>
                     <h3 className="text-2xl font-bold text-secondary mb-2 flex items-center gap-2">
                        <Award className="text-blue-500" /> Đúng Chất Lượng
                     </h3>
                     <p className="text-gray-600 text-justify">
                        Chất lượng thực tế phải đúng với quảng cáo. Quan trọng là phải bền, ít nhất từ <strong>3-5 năm</strong>, đủ để các em học hết cấp 2 hoặc cấp 3.
                     </p>
                  </div>
               </div>

               {/* Item 04 */}
               <div className="flex gap-6 bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border-l-8 border-purple-500 group">
                  <div className="flex-shrink-0">
                     <span className="text-5xl font-black text-gray-100 group-hover:text-purple-500/20 transition-colors">04</span>
                  </div>
                  <div>
                     <h3 className="text-2xl font-bold text-secondary mb-2 flex items-center gap-2">
                        <Palette className="text-purple-500" /> Đúng Gu
                     </h3>
                     <p className="text-gray-600 text-justify">
                        Đúng kiểu dáng, đúng màu sắc… các em học sinh mới yêu thích và chủ động sử dụng hàng ngày. <span className="italic text-purple-600 font-bold">Đừng mua chiếc xe đạp mà phụ huynh thích!</span>
                     </p>
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* 4. MISSION & EMOTION */}
      <section className="py-24 bg-gradient-brand text-secondary">
         <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center bg-white/60 backdrop-blur-md p-10 md:p-16 rounded-[3rem] shadow-2xl border border-white">
               <Quote size={48} className="text-primary mx-auto mb-6 opacity-50" />
               <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase leading-tight">
                  Hãy tạo điều kiện để Học Sinh <br/>
                  <span className="text-primary">Được Chủ Động & Tự Lập</span>
               </h2>
               <p className="text-xl text-gray-700 mb-8 font-medium">
                  Học sinh có thể cải thiện sức khỏe thể chất, phát triển tinh thần thông qua việc vận động cùng xe đạp!
               </p>
               
               <div className="text-justify text-gray-600 space-y-4 leading-relaxed md:px-10">
                  <p>
                     HBW tin rằng, những đứa trẻ ý thức được tự mình đến trường và chủ động sử dụng phương tiện an toàn như xe đạp là những đứa trẻ biết thương và hiểu sự lo lắng của cha mẹ.
                  </p>
                  <p>
                     Đồng thời, lựa chọn xe đạp là lựa chọn của thế hệ trẻ hiện đại. Biết sống và nỗ lực vì môi trường sống xanh không của riêng ai.
                  </p>
               </div>

               <div className="mt-12">
                  <p className="font-bold text-lg mb-6">
                     HBW trân trọng điều đó và sẵn sàng <span className="text-red-600 uppercase">ưu đãi đặc biệt</span> cho các em học sinh.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                     <a 
                       href="https://zalo.me/4161110732021895940"
                       target="_blank"
                       className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-white font-bold rounded-xl hover:bg-black transition-all shadow-lg uppercase"
                     >
                       <MessageCircle /> Nhận ưu đãi HBW
                     </a>
                     <Link 
                       href="/san-pham"
                       className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-secondary font-bold rounded-xl border-2 border-secondary hover:bg-secondary hover:text-white transition-all uppercase"
                     >
                       Chọn xe đạp phù hợp <ArrowRight />
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 5. GALLERY - HỌC SINH TRẢI NGHIỆM */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12 uppercase text-secondary">
               <span className="text-primary mr-2">CÁC EM HỌC SINH</span> ĐÃ TRẢI NGHIỆM
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
               {customerGallery.map((img, idx) => (
                  <div key={idx} className="relative aspect-square rounded-xl overflow-hidden group shadow-md hover:shadow-xl transition-all">
                     <Image 
                       src={img} 
                       alt={`Học sinh trải nghiệm HBW ${idx + 1}`} 
                       fill 
                       className="object-cover group-hover:scale-110 transition-transform duration-700"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                        <span className="text-white text-xs font-bold uppercase tracking-wider">SERIMA MTB</span>
                     </div>
                  </div>
               ))}
            </div>
            
            <div className="mt-12 text-center">
               <p className="text-gray-400 italic mb-4">"Kỷ niệm với xe đạp là kỷ niệm đẹp nhất của tuổi học trò"</p>
               <div className="w-16 h-1 bg-gray-200 mx-auto rounded-full"></div>
            </div>
         </div>
      </section>

    </main>
  );
}