import { FaPhoneAlt, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import agent from "./img/Agent.png";
import logo from "./img/logo.png";
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
          <img src={agent} alt="Agent" className="h-96 w-auto object-cover z-0" />

          {/* Floating Contact Card */}
          <div className="-ms-0 lg:-ms-12 bg-white p-6 shadow-lg max-w-sm z-10">
            <h2 className="text-2xl font-semibold text-center mb-2 text-black -mt-18">
              I will help you<br />find the property<br />of your dreams.
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

            <a href="mailto:vjuniqueproperties@gmail.com" className="flex font-lg font-medium items-center gap-2 text-[#2A9D8F] mt-2">
              <MdEmail />
              <span className="text-[#586C89] font-lg font-medium">vjuniqueproperties@gmail.com</span>
            </a>

            <a href="tel:+917418326946">
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
          <h3 className="text-sm">FOLLOW US ON INSTAGRAM</h3>
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
             <div className="flex items-center gap-4 mb-1 md:mb-0">
               <img src={logo} alt="Logo" className="h-20 w-auto" />
             </div>

             {/* Contact Info */}
             <div className="flex  flex-col lg:flex-row item-start lg:items-center gap-6 text-lg font-medium">
               <div className="flex flex-col lg:flex-row item-start lg:items-center gap-2 text-[#2A9D8F]">
                 <FaPhoneAlt />
                 <span className="text-[#586C89]">+91 74183 26946</span>
               </div>
               <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 text-[#2A9D8F]">
                 <MdEmail />
                 <span className="text-[#586C89]">vjuniqueproperties@gmail.com</span>
               </div>
             </div>
           </div>

           {/* Bottom Gray Line */}
           <div className="border-b border-gray-300 w-full"></div>
         </div>
       </div>

       {/* Legal Bottom */}
       <div className="bg-white text-xs text-gray-500 px-6 pt-4 pb-6 flex flex-col md:flex-row justify-between w-full md:w-3/4 mx-auto">
         <div className="flex gap-4 mb-2 md:mb-0">
           <a href="#" className="hover:underline">› Terms & Conditions</a>
           <a href="#" className="hover:underline">› Privacy Policy</a>
         </div>
        <div>© {year} vjuniqueproperties. All rights reserved.</div>
</div>
    </>
  );
};

export default Footer;
