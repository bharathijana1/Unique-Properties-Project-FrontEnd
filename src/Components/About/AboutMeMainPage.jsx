import AboutMe from './AboutMe'
import bg from "../img/Aboutmeimages/aboutmebg.png";
import Experience_Client_Location from './Experience_Client_Location'
import BenefitsOfWorking from '../Home/BenefitsofWorking';
import MyValuesCard from './MyValuesCard';
import AboutmeBG2WithCard from './AboutmeBG2WithCard';
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

export const AboutMeMainPage = () => {
  return (
    <>
    
    <div
            className="relative h-[400px] md:h-[300px] w-full bg-cover bg-center mb-6"
            style={{ backgroundImage: `url(${bg})` }}
          > 
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex flex-col items-center justify-center text-[#EADEC9] text-white text-center px-4">
             <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white"> 
              <Typewriter
                    options={{
                      strings: ["Hello, I'm Vijay Joseph"],
                      autoStart: true,
                      loop: true,
                      delay: 100,
                    }}
                  />
              </h1>
              <p className="text-lg md:text-xl text-[#EADEC9]">
                Chennai’s most acceptable realtor you can trust.
            </p>
               </motion.div>
            </div>
          </div>
    
    <AboutMe />
    <AboutmeBG2WithCard />
    <BenefitsOfWorking />
    <Experience_Client_Location />
    <MyValuesCard />
    </>
  )
}
