import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import img1 from "../img/Benefitsofwork/benefits1.png";
import img2 from "../img/Benefitsofwork/benefits2.png";
import img3 from "../img/Benefitsofwork/benefits3.png";
import img4 from "../img/Benefitsofwork/benefits4.png";

export default function BenefitsOfWorking() {
  return (
    <div className="w-3/4 mx-auto py-10 flex flex-col md:flex-row gap-6 overflow-hidden">
      
      {/* Left Side */}
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-2">
          Benefits of working with me
        </h2>
        <p className="text-[#5C636C] mb-6 text-base sm:text-lg">
          My objective is to not only have a good impact on ourselves and our
          families but also to inspire, encourage, and affect long-term change in
          everyone we meet.
        </p>

        {/* Benefit Points */}
        <div className="space-y-4 mb-6">
          {[
            "I will never hurry you through the home-finding process.",
            "I go above and beyond to find off-market and ignored homes.",
            "I provide you the confidence-boosting counsel you need.",
            "I promise maximum care, detail, and devotion.",
          ].map((point, index) => (
            <div key={index} className="flex items-start gap-3">
              <FaCheckCircle className="text-[#2A9D8F] w-5 h-5 mt-1" />
              <span className="text-[#5C636C] text-sm sm:text-base">{point}</span>
            </div>
          ))}
        </div>

        {/* CONTACT ME Button */}
        <a  href="https://wa.me/7418326946"
            target="_blank"
            rel="noopener noreferrer">
        <button className="w-full uppercase text-white bg-[#2A9D8F] px-6 py-3 font-bold hover:bg-[#5da18d] transition">
          Contact Me
        </button>
          </a>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-base font-medium mt-4">
          <a href="tel:+917418326946" className="flex items-center gap-2 text-[#2A9D8F]">
            <FaPhoneAlt />
            <span className="text-[#586C89]">+91 74183 26946</span>
          </a>
          <a href="mailto:vjuniqueproperties@gmail.com" className="flex items-center gap-2 text-[#2A9D8F]">
          <MdEmail />
          <span className="text-[#586C89]">vjuniqueproperties@gmail.com</span>
        </a>
        </div>
      </div>

      {/* Right Side Images */}
      <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[img1, img2, img3, img4].map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Gallery ${i + 1}`}
            className="w-full h-40 sm:h-48 object-cover "
          />
        ))}
      </div>
    </div>
  );
}
