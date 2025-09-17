const Header = ({title, menu, button }) => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <nav className="flex items-center gap-6">
        <h1 className="text-xl font-bold">{title}</h1>
        <ul className="flex gap-5 text-balck font-bold cursor-pointer">
          {menu.map((item, index) => (
            <li className=" hover:text-amber-400 hover:border-b-2 border-oranger-400 transition-all duration-300" key={index}>{item}</li>
          ))}
        </ul>
          <button className="bg-orange-400 ml[-100px] text-white font-bold w-[150px] h-[50px] rounded-xl">
          {button}
        </button>
      </nav>
         
      <div className="flex items-center gap-10">
        <div className="flex items-center border-b-2 border-gray-500">
          <input
            type="text"
            className="p-2 outline-none"
            placeholder="Tìm kiếm món ăn"
          />
          <i className="fa-solid fa-magnifying-glass ml-2"></i>
        </div>
        <div className="flex items-center gap-1">
          <i className="fa-solid fa-users"></i>
          <span>Tài khoản</span>
        </div>
        <div>
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
