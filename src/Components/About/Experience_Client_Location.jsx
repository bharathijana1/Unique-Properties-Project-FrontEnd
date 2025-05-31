import symbol5 from "../img/Homeimages/Symbol5.png";
import symbol6 from "../img/Homeimages/Symbol6.png";
import symbol7 from "../img/Homeimages/Symbol7.png";

const stats = [
  {
    img: symbol7,
    alt: "Experience",
    caption: "10+ Years of Experience",
  },
  {
    img: symbol5,
    alt: "Clients",
    caption: "500+ Satisfied Clients",
  },
  {
    img: symbol6,
    alt: "Locations",
    caption: "14 Locations Covered",
  },
];

export default function Experience_Client_Location() {
  return (
    <div className="bg-[#586C89]">
      <div className=" w-full flex justify-around items-center gap-4 md:gap-10 py-2  md:my-0">
        {stats.map(({ img, alt, caption }, index) => (
          <div key={index} className="flex flex-col items-center text-white text-center">
            <img src={img} alt={alt} className="w-10 h-10 object-contain" />
            <p className="mt-2 text-sm">{caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
