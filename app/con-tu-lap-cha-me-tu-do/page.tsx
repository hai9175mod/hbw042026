import Link from "next/link";
import Image from "next/image";
import { 
  Clock, 
  Car, 
  AlertTriangle, 
  Bike, 
  BatteryCharging, 
  UserCheck, 
  MapPin, 
  ArrowRight,
  Phone,
  CalendarCheck
} from "lucide-react";

export const metadata = {
  title: "Con tự lập - Cha mẹ tự do | Giải pháp từ HBW",
  description: "Giải phóng phụ huynh khỏi việc đưa đón 4 lần/ngày. Rèn luyện tính tự lập cho học sinh bằng xe đạp.",
};

export default function IndependencePage() {
  return (
    <main className="min-h-screen bg-white text-secondary overflow-hidden">
      
      {/* 1. HERO SECTION: SOLUTION #1 */}
      <section className="relative py-24 md:py-32 bg-secondary text-white overflow-hidden">
        {/* Decor Background */}
        <div className="absolute inset-0 z-0 opacity-20">
            <Image 
              src="/decor/banner-website-hbw-2.webp" 
              alt="Background" 
              fill 
              className="object-cover grayscale"
              priority
            />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 py-2 px-6 rounded-full border border-primary text-primary font-bold text-sm uppercase tracking-widest mb-6 bg-white/5 backdrop-blur-md">
             <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
             #1 Giải pháp giáo dục
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-6 leading-tight">
            CON TỰ LẬP <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">
              CHA MẸ TỰ DO
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
            Không gì khác ngoài <strong className="text-white">xe đạp</strong> để rèn luyện cho học sinh tính tự lập ngay từ hôm nay.
          </p>
        </div>
      </section>

      {/* 2. THE PAIN POINT: THỰC TRẠNG MỆT MỎI */}
      <section className="py-24 bg-gray-50 relative">
         <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-16 items-center">
               
               {/* Bên trái: Text */}
               <div className="md:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                     Gia đình bạn có thể cũng đang <span className="text-red-600 border-b-4 border-red-200">khá mệt mỏi!</span>
                  </h2>
                  <div className="bg-white p-8 rounded-3xl shadow-lg border-l-8 border-red-500 mb-8">
                     <p className="text-lg text-gray-600 italic leading-relaxed">
                        “Nếu không học bán trú, một ngày phụ huynh phải đưa đón con <strong className="text-red-600 text-xl">04 lần</strong>, lãng phí trung bình gần <strong className="text-red-600 text-xl">2 tiếng</strong> chờ đợi mòn mỏi mỗi ngày trước cổng trường. Chưa kể gia đình có nhiều con? Tuy nhiên, chúng ta vẫn phải sắp xếp thời gian đưa đón mỗi ngày.”
                     </p>
                  </div>
                  <div className="flex items-center gap-4 text-gray-500 font-medium">
                     <div className="p-3 bg-gray-200 rounded-full">
                        <Car size={24} />
                     </div>
                     <span>80% Học sinh cấp 2, 3 ở thành phố lớn được đưa đón.</span>
                  </div>
               </div>

               {/* Bên phải: Visual Stats */}
               <div className="md:w-1/2 grid grid-cols-2 gap-6">
                  <div className="bg-white p-8 rounded-[2rem] shadow-md text-center border border-gray-100">
                     <Clock className="w-12 h-12 text-red-500 mx-auto mb-4" />
                     <div className="text-5xl font-black text-secondary mb-2">2h</div>
                     <p className="text-gray-500 text-sm">Lãng phí mỗi ngày</p>
                  </div>
                  <div className="bg-white p-8 rounded-[2rem] shadow-md text-center border border-gray-100">
                     <Car className="w-12 h-12 text-red-500 mx-auto mb-4" />
                     <div className="text-5xl font-black text-secondary mb-2">x4</div>
                     <p className="text-gray-500 text-sm">Lượt đưa đón/ngày</p>
                  </div>
                  <div className="col-span-2 bg-red-50 p-6 rounded-[2rem] text-center border border-red-100">
                     <p className="text-red-800 font-bold">
                        Hệ quả: Cha mẹ stress, con thụ động, thiếu kỹ năng sống.
                     </p>
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* 3. THE RISK: MỐI NGUY HIỂM TIỀM TÀNG */}
      <section className="py-24 bg-secondary text-white relative overflow-hidden">
         {/* Decor */}
         <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl z-0"></div>

         <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
               <div className="inline-flex items-center gap-2 text-yellow-400 font-bold mb-4 uppercase tracking-wider">
                  <AlertTriangle /> Cảnh báo quan trọng
               </div>
               <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  SỰ BAO BỌC QUÁ MỨC <br/>
                  <span className="text-gray-400">LÀ CON DAO HAI LƯỠI</span>
               </h2>
               <p className="text-gray-300 text-lg leading-relaxed">
                  Vì lo lắng, an toàn, sợ con mệt, bắt nạt, thời tiết…. Nhưng đến khi được trao cơ hội hoặc đến tuổi phải tự lập, các em hoàn toàn <strong className="text-white">không có kỹ năng tham gia giao thông</strong>, đặc biệt là lái xe an toàn.
               </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
               <div className="bg-white/10 p-10 rounded-3xl backdrop-blur-md border border-white/10">
                  <h3 className="text-2xl font-bold text-primary mb-6">Thực trạng xe máy học đường</h3>
                  <ul className="space-y-6">
                     <li className="flex items-start gap-4">
                        <div className="w-2 h-2 mt-2 bg-red-500 rounded-full shadow-[0_0_10px_red]"></div>
                        <p className="text-gray-300 text-justify">
                           <strong className="text-white">70% số vụ TNGT</strong> liên quan tới xe gắn máy (Uỷ Ban ATGTQG – 2022). Đây là con số biết nói về sự nguy hiểm.
                        </p>
                     </li>
                     <li className="flex items-start gap-4">
                        <div className="w-2 h-2 mt-2 bg-red-500 rounded-full shadow-[0_0_10px_red]"></div>
                        <p className="text-gray-300 text-justify">
                           Xe 50cc vẫn có thể chạy tới <strong className="text-white">80km/h</strong>. Các em học lớp 8, 9, 10 chưa đủ kinh nghiệm để xử lý tình huống ở tốc độ này.
                        </p>
                     </li>
                     <li className="flex items-start gap-4">
                        <div className="w-2 h-2 mt-2 bg-red-500 rounded-full shadow-[0_0_10px_red]"></div>
                        <p className="text-gray-300 text-justify">
                           Việc chuyển từ "được đưa đón" sang "cầm lái xe máy" là một bước nhảy vọt nguy hiểm nếu thiếu bước đệm là <strong className="text-primary">XE ĐẠP</strong>.
                        </p>
                     </li>
                  </ul>
               </div>

               <div className="relative h-full min-h-[300px] rounded-3xl overflow-hidden shadow-2xl group">
                  <Image 
                    src="/decor/banner-website-hbw-3.webp" // Dùng ảnh decor mang tính cảnh báo hoặc giao thông
                    alt="Traffic Safety"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-8 text-center">
                     <p className="text-2xl font-bold text-white border-4 border-white p-6 leading-relaxed">
                        "Học sinh phải đi phương tiện của học sinh"
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 4. THE SOLUTION: 3-5KM & BENEFITS */}
      <section className="py-24 bg-white relative">
         <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-20">
               <h2 className="text-4xl md:text-5xl font-black text-secondary mb-6">
                  NẾU TRƯỜNG CÁCH NHÀ <span className="text-primary">3 - 5 KM</span>
               </h2>
               <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Hãy để con bạn tự mình trải nghiệm cung đường đến trường bằng xe đạp. Đây là khoảng cách vàng để rèn luyện.
               </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {/* Benefit 1 */}
               <div className="bg-gray-50 p-8 rounded-[2rem] hover:bg-white hover:shadow-xl transition-all border border-gray-100 group">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform">
                     <Clock size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Tiết kiệm thời gian</h3>
                  <p className="text-gray-600 text-justify leading-relaxed">
                     Phụ huynh hãy dùng thời gian chờ đợi trước cổng trường cho các công việc quan trọng khác và giảm căng thẳng cho chính mình.
                  </p>
               </div>

               {/* Benefit 2 */}
               <div className="bg-gray-50 p-8 rounded-[2rem] hover:bg-white hover:shadow-xl transition-all border border-gray-100 group">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 text-orange-600 group-hover:scale-110 transition-transform">
                     <UserCheck size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Sống có trách nhiệm</h3>
                  <p className="text-gray-600 text-justify leading-relaxed">
                     Các em học sinh cần tập dần thói quen tự chủ và có trách nhiệm với thời gian, lịch học của bản thân trước ngưỡng cửa trưởng thành.
                  </p>
               </div>

               {/* Benefit 3 */}
               <div className="bg-gray-50 p-8 rounded-[2rem] hover:bg-white hover:shadow-xl transition-all border border-gray-100 group">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 text-green-600 group-hover:scale-110 transition-transform">
                     <BatteryCharging size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Vận động ra mồ hôi</h3>
                  <p className="text-gray-600 text-justify leading-relaxed">
                     Hơn 80% học sinh ngày nay thích dán mắt vào điện thoại hơn là vận động. Xe đạp giúp ngăn ngừa nguy cơ trẻ hóa ung thư, đột quỵ.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* 5. CTA: READY? */}
      <section className="py-24 bg-gradient-brand text-secondary relative overflow-hidden">
         {/* Decor */}
         <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <Image src="/decor/banner-website-hbw-5.webp" alt="Decor" fill className="object-cover" />
         </div>

         <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center bg-white/80 backdrop-blur-xl p-12 md:p-16 rounded-[3rem] shadow-2xl border-4 border-white">
               <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase">
                  BẠN CÓ SẴN SÀNG <br/> ĐỂ CON THỬ SỨC TỰ LẬP?
               </h2>
               <p className="text-xl text-gray-700 mb-10 font-medium">
                  Đừng để sự bao bọc trở thành rào cản sự phát triển của con. <br/>
                  Hãy bắt đầu từ chiếc xe đạp ngay hôm nay.
               </p>
               
               <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a 
                    href="https://zalo.me/4161110732021895940"
                    target="_blank"
                    className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-secondary text-white font-bold rounded-2xl hover:bg-black transition-all shadow-xl uppercase text-lg group"
                  >
                    <Phone className="group-hover:animate-bounce" /> Gọi để tư vấn
                  </a>
                  <Link 
                    href="/san-pham"
                    className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-white text-secondary font-bold rounded-2xl border-2 border-secondary hover:bg-secondary hover:text-white transition-all uppercase text-lg"
                  >
                    <CalendarCheck /> Đặt lịch trải nghiệm
                  </Link>
               </div>
            </div>
         </div>
      </section>

    </main>
  );
}