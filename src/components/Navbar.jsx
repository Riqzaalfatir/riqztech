import React, {useState, useRef, useEffect} from "react";
import { FaMoon, FaPaperPlane, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const menuItems = [
    { name: "Home", link: "#hero" },
    { name: "About", link: "#about" },
    { name: "Project", link: "#project" },
    { name: "Layanan", link: "#services" },
    { name: "faq", link: "#faq" },
    { name: "Konsulatsi", link: "#contact" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const [isOpen, setIsOpen] = useState(false)
  const navRef = useRef(null);

  useEffect(() => {
    const activeItem = navRef.current?.children[activeIndex];
    if (activeItem) {
      setIndicatorStyle({
        width: activeItem.offsetWidth,
        left: activeItem.offsetLeft,
      })
    }
  }, [activeIndex])

  return (
    <header className="w-full pt-6 flex justify-center sticky top-0 z-50 backdrop-blur-md bg-white/80">
      <div className="w-[95%] max-w-7xl rounded-full 
                      shadow-lg px-8 py-4 flex items-center border border-slate-50 justify-between relative ">

        {/* LOGO */}
        <div className="text-xl md:text-2xl font-bold">
          Riqz<span className="text-gray-500">Tech</span>
        </div>

        {/* MENU */}
        <nav ref={navRef} className="relative hidden md:flex items-center gap-10 
                        text-xs font-semibold uppercase tracking-wider text-gray-600">

                  {menuItems.map((item, index) => (
                    <a 
                      key={index}
                      href={item.link}
                      onClick={() => setActiveIndex(index)}
                      onMouseEnter={() => setActiveIndex(index)}
                      className={`cursor-pointer transition-colors duration-300 ${activeIndex === index ? "text-black" : "hover:text-black"}`}>
                        {item.name}
                    </a>
                  ))}

                <span className="absolute -bottom-2 h-[2px] bg-black transition-all duration-300 ease-in-out" style={indicatorStyle} />
        </nav>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-6">

          <FaMoon className="text-lg cursor-pointer text-gray-700 hover:text-black transition" />

          <a href="https://wa.link/02z9gx" target="_blank" rel="noopoper noreferfer"
           className="bg-black text-white px-6 py-2 
                             rounded-full flex items-center gap-3 
                             font-semibold hover:bg-gray-500 transition">
            Diskusi Project
            <FaPaperPlane className="text-sm" />
          </a>

        </div>

        <div className="md:hidden flex items-center gap-4">
          <FaMoon className="text-lg cursor-pointer text-gray-700" />
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-2xl mt-4 p-6 flex flex-col gap-6 md:hidden animate-slideDown">
            {menuItems.map((item, index) => (
              <a key={index}
                 href={item.link}
                 onClick={() => {
                  setActiveIndex(index);
                  setIsOpen(false);
                 }} className="text-gray-700 font-semibold hover:text-black transition">
                  {item.name}
                 </a>
            ))}
            <a href="https://wa.link/02z9gx"
               target="_blank"
               rel="noopener noreferrer"
               className="bg-black text-white px-6 py-3 rounded-full flex justify-center items-center gap-3 font-semibold hover:bg-gray-700 transition">
                Diskusi Project
                <FaPaperPlane className="text-sm"></FaPaperPlane>
               </a>
          </div>
        )}

      </div>
    </header>
  );
};

export default Navbar;