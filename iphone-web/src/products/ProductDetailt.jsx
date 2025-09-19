import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../carts/CartContext";

const ProductDetailt = () => {
  const { addTocart } = useContext(CartContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [randomPrd, setRandomPrd] = useState([]);
  const navigate= useNavigate()
  // Lấy sản phẩm chi tiết
  useEffect(() => {
    if (!id) return;
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
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

  if (!product) return <div className="text-center text-xl mt-20">Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto my-12 p-4 space-y-12">

      {/* Chi tiết sản phẩm */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-lg rounded-2xl p-6">
        <div className="flex justify-center items-start">
          <img
            src={product.images ? product.images[0] : product.image}
            alt={product.name}
            className="w-full max-w-md h-auto object-cover rounded-xl shadow-md"
          />
        </div>
        <div className="flex flex-col justify-start space-y-4">
          <h1 className="text-3xl font-bold text-amber-500">{product.name}</h1>
          <div className="flex items-center space-x-4">
            <span className="text-lg font-semibold text-fuchsia-600">
              Rating: {product.rating || "N/A"}
            </span>
            <span className="text-lg font-semibold text-pink-700">
              Lượt bán: {product.reviewCount || "N/A"}
            </span>
          </div>
          <h2 className="font-bold text-emerald-700 text-xl">Hướng dẫn nấu:</h2>
          <p className="text-gray-700 leading-relaxed">{product.instructions}</p>
          <div className="flex gap-10 mt-8 ">
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-xl transition">
              Mua ngay
            </button>
            <button onClick={()=>addTocart(product)}  className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-xl transition">
              Thêm giỏ hàng
            </button>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Sản phẩm gợi ý</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {randomPrd.map((item) => (
            <div
              key={item.id}
              className="bg-white p-2 rounded-lg shadow hover:scale-105 transition"
            >
              <img
                src={item.image}
                alt={item.name}
              onClick={()=>navigate(`/shop/${item.id}`)}  className="w-full h-32 object-cover rounded"
              />
              <p className="p-2 text-sm font-semibold text-orange-400">{item.name}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ProductDetailt;
