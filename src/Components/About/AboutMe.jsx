import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import agent from "../img/Agent.png";

export default function AboutMe() {
  return (
    <div className="w-full xl:w-3/5 mx-auto px-4">
      <div className="flex flex-col-reverse xl:flex-row-reverse gap-6 items-start">
        {/* Agent Image - Right on md+, Top on mobile */}
        <div className="order-2 xl:order-1 w-full xl:w-2/5 flex justify-center">
          <img
            src={agent}
            alt="Agent"
            className="h-96 lg:h-[600px] w-64 md:w-auto object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="order-1 w-full xl:w-2/3 break-words">
          <h2 className="text-3xl sm:text-4xl capitalize mb-4 font-bold text-center">
            About Me
          </h2>
          <p className="text-base sm:text-lg text-[#5C636C] mt-4">
            Hi, I’m VijayJoseph, a dedicated and driven real estate agent serving the OMR region in Chennai. I have a deep understanding of the local market and a passion for helping clients achieve their real estate and investment goals. Whether you’re buying your first home, selling your current property, or investing in real estate, I am here to guide you every step of the way. My personalized approach, combined with my extensive market knowledge and strong negotiation skills, ensures that my clients receive the best possible outcome. I believe in open communication and keeping my clients informed throughout the entire process. My goal is to make your real estate experience as smooth and stress-free as possible. I would be honored to put my expertise to work for you. Contact me today to schedule a consultation.
          </p>h

          <a href="https://wa.me/7418326946"
            target="_blank"
            rel="noopener noreferrer">
          <button
            className="bg-[#2A9D8F] w-full xl:w-3/4 text-white py-3 px-6 uppercase font-semibold hover:bg-[#23765e] transition mt-4"
            style={{ borderRadius: 0 }}
          >
            Contact Me
          </button>
          </a>

          <div className="flex flex-col sm:flex-row sm:items-center my-4 gap-4 sm:gap-6 text-lg font-medium">
            <a href="tel:+917418326946" className="flex items-center gap-2 text-[#2A9D8F]">
              <FaPhoneAlt />
              <span className="text-[#586C89]">+91 74183 26946</span>
            </a>
            <a href="tel:+917418326946" className="flex items-center gap-2 text-[#2A9D8F]">
              <MdEmail />
              <span className="text-[#586C89]">vjuniqueproperties@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
