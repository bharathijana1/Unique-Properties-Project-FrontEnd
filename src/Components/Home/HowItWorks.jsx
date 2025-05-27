import { Clock, ChartColumnIncreasing, Heart } from "lucide-react";
import { Home_Title } from "./Home_Title";

export default function HowItWorks() {
  return (
    <div className="w-full text-center flex justify-center items-center bg-[#FFFAF1]">
      <div className="w-11/12 md:w-3/4 mx-auto py-16">
        {/* Heading & Subtitle */}
        <Home_Title title="How It Works" />
        <p className="text-[#5C636C] mb-8 text-center mx-auto text-lg">
          A real estate broker is a licensed professional who acts as an intermediary between buyers and sellers of real estate properties. Brokers typically work with real estate agents and oversee their activities, while also handling more complex transactions and providing additional services. Here's how a real estate broker typically works.
        </p>

        {/* Steps Container */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Step 1 */}
          <div className="bg-[#586C89] text-white p-6 w-full md:w-1/4 flex flex-col items-center">
            <h4 className="text-lg font-semibold mb-2">Step 1</h4>
            <Clock className="w-10 h-10 mb-2 text-[#FFFAF1]" />
            <p className="text-center">Make an Appointment</p>
          </div>

          {/* Hyphen Arrow 1 (Only on md+) */}
          <div className="hidden md:flex items-center w-1/12 justify-center">
            <div className="flex items-center text-[#586C89] text-xl font-bold">
              <span className="mx-1">-</span>
              <span className="mx-1">-</span>
              <span className="mx-1">-</span>
              <span className="mx-2">{">"}</span>
              <span className="mx-1">-</span>
              <span className="mx-1">-</span>
              <span className="mx-1">-</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-[#586C89] text-white p-6 w-full md:w-1/4 flex flex-col items-center">
            <h4 className="text-lg font-semibold mb-2">Step 2</h4>
            <ChartColumnIncreasing className="w-10 h-10 mb-2 text-[#FFFAF1]" />
            <p className="text-center">Evaluate the Property</p>
          </div>

          {/* Hyphen Arrow 2 (Only on md+) */}
          <div className="hidden md:flex items-center w-1/12 justify-center">
            <div className="flex items-center text-[#586C89] text-xl font-bold">
              <span className="mx-1">-</span>
              <span className="mx-1">-</span>
              <span className="mx-1">-</span>
              <span className="mx-2">{">"}</span>
              <span className="mx-1">-</span>
              <span className="mx-1">-</span>
              <span className="mx-1">-</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-[#586C89] text-white p-6 w-full md:w-1/4 flex flex-col items-center">
            <h4 className="text-lg font-semibold mb-2">Step 3</h4>
            <Heart className="w-10 h-10 mb-2 text-[#FFFAF1]" />
            <p className="text-center">Close the Deal. Enjoy!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
