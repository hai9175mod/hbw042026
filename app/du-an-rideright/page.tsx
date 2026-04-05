import Link from "next/link";
import Image from "next/image";
import { 
  Bike, 
  Leaf, 
  GraduationCap, 
  Users, 
  TrendingUp, 
  AlertOctagon, 
  Wind, 
  HeartPulse, 
  CheckCircle2, 
  Target, 
  ArrowRight,
  MessageCircle,
  BookOpen
} from "lucide-react";

export const metadata = {
  title: "Dự án RideRight - Đi học khỏe & An toàn | HBW",
  description: "Chương trình khuyến khích học sinh tự lập đến trường bằng xe đạp, xây dựng văn hóa giao thông xanh.",
};

export default function RideRightPage() {
  return (
    <main className="min-h-screen bg-white text-secondary overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-32 bg-secondary text-white overflow-hidden">
        {/* Background Decor */}
        <div className="absolute inset-0 z-0 opacity-20">
            <Image 
              src="/decor/banner-website-hbw-6.webp" 
              alt="RideRight Pattern" 
              fill 
              className="object-cover grayscale"
              priority
            />
        </div>
        
        {/* Decorative Blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 z-0"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2 z-0"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="inline-block mb-4 p-2 px-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md">
             <span className="text-primary font-bold tracking-widest uppercase text-sm">Dự án cộng đồng HBW</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-6 leading-none">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">RideRight</span>
            <span className="block text-4xl md:text-6xl text-white mt-2 font-light">TO SCHOOL</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-8 uppercase tracking-widest border-b-4 border-primary inline-block pb-2">
            Đi học khỏe & An toàn
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-light italic leading-relaxed">
            “Chương trình khuyến khích học sinh tự lập đến trường thông qua việc tự mình đi học bằng xe đạp”
          </p>
        </div>
      </section>

      {/* 2. 3 TRỤ CỘT CHÍNH (01, 02, 03) */}
      <section className="py-20 container mx-auto px-4 md:px-6 -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 01 */}
          <div className="relative bg-white p-10 rounded-3xl shadow-2xl border-t-8 border-primary hover:-translate-y-2 transition-transform duration-500 overflow-hidden group">
            <span className="text-9xl font-black text-gray-100 absolute -top-6 -right-6 select-none z-0 group-hover:text-primary/10 transition-colors">01</span>
            
            <div className="relative z-10">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-secondary transition-colors">
                  <TrendingUp size={36} />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-secondary">THÚC ĐẨY</h3>
                <p className="text-gray-600 text-justify text-lg leading-relaxed">
                  Tạo điều kiện và khuyến khích thanh thiếu niên tự đi xe đạp. Thúc đẩy lối sống vận động lành mạnh, tự lập và rèn luyện kỹ năng tham gia giao thông, giảm thiểu tai nạn học đường.
                </p>
            </div>
          </div>

          {/* Card 02 */}
          <div className="relative bg-white p-10 rounded-3xl shadow-2xl border-t-8 border-blue-500 hover:-translate-y-2 transition-transform duration-500 overflow-hidden group">
             <span className="text-9xl font-black text-gray-100 absolute -top-6 -right-6 select-none z-0 group-hover:text-blue-500/10 transition-colors">02</span>
             
             <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <GraduationCap size={36} />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-secondary">GIÁO DỤC</h3>
                <p className="text-gray-600 text-justify text-lg leading-relaxed">
                  Giáo dục nếp sống văn minh đô thị từ ghế nhà trường. Hướng tới thế hệ tương lai bền vững về sức khỏe và môi trường, tiệm cận trình độ phát triển của Bắc Âu.
                </p>
             </div>
          </div>

          {/* Card 03 - Nền đen */}
          <div className="relative bg-secondary text-white p-10 rounded-3xl shadow-2xl border-t-8 border-green-500 hover:-translate-y-2 transition-transform duration-500 overflow-hidden group">
             <span className="text-9xl font-black text-white/5 absolute -top-6 -right-6 select-none z-0 group-hover:text-green-500/10 transition-colors">03</span>
             
             <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-green-400 group-hover:bg-green-500 group-hover:text-white transition-colors">
                  <Leaf size={36} />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">NET ZERO 2050</h3>
                <p className="text-gray-300 text-justify text-lg leading-relaxed">
                  Một phần quan trọng trong mục tiêu NET ZERO 2050 của Việt Nam. Giảm phát thải Carbon, chống biến đổi khí hậu theo định hướng Chính phủ.
                </p>
             </div>
          </div>

        </div>
      </section>

      {/* 3. ĐỊNH NGHĨA & THỰC TRẠNG */}
      <section className="py-24 bg-gray-50 relative">
        {/* Decor Image */}
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
           <Image src="/decor/banner-website-hbw-7.webp" alt="Decor" fill className="object-cover" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Định nghĩa */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-5xl font-black mb-8 text-secondary">RIDERIGHT LÀ GÌ?</h2>
            <div className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
              <p className="text-xl text-gray-700 leading-relaxed">
                RideRight là một sáng kiến mới cho văn hóa đạp xe học đường được khởi xướng bởi <strong className="text-primary text-2xl">HBW</strong>. <br/>
                Mục đích chính là biến việc đi xe đạp trở thành phương tiện thay thế an toàn, hấp dẫn cho học sinh từ <strong className="text-secondary bg-primary/20 px-2 rounded">12 – 18 tuổi</strong>.
              </p>
            </div>
          </div>

          {/* Thống kê báo động */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border-l-8 border-red-500 relative overflow-hidden">
               <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-red-100 rounded-full blur-3xl"></div>
               <h3 className="flex items-center gap-4 text-3xl font-bold text-red-600 mb-8">
                 <AlertOctagon size={40} /> Báo động đỏ: TNGT
               </h3>
               <p className="mb-4 font-bold text-secondary text-lg">Ba nguyên nhân hàng đầu:</p>
               <ul className="space-y-4 mb-8">
                 <li className="flex items-center gap-3 text-gray-700 text-lg"><div className="w-3 h-3 bg-red-500 rounded-full shadow-red-500/50 shadow-lg"></div> Đi sai phần đường</li>
                 <li className="flex items-center gap-3 text-gray-700 text-lg font-bold"><div className="w-3 h-3 bg-red-500 rounded-full shadow-red-500/50 shadow-lg"></div> Vi phạm tốc độ (Số 1)</li>
                 <li className="flex items-center gap-3 text-gray-700 text-lg"><div className="w-3 h-3 bg-red-500 rounded-full shadow-red-500/50 shadow-lg"></div> Thiếu quan sát</li>
               </ul>
               <p className="text-base text-red-800 italic bg-red-50 p-6 rounded-2xl border border-red-100">
                 * Việc giao xe máy cho học sinh khi chưa đủ kỹ năng là hành vi thiếu trách nhiệm và cực kỳ nguy hiểm.
               </p>
            </div>

            <div className="space-y-8">
               <div>
                  <h3 className="text-4xl font-bold mb-6 text-secondary leading-tight">Ô nhiễm không khí: <br/><span className="text-gray-400">Sát thủ vô hình</span></h3>
                  <div className="h-2 w-24 bg-primary rounded-full mb-8"></div>
               </div>
               
               <div className="flex items-start gap-6 bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-4 bg-gray-100 rounded-full text-gray-500">
                    <Wind size={32} />
                  </div>
                  <div>
                     <h4 className="font-bold text-lg mb-2">Chất lượng không khí thấp</h4>
                     <p className="text-gray-600 text-justify">
                       Hà Nội & TP. HCM nằm trong top thành phố nhiều bụi mịn nhất thế giới. Chất lượng không khí Việt Nam đứng thứ 170/180.
                     </p>
                  </div>
               </div>

               <div className="flex items-start gap-6 bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-4 bg-red-100 rounded-full text-red-500">
                    <HeartPulse size={32} />
                  </div>
                  <div>
                     <h4 className="font-bold text-lg mb-2 text-red-600">Ảnh hưởng sức khỏe nghiêm trọng</h4>
                     <p className="text-gray-600 text-justify">
                       Tuổi thọ trẻ em bị rút ngắn khoảng <strong>20 tháng</strong> do ô nhiễm. Gây ra 41% ca tử vong tắc nghẽn phổi, 19% ung thư và 11% đột quỵ.
                     </p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BIG DATA STATISTICS */}
      <section className="py-24 bg-secondary text-white relative overflow-hidden">
        {/* Decor */}
        <div className="absolute inset-0 opacity-10">
           <Image src="/decor/banner-website-hbw-8.webp" alt="Decor" fill className="object-cover" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-gray-700/50">
            <div className="p-6 group">
              <div className="text-7xl md:text-8xl font-black text-primary mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">70<span className="text-4xl align-top">%</span></div>
              <p className="text-xl font-medium text-gray-300">Số vụ TNGT do xe máy gây ra (2022)</p>
            </div>
            <div className="p-6 group">
              <div className="text-7xl md:text-8xl font-black text-primary mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">90<span className="text-4xl align-top">%</span></div>
              <p className="text-xl font-medium text-gray-300">Thương vong đến từ xe gắn máy</p>
            </div>
            <div className="p-6 group">
              <div className="text-7xl md:text-8xl font-black text-primary mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">50<span className="text-4xl align-top">%</span></div>
              <p className="text-xl font-medium text-gray-300">Nguồn ô nhiễm không khí từ giao thông</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 4 TRỤ CỘT HÀNH ĐỘNG */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
           <h2 className="text-4xl font-bold text-center mb-16 uppercase text-secondary">Chiến lược Hành Động</h2>
           <div className="grid md:grid-cols-4 gap-6">
              {[
                { title: "Giáo dục", icon: GraduationCap, color: "text-blue-600", bg: "bg-blue-50", desc: "Cung cấp kỹ năng đi xe đạp và an toàn đô thị thông qua chương trình học đường." },
                { title: "Gắn kết", icon: Users, color: "text-purple-600", bg: "bg-purple-50", desc: "Xây dựng cộng đồng ủng hộ xe đạp, tạo tiếng nói chung tác động tới chính sách vĩ mô." },
                { title: "Gia tăng", icon: TrendingUp, color: "text-green-600", bg: "bg-green-50", desc: "Tăng số lượng học sinh đi xe đạp nhờ các sự kiện, trò chơi và hoạt động cộng đồng." },
                { title: "Gây dựng", icon: CheckCircle2, color: "text-orange-600", bg: "bg-orange-50", desc: "Vận động cải tiến hạ tầng, làn đường riêng giúp việc đạp xe an toàn và thuận tiện hơn." }
              ].map((item, idx) => (
                <div key={idx} className="p-8 bg-white rounded-3xl hover:bg-gray-50 hover:shadow-xl transition-all border border-gray-100 group cursor-default">
                   <div className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center mb-6 ${item.color} group-hover:scale-110 transition-transform`}>
                     <item.icon size={32} />
                   </div>
                   <h3 className="text-2xl font-bold mb-4 text-secondary">{item.title}</h3>
                   <p className="text-gray-600 text-justify leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 6. 3 TIÊU CHÍ (Horizontal Cards) */}
      <section className="py-24 bg-gradient-brand">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
             <h2 className="text-4xl font-black text-secondary">03 TIÊU CHÍ HÀNH ĐỘNG</h2>
             <div className="w-24 h-2 bg-white/50 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
             <div className="bg-white p-10 rounded-[2rem] shadow-lg border-b-8 border-green-500 hover:-translate-y-2 transition-transform">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                   <span className="text-5xl font-black text-green-500 opacity-20">01</span> Hài hòa
                </h3>
                <p className="text-gray-600 text-justify leading-relaxed">
                   Công bằng, không xung đột. Đảm bảo an toàn cho mọi đối tượng: học sinh nghèo, khuyết tật, miền núi. Hướng tới bền vững.
                </p>
             </div>
             <div className="bg-white p-10 rounded-[2rem] shadow-lg border-b-8 border-blue-500 hover:-translate-y-2 transition-transform">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                   <span className="text-5xl font-black text-blue-500 opacity-20">02</span> Hiệu quả
                </h3>
                <p className="text-gray-600 text-justify leading-relaxed">
                   Liên tục đánh giá phương pháp. Xác định cơ hội và rủi ro để nâng cao hiệu quả trong suốt quá trình triển khai.
                </p>
             </div>
             <div className="bg-white p-10 rounded-[2rem] shadow-lg border-b-8 border-primary hover:-translate-y-2 transition-transform">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                   <span className="text-5xl font-black text-primary opacity-20">03</span> Hợp tác
                </h3>
                <p className="text-gray-600 text-justify leading-relaxed">
                   Lắng nghe học sinh, gia đình, nhà trường. Mục tiêu là phần quan trọng trong quy hoạch quốc gia và Net Zero 2050.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* 7. LỘ TRÌNH THAM GIA & HBW ROLE */}
      <section className="py-24 bg-secondary text-white relative">
         <div className="absolute inset-0 z-0 opacity-10">
            <Image src="/decor/banner-website-hbw-9.webp" alt="Timeline Bg" fill className="object-cover" />
         </div>

         <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col lg:flex-row gap-20">
               
               {/* Lộ trình - Timeline */}
               <div className="lg:w-3/5">
                  <h2 className="text-4xl font-black text-primary mb-12 flex items-center gap-4">
                     <span className="w-12 h-1 bg-primary block"></span>
                     LỘ TRÌNH THAM GIA
                  </h2>
                  <div className="space-y-12 pl-6 border-l-2 border-primary/30">
                     {[
                        { title: "1. Thí điểm mô hình", desc: "Xây dựng đề án thí điểm cấp trường, phường. Nhân rộng khi đạt mục tiêu thành công." },
                        { title: "2. Cải thiện và nâng cấp", desc: "Vận động cải thiện vỉa hè, gờ giảm tốc, bãi đậu xe và phân luồng giao thông an toàn." },
                        { title: "3. Vận động trực tiếp", desc: "Tuyên truyền cho phụ huynh. Thử thách 'Tự đạp xe đi học' trong 1 tuần." },
                        { title: "4. Câu chuyện truyền cảm hứng", desc: "Lan tỏa các tấm gương học sinh tự lập, san sẻ gánh nặng với cha mẹ." }
                     ].map((step, idx) => (
                        <div key={idx} className="relative pl-10">
                           <div className="absolute -left-[29px] top-0 w-14 h-14 bg-secondary border-4 border-primary rounded-full flex items-center justify-center text-primary font-black text-xl shadow-[0_0_15px_rgba(255,214,0,0.5)]">
                              {idx + 1}
                           </div>
                           <h3 className="text-2xl font-bold mb-3 text-white">{step.title}</h3>
                           <p className="text-gray-400 text-lg text-justify leading-relaxed">{step.desc}</p>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Vai trò HBW */}
               <div className="lg:w-2/5">
                  <div className="sticky top-24 bg-white/5 p-10 rounded-[2.5rem] border border-white/10 backdrop-blur-md shadow-2xl">
                     <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-4">
                        <Target className="text-primary w-10 h-10" /> VAI TRÒ HBW
                     </h3>
                     <p className="text-gray-300 text-justify mb-6 text-lg leading-relaxed">
                        HBW đảm nhận vai trò <strong>chiến lược và dẫn dắt</strong>. Chúng tôi cam kết đưa RideRight trở thành phong trào toàn xã hội.
                     </p>
                     <p className="text-gray-300 text-justify mb-10 text-lg leading-relaxed">
                        Đây không chỉ là đi xe đạp, mà là xây dựng văn hóa giao thông mới, tự lập và an toàn cho thế hệ trẻ.
                     </p>
                     
                     <div className="text-center">
                        <p className="text-primary font-bold italic text-xl mb-8">"Sẽ thành công, nếu chúng ta đi cùng nhau!"</p>
                        <div className="space-y-4">
                           <a 
                              href="https://zalo.me/4161110732021895940" 
                              target="_blank"
                              className="flex items-center gap-2 w-full justify-center py-4 bg-primary text-secondary font-bold rounded-xl hover:bg-white transition-all uppercase shadow-lg text-lg"
                           >
                              <MessageCircle /> Tham gia ngay
                           </a>
                           <Link 
                              href="/lien-he" 
                              className="flex items-center gap-2 w-full justify-center py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-secondary transition-all uppercase text-lg"
                           >
                              Liên hệ hợp tác
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* 8. GÓC NHÌN CHUYÊN SÂU (NEW SECTION) */}
      <section className="py-24 bg-gray-50">
         <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-4xl font-bold text-center mb-16 uppercase text-secondary">Góc nhìn chuyên sâu</h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
               {/* Bài 1 */}
               <Link href="/hoc-sinh-phai-di-phuong-tien-cua-hoc-sinh-do-la-di-xe-dap" className="group block h-full">
                  <div className="bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all h-full border border-gray-100 flex flex-col">
                     <div className="aspect-video bg-blue-100 rounded-2xl mb-6 flex items-center justify-center overflow-hidden">
                        <Bike size={64} className="text-blue-500 opacity-50 group-hover:scale-110 transition-transform duration-500" />
                     </div>
                     <span className="text-blue-600 font-bold text-sm uppercase tracking-wider mb-3 block">Quan điểm</span>
                     <h3 className="text-2xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                        Học sinh phải đi phương tiện của học sinh - Đó là đi xe đạp
                     </h3>
                     <p className="text-gray-500 line-clamp-3 mb-6 flex-grow">
                        Tại sao xe máy không dành cho học sinh? Phân tích lợi ích to lớn của việc đạp xe đối với sự phát triển thể chất và tư duy.
                     </p>
                     <span className="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                        Đọc bài viết <ArrowRight size={20} />
                     </span>
                  </div>
               </Link>

               {/* Bài 2 */}
               <Link href="/con-tu-lap-cha-me-tu-do" className="group block h-full">
                  <div className="bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all h-full border border-gray-100 flex flex-col">
                     <div className="aspect-video bg-green-100 rounded-2xl mb-6 flex items-center justify-center overflow-hidden">
                        <Users size={64} className="text-green-500 opacity-50 group-hover:scale-110 transition-transform duration-500" />
                     </div>
                     <span className="text-green-600 font-bold text-sm uppercase tracking-wider mb-3 block">Gia đình</span>
                     <h3 className="text-2xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                        Con tự lập - Cha mẹ tự do
                     </h3>
                     <p className="text-gray-500 line-clamp-3 mb-6 flex-grow">
                        Khi con tự mình đến trường, cha mẹ có thêm thời gian cho bản thân và công việc. Một tư duy giáo dục hiện đại cần được lan tỏa.
                     </p>
                     <span className="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                        Đọc bài viết <ArrowRight size={20} />
                     </span>
                  </div>
               </Link>
            </div>
         </div>
      </section>

      {/* 9. CALL TO ACTION CUỐI */}
      <section className="py-24 bg-white text-center border-t border-gray-100">
         <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-black text-secondary mb-6">RideRight nên bắt đầu từ đâu?</h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto mb-10 font-light italic">
               "Vận động những đứa trẻ nói không với phụ huynh đưa đón. Đừng đánh đổi sự tiện lợi ngắn hạn thay vì sức khỏe bền vững."
            </p>
            <Link 
               href="/san-pham" 
               className="inline-flex items-center gap-3 px-10 py-5 bg-secondary text-white font-bold rounded-full hover:bg-primary transition-all shadow-xl text-lg hover:-translate-y-1"
            >
               Chọn chiếc xe đạp đầu tiên cho con <ArrowRight />
            </Link>
         </div>
      </section>
      
    </main>
  );
}