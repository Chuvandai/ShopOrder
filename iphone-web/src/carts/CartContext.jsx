import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const CartContext = createContext({ 
  cartItem: [], 
  addTocart: () => {}, 
  getTotal: () => {},
  handleCheckout: () => {},
  clearCart: () => {},
  removeFromCart: () => {}
});

export const CartProvider = ({ children }) => {
    const [cartItem, setCartItem] = useState([]);
    useEffect(() => {
  const savedCart = localStorage.getItem("cartItem");
  if (savedCart) {
    setCartItem(JSON.parse(savedCart));
  }
}, []);

// Listen for cart updates (when "Mua ngay" updates localStorage)
useEffect(() => {
  const handleCartUpdate = () => {
    const savedCart = localStorage.getItem("cartItem");
    if (savedCart) {
      setCartItem(JSON.parse(savedCart));
    }
  };
  
  window.addEventListener('cartUpdated', handleCartUpdate);
  return () => window.removeEventListener('cartUpdated', handleCartUpdate);
}, []);
 const navigate= useNavigate();

 const handleCheckout=()=>{
   navigate("/checkout");
 }
    const addTocart = (product) => {
        setCartItem((prev) => {
            const kiemTra = prev.find(item => item.id === product.id);
            
            if (kiemTra) {
                // Nếu sản phẩm đã có trong giỏ, tăng quantity
                const updatedCart = prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: (item.quantity || 1) + 1 }
                        : item
                );
                localStorage.setItem("cartItem", JSON.stringify(updatedCart));
                return updatedCart;
            } else {
                // Nếu sản phẩm chưa có trong giỏ, thêm mới
                const updatedCart = [...prev, { ...product, quantity: 1 }];
                localStorage.setItem("cartItem", JSON.stringify(updatedCart));
                return updatedCart;
            }
        });
    };
       const getTotal = () => {
     return cartItem.reduce((tong, item) => tong + item.caloriesPerServing * (item.quantity || 1), 0);
   };

   const clearCart = () => {
     setCartItem([]);
     localStorage.removeItem("cartItem");
   };

   const removeFromCart = (productId) => {
     setCartItem((prev) => {
       const updatedCart = prev.filter(item => item.id !== productId);
       localStorage.setItem("cartItem", JSON.stringify(updatedCart));
       return updatedCart;
     });
   };

     return (
         <CartContext.Provider value={{ cartItem, addTocart, getTotal, handleCheckout, clearCart, removeFromCart }}>
             {children}
         </CartContext.Provider>
     );
};

