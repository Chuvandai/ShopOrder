import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../carts/CartContext";

const Header = ({ title }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  const menuLinks = [
    { name: "🏠 Trang chủ", path: "/" },
    { name: "🍽️ Thực đơn", path: "/shop" },
    { name: "📋 Đơn hàng", path: "/order" },
    { name: "📰 Tin tức", path: "/blog" },
  ];
  
  const { cartItem, getTotal } = useContext(CartContext);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Có thể thêm logic tìm kiếm ở đây
      console.log("Tìm kiếm:", searchQuery);
    }
  };

  return (
    <header className="bg-gradient-to-r from-orange-100 to-orange-200 shadow-sm sticky top-0 z-50 border-b border-orange-200">
      <div className="container mx-auto px-2 sm:px-4">
        {/* Header chính */}
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo và tên nhà hàng */}
          <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
            <div className="text-xl sm:text-3xl flex-shrink-0">🍽️</div>
            <div className="min-w-0 flex-1">
              <h1 className="text-sm sm:text-xl lg:text-2xl font-bold text-orange-800 truncate">
                {title || "Văn Đại Restaurant"}
              </h1>
              <p className="text-orange-600 text-xs sm:text-sm hidden sm:block">Món ăn ngon, phục vụ tận tâm</p>
            </div>
          </div>

          {/* Menu desktop */}
          <nav className="hidden md:flex items-center gap-6">
            {menuLinks.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className="text-orange-700 hover:text-orange-900 font-semibold transition duration-300 hover:scale-105"
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Tìm kiếm - Ẩn trên mobile */}
          <div className="hidden xl:flex items-center">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm món ăn..."
                className="w-48 xl:w-64 px-3 py-2 pr-10 rounded-full border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white text-sm"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-orange-600 hover:text-orange-700"
              >
                🔍
              </button>
            </form>
          </div>

          {/* Giỏ hàng và controls */}
          <div className="flex items-center gap-1 sm:gap-2 lg:gap-4">
            {/* Tài khoản - Ẩn trên mobile */}
            <div className="hidden lg:flex items-center gap-2 text-orange-700 hover:text-orange-900 cursor-pointer transition">
              <span className="text-lg">👤</span>
              <span className="font-medium text-sm">Tài khoản</span>
            </div>

            {/* Giỏ hàng - Compact trên mobile */}
            <NavLink to="/cart" className="relative group">
              <div className="flex items-center gap-1 sm:gap-2 bg-orange-50 hover:bg-orange-100 px-2 sm:px-4 py-1.5 sm:py-2 rounded-full transition duration-300 border border-orange-200">
                <span className="text-lg sm:text-2xl">🛒</span>
                <div className="text-orange-800 hidden sm:block">
                  <div className="font-bold text-xs sm:text-sm">{cartItem.length} món</div>
                  <div className="text-xs text-orange-600">
                    {getTotal().toLocaleString()}₫
                  </div>
                </div>
                {/* Mobile: chỉ hiện số lượng */}
                <div className="sm:hidden text-orange-800 font-bold text-sm">
                  {cartItem.length}
                </div>
                {cartItem.length > 0 && (
                  <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center font-bold">
                    {cartItem.length}
                  </div>
                )}
              </div>
            </NavLink>

            {/* Nút đặt tiệc - Compact trên mobile */}
            <NavLink to="/contact">
              <button className="bg-orange-500 text-white font-bold px-2 sm:px-4 lg:px-6 py-1.5 sm:py-2 rounded-full hover:bg-orange-600 transition duration-300 hover:scale-105 shadow-md text-xs sm:text-sm">
                <span className="hidden sm:inline">🎉 Đặt tiệc</span>
                <span className="sm:hidden">🎉</span>
              </button>
            </NavLink>

            {/* Menu mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-orange-700 text-xl sm:text-2xl ml-1"
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden bg-white bg-opacity-95 rounded-lg mt-2 p-3 border border-orange-200 shadow-lg">
            <nav className="flex flex-col gap-2">
              {menuLinks.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-orange-700 hover:text-orange-900 font-semibold py-2 px-2 border-b border-orange-200 text-sm"
                >
                  {item.name}
                </NavLink>
              ))}
              
              {/* Tìm kiếm mobile */}
              <form onSubmit={handleSearch} className="mt-3">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Tìm món ăn..."
                    className="w-full px-3 py-2 pr-8 rounded-full border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white text-sm"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-orange-600"
                  >
                    🔍
                  </button>
                </div>
              </form>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
