import React,{useState} from 'react';
import {BiSupport} from 'react-icons/bi';
// import {MdForum} from 'react-icons/md';
// import {AiFillLock} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { t } from 'i18next';


const TopNavbar = () => {

    const { i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState('english');

    const handleLanguageChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedLanguage(selectedValue);

        if (selectedValue === 'english') {
            i18n.changeLanguage('en');
        } else if (selectedValue === 'turkish') {
            i18n.changeLanguage('tr');
        }
    };
  return (

    <div>
        
        <div className='flex text-sm font-th h-[6vh] md:justify-end justify-center items-center md:gap-x-[2vw] gap-x-[5vw] pr-[2vw] bg-blue-950 text-white'>

            <div>
                <Link className='flex items-center gap-x-2 ' to="support">
                    <BiSupport />
                    <div className='cursor-pointer hover:text-red-600 transition-all duration-300'>{t("Support -topnavbar")}</div>
                </Link>
            </div>

            <div className='flex items-center gap-x-2'>
                <select className='bg-blue-950 text-white border-none outline-none cursor-pointer' value={selectedLanguage} onChange={handleLanguageChange}>
                    <option value="english">English</option>
                    <option value="turkish">Turkish</option>
                </select>
            </div>

            {/* <div className='flex items-center gap-x-2'>
                <MdForum />
                <div className='cursor-pointer hover:text-red-600 transition-all duration-300'>Forum</div>
            </div>

            <div className='flex items-center gap-x-2'>
                <AiFillLock />
                <div className='cursor-pointer hover:text-red-600 transition-all duration-300'>Login</div>
            </div> */}

            {/* <div className='cursor-pointer flex items-center gap-x-2'>
                {<AiOutlineDown />}
                <div>English</div>
            </div> */}

        </div>

    </div>

  )
}

export default TopNavbar