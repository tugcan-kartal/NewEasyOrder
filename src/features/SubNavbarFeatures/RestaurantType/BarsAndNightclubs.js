import React from 'react';
import BarsAndNightclubsImage from '../../../static/barsandnightclubs1.png';
import BarsAndNightclubsImage2 from '../../../static/barsandnightclubs2.png';
import { useTranslation } from "react-i18next";

const BarsAndNightclubs = () => {

    const { t } = useTranslation();

  return (
    <div>

        <div className='flex md:flex-row flex-col justify-center items-center gap-x-[5vw] gap-y-[5vh] pt-[15vh]'>

            <div className='md:w-[40vw] w-[90vw] flex flex-col justify-center gap-y-[2vh]'>
                <div className='text-red-600 text-4xl font-bold'>{t("Bars and Nightclubs -barsandnightclubsrestypes")}</div>
                <div className='text-xl font-bold'>{t("SambaPOS – Bars POS System that Optimizes Operations with Exclusive Features -barsandnightclubsrestypes")}</div>
                <div>
                    {t("Your bar or nightclub needs a system to keep the momentum going for your customers. SambaPOS offers you a speedy solution to avoid juggling between the front-end and back-end departments of your bar. You can entertain your guests, and SambaPOS can take care of the rest. -barsandnightclubsrestypes")}
                </div>
            </div>

            <div>
                <div>
                    <img className='md:w-[40vw] w-[90vw]' src={BarsAndNightclubsImage} alt="Fine Dining" />
                </div>
            </div>

        </div>

        <div className='flex md:flex-row flex-col justify-center items-center gap-x-[5vw] gap-y-[5vh] py-[10vh]'>

            <div className='md:w-[40vw] w-[90vw] flex flex-col justify-center gap-y-[2vh] md:order-1'>
                <div className='text-red-600 text-4xl font-bold'>{t("Bars and Nightclubs POS System -barsandnightclubsrestypes")}</div>
                <div className='text-xl font-bold'>{t("Get Start to Bars and Nightclubs for POS Software -barsandnightclubsrestypes")}</div>
                <div>
                    {t("SambaPOS is a service provider, offering support to restaurants, bars, nightclubs and cafes. We fulfill our customers’ needs and furnish them with the best solutions. If you want to avail the SambaPOS V5 Pro for your bar or nightclub, click here, or become a reseller! -barsandnightclubsrestypes")}
                </div>
            </div>

            <div>
                <div>
                    <img className='md:w-[40vw] w-[90vw]' src={BarsAndNightclubsImage2} alt="Fine Dining" />
                </div>
            </div>

        </div>

    </div>
  )
}

export default BarsAndNightclubs