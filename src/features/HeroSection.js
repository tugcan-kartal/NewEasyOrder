import React from 'react';
import HeroImage from "../static/product_main.png";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

const HeroSection = () => {

    const { t } = useTranslation();

  return (
    <div>
        <div className='h-[79vh] flex'>

            {/* left section */}
            <div className='pl-[5vw] py-[4vh] md:pt-[4vh] flex flex-col'>

                <div className='mb-[3vh]'>
                    <p className='md:text-8xl text-4xl text-red-500 font-extrabold'>
                        {t("Make your - herosection")} <br/> {t("move - herosection")} 
                    </p>
                </div>

                <div>
                    <div>
                        <div className='text-blue-900 md:text-lg text-md mb-[5vh]'>
                            <p>{t("SambaPOS enables you to elevate your customer experience, - herosection")}</p>
                            <p>{t("increase your speed and efficency, boost your takeaway - herosection")}</p>
                            <p>{t("service and power your business with real time data. It’s time - herosection")}</p>
                            <p>{t("to move your restaurant business to the next level. - herosection")}</p>
                        </div>
                    </div>
                </div>

                <div className='flex gap-x-[1vw]'>
                    <Link to="products">
                        <button className='bg-pink-500 text-white px-6 py-4 rounded-md hover:bg-white hover:text-pink-500 transition-all duration-300 border-2 border-pink-500'>{t("Buy SambaPOS - herosection")}</button>
                    </Link>
                </div>


            </div>

            {/* right section */}
            <div>
                <div>
                    <img className='w-[35vw] ml-[10vw] md:block hidden' src={HeroImage} alt="" />
                </div>
            </div>

        </div>
    </div>
  )
}

export default HeroSection