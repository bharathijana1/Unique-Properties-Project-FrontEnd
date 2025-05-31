import symbol1 from "../img/Homeimages/Symbol.png";
import symbol2 from "../img/Homeimages/Symbol2.png";
import symbol3 from "../img/Homeimages/Symbol3.png";
import symbol4 from "../img/Homeimages/Symbol4.png";
import bgImage from "../img/Aboutmeimages/aboutmebg2.png"; 

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

export default function AboutmeBG2WithCard() {
  return (
    <div className="relative">
      {/* Background Image with dark overlay */}
      <div
        className="h-[350px] bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex flex-col items-center justify-center text-[#EADEC9] text-center px-4">
          <h2 className="text-white text-2xl md:text-3xl font-medium text-center px-4">
            Dedicated Real Estate Support for All Your Needs
          </h2>
        </div>
      </div>

      {/* Card Section */}
      <div className="-mt-28 w-11/12 md:w-3/4 mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl w-full justify-items-center">
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
  );
}
