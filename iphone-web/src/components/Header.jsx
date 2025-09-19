import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../carts/CartContext";

const Header = ({title }) => {
  const menuLinks = [
    { name: "Trang chủ", path: "/" },
    { name: "Cửa hàng", path: "/shop" },
    { name: "Menu", path: "/menu" },
    { name: "Tin tức", path: "/blog" },
  ];
  const { cartItem } = useContext(CartContext);
  return (
    <header className="flex justify-between h-[70px] items-center p-10 sticky top-0 z-10 bg-white shadow-xl">
     <div className="flex  ">
       <nav className="flex items-center gap-6">
        <h1 className="text-xs text-black font-bold">{title}</h1>
        <ul className="flex gap-5 text-black font-bold cursor-pointer">
          {menuLinks.map((item, index) => (
            <li key={index}>
              <NavLink 
                to={item.path}
                className=" text-xl flex hover:border-b-2"
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div  className="ml-10">
         <NavLink to="/contact">
           <button className="bg-orange-400 text-white font-bold w-[150px] h-[35px] hover:bg-orange-500 transition-colors duration-300">
             Liên hệ đặt tiệc
           </button>
         </NavLink>
      </div>
     </div>
     
         
      <div className="flex items-center gap-10">
        <div className="flex items-center border-b-2 border-gray-500">
          <input
            type="text"
            className="p-1 outline-none"
            placeholder="Tìm kiếm món ăn"
          />
          <i className="fa-solid fa-magnifying-glass ml-2"></i>
        </div>
        <div className="flex items-center gap-1">
          <i className="fa-solid fa-users"></i>
          <span>Tài khoản</span>
        </div>
        <div>
          <NavLink to={"/cart"}>
          <i className="fa-solid fa-cart-shopping">
            <span className="text-red-500" >{cartItem.length}</span>
          </i>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
