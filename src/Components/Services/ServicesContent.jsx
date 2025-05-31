import React from "react";
import { FaPhoneAlt, FaCheckCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import img1 from "../img/Servicesimages/servicesimg1.png";
import img2 from "../img/Servicesimages/servicesimg2.png";
import img3 from "../img/Servicesimages/servicesimg3.png";
import img4 from "../img/Servicesimages/servicesimg4.png";

const servicesData = [
  {
    heading: "Buy & Sell Property",
    sub: "If you are seeking a rental property for your needs, I am ready to help. With my expertise and personalized service, finding the perfect individual house rental can be a seamless process. Contact me, Vijay, your trusted realtor, for all your rental property needs. Let's work together to find your ideal individual house rental.",
    points: [
      "Search and Consultation",
      "Property Selection",
      "Negotiation and Offer",
      "After-Sales Support",
    ],
    image: img1,
    reverse: false,
  },
  {
    heading: "Plots",
    sub: "Looking for DTCP-approved plots in Chennai? I'm Vijay Realtor, dedicated to helping you find the perfect property. Sizes range from 900 to 2600 sq.ft., with prices starting at ₹1500 per sq.ft. Contact me today to explore these opportunities and secure your ideal plot.",
    points: [
      "Expert Market Knowledge",
      "Skilled Negotiation",
      "Time and Effort Saving",
      "Legal and Regulatory Guidance",
    ],
    image: img2,
    reverse: true,
  },
  {
    heading: "Apartments",
    sub: "I'm Vijay, a dedicated realtor committed to helping you find the perfect apartment that suits your needs and budget. With extensive knowledge of Chennai's real estate market, I offer personalized assistance to guide you through every step of the home-buying process.",
    points: [
      "Expert Guidance",
      "Negotiation Skills",
      "Legal and Documentation Support",
      "Post-Purchase Assistance",
    ],
    image: img3,
    reverse: false,
  },
  {
    heading: "Individual Villa",
    sub: "I'm Vijay, a trusted realtor committed to helping you find your dream villa that perfectly matches your lifestyle, location preferences, and budget. With deep knowledge of the real estate market and access to the best DTCP and CMDA-approved villa properties.",
    points: [
      "In-Depth Local Expertise",
      "Negotiation Skills",
      "Legal and Documentation Support",
      "Post-Purchase Assistance",
    ],
    image: img4,
    reverse: true,
  },
];

export default function ServicesContent() {
  return (
    <div className="py-16 px-4 bg-white">
      <div className="w-full md:w-11/12 lg:w-3/4 mx-auto">
        {servicesData.map((item, idx) => (
          <div
            key={idx}
            className={`flex flex-col ${
              item.reverse ? "md:flex-row-reverse" : "md:flex-row"
            } gap-8 items-center`}
          >
            {/* Image Section */}
            <div className="w-full md:w-1/2">
              <img src={item.image} alt="Service" className="w-full h-auto shadow-md" />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 space-y-4 px-4 md:px-3 text-black">
              <h3 className="text-2xl md:text-3xl font-bold capitalize">
                {item.heading}
              </h3>
              <p className="text-[#5C636C]">{item.sub}</p>

              <ul className="space-y-2 pt-2">
                {item.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-[#5C636C]">
                    <FaCheckCircle className="text-[#2A9D8F] w-5 h-5 mt-1" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <a href="https://wa.me/7418326946"
            target="_blank"
            rel="noopener noreferrer">
              <button className="w-full uppercase text-white bg-[#2A9D8F] px-8 py-3 mt-6 font-bold hover:bg-[#5da18d] transition">
                Contact Me
              </button>
                </a>

              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row gap-4 text-sm font-medium mt-4">
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
          </div>
        ))}
      </div>
    </div>
  );
}
