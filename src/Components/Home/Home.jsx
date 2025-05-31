
import homeBg from "../img/Homeimages/homebgimage.png";
import symbol1 from "../img/Homeimages/Symbol.png";
import symbol2 from "../img/Homeimages/Symbol2.png";
import symbol3 from "../img/Homeimages/Symbol3.png";
import symbol4 from "../img/Homeimages/Symbol4.png";
import AboutMe from "../About/AboutMe";
import Experience_Client_Location from "../About/Experience_Client_Location";
import Featured_Project from "./Featured_Project";
import Popular_Neighborhoods from "./Popular_Neighborhoods";
import HowItWorks from "./HowItWorks";
import BenefitsofWorking from "./BenefitsofWorking";
import Testimonials from "./Testimonials";

const cards = [
  {
    img: symbol1,
    title: "Sell Property",
    content:
      "I'm happy to help you with selling your property! Here are some ways I can assist you in the process.",
    btnText: "Learn More >",
  },
  {
    img: symbol2,
    title: "Buy Property",
    content:
      "Of course! I'd be happy to help you with buying a property. Here are some ways I can assist you in the process.",
    btnText: "View Service >",
  },
  {
    img: symbol3,
    title: "Rent Property",
    content:
      "I'd be happy to assist you with finding a rental property! Here are some ways I can help you in the process.",
    btnText: "View Service >",
  },
  {
    img: symbol4,
    title: "Home Loan",
    content:
      "I'd be happy to assist you with finding a rental property! Here are some ways I can help you in the process.",
    btnText: "View Service >",
  },
];

export default function Home() {
  return (
    <>
      <div className="w-full overflow-hidden relative">
        {/* Hero Section */}
        <div
          className="w-full h-[85vh] bg-no-repeat bg-center bg-cover flex flex-col items-center justify-center "
          style={{ backgroundImage: `url(${homeBg})` }}
        >
          <h1 className="text-5xl md:p-2 font-bold  text-white text-center">
            Vijay Joseph <span className="text-[#2A9D8F]">|</span> Realtor
          </h1>
          <p className="text-xl text-center text-[#EADEC9]">
            I deliver the very best in all facets of real estate
          </p>
          <p className="text-xl text-[#EADEC9] mb-8 text-center">
            Because you deserve no less.
          </p>
          <a href="https://wa.me/7418326946"
            target="_blank"
            rel="noopener noreferrer">
          <button
            className="uppercase text-white bg-[#2A9D8F] px-8 py-3 font-bold hover:bg-[#5da18d] transition"
            style={{ borderRadius: 0 }}
          >
            CONTACT ME
          </button>
          </a>
        </div>

        {/* Overlapping Card Section */}
        <div className="lg:-mt-14 relative z-10 md:w-3/4 xl:w-full mx-auto mb-12">
          <div className="grid mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl w-full justify-items-center">
            {cards.map(({ img, title, content, btnText }, idx) => (
              <div
                key={idx}
                className="bg-[#FFFAF1] p-6 flex flex-col justify-between h-full shadow-md w-full max-w-xs"
              >
                {/* Image on top right */}
                <div className="flex justify-end mb-4">
                  <img
                    src={img}
                    alt={`symbol-${idx}`}
                    className="w-8 h-8 object-contain"
                  />
                </div>

                {/* Content Centered */}
                <div className="flex flex-col flex-grow justify-between h-full">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{title}</h3>
                    <p className="mb-4 text-[#5C636C]">{content}</p>
                  </div>
                  {btnText === "View Service >" ? (
                  <a
                    href="/services"
                    className="text-left font-semibold hover:underline underline-offset-4 text-[#586C89]"
                  >
                    {btnText}
                  </a>
                ) : (
                  <button className="text-left font-semibold hover:underline underline-offset-4 text-[#586C89]">
                    {btnText}
                  </button>
                )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AboutMe />
      <Experience_Client_Location />
      <Featured_Project />
      <Popular_Neighborhoods />
      <HowItWorks />
      <BenefitsofWorking />
      <Testimonials />
    </>
  );
}
