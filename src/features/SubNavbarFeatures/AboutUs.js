import React, { useEffect, useState } from 'react';
import CompanyOne from "../../static/sambapos-our-team-1.png";
import CompanyTwo from "../../static/sambapos-our-teams-2.png";
import LanguagesIcon from "../../static/languages.png";
import CountryIcon from "../../static/countries.png";
import RestaurantIcon from "../../static/restaurant.png";
import { useTranslation } from "react-i18next";



const AboutUs = () => {

    const { t } = useTranslation();

    const AnimatedNumber = ({ number }) => {
        const [count, setCount] = useState(0);
      
        useEffect(() => {
          const interval = setInterval(() => {
            if (count < number) {
              setCount((prevCount) => prevCount + 1);
            } else {
              clearInterval(interval);
            }
          }, 50);
      
          return () => clearInterval(interval);
        }, [count, number]);
      
        return <div>{count}</div>;
      };
      
      const AnimatedBigNumber = ({ number }) => {
          const [count, setCount] = useState(0);
        
        useEffect(() => {
        const interval = setInterval(() => {
            if (count < number) {
            setCount((prevCount) => prevCount + 950);
            } else {
            clearInterval(interval);
            }
        }, 50);
        
        return () => clearInterval(interval);
        }, [count, number]);
        
        return <div>{count}</div>;
    };

  return (

    <div>

      <div className='flex flex-col gap-y-[5vh] items-center mt-[5vh] mb-[10vh]'>
        <div className='md:text-6xl text-4xl text-pink-600 font-bold'>{t("Our Story -aboutus")}</div>
        <div className='text-blue-900 md:text-xl text-md text-center'>
            <p>{t("From day one, the goal of SambaPOS was to create a valuable -aboutus")}</p>
            <p>{t("resource for the world. We’ve been burning the midnight oil since -aboutus")}</p>
            <p>{t("2011 and continue to press forward with determination and a vivid -aboutus")}</p>
            <p>{t("vision")}</p>
        </div>  
      </div>

      <div className='flex flex-col gap-y-[10vh]'>
        <div className='flex md:flex-row flex-col  justify-center gap-x-[5vw]'>
            <div>
                <img className='md:px-[0vw] px-[5vw]' src={CompanyOne} alt="Company One" />
            </div>
 
            <div className='md:w-[25vw] w-[80vw] text-lg flex items-center text-blue-900 md:px-[0vw] mx-[10vw] md:my-[0vh] my-[5vh]'>
                {t("As the age-old saying goes, “what goes around, comes around”. Aligning with this adage, we conduct business in a manner that creates a win-win situation for ourselves as well as the rest of the world. We practice business ethically in accordance with our beliefs in innovation, development, team spirit and our customers. -aboutus")}
            </div>
        </div>

        <div className='flex md:flex-row flex-col justify-center gap-x-[5vw] md:gap-y-[0vh] gap-y-[10vh] md:px-[0vw] px-[5vw]'>
            <div className='order-1'>
                <img className='' src={CompanyTwo} alt="Company One" />
            </div>
 
            <div className='md:w-[25vw] w-[80vw] md:mx-[0vw] mx-auto text-lg flex flex-col items-center text-blue-900'>
                <div className='text-pink-600 md:text-5xl text-4xl font-bold my-[5vh]'>{t("Our Team -aboutus")}</div>

                <div className='text-blue-900'>
                    {t("The foundation of SambaPOS is comprised of teamwork. To offer software that is second to none, we cooperate with highly qualified team members who continually polish our products. Education and development are at the top of our list. We keep ourselves up-to-date with the latest developments and methods in order to acquire information that can be applied toward the betterment of SambaPOS. -aboutus")}
                </div>
            </div>
        </div>
      </div>

      {/* Sayı Kısmı track record part yaniS */}
      <div>
        <div className='mt-[10vh]'>
          <div className='flex flex-col items-center gap-y-[4vh]'>
            <div className='font-bold text-blue-900 md:text-3xl text-xl'>{t("Globally Proven Track Record -aboutus")}</div>
            <div className='text-blue-900 md:text-lg text-md md:px-0 px-[7vw] text-center'>
              {t("Over a hundred thousand restaurants around the world use SambaPOS products at their core. -aboutus")}
            </div>
          </div>

          <div className='flex md:flex-row flex-col justify-center gap-x-[20vw] md:gap-y-[0vh] gap-y-[5vh] mt-[10vh]'>
            <div className='flex flex-col gap-y-[2vh] items-center'>
              <div className='text-6xl text-pink-600 font-bold'><AnimatedNumber number={23} /></div>
              <div className='font-bold text-xl'>{t("Languages -aboutus")}</div>
              <div><img className='md:w-[3vw] w-[10vw]' src={LanguagesIcon} alt='not found'/></div>
            </div>

            <div className='flex flex-col gap-y-[1vh] items-center'>
              <div className='text-6xl text-pink-600 font-bold'><AnimatedNumber number={123} /></div>
              <div className='font-bold text-xl'>{t("Countries -aboutus")}</div>
              <div><img className='md:w-[3vw] w-[10vw]' src={CountryIcon} alt='not found'/></div>
            </div>

            <div className='flex flex-col gap-y-[1vh] items-center'>
              <div className='text-6xl text-pink-600 font-bold'><AnimatedBigNumber number={131209} /></div>
              <div className='font-bold text-xl'>{t("Restaurants -aboutus")}</div>
              <div><img className='md:w-[3vw] w-[10vw]' src={RestaurantIcon} alt='not found'/></div>
            </div>
          </div>
        </div>
      </div>
    
    </div>

  )
}

export default AboutUs;