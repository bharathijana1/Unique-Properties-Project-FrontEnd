import { Star } from "lucide-react";
import profile1 from "../img/Review/review1.png";
import profile2 from "../img/Review/review2.png";
import profile3 from "../img/Review/review3.png";

import { Home_Title } from "./Home_Title";

const testimonials = [
  {
    img: profile1,
    title: "Unique Way",
    review:
      "Thanks for your support vijay. you helped me a lot and assist more. i loved your way of service",
    name: "Kannan",
    place: "Chennai",
  },
  {
    img: profile2,
    title: "Brilliant Service",
    review:
      "Vijay is one of the most skilled realtor I've ever worked with. I would certainly refer him to anybody seeking an excellent solution.",
    name: "Saravanan",
    place: "Chennai",
  },
  {
    img: profile3,
    title: "Very Skilled Agent",
    review:
      "Vijay is really brilliant. He assisted me in finding the perfect apartment. I also acquired the apartment for less than the market rate!",
    name: "Michael Lee",
    place: "Bangalore",
  },
];

export default function Testimonial() {
  return (
    <div className="w-full bg-[#EADEC9] flex flex-col justify-center items-center mx-auto py-6">
      {/* Heading */}
      <Home_Title title="Testimonials" />
      <p className="text-[#5C636C] mb-8 text-center w-full md:w-3/4 mx-auto text-lg">
        I assist my customers in getting to the heart of their real estate demands, desires,
        and outcomes. I'm in this for the long term.
      </p>

      {/* Cards */}
      <div className="w-3/4 mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white p-6 shadow-md text-center flex flex-col items-center justify-between h-[360px] "
          >
            <img
              src={t.img}
              alt={t.name}
              className="w-20 h-20 object-cover rounded-full mb-4"
            />
            <h3 className="font-bold capitalize text-lg mb-2">{t.title}</h3>
            <p className="text-[#5C636C] mb-4 text-sm">{t.review}</p>

            <div className="flex gap-1 justify-center mb-2 text-orange-500">
              {[...Array(5)].map((_, index) => (
                <Star key={index} size={16} fill="orange" />
              ))}
            </div>

            <div className="text-gray-800 font-semibold">{t.name}</div>
            <div className="text-sm text-[#5C636C]">{t.place}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
