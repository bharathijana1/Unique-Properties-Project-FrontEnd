import { Home_Title } from "./Home_Title";
import img1 from "../img/Popularneighborhood/client1.png";
import img2 from "../img/Popularneighborhood/client2.png";
import img3 from "../img/Popularneighborhood/client3.png";
import img4 from "../img/Popularneighborhood/client4.png";
import img5 from "../img/Popularneighborhood/client5.png";

export default function Popular_Neighborhoods() {
  return (
    <div className="w-full md:w-3/4 mx-auto py-16">
      {/* Title and Subtitle */}
      <Home_Title title="Popular Neighborhoods - Happy Clients" />
      <p className="text-[#5C636C] mb-8 text-center w-full md:w-3/4 mx-auto text-lg p-2">
        I assist my customers in identifying their fundamental goals for buying or selling
property, and I attentively handle the process from beginning to end.
      </p>

      {/* 3 Column Image Layout */}
      <div className="grid md:grid-cols-3 gap-4 p-2">
        {/* Column 1 - 2 images stacked */}
        <div className="flex flex-col gap-4">
          <img src={img1} alt="Gallery 1" className="w-full h-[200px] object-cover " />
          <img src={img2} alt="Gallery 2" className="w-full h-[200px] object-cover " />
        </div>

        {/* Column 2 - single image, same total height */}
        <div className="flex items-center">
          <img src={img3} alt="Gallery 3" className="w-full h-[416px] object-cover " />
        </div>

        {/* Column 3 - 2 images stacked */}
        <div className="flex flex-col gap-4">
          <img src={img4} alt="Gallery 4" className="w-full h-[200px] object-cover" />
          <img src={img5} alt="Gallery 5" className="w-full h-[200px] object-cover " />
        </div>
      </div>
    </div>
  );
}
