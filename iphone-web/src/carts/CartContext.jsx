import { createContext, useState } from "react";

export const CartContext = createContext({ cartItem: [], addTocart: () => {} });

export const CartProvider = ({ children }) => {
    const [cartItem, setCartItem] = useState([]);
    
    const addTocart = (product) => {
      
        setCartItem((prev) => {
            const kiemTra=prev.find(item=>item.id===product.id)
           if(kiemTra){
           alert(' Sản phẩm đã có trong giỏ hàng ')
            return prev;
            }
              const newCart= [...prev, product];
              console.log('Sản phẩm trong giỏ', newCart);
              return newCart;
        });
    };
      const getTotal = () => {
    return cartItem.reduce((tong, item) => tong + item.price * (item.quantity || 1), 0);
  };
    return (
        <CartContext.Provider value={{ cartItem, addTocart, getTotal }}>
            {children}
        </CartContext.Provider>
    );
};


