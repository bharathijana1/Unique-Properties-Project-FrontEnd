import { FaPhoneAlt, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import agent from "./img/Agent.png";
import footerimg1 from "./img/Footerimages/footerimg1.png";
import footerimg2 from "./img/Footerimages/footerimg2.png";
import footerimg3 from "./img/Footerimages/footerimg3.png";
import footerimg4 from "./img/Footerimages/footerimg4.png";
import footerimg5 from "./img/Footerimages/footerimg5.png";
import footerimg6 from "./img/Footerimages/footerimg6.png";
import footerimg7 from "./img/Footerimages/footerimg7.png";
import footerimg8 from "./img/Footerimages/footerimg8.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      {/* Agent Section */}
      <div className="bg-[#FFFAF1] w-full relative">
        <div className="flex flex-col lg:flex-row items-center justify-center p-6 gap-10 relative">
          {/* Agent Image */}
          {/* <img src={agent} alt="Agent" className="h-96 w-auto object-cover z-0" /> */}

          {/* Floating Contact Card */}
          <div className="bg-white p-6 shadow-lg max-w-lg z-10">
            <h2 className="text-2xl font-semibold text-center  mb-3 text-black mt-6 ">
              I will help you find the property of your dreams.
            </h2>
            <p className="text-gray-600 mb-4 text-sm">
              The only name you need to know for real estate answers:
            </p>
            <p className="font-semibold text-black">
              Vijay Joseph <span className="text-[#2A9D8F]">|</span> Realtor
            </p>

            <a href="tel:+917418326946" className="mt-2 font-lg font-medium flex items-center gap-4 text-[#2A9D8F]">
              <FaPhoneAlt />
              <span className="text-[#586C89] font-lg font-medium">+91 74183 26946</span>
            </a>

            <a href="mailto:vjuniqueproperties@gmail.com" className="flex font-lg font-medium items-center gap-4 text-[#2A9D8F] mt-2">
              <MdEmail />
              <span className="text-[#586C89] font-lg font-medium">vjuniqueproperties@gmail.com</span>
            </a>

            <a href="https://wa.me/7418326946"
            target="_blank"
            rel="noopener noreferrer">
              <button className="mt-4 w-full bg-[#2A9D8F] font-bold text-white px-4 py-2 hover:bg-[#23867c] transition duration-200">
                CONTACT ME
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Instagram Label */}
      <div className="bg-white py-2">
        <div className="flex items-center justify-center gap-2 mb-2 text-gray-700">
          <FaInstagram />
          <h3 className="text-sm p-2">FOLLOW US ON INSTAGRAM</h3>
        </div>

        {/* Footer Images - Grid with Wrap & No Gap */}
        <div className="flex flex-wrap mx-auto px-4 justify-center items-center">
          {[footerimg1, footerimg2, footerimg3, footerimg4, footerimg5, footerimg6, footerimg7, footerimg8].map((img, index) => (
            <img key={index} src={img} alt={`footer-img-${index + 1}`} className="h-28 w-auto" />
          ))}
        </div>
      </div>

     {/* Bottom Footer */}
       <div className="bg-white flex justify-center">
         <div className="w-full md:w-3/4">
           <div className="flex flex-col md:flex-row items-center gap-6 pb-1">
             {/* Logo */}
             {/* <Link to="/" className="flex items-center gap-4 mb-1 md:mb-0">
               <img src={logo} alt="Logo" className="h-20 w-auto" />
             </Link> */}

             {/* Contact Info */}
             <div className=" w-full flex  flex-col lg:flex-row justify-center lg:items-center text-lg font-medium p-4 gap-4 lg:gap-8">
               <a href="tel:+917418326946" className="flex flex-row justify-center items-center gap-2 text-[#2A9D8F]">
                 <FaPhoneAlt />
                 <span className="text-[#586C89]">+91 74183 26946</span>
               </a>
               <a href="mailto:vjuniqueproperties@gmail.com" className="flex justify-center flex-row items-center gap-2 text-[#2A9D8F]">
                 <MdEmail />
                 <span className="text-[#586C89]">vjuniqueproperties@gmail.com</span>
               </a>
             </div>
           </div>

           {/* Bottom Gray Line */}
           <div className="border-b border-gray-300 w-full"></div>
         </div>
       </div>

       {/* Legal Bottom */}
       <div className="bg-white text-xs text-gray-500 px-6 pt-4 pb-6 flex flex-col md:flex-row justify-between w-full md:w-3/4 mx-auto">
         <div className="flex justify-around gap-4 mb-2 md:mb-0">
           <a href="#" className="hover:underline">› Terms & Conditions</a>
           <a href="#" className="hover:underline">› Privacy Policy</a>
         </div>
        <div className="text-center mt-2">© {year} vjuniqueproperties. All rights reserved.</div>
</div>
    </>
  );
};

export default Footer;
