import React, { useContext, useState } from "react";
import { CartContext } from "../carts/CartContext.jsx";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartItem, getTotal, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    
    // Kiểm tra form
    if (!formData.fullName || !formData.email || !formData.phone || !formData.address) {
      alert('Vui lòng điền đầy đủ thông tin!');
      return;
    }

    if (cartItem.length === 0) {
      alert('Giỏ hàng đang trống!');
      return;
    }

    // Tạo đơn hàng
    const order = {
      id: Date.now().toString(),
      customerInfo: formData,
      items: cartItem,
      total: getTotal(),
      status: 'pending',
      paymentMethod: 'COD',
      createdAt: new Date().toISOString()
    };

    // Lưu đơn hàng
    const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    existingOrders.push(order);
    localStorage.setItem('orders', JSON.stringify(existingOrders));

    // Clear giỏ hàng
    clearCart();

    // Chuyển đến trang thành công
    navigate('/success', { state: { orderId: order.id } });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Thông tin thanh toán
          </h2>
          <form  className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Họ và tên"
              className="border rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-400 outline-none"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="border rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-400 outline-none"
              required
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Số điện thoại"
              className="border rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-400 outline-none"
              required
            />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Địa chỉ giao hàng"
              className="border rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-400 outline-none md:col-span-2"
              required
            />

          {/* PHƯƠNG THỨC THANH TOÁN */}
          <h3 className="text-xl font-semibold text-gray-700 mt-10 mb-4">
            Phương thức thanh toán
          </h3>
          <div className="space-y-3">
            <label className="flex items-center gap-3 border-2 border-amber-400 bg-amber-50 rounded-xl p-4 cursor-pointer">
              <input type="radio" name="payment" value="COD" defaultChecked className="w-5 h-5 text-amber-400" />
              <span className="font-semibold">💳 Thanh toán khi nhận hàng (COD)</span>
            </label>
          </div>
          </form>
        </div>

        {/* TÓM TẮT ĐƠN HÀNG */}
        <div className="bg-white rounded-2xl shadow-lg p-8 h-fit">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Đơn hàng của bạn
          </h2>
          <div className="divide-y">
            {cartItem.length === 0 ? (
              <p className="text-gray-500 italic">Giỏ hàng trống</p>
            ) : (
              cartItem.map((item) => (
                <div key={item.id} className="flex justify-between py-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 object-cover rounded-lg"
                    />
                    <div>
                      <p className="font-medium text-gray-800">{item.name}</p>
                      <p className="text-sm text-gray-500">
                        SL: {item.quantity}
                      </p>
                    </div>
                  </div>
                  <p className="text-amber-600 font-semibold">
                    {(item.caloriesPerServing * item.quantity).toLocaleString()}₫
                  </p>
                </div>
              ))
            )}
          </div>

          {/* TỔNG TIỀN */}
          <div className="flex justify-between items-center mt-6 text-lg font-bold">
            <span>Tổng cộng:</span>
            <span className="text-amber-600">
              {getTotal().toLocaleString()}₫
            </span>
          </div>

          <button onClick={handleSubmitOrder}
            type="button"
            className="w-full mt-6 bg-amber-400 hover:bg-amber-500 text-white font-bold py-3 rounded-xl transition"
          >
            Đặt hàng ngay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
