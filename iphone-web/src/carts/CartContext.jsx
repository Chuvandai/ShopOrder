import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({ cartItem: [], addTocart: () => {} });

export const CartProvider = ({ children }) => {
    const [cartItem, setCartItem] = useState([]);
    useEffect(() => {
  const savedCart = localStorage.getItem("cartItem");
  if (savedCart) {
    setCartItem(JSON.parse(savedCart));
  }
}, []);

    const addTocart = (product) => {
      
        setCartItem((prev) => {
           const updatedCart = [...prev, product];
            localStorage.setItem("cartItem", JSON.stringify(updatedCart)); // lưu vào localStorage
            const kiemTra=prev.find(item=>item.id===product.id)
           if(kiemTra){
            
            return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    };
      const getTotal = () => {
    return cartItem.reduce((tong, item) => tong + item.caloriesPerServing * (item.quantity || 1), 0);
  };
    return (
        <CartContext.Provider value={{ cartItem, addTocart, getTotal }}>
            {children}
        </CartContext.Provider>
    );
};


