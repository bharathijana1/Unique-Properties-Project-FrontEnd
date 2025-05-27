// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import logo from "./img/logo.png";
// import whatsapplogo from "./img/whatsapplogo.png";

// const Navbar = () => {
//   const [active, setActive] = useState("Home");
//   const navigate = useNavigate();

//   const menuItems = [
//     { name: "Home", path: "/" },
//     { name: "Services", path: "/services" },
//     { name: "About Me", path: "/aboutme" },
//   ];

//   return (
//     <nav className="w-full bg-white shadow-md flex items-center justify-between pe-6">
//       {/* Left side - Logo */}
//       <div className="flex items-center">
//         <img src={logo} alt="Logo" className="h-20 w-auto" />
//       </div>

//       {/* Right side - Menu items */}
//       <div className="flex items-center space-x-6">
//         {menuItems.map((item) => (
//           <button
//             key={item.name}
//             onClick={() => {
//               setActive(item.name);
//               navigate(item.path);
//             }}
//             className={`text-lg font-medium transition-colors duration-200 ${
//               active === item.name
//                 ? "text-[#2A9D8F]"
//                 : "text-gray-700 hover:text-[#2A9D8F]"
//             }`}
//           >
//             {item.name}
//           </button>
//         ))}

//         {/* WhatsApp Icon */}
//         <a
//           href="https://wa.me/6383765538"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-2xl text-gray-700 hover:text-[#2A9D8F] transition-colors duration-200"
//         >
//           <img src={whatsapplogo} alt="whatsapplogo" className="h-10 w-auto" />
//         </a>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Hamburger icons
import logo from "./img/logo.png";
import whatsapplogo from "./img/whatsapplogo.png";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false); // For hamburger toggle
  const navigate = useNavigate();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Me", path: "/aboutme" },
  ];

  return (
    <nav className="w-full bg-white shadow-md pe-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-20 w-auto" />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                setActive(item.name);
                navigate(item.path);
              }}
              className={`text-lg font-medium transition-colors duration-200 ${
                active === item.name
                  ? "text-[#2A9D8F]"
                  : "text-gray-700 hover:text-[#2A9D8F]"
              }`}
            >
              {item.name}
            </button>
          ))}

          {/* WhatsApp Icon */}
          <a
            href="https://wa.me/6383765538"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-700 hover:text-[#2A9D8F] transition-colors duration-200"
          >
            <img src={whatsapplogo} alt="WhatsApp" className="h-10 w-auto" />
          </a>
        </div>

        {/* Hamburger for Mobile */}
        <button
          className="md:hidden text-3xl text-[#2A9D8F]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 text-center">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                setActive(item.name);
                navigate(item.path);
                setIsOpen(false); // Close menu after click
              }}
              className={`block w-full text-lg font-medium ${
                active === item.name
                  ? "text-[#2A9D8F]"
                  : "text-gray-700 hover:text-[#2A9D8F]"
              }`}
            >
              {item.name}
            </button>
          ))}

          {/* WhatsApp for Mobile */}
          <a
            href="https://wa.me/6383765538"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <img src={whatsapplogo} alt="WhatsApp" className="h-10 mx-auto" />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
