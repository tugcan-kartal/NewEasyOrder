import React from 'react';
import FineDiningImage from '../../../static/fine-dining1.png';
import FineDiningImage2 from '../../../static/fine-dining2.png';
import { useTranslation } from "react-i18next";


const FineDining = () => {

    const { t } = useTranslation();

  return (
    <div>

        <div className='flex md:flex-row flex-col justify-center items-center gap-x-[5vw] gap-y-[5vh] pt-[15vh]'>

            <div className='md:w-[40vw] w-[90vw] flex flex-col justify-center gap-y-[2vh]'>
                <div className='text-red-600 text-4xl font-bold'>{t("Fine Dining -finediningrestype")}</div>
                <div className='text-xl font-bold'>{t("Deliver extraordinary guest experience with SambaPOS -finediningrestype")}</div>
                <div>
                    {t("Use every opportunity to delight your guests, flawlessly manage your essential operations, and enhance the fine dining experience with SambaPOS solutions. SambaPOS runs discreetly in the background to ensure all the tasks are seamlessly performed, leaving you with the flexibility to do what truly matters – offer a personalized service to your guests. -finediningrestype")}
                </div>
            </div>

            <div>
                <div>
                    <img className='md:w-[40vw] w-[90vw]' src={FineDiningImage} alt="Fine Dining" />
                </div>
            </div>

        </div>

        <div className='flex md:flex-row flex-col justify-center items-center gap-x-[5vw] gap-y-[5vh] py-[10vh]'>

            <div className='md:w-[40vw] w-[90vw] flex flex-col justify-center gap-y-[2vh] md:order-1'>
                <div className='text-red-600 text-4xl font-bold'>{t("Fine Dining POS System -finediningrestype")}</div>
                <div className='text-xl font-bold'>{t("A Fortified Fine Dining POS System Developed To Improve Your Guest Experience -finediningrestype")}</div>
                <div>
                    {t("Our Fine Dining POS system is designed specifically for convenience while managing operations critical to the guest experience. It is an easy-to-use software system that can be scaled as your business grows with advanced features such as table ordering and payments, cloud-based reports, better insights into your payments process, and beautifully crafted fine-dining solutions to heighten your guests’ dining experience. Get your license and buy Fine Dining POS by SambaPOS and start offering better services to your guests, creating a memorable dining experience for them or become a reseller! -finediningrestype")}
                </div>
            </div>

            <div>
                <div>
                    <img className='md:w-[40vw] w-[90vw]' src={FineDiningImage2} alt="Fine Dining" />
                </div>
            </div>

        </div>

    </div>
  )
}

export default FineDining