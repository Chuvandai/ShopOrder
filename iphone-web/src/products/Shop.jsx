import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Shop = () => {
    const navigate= useNavigate();
  const [product, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((json) => setProducts(json.recipes));
  }, []);
  return (
    <div className="max-w-8xl  px-6 py-12">
      <h2 className="flex items-center justify-center font-bold text-4xl pt-8 text-orange-600">
        
        DANH SÁCH CÁC MÓN ĂN
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {product.slice(0, 12).map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105"
          >
            <div className="relative overflow-hidden rounded-t-2xl">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[200px] object-cover"
            onClick={()=>navigate(`/shop/${item.id}`)}  />
              <span className="absolute top-3 right-3 bg-amber-500 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md">
                Hot
              </span>
            </div>

            <div className="p-4">
              <p className="text-lg font-bold text-gray-800 truncate">
                {item.name}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Lượt bán:{" "}
                <span className="font-semibold text-amber-600">
                  {item.reviewCount}
                </span>
              </p>

              {/* Nút hành động */}
              <div className="flex justify-between items-center mt-4">
                <button className="bg-green-500 hover:bg-green-600 w-[120px] py-2 text-white font-semibold rounded-xl transition">
                  Mua ngay
                </button>
                <button className="bg-amber-500 hover:bg-amber-600 w-[120px] py-2 text-white font-semibold rounded-xl transition">
                  Giỏ hàng
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Shop;
