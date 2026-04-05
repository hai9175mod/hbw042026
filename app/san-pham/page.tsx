"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  CheckCircle2, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Star, 
  ChevronRight,
  Loader2,
  MapPin,
  Phone,
  User,
  FileText,
  Send,
  MessageCircle,
  Minus,
  Plus
} from "lucide-react";

// --- CẤU HÌNH TELEGRAM ---
const TELEGRAM_TOKEN = "7436403261:AAHllXD5w10wydoVBionB_k3lM-l2L1u1cI";
const TELEGRAM_CHAT_ID = "-1002286714478";

// --- DỮ LIỆU & CẤU HÌNH ---

const technicalSpecs = [
  { label: "Khung sườn", value: "Nhôm 6061 cao cấp, sơn tĩnh điện, dây đi âm sườn" },
  { label: "Kích thước bánh", value: "26 inch (Phù hợp chiều cao 1m52 – 1m78)" },
  { label: "Trọng lượng", value: "Khoảng 15kg (Chịu tải 130 – 150kg)" },
  { label: "Bộ truyền động", value: "Shimano Tourney (Real) - 21 tốc độ" },
  { label: "Phuộc", value: "Phuộc nhún dầu giảm chấn, khóa hành trình 100mm" },
  { label: "Phanh", value: "Phanh đĩa cơ an toàn" },
  { label: "Vành", value: "Hợp kim nhôm 2 lớp" },
  { label: "Ghi đông / Pô tăng", value: "Hợp kim nhôm đúc 3D (90mm)" },
  { label: "Cọc yên", value: "Nhôm đúc, tăng giảm linh hoạt" },
];

const productData = {
  name: "Xe Đạp Địa Hình SERIMA MTB U500",
  sku: "HBW-U500-26",
  shortDesc: "Cấu hình số 1 phân khúc dưới 5 triệu. Khung nhôm 6061 siêu nhẹ, bộ truyền động Shimano Nhật Bản 21 tốc độ, phuộc dầu êm ái. Lựa chọn hoàn hảo cho học sinh và gia đình.",
  
  variants: [
    { 
      id: "den", 
      name: "Màu Đen", 
      hex: "#1a1a1a", 
      price: 4500000, 
      originalPrice: 5700000,
      image: "/product/serima/xe-dap-serima-mau-den.webp" 
    },
    { 
      id: "do", 
      name: "Màu Đỏ", 
      hex: "#ef4444", 
      price: 4800000, 
      originalPrice: 5700000, 
      image: "/product/serima/xe-dap-serima-mau-do.webp"
    },
  ],

  defaultGallery: [
    "/product/serima/xe-dap-serima-2.webp",
    "/product/serima/xe-dap-serima-3.webp",
    "/product/serima/xe-dap-serima-4.webp",
  ],

  descImages: [
    "/product/serima/xe-dap-serima-cho-hoc-sinh.webp",
    "/product/serima/nha-may-serima-tai-dai-loan.webp",
    "/product/serima/serima-thuong-hieu-noi-bat-o-nuoc-ngoai.webp"
  ],

  customerGallery: Array.from({ length: 11 }, (_, i) => `/product/serima/khach-hang-serima-${i + 1}.webp`)
};

// --- COMPONENT CHÍNH ---

export default function ProductPage() {
  const [selectedVariantId, setSelectedVariantId] = useState("den");
  const [quantity, setQuantity] = useState(1);
  
  const initialVariant = productData.variants.find(v => v.id === "den") || productData.variants[0];
  const [mainImage, setMainImage] = useState(initialVariant.image);
  const [currentPrice, setCurrentPrice] = useState(initialVariant.price);
  const [currentOriginalPrice, setCurrentOriginalPrice] = useState(initialVariant.originalPrice);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    note: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const selectedVariant = productData.variants.find(v => v.id === selectedVariantId) || productData.variants[0];

  useEffect(() => {
    setCurrentPrice(selectedVariant.price);
    setCurrentOriginalPrice(selectedVariant.originalPrice);
    setMainImage(selectedVariant.image);
  }, [selectedVariantId, selectedVariant]);

  const handleQuantityChange = (type: "increase" | "decrease") => {
    if (type === "decrease" && quantity > 1) setQuantity(quantity - 1);
    if (type === "increase") setQuantity(quantity + 1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendToTelegram = async () => {
    const total = currentPrice * quantity;
    const message = `
🚀 *ĐƠN HÀNG MỚI (WEB FORM)*
----------------
👤 *Khách:* ${formData.name || "Không nhập tên"}
📞 *SĐT:* \`${formData.phone}\`
📍 *Đ/C:* ${formData.address}
📝 *Note:* ${formData.note || "Không"}
----------------
🚲 *Xe:* ${productData.name}
🎨 *Màu:* ${selectedVariant.name}
🔢 *SL:* ${quantity} chiếc
💰 *Tổng:* ${total.toLocaleString()}đ
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
        setSubmitStatus("success");
        setFormData({ name: "", phone: "", address: "", note: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Lỗi gửi Telegram:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone || !formData.address) return;
    setIsSubmitting(true);
    sendToTelegram();
  };

  // --- SEO SCHEMA (JSON-LD) ---
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": productData.name,
    "image": [
      `https://hbw.com.vn${productData.variants[0].image}`,
      `https://hbw.com.vn${productData.variants[1].image}`
    ],
    "description": "Xe đạp địa hình SERIMA MTB U500 khung nhôm cao cấp, bộ truyền động Shimano Nhật Bản.",
    "sku": productData.sku,
    "brand": {
      "@type": "Brand",
      "name": "Serima"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://hbw.com.vn/san-pham",
      "priceCurrency": "VND",
      "price": currentPrice,
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "25"
    }
  };

  return (
    <main className="min-h-screen bg-white pb-20">
      
      {/* Inject Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* BREADCRUMB */}
      <div className="bg-gray-50 py-4 border-b border-gray-100">
        <div className="container mx-auto px-4 text-sm text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-primary transition-colors">Trang chủ</Link> 
          <ChevronRight size={14} />
          <Link href="/san-pham" className="hover:text-primary transition-colors">Sản phẩm</Link>
          <ChevronRight size={14} />
          <span className="text-secondary font-bold truncate">{productData.name}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* CỘT TRÁI: ẢNH SẢN PHẨM */}
          {/* SEO & UX: Chỉ sticky trên màn hình lớn (lg), mobile sẽ cuộn bình thường để không che form */}
          <div className="space-y-4 lg:sticky lg:top-24 self-start">
            <div className="aspect-[4/3] bg-white rounded-2xl flex items-center justify-center relative overflow-hidden group border border-gray-100 shadow-sm">
              <div className="absolute inset-0 bg-gray-50/50"></div>
              <div className="relative z-10 w-full h-full">
                 <Image 
                   src={mainImage}
                   alt={`${productData.name} - ${selectedVariant.name}`}
                   fill
                   className="object-contain p-4 hover:scale-105 transition-transform duration-500"
                   priority
                 />
              </div>
              <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full z-20 shadow-md">
                GIẢM {(100 - (currentPrice / currentOriginalPrice) * 100).toFixed(0)}%
              </span>
            </div>

            <div className="grid grid-cols-4 gap-3">
              <button 
                onClick={() => setMainImage(selectedVariant.image)}
                className={`aspect-square bg-gray-50 rounded-xl border overflow-hidden relative ${mainImage === selectedVariant.image ? 'border-primary ring-1 ring-primary' : 'border-gray-200 hover:border-primary/50'}`}
              >
                <Image src={selectedVariant.image} alt={selectedVariant.name} fill className="object-cover p-1" />
              </button>
              
              {productData.defaultGallery.map((img, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setMainImage(img)}
                  className={`aspect-square bg-gray-50 rounded-xl border overflow-hidden relative ${mainImage === img ? 'border-primary ring-1 ring-primary' : 'border-gray-200 hover:border-primary/50'}`}
                >
                  <Image src={img} alt={`Chi tiết ${idx + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* CỘT PHẢI: INFO & ACTION */}
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-secondary uppercase mb-3 leading-tight">
              {productData.name}
            </h1>
            
            <div className="flex items-center gap-4 mb-6 text-sm flex-wrap">
               <div className="flex text-yellow-400">
                  {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="currentColor" />)}
               </div>
               <span className="text-gray-500 font-medium">(4.9/5 từ 25 đánh giá)</span>
               <span className="text-gray-300">|</span>
               <span className="text-gray-500">SKU: <span className="font-mono font-bold text-gray-700">{productData.sku}</span></span>
            </div>

            <div className="flex items-end gap-3 mb-6 bg-gray-50 p-5 rounded-2xl w-fit border border-gray-100">
              <span className="text-4xl font-black text-red-600">
                {currentPrice.toLocaleString('vi-VN')}₫
              </span>
              <span className="text-lg text-gray-400 line-through mb-1 font-medium">
                {currentOriginalPrice.toLocaleString('vi-VN')}₫
              </span>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6 border-l-4 border-primary pl-4 py-1 text-justify">
              {productData.shortDesc}
            </p>

            {/* CHỌN MÀU */}
            <div className="mb-6">
              <label className="text-sm font-bold text-secondary uppercase mb-3 block">
                Màu sắc: <span className="text-primary">{selectedVariant.name}</span>
              </label>
              <div className="flex gap-3">
                {productData.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariantId(variant.id)}
                    className={`group relative w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${
                      selectedVariantId === variant.id 
                        ? "border-primary ring-2 ring-primary/30 scale-110" 
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    style={{ backgroundColor: variant.hex }}
                    title={variant.name}
                  >
                    {selectedVariantId === variant.id && (
                      <CheckCircle2 className={`w-6 h-6 drop-shadow-md ${variant.id === 'trang-ghi' ? 'text-black' : 'text-white'}`} />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* --- KHU VỰC 1: NÚT CHAT ZALO (TƯ VẤN) --- */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
               <div className="flex items-center border-2 border-gray-200 rounded-xl w-fit bg-white h-[52px]">
                  <button 
                    onClick={() => handleQuantityChange("decrease")}
                    className="px-3 h-full hover:text-primary transition-colors text-gray-500"
                  >
                    <Minus size={20} />
                  </button>
                  <span className="w-10 text-center font-bold text-secondary text-lg">{quantity}</span>
                  <button 
                    onClick={() => handleQuantityChange("increase")}
                    className="px-3 h-full hover:text-primary transition-colors text-gray-500"
                  >
                    <Plus size={20} />
                  </button>
               </div>
               
               <a 
                 href="https://zalo.me/4161110732021895940"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex-1 h-[52px] bg-[#0068FF] text-white font-bold rounded-xl hover:bg-[#0054cc] transition-all shadow-md flex items-center justify-center gap-2 uppercase tracking-wide group"
               >
                 <MessageCircle size={24} className="group-hover:animate-bounce" />
                 <span>Chat Zalo tư vấn</span>
               </a>
            </div>

            {/* --- KHU VỰC 2: FORM ĐẶT HÀNG NHANH --- */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center mb-6">
                <span className="bg-white px-3 text-sm text-gray-500 font-bold uppercase tracking-wider">Hoặc điền form đặt hàng</span>
              </div>
            </div>

            <div className="bg-white border-2 border-primary/20 rounded-2xl p-6 shadow-lg mb-8">
              <h3 className="text-lg font-bold text-secondary uppercase mb-4 flex items-center gap-2">
                 <FileText className="text-primary" /> Thông tin nhận hàng
              </h3>

              {submitStatus === "success" ? (
                <div className="bg-green-50 text-green-700 p-6 rounded-xl text-center">
                   <CheckCircle2 className="w-12 h-12 mx-auto mb-3" />
                   <p className="font-bold text-lg">Đặt hàng thành công!</p>
                   <p className="text-sm mt-1">HBW sẽ liên hệ với bạn trong ít phút nữa.</p>
                   <button onClick={() => setSubmitStatus("idle")} className="mt-4 text-sm text-green-800 underline">Gửi đơn khác</button>
                </div>
              ) : submitStatus === "error" ? (
                <div className="bg-red-50 text-red-700 p-6 rounded-xl text-center">
                   <p className="font-bold">Lỗi kết nối!</p>
                   <button onClick={() => setSubmitStatus("idle")} className="mt-4 bg-red-100 px-4 py-2 rounded">Thử lại</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div>
                        <label className="text-xs font-bold text-gray-500 uppercase mb-1">Họ tên</label>
                        <div className="relative">
                           <User className="absolute top-3 left-3 text-gray-400 w-4 h-4" />
                           <input 
                             type="text" 
                             name="name"
                             value={formData.name}
                             onChange={handleInputChange}
                             placeholder="Nhập tên..."
                             className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                           />
                        </div>
                     </div>
                     <div>
                        <label className="text-xs font-bold text-gray-500 uppercase mb-1">Số điện thoại <span className="text-red-500">*</span></label>
                        <div className="relative">
                           <Phone className="absolute top-3 left-3 text-gray-400 w-4 h-4" />
                           <input 
                             type="tel" 
                             name="phone"
                             value={formData.phone}
                             onChange={handleInputChange}
                             required
                             placeholder="09xx..."
                             className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                           />
                        </div>
                     </div>
                  </div>

                  <div>
                     <label className="text-xs font-bold text-gray-500 uppercase mb-1">Địa chỉ <span className="text-red-500">*</span></label>
                     <div className="relative">
                        <MapPin className="absolute top-3 left-3 text-gray-400 w-4 h-4" />
                        <input 
                          type="text" 
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          required
                          placeholder="Số nhà, Phường/Xã, Quận/Huyện..."
                          className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                        />
                     </div>
                  </div>

                  <div>
                     <label className="text-xs font-bold text-gray-500 uppercase mb-1">Ghi chú</label>
                     <textarea 
                        name="note"
                        value={formData.note}
                        onChange={handleInputChange}
                        rows={2}
                        placeholder="Yêu cầu khác..."
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                     ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-3 bg-primary text-secondary font-bold rounded-lg hover:bg-white hover:text-primary border-2 border-primary transition-all uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg disabled:opacity-70"
                  >
                    {isSubmitting ? <Loader2 className="animate-spin" /> : <Send size={18} />}
                    {isSubmitting ? "Đang gửi..." : "GỬI ĐƠN NGAY"}
                  </button>
                </form>
              )}
            </div>

            {/* Chính sách ưu đãi */}
            <div className="grid grid-cols-1 gap-4 bg-blue-50/50 p-4 rounded-xl border border-blue-100">
               {[
                 { icon: Truck, text: "Miễn phí vận chuyển nội thành TP.HCM" },
                 { icon: ShieldCheck, text: "Bảo hành khung sườn 05 năm chính hãng" },
                 { icon: RotateCcw, text: "Đổi trả miễn phí trong 07 ngày nếu lỗi" },
               ].map((item, idx) => (
                 <div key={idx} className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                    <div className="p-2 bg-white rounded-full shadow-sm text-primary">
                      <item.icon size={18} />
                    </div>
                    <span>{item.text}</span>
                 </div>
               ))}
            </div>

          </div>
        </div>

        {/* PHẦN KỸ THUẬT & MÔ TẢ */}
        <div className="mt-24">
           <div className="flex flex-col lg:flex-row gap-12">
             <div className="lg:w-1/3">
                <div className="sticky top-24">
                  <h3 className="text-xl font-bold text-secondary mb-6 uppercase border-l-4 border-primary pl-3">
                    Thông số kỹ thuật
                  </h3>
                  <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                    <table className="w-full text-sm text-left">
                       <tbody>
                          {technicalSpecs.map((spec, index) => (
                             <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                                <td className="py-4 px-5 font-bold text-gray-700 w-2/5 bg-gray-50/50">{spec.label}</td>
                                <td className="py-4 px-5 text-gray-600">{spec.value}</td>
                             </tr>
                          ))}
                       </tbody>
                    </table>
                  </div>
                </div>
             </div>

             <div className="lg:w-2/3">
                <h3 className="text-xl font-bold text-secondary mb-6 uppercase border-l-4 border-primary pl-3">
                  Chi tiết sản phẩm
                </h3>
                <article className="prose prose-lg prose-slate max-w-none text-justify">
                   
                   {/* ĐOẠN 1: XUẤT XỨ (ĐẦY ĐỦ NỘI DUNG) */}
                   <h4 className="text-secondary font-bold">1. Xuất xứ xe đạp Serima</h4>
                   <p>
                     <strong>SERIMA</strong> là thương hiệu của Đài Loan, trực thuộc <strong>CÔNG TY TNHH PHÁT TRIỂN CÔNG NGHỆ SERIMA (TIANJIN)</strong>, được thành lập vào năm 1980 tại Đài Loan, Trung Quốc. Chủ yếu sản xuất và kinh doanh xe đạp leo núi, xe đạp đường trường, xe đạp trẻ em, xe đạp gấp & xe đạp thành phố. Đã có mặt tại 40 quốc gia trên thế giới, nhưng lại chưa phổ biến ở Việt Nam.
                   </p>
                   <p>
                     Trong đó dòng xe đạp địa hình (xe đạp leo núi) phổ biến là các dòng CLOUD (C200, C300…) và các dòng cao cấp URANUS (U500, U700, U880…). Đặc điểm nổi bật của hãng là sản xuất khung nhôm chất lượng, với gióng nghiêng (down-tube) to, bản rộng, dây đi âm vào khung sườn, trông cực kỳ chắc chắn. Và họ cũng hợp tác và là đối tác chiến lược của hãng Groupset Shimano Nhật Bản trong việc lắp đặt bộ truyền động trên xe đạp Serima.
                   </p>
                   <ul className="list-disc pl-5 space-y-1 mb-6">
                      <li><strong>Thương hiệu:</strong> SERIMA Đài loan – website: <a href="http://www.serimabikes.com" target="_blank" rel="nofollow">www.serimabikes.com</a></li>
                      <li><strong>Nhà máy sản xuất:</strong> Heibei</li>
                      <li><strong>Công nghệ bộ truyền động:</strong> Shimano của Nhật Bản</li>
                      <li><strong>Full nhôm toàn bộ:</strong> Khung sườn, vành xe, pô tăng… đảm bảo chiếc xe nhẹ nhất có thể.</li>
                      <li><strong>Quản lý và kiểm soát chất lượng:</strong> Serima Đài Loan & HBW</li>
                      <li><strong>Nhập khẩu nguyên chiếc vào Việt Nam:</strong> Độc quyền bởi HBW từ tháng 08/2023.</li>
                   </ul>

                   <figure className="my-8">
                     <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                       <Image src={productData.descImages[0]} alt="Xe đạp Serima cho học sinh" fill className="object-cover" />
                     </div>
                   </figure>

                   {/* ĐOẠN 2: CHIẾC XE NÀY PHÙ HỢP CHO AI */}
                   <h4 className="text-secondary font-bold mt-8">2. Chiếc xe đạp địa hình này phù hợp cho ai</h4>
                   <ul className="list-disc pl-5 space-y-2 mb-6">
                      <li>
                        <strong>Cho các em học sinh từ 14 – 18 tuổi:</strong> Tức là các em học sinh từ lớp 8 đến lớp 12. Các em hoàn toàn có thể sử dụng chiếc xe này để đi học, học thêm, đi ngoại khóa, học nhóm cùng các bạn, tập thể dục…
                      </li>
                      <li>
                        <strong>Cho các bậc phụ huynh:</strong> Muốn tập thể dục cùng con vào mỗi tối hoặc cuối tuần, hoặc để di chuyển các khoảng cách ngắn (&lt; 3km) sẽ vô cùng tiện lợi.
                      </li>
                      <li>
                        <strong>Chiều cao thích hợp:</strong> Từ 1m55 – 1m75 để sử dụng chiếc xe đạp Serima này.
                      </li>
                   </ul>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                      <div className="relative aspect-square rounded-xl overflow-hidden shadow-md">
                        <Image src={productData.descImages[1]} alt="Nhà máy Serima" fill className="object-cover" />
                      </div>
                      <div className="relative aspect-square rounded-xl overflow-hidden shadow-md">
                        <Image src={productData.descImages[2]} alt="Thương hiệu Serima quốc tế" fill className="object-cover" />
                      </div>
                   </div>

                   {/* ĐOẠN 3: LỜI KẾT */}
                   <p>
                     HBW xin giới thiệu đến Quý phụ huynh và các em học sinh dòng sản phẩm xe đạp Serima – một chiếc xe đạp địa hình tuyệt vời, thiết kế đặc biệt dành riêng cho sự trẻ trung và năng động. Hiện chúng tôi là nhà phân phối chính hãng và độc quyền dòng xe này tại Việt Nam.
                   </p>
                   <p>
                     Với bộ truyền động chất lượng vượt trội từ Nhật Bản, Serima là dòng xe đạp thể thao không chỉ là một phương tiện di chuyển mà còn là người bạn đồng hành tin cậy của các bạn trong những năm tháng thanh xuân đáng nhớ.
                   </p>

                </article>
             </div>
           </div>
        </div>

        <div className="mt-24 border-t border-gray-100 pt-12">
          <h2 className="text-2xl md:text-3xl font-black text-center text-secondary mb-10 uppercase">
             Khách hàng tin dùng Serima
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
             {productData.customerGallery.map((img, idx) => (
                <div key={idx} className="relative aspect-square rounded-lg overflow-hidden group">
                   <Image src={img} alt={`Khách hàng ${idx + 1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
             ))}
             <a href="https://zalo.me/4161110732021895940" target="_blank" className="relative aspect-square rounded-lg overflow-hidden bg-gray-100 flex flex-col items-center justify-center text-gray-500 hover:bg-gray-200 cursor-pointer">
                <span className="font-bold text-2xl">+99</span>
             </a>
          </div>
        </div>

      </div>
    </main>
  );
}