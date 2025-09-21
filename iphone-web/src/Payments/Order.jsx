import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Lấy danh sách đơn hàng từ localStorage
    const savedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    console.log("Orders from localStorage:", savedOrders);
    if (savedOrders.length > 0) {
      console.log("First order items:", savedOrders[0].items);
    }
    setOrders(savedOrders);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'confirmed': return 'bg-blue-100 text-blue-800';
      case 'shipped': return 'bg-purple-100 text-purple-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'pending': return '⏳ Chờ xác nhận';
      case 'confirmed': return '✅ Đã xác nhận';
      case 'shipped': return '🚚 Đang giao';
      case 'delivered': return '🎉 Đã giao';
      case 'cancelled': return '❌ Đã hủy';
      default: return '❓ Không xác định';
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            📋 Đơn hàng của tôi
          </h1>
          <button
            onClick={() => navigate('/')}
            className="bg-amber-400 hover:bg-amber-500 text-white font-bold py-2 px-4 rounded-lg transition"
          >
            🏠 Về trang chủ
          </button>
        </div>

        {/* Danh sách đơn hàng */}
        {orders.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="text-6xl mb-4">📦</div>
            <h2 className="text-2xl font-bold text-gray-600 mb-4">
              Chưa có đơn hàng nào
            </h2>
            <p className="text-gray-500 mb-6">
              Hãy mua sắm và tạo đơn hàng đầu tiên của bạn!
            </p>
            <button
              onClick={() => navigate('/')}
              className="bg-amber-400 hover:bg-amber-500 text-white font-bold py-3 px-6 rounded-xl transition"
            >
              🛍️ Mua sắm ngay
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div key={order.id} className="bg-white rounded-2xl shadow-lg p-6">
                {/* Header đơn hàng */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Đơn hàng #{order.id}
                    </h3>
                    <p className="text-gray-500">
                      {new Date(order.createdAt).toLocaleDateString('vi-VN')}
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(order.status)}`}>
                    {getStatusText(order.status)}
                  </span>
                </div>

                {/* Thông tin khách hàng */}
                <div className="bg-gray-50 rounded-xl p-4 mb-4">
                  <h4 className="font-semibold text-gray-700 mb-3">👤 Thông tin khách hàng:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500">👤</span>
                      <span><strong>Tên:</strong> {order.customerInfo.fullName}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500">📧</span>
                      <span><strong>Email:</strong> {order.customerInfo.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500">📱</span>
                      <span><strong>SĐT:</strong> {order.customerInfo.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500">📍</span>
                      <span><strong>Địa chỉ:</strong> {order.customerInfo.address}</span>
                    </div>
                  </div>
                </div>

                {/* Sản phẩm */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">🛍️ Sản phẩm đã đặt:</h4>
                  <div className="space-y-2">
                    {order.items.map((item, index) => (
                      <div key={`${order.id}-${item.id}-${index}`} className="flex items-center gap-3 bg-gray-50 border rounded-lg p-3">
                        <img
                          src={item.image || `https://picsum.photos/100/100?random=${item.id}`}
                          alt={item.name}
                          className="w-12 h-12 object-cover rounded"
                          onError={(e) => {
                            e.target.src = `https://picsum.photos/100/100?random=${item.id}`;
                          }}
                        />
                        <div className="flex-1">
                          <p className="font-medium text-gray-800">{item.name}</p>
                          <p className="text-sm text-gray-500">
                            Số lượng: {item.quantity || 1} × {item.caloriesPerServing}₫
                          </p>
                        </div>
                        <p className="font-semibold text-amber-600">
                          {((item.caloriesPerServing || 0) * (item.quantity || 1)).toLocaleString()}₫
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tổng tiền và thanh toán */}
                <div className="bg-amber-50 rounded-xl p-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="text-sm text-gray-500">💳 Phương thức thanh toán:</p>
                        <p className="font-semibold text-amber-600">{order.paymentMethod}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">📅 Ngày đặt:</p>
                        <p className="font-semibold text-gray-700">
                          {new Date(order.createdAt).toLocaleDateString('vi-VN', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">💰 Tổng cộng:</p>
                      <p className="text-2xl font-bold text-amber-600">
                        {order.total.toLocaleString()}₫
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Order;
