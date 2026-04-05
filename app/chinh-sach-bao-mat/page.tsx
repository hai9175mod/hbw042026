import Link from "next/link";
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  Database, 
  Cookie, 
  FileText, 
  Mail, 
  Phone 
} from "lucide-react";

export const metadata = {
  title: "Chính sách Bảo mật & Điều khoản | HBW",
  description: "Cam kết bảo mật thông tin khách hàng và quy định sử dụng website hbw.com.vn.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-700">
      
      {/* 1. HERO HEADER */}
      <section className="bg-gray-50 py-16 border-b border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-sm mb-6">
            <ShieldCheck className="text-primary w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-secondary mb-4 uppercase">
            Chính sách Bảo mật
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            HBW cam kết bảo vệ sự riêng tư và phát triển những công nghệ mang lại cho bạn trải nghiệm trực tuyến mạnh mẽ và an toàn nhất.
          </p>
          <p className="text-sm text-gray-400 mt-4">
            Cập nhật lần cuối: {new Date().toLocaleDateString('vi-VN')}
          </p>
        </div>
      </section>

      {/* 2. MAIN CONTENT */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <div className="prose prose-lg prose-slate max-w-none text-justify">
            <p className="lead font-medium text-secondary text-xl mb-8">
              Chính sách bảo mật này giải thích cách thức <strong>HBW - Xe đạp của thanh xuân</strong> ("chúng tôi") thu thập, sử dụng và chia sẻ thông tin cá nhân của bạn khi bạn truy cập hoặc mua hàng tại <strong>hbw.com.vn</strong>.
            </p>

            {/* Mục 1 */}
            <div className="mb-12">
              <h2 className="flex items-center gap-3 text-2xl font-bold text-secondary mb-4 border-b pb-2 border-gray-200">
                <Database className="text-primary" /> 1. Thu thập thông tin cá nhân
              </h2>
              <p>Khi bạn truy cập Website, chúng tôi tự động thu thập một số thông tin về thiết bị của bạn, bao gồm thông tin về trình duyệt web, địa chỉ IP, múi giờ và một số cookie được cài đặt trên thiết bị của bạn.</p>
              <p>Ngoài ra, khi bạn thực hiện mua hàng hoặc cố gắng mua hàng thông qua trang web, hoặc điền form liên hệ, chúng tôi thu thập một số thông tin từ bạn, bao gồm:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4 bg-gray-50 p-6 rounded-xl border border-gray-100">
                <li><strong>Họ và tên:</strong> Để xác định danh tính khách hàng.</li>
                <li><strong>Địa chỉ giao hàng:</strong> Để đơn vị vận chuyển giao xe đến đúng nơi.</li>
                <li><strong>Số điện thoại:</strong> Để liên hệ xác nhận đơn hàng và bảo hành.</li>
                <li><strong>Địa chỉ Email:</strong> Để gửi thông báo đơn hàng và thông tin khuyến mãi (nếu có).</li>
                <li><strong>Ghi chú đơn hàng:</strong> Các yêu cầu đặc biệt về lắp đặt, thời gian giao hàng.</li>
              </ul>
            </div>

            {/* Mục 2 */}
            <div className="mb-12">
              <h2 className="flex items-center gap-3 text-2xl font-bold text-secondary mb-4 border-b pb-2 border-gray-200">
                <Eye className="text-primary" /> 2. Phạm vi sử dụng thông tin
              </h2>
              <p>Chúng tôi sử dụng Thông tin đặt hàng mà chúng tôi thu thập nói chung để thực hiện bất kỳ đơn đặt hàng nào được đặt qua Trang web (bao gồm xử lý thông tin thanh toán của bạn, sắp xếp vận chuyển và cung cấp cho bạn hóa đơn và/hoặc xác nhận đơn hàng).</p>
              <p>Ngoài ra, chúng tôi sử dụng Thông tin này để:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Giao tiếp với bạn qua Zalo, Điện thoại hoặc Email.</li>
                <li>Sàng lọc các đơn đặt hàng của chúng tôi để tìm rủi ro hoặc gian lận tiềm ẩn.</li>
                <li>Cung cấp cho bạn thông tin hoặc quảng cáo liên quan đến sản phẩm hoặc dịch vụ của chúng tôi (khi phù hợp với sở thích mà bạn đã chia sẻ với chúng tôi).</li>
              </ul>
            </div>

            {/* Mục 3 */}
            <div className="mb-12">
              <h2 className="flex items-center gap-3 text-2xl font-bold text-secondary mb-4 border-b pb-2 border-gray-200">
                <Lock className="text-primary" /> 3. Chia sẻ & Bảo mật thông tin
              </h2>
              <p>
                Chúng tôi <strong>TUYỆT ĐỐI KHÔNG</strong> bán, trao đổi, hoặc chuyển giao thông tin cá nhân của bạn cho bên thứ ba vì mục đích thương mại.
              </p>
              <p>Chúng tôi chỉ chia sẻ Thông tin cá nhân của bạn với các bên thứ ba để giúp chúng tôi sử dụng Thông tin cá nhân của bạn, như được mô tả ở trên. Ví dụ:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Chúng tôi sử dụng <strong>Google Analytics</strong> để giúp chúng tôi hiểu cách khách hàng sử dụng Trang web.</li>
                <li>Chúng tôi chia sẻ thông tin giao nhận (Tên, SĐT, Địa chỉ) cho <strong>Đơn vị vận chuyển</strong> (Viettel Post, Giao Hàng Tiết Kiệm...) để thực hiện giao hàng.</li>
              </ul>
              <div className="bg-blue-50 p-4 rounded-lg mt-4 text-sm text-blue-800 flex gap-3 items-start">
                 <ShieldCheck className="w-5 h-5 flex-shrink-0 mt-0.5" />
                 <div>
                   <strong>Cam kết bảo mật:</strong> Dữ liệu của bạn được lưu trữ trên hệ thống máy chủ an toàn, được bảo vệ bởi tường lửa và các biện pháp mã hóa SSL (Secure Socket Layer).
                 </div>
              </div>
            </div>

            {/* Mục 4 */}
            <div className="mb-12">
              <h2 className="flex items-center gap-3 text-2xl font-bold text-secondary mb-4 border-b pb-2 border-gray-200">
                <Cookie className="text-primary" /> 4. Chính sách Cookie
              </h2>
              <p>
                Cookie là các tệp dữ liệu nhỏ được đặt trên thiết bị hoặc máy tính của bạn và thường bao gồm một mã định danh duy nhất ẩn danh.
              </p>
              <p>HBW sử dụng cookie để:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Ghi nhớ trạng thái giỏ hàng hoặc các sản phẩm bạn đã xem.</li>
                <li>Hiểu và lưu các tùy chọn của bạn cho các lần truy cập sau.</li>
                <li>Theo dõi quảng cáo và tổng hợp dữ liệu về lưu lượng truy cập trang web.</li>
              </ul>
              <p className="mt-2 text-sm text-gray-500 italic">
                * Bạn có thể chọn tắt cookie thông qua cài đặt trình duyệt của mình, tuy nhiên điều này có thể ảnh hưởng đến trải nghiệm mua sắm trên website.
              </p>
            </div>

            {/* Mục 5 */}
            <div className="mb-12">
              <h2 className="flex items-center gap-3 text-2xl font-bold text-secondary mb-4 border-b pb-2 border-gray-200">
                <FileText className="text-primary" /> 5. Quyền lợi của bạn
              </h2>
              <p>Nếu bạn là cư dân Việt Nam, bạn có quyền truy cập vào thông tin cá nhân mà chúng tôi lưu giữ về bạn và yêu cầu sửa chữa, cập nhật hoặc xóa thông tin cá nhân của bạn.</p>
              <p>Nếu bạn muốn thực hiện quyền này, vui lòng liên hệ với chúng tôi qua thông tin bên dưới.</p>
            </div>

            {/* Liên hệ */}
            <div className="bg-secondary text-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold text-primary mb-4">Thông tin liên hệ</h3>
              <p className="mb-6 text-gray-300">
                Để biết thêm thông tin về các thực tiễn bảo mật của chúng tôi, nếu bạn có thắc mắc hoặc nếu bạn muốn khiếu nại, vui lòng liên hệ với chúng tôi:
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-primary">
                      <Mail size={20} />
                   </div>
                   <div>
                      <p className="text-xs text-gray-400 uppercase font-bold">Email</p>
                      <a href="mailto:info@hbw.com.vn" className="font-bold hover:text-primary transition-colors">info@hbw.com.vn</a>
                   </div>
                </div>
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-primary">
                      <Phone size={20} />
                   </div>
                   <div>
                      <p className="text-xs text-gray-400 uppercase font-bold">Hotline</p>
                      <a href="tel:0939585748" className="font-bold hover:text-primary transition-colors">0939 58 57 48</a>
                   </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}