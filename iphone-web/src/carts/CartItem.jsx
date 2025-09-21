import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const CartItem = () => {
  const { cartItem, getTotal, handleCheckout, removeFromCart } = useContext(CartContext);

  return (
    <div className="container mx-auto p-6">
      <h2 className="font-bold text-2xl text-center mb-6 text-amber-700">
        🛒 Giỏ hàng của bạn
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 rounded-lg shadow-lg text-center">
          <thead className="bg-gradient-to-r from-amber-200 to-amber-200">
            <tr>
              <th className="px-4 py-3 border border-gray-300 text-sm">#</th>
              <th className="px-4 py-3 border border-gray-300 text-sm">
                Tên sản phẩm
              </th>
              <th className="px-4 py-3 border border-gray-300 text-sm">
                Ảnh sản phẩm
              </th>
              <th className="px-4 py-3 border border-gray-300 text-sm">
                Giá sản phẩm
              </th>
              <th className="px-4 py-3 border border-gray-300 text-sm">
                Tổng tiền
              </th>
              <th className="px-4 py-3 border border-gray-300 text-sm">
                Thao tác
              </th>
            </tr>
          </thead>
          <tbody>
            {cartItem.length === 0 ? (
              <tr>
                <td
                  colSpan="5"
                  className="py-6 text-gray-500 font-medium italic"
                >
                  Giỏ hàng của bạn đang trống!
                </td>
              </tr>
            ) : (
              cartItem.map((item, index) => (
                <tr
                  key={item.id}
                  className="hover:bg-amber-50 transition duration-200"
                >
                  <td className="px-4 py-3 border border-gray-200 text-gray-700 font-medium">
                    {index + 1}
                  </td>
                  <td className="px-4 py-3 border border-gray-200 text-gray-700">
                    {item.name}
                  </td>
                  <td className="px-4 py-3 border border-gray-200 flex justify-center">
                    <img
                      src={item.image}
                      className="w-20 h-20 object-cover rounded-lg shadow"
                      alt={item.name}
                    />
                  </td>
                  <td className="px-4 py-3 border border-gray-200 text-amber-600 font-semibold">
                    {item.caloriesPerServing}$
                  </td>
                  <td className="px-4 py-3 border border-gray-200 text-amber-600 font-semibold">
                    {(item.caloriesPerServing * (item.quantity || 1)).toLocaleString()} VND
                  </td>
                  <td className="px-4 py-3 border border-gray-200">
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition"
                    >
                      🗑️ Xóa
                    </button>
                  </td>
                </tr>
              ))
            )}
            {cartItem.length > 0 && (
              <tr className="bg-amber-100 font-bold">
                <td colSpan="5" className="px-4 py-3 border border-gray-200 text-right">
                  Tổng cộng:
                </td>
                <td className="px-4 py-3 border border-gray-200 text-amber-600 font-semibold text-lg">
                  {getTotal().toLocaleString()} VND
                </td>
              </tr>
            )}

            <tr>
              <td colSpan="6" className="px-4 py-3 text-right">
                {cartItem.length > 0 && (
                  <button onClick={handleCheckout}
                    className="bg-amber-300 rounded text-white font-bold w-[150px] h-[50px] hover:bg-emerald-500 transition duration-200">
                    Thanh toán
                  </button>
                )}
              </td>
            </tr>


          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartItem;
