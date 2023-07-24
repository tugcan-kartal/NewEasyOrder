import React from 'react';
import ContactImage from "../../static/contact.png";
import {HiLocationMarker} from "react-icons/hi";
import {IoCall} from "react-icons/io5";
import {AiFillMail} from "react-icons/ai";

const ContactUs = () => {
  return (
    <div className='flex md:flex-row flex-col justify-center items-center gap-x-[5vw] md:gap-y-[0vh] gap-y-[5vh] mx-[5vw]'>

      <div className='flex flex-col mt-[12vh] gap-y-[5vh]'>

        <div>
            <div className='text-4xl text-blue-900 font-bold mb-[3vh]'>
                Headquarters
            </div>
            <div className='text-lg flex flex-col gap-y-[1vh]'>
                <div className='flex items-center gap-x-[1vw]'>
                    <HiLocationMarker className='text-pink-600'/>
                    1141 E. Main, Suite 301 Batesville, AR 72501
                </div>

                <div className='flex items-center gap-x-[1vw]'>
                    <IoCall className='text-pink-600'/>
                    +1 (870) 613 0429
                </div>

                <div className='flex items-center gap-x-[1vw]'>
                    <AiFillMail className='text-pink-600'/>
                    hello@sambapos.com
                </div>
            </div>
        </div>

        <div className='w-[45vw] h-[0.5vh] bg-blue-900 md:block hidden'></div>

        <div className='flex flex-col gap-y-[2vh]'>
            <div className='text-2xl font-bold text-blue-900 '>R&D Center</div>
            
            <div className='flex items-center gap-x-[1vw]'> 
                <HiLocationMarker className='text-pink-600'/>
                Bahçelievler Mahallesi Mehmetçik Sokak No:1-B01 Kat Plaza Kat:3 Ofis 305, 34180 Bahçelievler / İstanbul – Turkey
            </div>
            
            <div className='flex items-center gap-x-[1vw]'>
                <IoCall className='text-pink-600'/>
                +90 212 252 0634
            </div>
            
            <div className='flex items-center gap-x-[1vw]'>
                <AiFillMail className='text-pink-600'/>
                <a href="mailto:noreply@easorder.com" className='font-semibold hover:underline cursor-pointer'>
                    noreply@easorder.com
                </a>
            </div>
        </div>

      </div>

      <div className='w-[0.3vw] h-[50vh] bg-blue-900 md:block hidden'></div>

      <div>
        <img src={ContactImage} alt='not found'/>
      </div>

    </div>
  )
}

export default ContactUs
