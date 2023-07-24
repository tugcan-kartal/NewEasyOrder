import React, { useEffect, useState } from 'react';
import LanguagesIcon from "../static/languages.png";
import CountryIcon from "../static/countries.png";
import RestaurantIcon from "../static/restaurant.png";
import { useTranslation } from "react-i18next";


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

const FifthSection = () => {

  const { t } = useTranslation();

  return (
    <div>
      <div className='mt-[10vh]'>
        <div className='flex flex-col items-center gap-y-[4vh]'>
          <div className='font-bold text-blue-900 md:text-3xl text-xl'>{t("Globally Proven Track Record -fifthsection")}</div>
          <div className='text-blue-900 md:text-lg text-md md:px-0 px-[7vw] text-center'>
            {t("Over a hundred thousand restaurants around the world use SambaPOS products at their core. -fifthsection")}
          </div>
        </div>

        <div className='flex md:flex-row flex-col justify-center gap-x-[20vw] md:gap-y-[0vh] gap-y-[5vh] mt-[10vh]'>
          <div className='flex flex-col gap-y-[2vh] items-center'>
            <div className='text-6xl text-pink-600 font-bold'><AnimatedNumber number={23} /></div>
            <div className='font-bold text-xl'>{t("Languages -fifthsection")}</div>
            <div><img className='md:w-[3vw] w-[10vw]' src={LanguagesIcon} alt='not found'/></div>
          </div>

          <div className='flex flex-col gap-y-[1vh] items-center'>
            <div className='text-6xl text-pink-600 font-bold'><AnimatedNumber number={123} /></div>
            <div className='font-bold text-xl'>{t("Countries -fifthsection")}</div>
            <div><img className='md:w-[3vw] w-[10vw]' src={CountryIcon} alt='not found'/></div>
          </div>

          <div className='flex flex-col gap-y-[1vh] items-center'>
            <div className='text-6xl text-pink-600 font-bold'><AnimatedBigNumber number={131209} /></div>
            <div className='font-bold text-xl'>{t("Restaurants -fifthsection")}</div>
            <div><img className='md:w-[3vw] w-[10vw]' src={RestaurantIcon} alt='not found'/></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthSection;