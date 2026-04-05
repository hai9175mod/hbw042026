"use client";

import { useState } from "react";
import { 
  Phone, 
  Mail, 
  Send, 
  Cpu, 
  Factory, 
  ShieldCheck, 
  MessageSquare, 
  Facebook, 
  Instagram, 
  Youtube,
  CheckCircle,
  Loader2
} from "lucide-react";

// --- CẤU HÌNH TELEGRAM ---
const TELEGRAM_TOKEN = "7436403261:AAHllXD5w10wydoVBionB_k3lM-l2L1u1cI";
const TELEGRAM_CHAT_ID = "-1002286714478";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    demand: "Tư vấn mua xe đạp", // Giá trị mặc định
    message: ""
  });

  // Xử lý nhập liệu
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Gửi Telegram
  const sendToTelegram = async () => {
    const message = `
📩 *LIÊN HỆ MỚI TỪ WEBSITE hbw.com.vn*
----------------
👤 *Tên:* ${formData.name}
📞 *SĐT:* \`${formData.phone}\`
📧 *Email:* ${formData.email || "Không có"}
🔖 *Nhu cầu:* ${formData.demand}
📝 *Lời nhắn:* ${formData.message || "Không có lời nhắn"}
    `;

    try {
      const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'Markdown',
        }),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData({ name: "", phone: "", email: "", demand: "Tư vấn mua xe đạp", message: "" }); // Reset
      } else {
        setFormStatus("error");
        console.error("Telegram Error:", await response.text());
      }
    } catch (error) {
      console.error("Network Error:", error);
      setFormStatus("error");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    // Giả lập độ trễ nhẹ cho UX mượt mà
    setTimeout(() => {
        sendToTelegram();
    }, 500);
  };

  return (
    <main className="min-h-screen bg-white">
      
      {/* 1. HERO HEADER */}
      <section className="bg-secondary py-20 text-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ 
            backgroundImage: "radial-gradient(#d4a860 1px, transparent 1px)", 
            backgroundSize: "30px 30px" 
        }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-wider mb-4">
            Liên hệ <span className="text-primary">HBW</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
            Kết nối công nghệ và con người để mang lại chiếc xe đạp hoàn hảo cho thanh xuân.
          </p>
        </div>
      </section>

      {/* 2. MAIN CONTENT SPLIT */}
      <section className="py-20 container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* LEFT: INFO & STORY */}
          <div className="space-y-10">
            
            {/* Intro Block */}
            <div className="prose prose-lg text-secondary/80">
              <h3 className="text-2xl font-bold text-secondary flex items-center gap-2">
                <Cpu className="text-primary" /> Công nghệ & Cá nhân hóa
              </h3>
              <p className="text-justify text-base">
                Chúng tôi áp dụng tư vấn online và sử dụng công nghệ để mang lại trải nghiệm cá nhân hóa tốt nhất. Bên cạnh giao hàng tận nơi và miễn phí, HBW tin rằng sự kết hợp giữa <strong className="text-secondary">Con người và Công nghệ</strong> sẽ giúp quý phụ huynh và học sinh chọn được sản phẩm ưng ý nhất.
              </p>
            </div>

            {/* OEM & Quality Block */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-secondary flex items-center gap-2 mb-3">
                <Factory className="text-primary" /> Kiểm soát chất lượng (OEM)
              </h3>
              <p className="text-sm text-gray-600 text-justify mb-4">
                Chúng tôi áp dụng công nghệ giám sát chặt chẽ quy trình sản xuất tại các đơn vị gia công (OEM) của HBW tại:
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-bold text-secondary">Trung Quốc</span>
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-bold text-secondary">Đài Loan</span>
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-bold text-secondary">Bình Dương (VN)</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-green-700 font-medium bg-green-50 p-3 rounded-lg">
                 <ShieldCheck className="w-5 h-5 flex-shrink-0" />
                 <span>Đảm bảo an toàn và chất lượng phù hợp nhất cho phân khúc học sinh.</span>
              </div>
            </div>

            {/* Brand Statement */}
            <blockquote className="border-l-4 border-primary pl-4 italic text-gray-500">
              "Thương hiệu xe đạp của thanh xuân HBW là định nghĩa cho tiêu chuẩn chất lượng phù hợp nhất. Chúng tôi chịu trách nhiệm trước Khách hàng về điều này."
            </blockquote>

            {/* Contact Details */}
            <div className="space-y-6 pt-4 border-t border-gray-100">
              <h3 className="text-xl font-bold text-secondary uppercase tracking-wide">Thông tin kết nối</h3>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Hotline</p>
                  <a href="tel:0939585748" className="text-xl font-bold text-secondary hover:text-primary transition-colors">
                    0939 58 57 48
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a href="mailto:info@hbw.com.vn" className="text-lg font-bold text-secondary hover:text-primary transition-colors">
                    info@hbw.com.vn
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Bảo hành & CSKH</p>
                  <a 
                    href="https://zalo.me/4161110732021895940" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-lg font-bold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    Zalo HBW Official Account
                  </a>
                </div>
              </div>

              <div className="flex gap-4 pt-2">
                 <a href="https://www.facebook.com/hbw.goodlife" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all">
                    <Facebook size={20} />
                 </a>
                 <a href="https://www.instagram.com/hbw.official/" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all">
                    <Instagram size={20} />
                 </a>
                 <a href="https://www.youtube.com/@xedapHBW" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all">
                    <Youtube size={20} />
                 </a>
              </div>
            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100 h-fit sticky top-24">
            <h3 className="text-2xl font-bold text-secondary mb-2">Gửi yêu cầu / Tư vấn</h3>
            <p className="text-gray-500 mb-8 text-sm">
              Để lại thông tin để nhận kiến thức xe đạp, nhắc nhở bảo hành, quà tặng hoặc yêu cầu tư vấn dòng xe phù hợp.
            </p>

            {formStatus === "success" ? (
               <div className="flex flex-col items-center justify-center py-10 text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                     <CheckCircle size={40} />
                  </div>
                  <h4 className="text-2xl font-bold text-secondary">Đã gửi thành công!</h4>
                  <p className="text-gray-500 mt-2">Cảm ơn bạn đã liên hệ. HBW sẽ phản hồi sớm nhất.</p>
                  <button 
                    onClick={() => setFormStatus("idle")}
                    className="mt-6 text-primary font-bold hover:underline"
                  >
                    Gửi yêu cầu khác
                  </button>
               </div>
            ) : formStatus === "error" ? (
               <div className="flex flex-col items-center justify-center py-10 text-center">
                  <div className="w-20 h-20 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4">
                     <span className="text-3xl font-bold">!</span>
                  </div>
                  <h4 className="text-xl font-bold text-red-600">Lỗi kết nối</h4>
                  <p className="text-gray-500 mt-2">Vui lòng kiểm tra đường truyền và thử lại.</p>
                  <button 
                    onClick={() => setFormStatus("idle")}
                    className="mt-6 px-6 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200"
                  >
                    Thử lại
                  </button>
               </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-sm font-bold text-secondary mb-1">Họ và tên *</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Nguyễn Văn A" 
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    />
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-sm font-bold text-secondary mb-1">Số điện thoại *</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="09xx xxx xxx" 
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-secondary mb-1">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="email@example.com" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-secondary mb-1">Nhu cầu của bạn</label>
                  <select 
                    name="demand"
                    value={formData.demand}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none cursor-pointer"
                  >
                    <option>Tư vấn mua xe đạp</option>
                    <option>Đăng ký nhận kiến thức & Quà tặng</option>
                    <option>Hỗ trợ bảo hành / Kỹ thuật</option>
                    <option>Hợp tác / Khác</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-secondary mb-1">Lời nhắn</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4} 
                    placeholder="Hãy mô tả chi tiết yêu cầu của bạn..." 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={formStatus === "submitting"}
                  className="w-full py-4 bg-primary text-secondary font-bold rounded-lg hover:bg-black hover:text-white transition-all duration-300 shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formStatus === "submitting" ? (
                    <>
                      <Loader2 className="animate-spin" size={18} /> Đang gửi...
                    </>
                  ) : (
                    <>Gửi thông tin <Send size={18} /></>
                  )}
                </button>
                
                <p className="text-xs text-center text-gray-400 mt-4">
                  * Thông tin của bạn được bảo mật tuyệt đối theo chính sách của HBW.
                </p>
              </form>
            )}
          </div>

        </div>
      </section>
    </main>
  );
}