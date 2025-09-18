import React from 'react'

const Footer = () => {
 
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl  mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* Về chúng tôi */}
        <div>
          <h2 className="text-white font-bold text-xl mb-4">Về chúng tôi</h2>
          <p className="text-sm tracking-wider leading-loose">
            Van Dai thì không còn gì để bàn cãi rồi 😎. 
            Code lỏ nhưng luôn mang lại trải nghiệm tốt nhất cho người dùng.
            Hãy cùng nhau trải nghệm trên thc tế để tôi có ộng lực phtá tri web.
          </p>
        </div>
        <div>
          <h2 className="text-white font-bold text-xl mb-4 tracking-wider leading-loose">Liên hệ</h2>
          <ul className="space-y-2 text-sm tracking-wider leading-loose">
            <li>📞 0968 791 306</li>
            <li>📧 daicvph50503@gmail.com</li>
            <li>📍 Nam Từ Liêm, Hà Nội</li>
          </ul>
        </div>
        <div>
          <h2 className="text-white font-bold text-xl mb-4">Thanh toán</h2>
          <div className="flex flex-wrap">
            <img src="/images/iconft1.png" alt="Visa" className="h-8" />
            <img src="/images/iconft1.png" alt="Mastercard" className="h-8" />
            <img src="/images/iconft1.png" alt="MoMo" className="h-8" />
            <img src="/images/iconft1.png" alt="Visa" className="h-8" />
            <img src="/images/iconft1.png" alt="Mastercard" className="h-8" />
            <img src="/images/iconft1.png" alt="MoMo" className="h-8" />
            <img src="/images/iconft1.png" alt="Visa" className="h-8" />
            <img src="/images/iconft1.png" alt="Mastercard" className="h-8" />
            <img src="/images/iconft1.png" alt="MoMo" className="h-8" />
          </div>
        </div>
        <div>
          <h2 className="text-white font-bold text-xl mb-4">Theo dõi chúng tôi</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500">Facebook</a>
            <a href="#" className="hover:text-pink-400">Instagram</a>
            <a href="#" className="hover:text-sky-400">Twitter</a>
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-4">
        © 2025 Van Dai Dev. All rights reserved.
      </div>
    </footer>
  );
}


export default Footer