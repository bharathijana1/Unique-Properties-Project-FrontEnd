const values = [
  {
    title: "Full Service Agent",
    subtitle: "I'm honored that client referrals built my growing client family exclusively. My tried-and-true techniques give my clients a competitive advantage in this market environment.",
  },
  {
    title: "My Approach",
    subtitle: "I intend not just to make a good impact on ourselves and our families but also to inspire, encourage, and bring about permanent change in everyone we meet.",
  },
  {
    title: "My Values",
    subtitle: "My work ethic and the success of my business are driven by this guiding principle, which motivates me to maintain long-lasting connections with clients.",
  },
];

const MyValuesCard = () => {
  return (
    <div className=" px-4 md:px-10 py-4 md:py-10 pt-2 md:pt-4 bg-white text-left">
      <div className="w-full md:w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <div
            key={index}
            className="border border-gray-400 p-6 shadow-sm "
          >
            <h3 className="text-xl font-bold capitalize mb-6 my-10">
              {value.title}
            </h3>
            <p className="text-[#5C636C] mb-6">{value.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyValuesCard;
