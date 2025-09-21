import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../carts/CartContext";

const Shop = () => {
  const navigate = useNavigate();
  const { addTocart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [showSuccess, setShowSuccess] = useState(false);

  const categories = [
    "Tất cả",
    "Món chính",
    "Món khai vị", 
    "Món nướng",
    "Món chay",
    "Đồ uống",
    "Tráng miệng"
  ];

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((json) => {
        console.log("API Response:", json.recipes[0]); // Debug để xem cấu trúc data
        console.log("First recipe image:", json.recipes[0]?.image); // Debug ảnh từ API
        console.log("First recipe images array:", json.recipes[0]?.images); // Debug mảng ảnh
        console.log("All recipe keys:", Object.keys(json.recipes[0])); // Debug tất cả keys

        const recipes = json.recipes.slice(0, 20).map((item, index) => ({
          ...item,
          id: item.id,
          name: item.name,
          image: item.image, // Lấy trực tiếp từ API
          caloriesPerServing: Math.floor(Math.random() * 100) + 50, // Giá ngẫu nhiên 50-150k
          category: categories[Math.floor(Math.random() * (categories.length - 1)) + 1],
          rating: (Math.random() * 2 + 3).toFixed(1), // Rating 3-5
          reviewCount: Math.floor(Math.random() * 500) + 50,
          prepTime: item.prepTimeMinutes || Math.floor(Math.random() * 30) + 15,
          cookTime: item.cookTimeMinutes || Math.floor(Math.random() * 60) + 20,
          difficulty: item.difficulty || ["Dễ", "Trung bình", "Khó"][Math.floor(Math.random() * 3)],
          isHot: Math.random() > 0.7,
          isNew: Math.random() > 0.8
        }));
        console.log("Processed recipes:", recipes[0]); // Debug để xem ảnh đã được xử lý
        console.log("Recipes with images:", recipes.filter(r => r.image).length, "out of", recipes.length);
        setProducts(recipes);
        setFilteredProducts(recipes);
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
      });
  }, []);

  // Filter và search
  useEffect(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== "Tất cả") {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.caloriesPerServing - b.caloriesPerServing;
        case "price-high":
          return b.caloriesPerServing - a.caloriesPerServing;
        case "rating":
          return b.rating - a.rating;
        case "name":
        default:
          return a.name.localeCompare(b.name);
      }
    });

    setFilteredProducts(filtered);
  }, [products, selectedCategory, searchQuery, sortBy]);

  const handleAddToCart = (product) => {
    addTocart(product);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleBuyNow = (product) => {
    // Tạo giỏ hàng mới chỉ với sản phẩm này
    const singleItemCart = [{ ...product, quantity: 1 }];
    localStorage.setItem("cartItem", JSON.stringify(singleItemCart));
    
    // Trigger custom event để CartContext cập nhật
    window.dispatchEvent(new CustomEvent('cartUpdated'));
    
    navigate('/checkout');
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-orange-200 to-red-500 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            🍽️ Thực đơn món ăn
          </h1>
          <p className="text-lg text-orange-100 mb-6">
            Khám phá những món ăn ngon nhất
          </p>
          
          {/* Search Bar */}
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm món ăn yêu thích..."
                className="w-full px-4 py-3 text-base rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-orange-300 shadow-md"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-orange-500 text-xl">
                🔍
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filters */}
        <div className="bg-white rounded-xl shadow-md p-4 mb-6">
          <div className="flex flex-wrap gap-3 items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition ${
                    selectedCategory === category
                      ? "bg-orange-500 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-orange-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <span className="text-gray-600 text-sm">Sắp xếp:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
              >
                <option value="name">Tên A-Z</option>
                <option value="price-low">Giá thấp → cao</option>
                <option value="price-high">Giá cao → thấp</option>
                <option value="rating">Đánh giá cao</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4">
          <p className="text-gray-600 text-sm">
            Tìm thấy <span className="font-bold text-orange-600">{filteredProducts.length}</span> món ăn
            {selectedCategory !== "Tất cả" && ` trong danh mục "${selectedCategory}"`}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredProducts.map((item, index) => (
          <div
            key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group"
          >
              {/* Image */}
            <div className="relative overflow-hidden rounded-t-xl">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                onClick={() => navigate(`/shop/${item.id}`)}
                onLoad={() => {
                  console.log("Image loaded successfully:", item.name, item.image);
                }}
                onError={(e) => {
                  console.log("Image error for:", item.name, "Original src:", e.target.src);
                  // Hiển thị placeholder khi lỗi
                  e.target.style.display = 'none';
                  const placeholder = document.createElement('div');
                  placeholder.className = 'w-full h-40 bg-gray-200 flex items-center justify-center cursor-pointer';
                  placeholder.innerHTML = `
                    <div class="text-center text-gray-500">
                      <div class="text-3xl mb-1">🍽️</div>
                      <div class="text-xs">Không có ảnh</div>
                    </div>
                  `;
                  placeholder.onclick = () => navigate(`/shop/${item.id}`);
                  e.target.parentNode.appendChild(placeholder);
                }}
              />
                
                {/* Badges */}
                <div className="absolute top-2 left-2 flex flex-col gap-1">
                  {item.isHot && (
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      🔥
                    </span>
                  )}
                  {item.isNew && (
                    <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      ✨
                    </span>
                  )}
                </div>

                {/* Category Badge */}
                <div className="absolute top-2 right-2">
                  <span className="bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                    {item.category}
              </span>
            </div>

                {/* Quick Add Button */}
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="opacity-0 group-hover:opacity-100 bg-orange-500 hover:bg-orange-600 text-white font-bold py-1.5 px-4 rounded-full text-sm transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                  >
                    🛒 Thêm
                  </button>
                </div>
              </div>

              {/* Content */}
            <div className="p-3">
                <h3 className="text-base font-bold text-gray-800 mb-2 line-clamp-2">
                {item.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  <div className="flex text-yellow-400 text-sm">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < Math.floor(item.rating) ? "text-yellow-400" : "text-gray-300"}>
                        ⭐
                </span>
                    ))}
                  </div>
                  <span className="text-xs text-gray-600">({item.rating})</span>
                  <span className="text-xs text-gray-500">• {item.reviewCount}</span>
                </div>

                {/* Info */}
                <div className="flex justify-between text-xs text-gray-600 mb-3">
                  <span>⏱️ {item.prepTime} phút</span>
                  <span>📊 {item.difficulty}</span>
                </div>

                {/* Price */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-orange-600">
                      {item.caloriesPerServing.toLocaleString()}₫
                    </span>
                    <button
                      onClick={() => navigate(`/shop/${item.id}`)}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs font-medium transition"
                    >
                      👁️ Xem
                    </button>
                  </div>
                  
                  <div className="flex gap-1">
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="flex-1 bg-orange-500 hover:bg-orange-600 text-white px-2 py-1.5 rounded text-xs font-semibold transition"
                    >
                      🛒 Thêm
                </button>
                    <button
                      onClick={() => handleBuyNow(item)}
                      className="flex-1 bg-green-500 hover:bg-green-600 text-white px-2 py-1.5 rounded text-xs font-semibold transition"
                    >
                      ⚡ Mua
                </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-600 mb-2">
              Không tìm thấy món ăn nào
            </h3>
            <p className="text-gray-500 mb-6">
              Hãy thử tìm kiếm với từ khóa khác hoặc chọn danh mục khác
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("Tất cả");
              }}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl transition"
            >
              🔄 Xóa bộ lọc
            </button>
          </div>
        )}

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
  );
};
export default Shop;
