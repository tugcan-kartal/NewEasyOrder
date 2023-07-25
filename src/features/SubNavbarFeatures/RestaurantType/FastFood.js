import React from 'react';
import FastFoodImage from '../../../static/fast-food1.png';
import FastFoodImage2 from '../../../static/fast-food2.png';
import { useTranslation } from "react-i18next";

const FastFood = () => {

    const { t } = useTranslation();

  return (
    <div>

        <div className='flex md:flex-row flex-col justify-center items-center gap-x-[5vw] gap-y-[5vh] pt-[15vh]'>

            <div className='md:w-[40vw] w-[90vw] flex flex-col justify-center gap-y-[2vh]'>
                <div className='text-red-600 text-4xl font-bold'>{t("Fast Food -fastfoodrestype")}</div>
                <div className='text-xl font-bold'>{t("Fast Food POS for Quick Operations and Service -fastfoodrestype")}</div>
                <div>
                    {t("With the assistance of our Samba POS software, you can manage your outlet efficiently with the least amount of manual intervention. SambaPOS software takes care of everything from managing payroll, customer service, and handling orders. -fastfoodrestype")}
                </div>
            </div>

            <div>
                <div>
                    <img className='md:w-[40vw] w-[90vw]' src={FastFoodImage} alt="Fine Dining" />
                </div>
            </div>

        </div>

        <div className='flex md:flex-row flex-col justify-center items-center gap-x-[5vw] gap-y-[5vh] py-[10vh]'>

            <div className='md:w-[40vw] w-[90vw] flex flex-col justify-center gap-y-[2vh] md:order-1'>
                <div className='text-red-600 text-4xl font-bold'>{t("Fast Food POS System -fastfoodrestype")}</div>
                <div className='text-xl font-bold'>{t("Transformational Business Experience with SambaPOS -fastfoodrestype")}</div>
                <div>
                {t("Our SambaPOS software is dedicated to helping you with the fastest service while maintaining the best quality. Start using our solutions and streamline your daily business operations without any chances of error. Order management, inventory monitoring, menu system – we have got it all. Click here to buy, or apply to be a partner! -fastfoodrestype")}
                </div>
            </div>

            <div>
                <div>
                    <img className='md:w-[40vw] w-[90vw]' src={FastFoodImage2} alt="Fine Dining" />
                </div>
            </div>

        </div>

    </div>
  )
}

export default FastFood