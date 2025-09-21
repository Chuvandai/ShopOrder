import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const orderId = location.state?.orderId;

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto max-w-2xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          {/* Icon thành công */}
          <div className="text-8xl mb-6">🎉</div>
          
          {/* Tiêu đề */}
          <h1 className="text-4xl font-bold text-green-600 mb-4">
            Đặt hàng thành công!
          </h1>
          
          {/* Thông tin đơn hàng */}
          {orderId && (
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
              <p className="text-green-700 font-semibold">
                Mã đơn hàng: <span className="text-green-800">#{orderId}</span>
              </p>
            </div>
          )}
          
          {/* Thông báo */}
          <div className="text-gray-600 mb-8 space-y-2">
            <p className="text-lg">
              Cảm ơn bạn đã đặt hàng! 🛍️
            </p>
            <p>
              Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất để xác nhận đơn hàng.
            </p>
            <p className="text-amber-600 font-semibold">
              💳 Thanh toán khi nhận hàng (COD)
            </p>
          </div>
          
          {/* Các nút hành động */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/order')}
              className="bg-amber-400 hover:bg-amber-500 text-white font-bold py-3 px-6 rounded-xl transition"
            >
              📋 Xem đơn hàng
            </button>
            <button
              onClick={() => navigate('/')}
              className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-3 px-6 rounded-xl transition"
            >
              🏠 Về trang chủ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
