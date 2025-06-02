import bg from "../img/Servicesimages/servicesbg.png";
import ServicesContent from "./ServicesContent"
import Experience_Client_Location from "../About/Experience_Client_Location";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";


export default function Services() {
  return (
    <div>
      {/* Top background section */}
      <div
        className="relative h-[400px] md:h-[300px] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex flex-col items-center justify-center text-[#EADEC9] text-center px-4">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          <Typewriter
            options={{
              strings: ["Services"],
              autoStart: true,
              loop: true,
              delay: 100,
            }}
          />
          </h1>
          <p className="text-lg md:text-xl text-[#EADEC9]">
            The only realtor you will ever want
          </p>
          </motion.div>
        </div>
      </div>

      {/* services content */}
      <ServicesContent />
      {/* Experience_Client_Location */}
      <Experience_Client_Location />



      
    </div>
  );
}
