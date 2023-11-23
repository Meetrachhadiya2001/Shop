import { useState } from "react";
import logo from "../assets/logo.png";
import { ImCross } from "react-icons/im";
import { FaBarsProgress } from "react-icons/fa6";
import { navIcons, navLinks } from "../utils/constant";

const getHoverEffect = (index: number) => {
  switch (index) {
    case 0:
      return "hover:text-blue-400";
    case 1:
      return "hover:text-green-600";
    case 2:
      return "hover:text-pink-500";
    case 3:
      return "hover:text-yellow-400";
    default:
      return "";
  }
};

export const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  return (
    <header className="w-full h-24">
      <div className="w-11/12 m-auto h-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            className="h-9 object-cover cursor-pointer"
            alt="Furniro"
          />
          <h1 className="font-bold text-4xl cursor-pointer">Furniro</h1>
        </div>
        {!isMobileNavOpen && (
          <FaBarsProgress
            className="text-2xl md:hidden inline-block cursor-pointer"
            onClick={() => setIsMobileNavOpen((prev) => !prev)}
          />
        )}
        <ul className="items-center gap-20 text-lg hidden lg:flex">
          {navLinks.map((item) => (
            <a key={item.title} href={item.path} className="cursor-pointer">
              {item.title}
            </a>
          ))}
        </ul>
        <ul className="items-center gap-11 font-semibold text-2xl hidden md:flex">
          {navIcons.map(({ Icon }, index) => (
            <a
              href="#"
              key={Math.random()}
              className={` hover:scale-125 ${getHoverEffect(index)}`}
            >
              <Icon />
            </a>
          ))}
        </ul>
      </div>
      {isMobileNavOpen && (
        <div className="bg-gradient-to-br from-blue-400 to-purple-400 text-white fixed z-50 inset-0 h-full w-full">
          <nav className="w-11/12 m-auto h-full flex items-center justify-between relative">
            <ImCross
              className="text-2xl absolute top-9 right-0 cursor-pointer"
              onClick={() => setIsMobileNavOpen((prev) => !prev)}
            />
            <ul className="w-full items-center gap-5 font-semibold text-lg flex flex-col justify-center">
              {navLinks.map((item) => (
                <a
                  key={item.title}
                  href={item.path}
                  onClick={() => setIsMobileNavOpen(false)}
                  className="font-bold cursor-pointer"
                >
                  {item.title}
                </a>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};
