import React from 'react';
import DiningIcon from "../static/Dining.png";
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const SixthSection = () => {

  const { t } = useTranslation();

  return (
    <div className='pt-[15vh]'>
      <div className='flex md:flex-row flex-col md:gap-y-[0vh] gap-y-[5vh] justify-center items-center gap-x-[10vw] mx-[5vw]'>

        <div>
            <img className='md:w-[40vw] w-[75vw]' src={DiningIcon} alt='not found'/>
        </div>

        <div className='flex flex-col justify-center gap-y-[4vh] '>
            <div className='text-4xl text-blue-900 font-bold'>{t("Try SambaPOS For Free -sixthsection")}</div>
            <div className='text-lg text-blue-900'>{t("Download SambaPOS today, and try the fully featured version for a full month! -sixthsection")}</div>
            <div className='text-white flex gap-x-[2vw]'>
                <Link to="download">
                  <button className='bg-blue-900 px-[2vw] py-[2vh] rounded-md hover:text-blue-900 hover:bg-white transition-all duration-300 border-2 border-blue-900'>{t("Download Trial -sixthsection")}</button>
                </Link>

                <Link to="products">
                  <button className='bg-blue-900 px-[2vw] py-[2vh] rounded-md hover:text-blue-900 hover:bg-white transition-all duration-300 border-2 border-blue-900'>{t("Buy SambaPOS -sixthsection")}</button>
                </Link>
            </div>
        </div>

      </div>
    </div>
  )
}

export default SixthSection