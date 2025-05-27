import { FaMapMarkerAlt } from "react-icons/fa";

import project1 from "../img/Featuredprojectimages/projectimg1.png";
import project2 from "../img/Featuredprojectimages/projectimg2.png";
import project3 from "../img/Featuredprojectimages/projectimg3.png";
import project4 from "../img/Featuredprojectimages/projectimg4.png";
import bed from "../img/Featuredprojectimages/bed.png";
import shower from "../img/Featuredprojectimages/shower.png";
import car from "../img/Featuredprojectimages/car.png";
import plane from "../img/Featuredprojectimages/plane.png";
import { Home_Title } from "./Home_Title";
const projects = [
  {
    image: project2,
    location: "Kanakapura Road",
    name: "Puravankara Highland",
    description: "Premium 2 & 3 BHK With 40+ Amenities in Medavakkam - Chennai From ₹75L*",
    price: "₹ 80L Onwards",
  },
  {
    image: project3,
    location: "Kelambakkam",
    name: "puravankara swanlake",
    description: "Premium 2 & 3 BHK With 40+ Amenities in Medavakkam - Chennai From ₹75L*",
    price: "₹67 L to ₹80 L",
  },
  {
    image: project4,
    location: "Pallikaranai",
    name: "Purva Windermere",
    description: "Premium 2 & 3 BHK With 40+ Amenities in Medavakkam - Chennai From ₹75L*",
    price: "₹ 47L - 1.07 Cr",
  },
];

const roomCounting = [
    {
        img: bed,
        count:4,
    },
    {
        img: shower,
        count: 3,
    },
    {
        img: car,
        count: 2,
    },
    {
        img: plane,
        count: 1440,
    }
]

export default function Featured_Project() {
  return (
    <div className="w-full md:w-3/4 mx-auto py-16">
      <Home_Title title="Featured Project" />
      <p className="text-[#5C636C] mb-8 text-center w-full md:w-3/4 mx-auto text-lg">
        Look no further than the highlighted, magnificent home for your next stay. The
        surrounding area is charming, sophisticated, and visually stunning.
      </p>

      <div className="flex flex-col gap-3 md:flex-row">
        {/* Left Side Vertical Card */}
        <div className="w-full md:w-1/2 bg-[#FFFAF1] shadow-md border border-gray-200">
          <img src={project1} alt="Project Main" className="w-full h-64 object-cover" />
          {/* 4 Small Images + Numbers */}
            <div className="flex h-12 justify-around item-center gap-2 bg-[#2F4858]">
              {roomCounting.map((data, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <img src={data.img} alt={`thumb-${idx}`} className="w-full h-6 object-cover" />
                  <span className=" font-bold text-white">{data.count}</span>
                </div>
              ))}
            </div>
          <div className="p-4">
            <div className="flex items-center gap-2 text-[#2A9D8F] font-medium">
              <FaMapMarkerAlt />
              <span className="text-black">Kelambakkam-Vandalur Main Road</span>
            </div>
            <h3 className="font-bold text-lg text-[#586C89] mt-2">Purva Windermere</h3>
            <p className="text-gray-700 mt-1">
              Premium 2 & 3 BHK With 40+ Amenities in Medavakkam - Chennai From ₹75L*
            </p>
            <p className="text-[#2A9D8F] font-semibold mt-1">₹60 L to ₹1.42 Cr</p>

            
          </div>
        </div>

        {/* Right Side Horizontal Cards */}
        <div className="w-full md:w-1/2 flex flex-col gap-4 ">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row shadow-md border border-gray-200 bg-[#FFFAF1]"
            >
              <img
                src={project.image}
                alt="Project"
                className="w-full md:w-1/3 h-36 object-cover"
              />
              <div className="p-4 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-[#2A9D8F] font-medium">
                  <FaMapMarkerAlt />
                  <span className="text-black">{project.location}</span>
                </div>
                <h3 className="font-bold text-lg text-[#586C89] mt-1">{project.name}</h3>
                {/* <p className="text-gray-700">{project.description}</p> */}
                <p className="text-[#2A9D8F] font-semibold">{project.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
