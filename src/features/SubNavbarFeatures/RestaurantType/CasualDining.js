import React from 'react';
import CasualDiningImage from '../../../static/casual-dining1.png';
import CasualDiningImage2 from '../../../static/casual-dining2.png';

const CasualDining = () => {
  return (
    <div>

        <div className='flex md:flex-row flex-col justify-center items-center gap-x-[5vw] gap-y-[5vh] pt-[15vh]'>

            <div className='md:w-[40vw] w-[90vw] flex flex-col justify-center gap-y-[2vh]'>
                <div className='text-red-600 text-4xl font-bold'>Casual Dining</div>
                <div className='text-xl font-bold'>Manage Your Casual Dining Restaurant with SambaPOS</div>
                <div>
                    With the advancement of technology, you can now easily avail some of the best 
                    smart restaurant features from SambaPOS, like our Go Tablet, MetriK, mobile client, 
                    and more for your casual dining restaurant. These features are customized for 
                    casual dining restaurants and ensure that you please your customers with a 
                    smooth experience.
                </div>
            </div>

            <div>
                <div>
                    <img className='md:w-[40vw] w-[90vw]' src={CasualDiningImage} alt="Fine Dining" />
                </div>
            </div>

        </div>

        <div className='flex md:flex-row flex-col justify-center items-center gap-x-[5vw] gap-y-[5vh] py-[10vh]'>

            <div className='md:w-[40vw] w-[90vw] flex flex-col justify-center gap-y-[2vh] md:order-1'>
                <div className='text-red-600 text-4xl font-bold'>Casual Dining POS System</div>
                <div className='text-xl font-bold'>SambaPOS for a Memorable Guest Experience</div>
                <div>
                    We at SambaPOS make sure that all of your needs are met, and you get the 
                    ultimate solution for equipping your casual dining restaurant with the best 
                    smart features for orders, billing, menu, and more. Buy now, or partner with us.
                </div>
            </div>

            <div>
                <div>
                    <img className='md:w-[40vw] w-[90vw]' src={CasualDiningImage2} alt="Fine Dining" />
                </div>
            </div>

        </div>

    </div>
  )
}

export default CasualDining