import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../carts/CartContext";

const ProductDetailt = () => {
  const { addTocart } = useContext(CartContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [randomPrd, setRandomPrd] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate= useNavigate()
  // Lấy sản phẩm chi tiết
  useEffect(() => {
    if (!id) return;
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Product Detail API Response:", data); // Debug
        setProduct(data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  // Lấy 5 sản phẩm ngẫu nhiên để hiển thị
  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => {
        const shuffled = data.recipes.sort(() => 0.5 - Math.random());
        setRandomPrd(shuffled.slice(0, 5));
      })
  }, []);

  if (!product) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">Đang tải món ăn...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <button onClick={() => navigate('/')} className="text-orange-500 hover:text-orange-600">
              🏠 Trang chủ
            </button>
            <span className="text-gray-400">/</span>
            <button onClick={() => navigate('/shop')} className="text-orange-500 hover:text-orange-600">
              🍽️ Thực đơn
            </button>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Product Detail */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative">
              <img
                src={product.images ? product.images[0] : product.image || `https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop&auto=format&q=80`}
                alt={product.name}
                className="w-full h-96 lg:h-full object-cover"
                onError={(e) => {
                  console.log("Product Detail Image error:", product.name);
                  // Fallback to random food image
                  const fallbackImages = [
                    'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop&auto=format&q=80',
                    'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&h=400&fit=crop&auto=format&q=80',
                    'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&h=400&fit=crop&auto=format&q=80'
                  ];
                  e.target.src = fallbackImages[Math.floor(Math.random() * fallbackImages.length)];
                }}
              />
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <span className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
                  🔥 Hot
                </span>
                <span className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
                  ✨ Mới
                </span>
              </div>

              {/* Rating Badge */}
              <div className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-full px-3 py-2 shadow-lg">
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400">⭐</span>
                  <span className="font-bold text-gray-800">{product.rating || "4.5"}</span>
                </div>
              </div>
            </div>

            {/* Info Section */}
            <div className="p-8 lg:p-12">
              <div className="mb-6">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
                
                {/* Rating & Reviews */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < Math.floor(product.rating || 4.5) ? "text-yellow-400" : "text-gray-300"}>
                          ⭐
                        </span>
                      ))}
                    </div>
                    <span className="text-gray-600 font-semibold">({product.rating || "4.5"})</span>
                  </div>
                  <div className="text-gray-500">•</div>
                  <span className="text-gray-600">{product.reviewCount || "128"} đánh giá</span>
        </div>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-3xl font-bold text-orange-600">
                    {Math.floor(Math.random() * 100) + 50}₫
            </span>
                  <span className="text-gray-500 line-through ml-2">
                    {Math.floor(Math.random() * 50) + 100}₫
            </span>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">🍽️ Mô tả món ăn</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {product.instructions || "Món ăn ngon và bổ dưỡng, được chế biến từ những nguyên liệu tươi ngon nhất. Hương vị đậm đà, thơm ngon sẽ mang đến trải nghiệm ẩm thực tuyệt vời cho bạn."}
                  </p>
                </div>

                {/* Cooking Info */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-orange-50 rounded-xl p-4 text-center">
                    <div className="text-2xl mb-2">⏱️</div>
                    <div className="text-sm text-gray-600">Thời gian</div>
                    <div className="font-bold text-orange-600">{product.prepTimeMinutes || "30"} phút</div>
                  </div>
                  <div className="bg-green-50 rounded-xl p-4 text-center">
                    <div className="text-2xl mb-2">👥</div>
                    <div className="text-sm text-gray-600">Khẩu phần</div>
                    <div className="font-bold text-green-600">{product.servings || "4"} người</div>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-4 text-center">
                    <div className="text-2xl mb-2">📊</div>
                    <div className="text-sm text-gray-600">Độ khó</div>
                    <div className="font-bold text-blue-600">{product.difficulty || "Dễ"}</div>
                  </div>
                </div>

                {/* Stock Status */}
                <div className="mb-8">
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 text-xl">✅</span>
                    <span className="text-green-600 font-semibold">Còn hàng - Giao hàng trong 30-45 phút</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => {
                      addTocart(product);
                      setShowSuccess(true);
                      setTimeout(() => setShowSuccess(false), 3000);
                    }}
                    className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-xl transition duration-300 hover:scale-105 shadow-lg"
                  >
                    🛒 Thêm vào giỏ hàng
                  </button>
                  <button 
                    onClick={() => {
                      // Tạo giỏ hàng mới chỉ với sản phẩm này
                      const singleItemCart = [{ ...product, quantity: 1 }];
                      localStorage.setItem("cartItem", JSON.stringify(singleItemCart));
                      window.dispatchEvent(new CustomEvent('cartUpdated'));
                      navigate('/checkout');
                    }}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-xl transition duration-300 hover:scale-105 shadow-lg"
                  >
                    ⚡ Mua ngay
                  </button>
                </div>

                {/* Success Message */}
                {showSuccess && (
                  <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-bounce">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">✅</span>
                      <span className="font-semibold">Đã thêm vào giỏ hàng!</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-800">🍽️ Món ăn gợi ý</h2>
            <button 
              onClick={() => navigate('/shop')}
              className="text-orange-500 hover:text-orange-600 font-semibold"
            >
              Xem tất cả →
            </button>
          </div>
         
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {randomPrd.map((item) => (
            <div
              key={item.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => navigate(`/shop/${item.id}`)}
            >
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img
                    src={item.image || `https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop&auto=format&q=80`}
                    alt={item.name}
                    className="w-full h-32 object-cover"
                    onError={(e) => {
                      // Fallback to random food image
                      const fallbackImages = [
                        'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop&auto=format&q=80',
                        'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=300&h=200&fit=crop&auto=format&q=80',
                        'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop&auto=format&q=80'
                      ];
                      e.target.src = fallbackImages[Math.floor(Math.random() * fallbackImages.length)];
                    }}
                  />
                  <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    Hot
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-gray-800 text-sm line-clamp-2 mb-2">{item.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-orange-600 font-bold">{Math.floor(Math.random() * 100) + 50}₫</span>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400 text-sm">⭐</span>
                      <span className="text-gray-600 text-xs">4.5</span>
                    </div>
                  </div>
                </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailt;
