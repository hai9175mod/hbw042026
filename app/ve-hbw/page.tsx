import Link from "next/link";
import { 
  Quote, 
  Leaf, 
  AlertTriangle, 
  Activity, 
  Globe, 
  Users, 
  Target, 
  Bike 
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-secondary relative text-gray-200">
      
      {/* BACKGROUND FIXED: Tạo hiệu ứng chiều sâu khi cuộn */}
      <div 
        className="fixed inset-0 z-0 opacity-40 pointer-events-none bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/global/blackbackground.jpg')" }}
      ></div>
      <div className="fixed inset-0 z-0 bg-black/60 pointer-events-none"></div>

      {/* NỘI DUNG CHÍNH (Z-Index cao hơn nền) */}
      <div className="relative z-10">

        {/* 1. HERO TITLE */}
        <section className="pt-32 pb-16 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4 uppercase tracking-wider">
            Câu chuyện của HBW
          </h1>
          <p className="text-xl md:text-2xl font-light text-white/80 max-w-3xl mx-auto italic">
            "Từ chiếc lưng đau đến khát vọng xanh hóa giao thông học đường."
          </p>
        </section>

        {/* 2. KHỞI NGUỒN: TÌNH CỜ & TỰ NHIÊN */}
        <section className="py-16 container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Block 1 */}
            <div className="bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl">
              <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                <span className="text-4xl">01.</span> Tình cờ...
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-justify">
                <p>
                  HBW được thành lập vào những ngày đầu năm 2023. Cái tên bắt nguồn từ <strong className="text-white">HiBikeway</strong> – con đường đến với đam mê xe đạp của tôi, Founder HBW, hết sức tình cờ.
                </p>
                <p>
                  Bắt nguồn từ chiếc lưng với đủ loại bệnh của một người mới chỉ 33 tuổi với 10 năm làm văn phòng: thoát vị đĩa đệm và thoái hóa cột sống. Theo lời khuyên bác sĩ: <em className="text-primary">"hãy tập thể dục một cách bị động"</em>, tôi đổi xe máy sang xe đạp và cam kết đạp tối thiểu 10km mỗi tối.
                </p>
              </div>
            </div>

            {/* Block 2 */}
            <div className="bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl">
              <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                <span className="text-4xl">02.</span> ...Đến Tự nhiên
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-justify">
                <p>
                   Từ thói quen trở thành đam mê. Tôi nhận ra đối lập với hàng triệu chiếc xe máy xả khí thải, là hàng trăm ngàn người chọn xe đạp vì môi trường và sức khỏe. 
                </p>
                <p>
                   Nhưng con số này quá nhỏ bé. Điều đó thôi thúc tôi phải làm gì đó.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* 3. BỐI CẢNH: COP26/28 & BIẾN ĐỔI KHÍ HẬU */}
        <section className="py-20 bg-black/30 border-y border-white/10">
          <div className="container mx-auto px-4 md:px-6">
             <div className="text-center mb-12">
                <span className="text-primary font-bold tracking-widest uppercase text-sm border border-primary px-3 py-1 rounded-full">Bối cảnh toàn cầu</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 max-w-4xl mx-auto">
                   Hội nghị Liên Hợp Quốc về Biến đổi khí hậu (COP)
                </h2>
             </div>

             <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* COP 26 */}
                <div className="p-8 border-l-4 border-primary bg-gradient-to-r from-white/5 to-transparent">
                   <h3 className="text-2xl font-bold text-primary mb-4">COP26</h3>
                   <p className="text-gray-300">
                      Thủ tướng Phạm Minh Chính cam kết thực hiện <strong className="text-white">NETZERO</strong> – Đạt mức phát thải ròng bằng 0 vào năm 2050.
                   </p>
                </div>
                {/* COP 28 */}
                <div className="p-8 border-l-4 border-primary bg-gradient-to-r from-white/5 to-transparent">
                   <h3 className="text-2xl font-bold text-primary mb-4">COP28</h3>
                   <p className="text-gray-300">
                      Cảnh báo hệ thống khí hậu gần đến <strong className="text-red-500">giới hạn đỏ</strong>. Băng tan, nước biển dâng, thiên tai tàn khốc hơn. Biến đổi khí hậu là vấn đề của toàn dân.
                   </p>
                </div>
             </div>
          </div>
        </section>

        {/* 4. VẤN ĐỀ: XE MÁY & HỌC SINH */}
        <section className="py-20 container mx-auto px-4 md:px-6">
           <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
                 <div className="md:w-1/2">
                    <h2 className="text-4xl font-bold text-white mb-6">
                       Học sinh phải đi <span className="text-primary">phương tiện của học sinh!</span>
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed text-justify mb-6">
                       Tôi ủng hộ tự lập, nhưng phản đối việc giao xe máy phân khối lớn cho học sinh. Các em chưa đủ kỹ năng để làm chủ tốc độ.
                    </p>
                    <div className="bg-red-900/20 border border-red-500/30 p-6 rounded-xl">
                       <h4 className="flex items-center gap-2 text-red-400 font-bold mb-3">
                          <AlertTriangle size={24} /> Con số biết nói (2022)
                       </h4>
                       <ul className="space-y-2 text-gray-300">
                          <li>• <strong className="text-white">11.450</strong> vụ tai nạn giao thông.</li>
                          <li>• <strong className="text-white">6.384</strong> người chết.</li>
                          <li>• <strong className="text-white">70%</strong> số vụ do xe máy gây ra.</li>
                          <li>• <strong className="text-white">90%</strong> nạn nhân thương vong là người đi xe máy.</li>
                       </ul>
                    </div>
                 </div>
                 <div className="md:w-1/2 grid grid-cols-1 gap-6">
                    <div className="bg-white/10 p-6 rounded-xl text-center">
                       <Activity className="w-12 h-12 text-primary mx-auto mb-4" />
                       <h4 className="text-xl font-bold text-white">Lợi ích xe đạp</h4>
                       <p className="text-sm text-gray-400 mt-2">Kiểm soát cân nặng, tốt cho tim mạch, phổi và xương khớp.</p>
                    </div>
                    <div className="bg-white/10 p-6 rounded-xl text-center">
                       <Leaf className="w-12 h-12 text-green-400 mx-auto mb-4" />
                       <h4 className="text-xl font-bold text-white">Tập thể thao bị động</h4>
                       <p className="text-sm text-gray-400 mt-2">Không bị ảnh hưởng bởi sự quyết tâm hay chán nản.</p>
                    </div>
                 </div>
              </div>

              {/* Ô NHIỄM KHÔNG KHÍ */}
              <div className="bg-gray-900/80 p-8 md:p-12 rounded-3xl border border-gray-700">
                 <h3 className="text-3xl font-bold text-center text-primary mb-10">Tìm hiểu: Sự thật đáng sợ</h3>
                 <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                       <div className="text-5xl font-black text-white mb-2">10%</div>
                       <p className="text-sm text-gray-400">Ca tử vong thế giới do ô nhiễm không khí (ngang thuốc lá).</p>
                    </div>
                    <div className="text-center">
                       <div className="text-5xl font-black text-white mb-2">29%</div>
                       <p className="text-sm text-gray-400">Nguồn phát thải NO từ xe gắn máy.</p>
                    </div>
                    <div className="text-center">
                       <div className="text-5xl font-black text-white mb-2">-20</div>
                       <p className="text-sm text-gray-400">Tháng tuổi thọ của trẻ em bị rút ngắn do ô nhiễm.</p>
                    </div>
                 </div>
                 <p className="text-center text-white mt-8 font-medium italic">
                    "Xe đạp là xu thế xanh! Là lựa chọn tốt nhất cho di chuyển 3-5km."
                 </p>
              </div>
           </div>
        </section>

        {/* 5. GIẢI PHÁP: HBW RIDERIGHT */}
        <section className="py-24 bg-gradient-to-b from-primary/10 to-transparent">
           <div className="container mx-auto px-4 text-center max-w-4xl">
              <Bike size={64} className="text-primary mx-auto mb-6" />
              <h2 className="text-5xl font-bold text-white mb-8">HBW - RideRight</h2>
              <div className="prose prose-xl prose-invert mx-auto text-justify">
                 <p>
                    Góp phần nâng cao nhận thức và giáo dục học sinh về trách nhiệm bảo vệ môi trường. 
                    Việc sở hữu một chiếc xe đạp giúp các em <span className="text-primary font-bold">tự tin, tự lập, tự chủ</span>.
                 </p>
                 <p>
                    Chúng tôi muốn mỗi chiếc xe đạp của HBW gắn liền với một câu chuyện: học tập, thể hiện bản thân, trưởng thành và thanh xuân.
                 </p>
              </div>
           </div>
        </section>

        {/* 6. TẦM NHÌN & THAM VỌNG */}
        <section className="py-20 container mx-auto px-4 md:px-6">
           <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                 <h2 className="text-4xl font-bold text-primary mb-6">Tham vọng của chúng tôi</h2>
                 <p className="text-lg text-gray-300 text-justify mb-6">
                    Chúng tôi là công ty môi trường. Tầm nhìn là xanh hóa giao thông học đường, dẫn đầu thị phần xe đạp học sinh trước năm 2030.
                 </p>
                 <p className="text-lg text-gray-300 text-justify">
                    Xa hơn, chúng tôi muốn biến Đông Nam Á văn minh như Bắc Âu, nơi gần một nửa dân số thành thị coi xe đạp là phương tiện chính.
                 </p>
              </div>
              <div className="space-y-6">
                 <div className="flex gap-4">
                    <Target className="text-primary flex-shrink-0" size={32} />
                    <div>
                       <h4 className="font-bold text-white text-xl">Đoàn kết</h4>
                       <p className="text-gray-400 text-sm">Để đạt được hoài bão, chúng ta cần sự đồng lòng của cả xã hội.</p>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <Users className="text-primary flex-shrink-0" size={32} />
                    <div>
                       <h4 className="font-bold text-white text-xl">Hợp tác</h4>
                       <p className="text-gray-400 text-sm">Mong muốn hợp tác cùng UNICEF, GYL, Joy Foundation, SaiGonXanh...</p>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <Globe className="text-primary flex-shrink-0" size={32} />
                    <div>
                       <h4 className="font-bold text-white text-xl">Tương lai</h4>
                       <p className="text-gray-400 text-sm">Vì trẻ em xứng đáng được hưởng cuộc sống tốt hơn trong một môi trường trong lành.</p>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 7. CTA CUỐI CÙNG */}
        <section className="py-24 text-center border-t border-white/10 bg-black/40">
           <div className="container mx-auto px-4">
              <Quote className="mx-auto text-primary mb-6 opacity-50" size={48} />
              <h2 className="text-2xl md:text-4xl font-bold text-white max-w-4xl mx-auto leading-normal">
                 "Những vấn đề phức tạp nhất thế giới: sức khỏe, tắc nghẽn, ô nhiễm và biến đổi khí hậu sẽ được giải quyết thông qua một cách đơn giản – đó là đi xe đạp."
              </h2>
              <div className="mt-12">
                 <Link 
                   href="/san-pham" 
                   className="px-10 py-4 bg-primary text-secondary font-bold rounded-full text-lg hover:bg-white transition-all shadow-lg hover:shadow-primary/50"
                 >
                    Tham gia hành trình xanh cùng HBW
                 </Link>
              </div>
           </div>
        </section>

      </div>
    </main>
  );
}