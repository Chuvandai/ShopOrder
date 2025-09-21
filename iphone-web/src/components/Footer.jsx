import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
 
  return (
    <footer className="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-3xl">🍽️</div>
              <h2 className="text-2xl font-bold text-blue-300">Văn Đại Restaurant</h2>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Nhà hàng Văn Đại - Nơi hội tụ những món ăn ngon nhất, 
              được chế biến từ những nguyên liệu tươi ngon và công thức độc đáo. 
              Chúng tôi cam kết mang đến trải nghiệm ẩm thực tuyệt vời cho mọi thực khách.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-orange-300">
                <span className="text-xl">⭐</span>
                <span className="font-semibold text-blue-300">4.8/5</span>
                <span className="text-gray-400">(1,200+ đánh giá)</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-blue-300 mb-4">🍽️ Thực đơn</h3>
            <ul className="space-y-2">
              <li><NavLink to="/shop" className="text-gray-300 hover:text-orange-300 transition">Món chính</NavLink></li>
              <li><NavLink to="/shop" className="text-gray-300 hover:text-orange-300 transition">Món khai vị</NavLink></li>
              <li><NavLink to="/shop" className="text-gray-300 hover:text-orange-300 transition">Món nướng</NavLink></li>
              <li><NavLink to="/shop" className="text-gray-300 hover:text-orange-300 transition">Món chay</NavLink></li>
              <li><NavLink to="/shop" className="text-gray-300 hover:text-orange-300 transition">Đồ uống</NavLink></li>
              <li><NavLink to="/shop" className="text-gray-300 hover:text-orange-300 transition">Tráng miệng</NavLink></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-blue-300 mb-4">📞 Liên hệ</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-blue-400">📞</span>
                <span className="text-gray-300">0968 791 306</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-400">📧</span>
                <span className="text-gray-300">dachuvan05@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-400">📍</span>
                <span className="text-gray-300">Nam Từ Liêm, Hà Nội</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-400">🕒</span>
                <span className="text-gray-300">8:00 - 22:00 (Hàng ngày)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <h3 className="text-lg font-bold text-blue-300 mb-4">💳 Phương thức thanh toán</h3>
          <div className="flex flex-wrap gap-4 items-center">
            <div className="bg-white rounded-lg p-2">
              <span className="text-blue-600 font-bold text-sm">💳 Visa</span>
            </div>
            <div className="bg-white rounded-lg p-2">
              <span className="text-red-600 font-bold text-sm">💳 Mastercard</span>
            </div>
            <div className="bg-white rounded-lg p-2">
              <span className="text-green-600 font-bold text-sm">💰 MoMo</span>
            </div>
            <div className="bg-white rounded-lg p-2">
              <span className="text-blue-500 font-bold text-sm">📱 ZaloPay</span>
            </div>
            <div className="bg-white rounded-lg p-2">
              <span className="text-orange-500 font-bold text-sm">🏦 Banking</span>
            </div>
            <div className="bg-white rounded-lg p-2">
              <span className="text-gray-600 font-bold text-sm">💵 COD</span>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <h3 className="text-lg font-bold text-blue-300 mb-4">📱 Theo dõi chúng tôi</h3>
          <div className="flex gap-4">
            <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition flex items-center gap-2">
              <span>📘</span>
              <span>Facebook</span>
            </a>
            <a href="#" className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg transition flex items-center gap-2">
              <span>📷</span>
              <span>Instagram</span>
            </a>
            <a href="#" className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg transition flex items-center gap-2">
              <span>🐦</span>
              <span>Twitter</span>
            </a>
            <a href="#" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition flex items-center gap-2">
              <span>📺</span>
              <span>YouTube</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 border-t border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 Văn Đại Restaurant. Tất cả quyền được bảo lưu.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-300 transition">Chính sách bảo mật</a>
              <a href="#" className="text-gray-400 hover:text-blue-300 transition">Điều khoản sử dụng</a>
              <a href="#" className="text-gray-400 hover:text-blue-300 transition">Liên hệ</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


export default Footer