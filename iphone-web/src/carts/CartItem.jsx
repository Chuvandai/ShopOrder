import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const CartItem = () => {
  const { cartItem } = useContext(CartContext);

  return (
    <div className="container mx-auto p-6">
      <h2 className="font-bold text-2xl text-center mb-6 text-amber-700">
        🛒 Giỏ hàng của bạn
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 rounded-lg shadow-lg text-center">
          <thead className="bg-gradient-to-r from-amber-300 to-amber-300">
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
            </tr>
          </thead>
          <tbody>
            {cartItem.length === 0 ? (
              <tr>
                <td
                  colSpan="4"
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
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartItem;
