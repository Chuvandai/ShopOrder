import React, { useState, useRef, useEffect, useContext } from 'react';
import { CartContext } from '../carts/CartContext';

const AIChatbot = () => {
  const { cartItem, getTotal } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "👋 Xin chào! Tôi là AI Assistant của Văn Đại Restaurant. Tôi có thể giúp bạn chọn món ăn ngon và đặt tiệc! 🍽️",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // AI Response Logic - Thông minh cho nhà hàng với nhiều câu hỏi
  const getAIResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    // Chào hỏi
    if (message.includes('chào') || message.includes('hello') || message.includes('hi')) {
      return "👋 Xin chào! Rất vui được gặp bạn! Tôi là AI Assistant của Văn Đại Restaurant. Bạn muốn ăn gì ngon hôm nay? 🍽️";
    }
    
    // Hỏi về giỏ hàng
    if (message.includes('giỏ hàng') || message.includes('cart') || message.includes('đã chọn')) {
      if (cartItem.length === 0) {
        return "🛒 Giỏ hàng của bạn đang trống! Bạn có thể chọn món ăn ngon từ thực đơn của chúng tôi.";
      } else {
        return `🛒 Giỏ hàng của bạn có ${cartItem.length} món ăn với tổng tiền ${getTotal().toLocaleString()}₫. Bạn có muốn xem chi tiết không?`;
      }
    }
    
    // Hỏi về món ăn
    if (message.includes('món ăn') || message.includes('thực đơn') || message.includes('menu') || message.includes('ăn gì')) {
      return "🍽️ Chúng tôi có thực đơn phong phú:\n• Món khai vị: Gỏi cuốn, Nem nướng, Chả cá\n• Món chính: Phở, Bún bò, Cơm tấm\n• Món nướng: Thịt nướng, Hải sản nướng\n• Món tráng miệng: Chè, Kem, Bánh flan\n• Đồ uống: Nước mía, Trà đá, Nước ngọt";
    }
    
    // Hỏi về món ngon
    if (message.includes('ngon') || message.includes('đặc sản') || message.includes('nổi tiếng') || message.includes('bán chạy')) {
      return "⭐ Món ngon nhất của chúng tôi:\n• Phở bò tái - 89k\n• Bún bò Huế - 95k\n• Cơm tấm sườn nướng - 75k\n• Gỏi cuốn tôm thịt - 45k\n• Chả cá Lã Vọng - 120k\n• Nem nướng Nha Trang - 55k";
    }
    
    // Hỏi về giá
    if (message.includes('giá') || message.includes('bao nhiêu') || message.includes('tiền') || message.includes('phí')) {
      return "💰 Giá món ăn của chúng tôi:\n• Món khai vị: 35k - 65k\n• Món chính: 75k - 120k\n• Món nướng: 85k - 150k\n• Món tráng miệng: 25k - 45k\n• Đồ uống: 15k - 35k\n• Combo tiết kiệm: 150k - 250k";
    }
    
    // Hỏi về đặt tiệc
    if (message.includes('đặt tiệc') || message.includes('party') || message.includes('sinh nhật') || message.includes('hội nghị')) {
      return "🎉 Dịch vụ đặt tiệc của chúng tôi:\n• Tiệc sinh nhật: 200k/người\n• Tiệc công ty: 150k/người\n• Tiệc gia đình: 120k/người\n• Bao gồm: Món ăn, Đồ uống, Trang trí\n• Phục vụ tận nơi miễn phí\n• Đặt trước 2 ngày";
    }
    
    // Hỏi về đặt hàng
    if (message.includes('đặt hàng') || message.includes('order') || message.includes('mua') || message.includes('gọi món')) {
      return "🛒 Cách đặt món:\n1. Xem thực đơn tại trang Shop\n2. Chọn món ăn yêu thích\n3. Thêm vào giỏ hàng\n4. Vào trang Checkout\n5. Điền thông tin giao hàng\n6. Chọn thanh toán COD\n7. Xác nhận đơn hàng";
    }
    
    // Hỏi về giao hàng
    if (message.includes('giao hàng') || message.includes('ship') || message.includes('vận chuyển') || message.includes('mang về')) {
      return "🚚 Dịch vụ giao hàng:\n• Giao hàng tận nơi miễn phí\n• Bán kính 5km từ nhà hàng\n• Thời gian: 30-45 phút\n• Đơn tối thiểu: 100k\n• Hotline đặt hàng: 1900-xxxx\n• App đặt hàng: Văn Đại Food";
    }
    
    // Hỏi về thanh toán
    if (message.includes('thanh toán') || message.includes('cod') || message.includes('tiền') || message.includes('trả tiền')) {
      return "💳 Phương thức thanh toán:\n• COD - Thanh toán khi nhận hàng\n• Chuyển khoản ngân hàng\n• Ví điện tử (Momo, ZaloPay)\n• Thẻ ATM nội địa\n• Thẻ tín dụng (Visa, Mastercard)";
    }
    
    // Hỏi về chính sách
    if (message.includes('chính sách') || message.includes('bảo hành') || message.includes('đổi trả') || message.includes('hoàn tiền')) {
      return "📋 Chính sách của chúng tôi:\n• Đổi món trong 15 phút\n• Hoàn tiền nếu không hài lòng\n• Bảo đảm chất lượng món ăn\n• Hỗ trợ khách hàng 24/7\n• Giao hàng đúng giờ";
    }
    
    // Hỏi về liên hệ
    if (message.includes('liên hệ') || message.includes('hotline') || message.includes('số điện thoại') || message.includes('gọi')) {
      return "📞 Thông tin liên hệ:\n• Hotline: 1900-xxxx\n• Đặt bàn: 024-xxxx-xxxx\n• Email: info@vandairestaurant.com\n• Facebook: Văn Đại Restaurant\n• Zalo: Văn Đại Food\n• Thời gian: 6:00 - 22:00";
    }
    
    // Hỏi về địa chỉ
    if (message.includes('địa chỉ') || message.includes('ở đâu') || message.includes('đường') || message.includes('tìm')) {
      return "🏪 Địa chỉ nhà hàng:\n• Cơ sở 1: 123 Đường ABC, Quận XYZ, Hà Nội\n• Cơ sở 2: 456 Đường DEF, Quận UVW, Hà Nội\n• Giờ mở cửa: 6:00 - 22:00\n• Bãi đỗ xe miễn phí\n• Gần bến xe, ga tàu";
    }
    
    // Hỏi về món chay
    if (message.includes('chay') || message.includes('vegetarian') || message.includes('ăn chay')) {
      return "🥬 Món chay của chúng tôi:\n• Phở chay - 65k\n• Bún chay - 55k\n• Cơm chay - 45k\n• Gỏi cuốn chay - 35k\n• Chả chay - 40k\n• Canh chua chay - 35k\n• Tất cả món chay đều tươi ngon!";
    }
    
    // Hỏi về món cay
    if (message.includes('cay') || message.includes('spicy') || message.includes('ớt') || message.includes('nóng')) {
      return "🌶️ Món cay của chúng tôi:\n• Bún bò cay - 95k\n• Phở cay - 89k\n• Lẩu Thái cay - 180k\n• Gỏi cay - 45k\n• Cơm cay - 65k\n• Có thể điều chỉnh độ cay theo yêu cầu!";
    }
    
    // Hỏi về món hải sản
    if (message.includes('hải sản') || message.includes('seafood') || message.includes('tôm') || message.includes('cua') || message.includes('cá')) {
      return "🦐 Món hải sản tươi ngon:\n• Tôm nướng - 120k\n• Cua rang me - 180k\n• Cá nướng - 150k\n• Lẩu hải sản - 250k\n• Gỏi tôm - 65k\n• Chả cá - 95k\n• Tất cả hải sản tươi sống!";
    }
    
    // Hỏi về combo
    if (message.includes('combo') || message.includes('set') || message.includes('bộ') || message.includes('trọn gói')) {
      return "🍱 Combo tiết kiệm:\n• Combo 1 người: 150k\n  - Phở + Nước + Tráng miệng\n• Combo 2 người: 280k\n  - 2 món chính + 2 nước + Tráng miệng\n• Combo gia đình: 450k\n  - 4 món chính + 4 nước + Tráng miệng\n• Combo tiệc: 200k/người";
    }
    
    // Hỏi về trạng thái đơn hàng
    if (message.includes('trạng thái') || message.includes('status') || message.includes('đơn hàng của tôi') || message.includes('đã đặt')) {
      return "📋 Bạn có thể xem trạng thái đơn hàng tại trang 'Đơn hàng của tôi'. Tôi có thể giúp bạn kiểm tra thông tin đơn hàng và thời gian giao hàng.";
    }
    
    // Hỏi về AI
    if (message.includes('ai') || message.includes('bot') || message.includes('thông minh') || message.includes('assistant')) {
      return "🤖 Tôi là AI Assistant của Văn Đại Restaurant. Tôi có thể:\n• Tư vấn món ăn ngon\n• Kiểm tra giỏ hàng\n• Hướng dẫn đặt hàng\n• Trả lời về thực đơn\n• Hỗ trợ đặt tiệc\n• Tư vấn combo tiết kiệm";
    }
    
    // Hỏi về giờ mở cửa
    if (message.includes('giờ') || message.includes('mở cửa') || message.includes('đóng cửa') || message.includes('thời gian')) {
      return "🕐 Giờ hoạt động:\n• Thứ 2 - Chủ nhật: 6:00 - 22:00\n• Giao hàng: 6:00 - 21:30\n• Đặt tiệc: 8:00 - 20:00\n• Hotline: 24/7\n• App đặt hàng: 24/7";
    }
    
    // Hỏi về ưu đãi
    if (message.includes('ưu đãi') || message.includes('khuyến mãi') || message.includes('giảm giá') || message.includes('sale')) {
      return "🎁 Ưu đãi hiện tại:\n• Giảm 20% cho đơn đầu tiên\n• Tặng nước uống cho đơn >200k\n• Combo gia đình giảm 15%\n• Thẻ thành viên tích điểm\n• Sinh nhật tặng bánh kem\n• Đặt tiệc giảm 10%";
    }
    
    // Cảm ơn
    if (message.includes('cảm ơn') || message.includes('thanks') || message.includes('thank')) {
      return "😊 Không có gì! Tôi rất vui được giúp bạn chọn món ăn ngon. Chúc bạn ăn ngon miệng! 🍽️";
    }
    
    // Tạm biệt
    if (message.includes('tạm biệt') || message.includes('bye') || message.includes('goodbye')) {
      return "👋 Tạm biệt! Chúc bạn một ngày tốt lành và ăn ngon miệng! Hẹn gặp lại bạn! 🍽️";
    }
    
    // Hỏi về chủ nhà hàng
    if (message.includes('ai là chủ nhà hàng') || message.includes('chủ nhà hàng') || message.includes('văn đại')) {
      return "👨‍🍳 Văn Đại là chủ nhà hàng! Anh ấy là đầu bếp chính và người sáng lập Văn Đại Restaurant. Anh ấy có nhiều năm kinh nghiệm trong nghề ẩm thực và luôn tận tâm phục vụ khách hàng! 🍽️";
    }
    
    // Câu hỏi không hiểu
    return "🤔 Tôi chưa hiểu rõ câu hỏi của bạn. Bạn có thể hỏi về:\n• Thực đơn món ăn\n• Giá cả\n• Đặt hàng\n• Giao hàng\n• Đặt tiệc\n• Món chay/cay\n• Hải sản\n• Combo tiết kiệm\n• Ưu đãi\n• Liên hệ";

  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    // Simulate AI thinking với typing indicator
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        text: getAIResponse(inputText),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 800 + Math.random() * 1200); // Random delay để giống AI thật
  };

  // Quick actions - Các câu hỏi nhanh cho nhà hàng
  const quickActions = [
    "Món ăn ngon nhất",
    "Giá cả món ăn",
    "Cách đặt hàng",
    "Đặt tiệc sinh nhật",
    "Món chay",
    "Combo tiết kiệm",
    "Ưu đãi hiện tại",
    "Thông tin liên hệ",
    "Ai là chủ nhà hàng"
  ];

  const handleQuickAction = (action) => {
    setInputText(action);
    handleSendMessage();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-lg transition-all duration-300 ${
          isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
        } text-white flex items-center justify-center text-2xl`}
      >
        {isOpen ? '✕' : '🤖'}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-t-2xl">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                🤖
              </div>
              <div>
                <h3 className="font-bold">AI Assistant</h3>
                <p className="text-xs opacity-90">Đang hoạt động</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-2xl ${
                    message.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-blue-500 text-white'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString('vi-VN', {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
              </div>
            ))}
            
            {/* Quick Actions - Chỉ hiển thị khi có ít hơn 3 tin nhắn */}
            {messages.length < 3 && (
              <div className="space-y-2">
                <p className="text-xs text-gray-500 text-center">💡 Câu hỏi nhanh:</p>
                <div className="flex flex-wrap gap-2">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickAction(action)}
                      className="text-xs bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-1 rounded-full transition"
                    >
                      {action}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Nhập câu hỏi..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 text-white px-4 py-2 rounded-xl transition"
              >
                ➤
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatbot;
