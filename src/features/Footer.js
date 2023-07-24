import React from 'react';
import SambaIcon from "../static/sambabeyaz.png";
import {AiFillInstagram,AiFillFacebook,AiFillTwitterCircle} from "react-icons/ai";
import { useTranslation } from "react-i18next";

const Footer = () => {

  const { t } = useTranslation();

  return (
    <div>
      <div>
        <div className='flex md:flex-row flex-col justify-between md:gap-y-[0vh] gap-y-[2vh] mt-[10vh] px-[2vw] py-[4vh] bg-blue-900'>
            <div>
                <img src={SambaIcon} alt="logo"/>
                <div className='text-white text-lg mt-[1vh]'>{t("Follow SambaPOS on social media -footer")}</div>
                <div className='flex gap-x-[2vw] mt-[2vh]'>
                    <button>
                        <AiFillInstagram className='text-white md:text-[2vw] text-[10vw] hover:opacity-80 transition-all duration-300'/>
                    </button>
                    <button>
                        <AiFillFacebook className='text-white md:text-[2vw] text-[10vw] hover:opacity-80 transition-all duration-300'/>
                    </button>
                    <button>
                        <AiFillTwitterCircle className='text-white md:text-[2vw] text-[10vw] hover:opacity-80 transition-all duration-300'/>
                    </button>
                </div>

            </div>

            {/* <div className='flex md:flex-row flex-col md:items-center items-start gap-x-[2vw] text-white text-lg'>
                <button className='hover:opacity-80 transition-all duration-300'>Copyright</button>
                <button className='hover:opacity-80 transition-all duration-300'>Cookie Use Policy</button>
                <button className='hover:opacity-80 transition-all duration-300'>Personal Data</button>
                <button className='hover:opacity-80 transition-all duration-300'>Privacy</button>
                <button className='hover:opacity-80 transition-all duration-300'>Terms of Use</button>
            </div> */}

            <div className='text-white flex items-center text-lg font-semibold'>&copy; {t("2023 Your SambaPOS. All rights reserved. -footer")}</div>

            <div className='text-white font-semibold'>
              <div>0850 885 26 34</div>
              <div>Bahçelievler Mahallesi Mehmetçik Sokak</div>
              <div>Eskisehir, Turkey</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
