import React from 'react';
import CafeBakeryImage from '../../../static/cafebakery1.png';
import CafeBakeryImage2 from '../../../static/cafebakery2.png';

const CafeBakery = () => {
  return (
    <div>

        <div className='flex md:flex-row flex-col justify-center items-center gap-x-[5vw] gap-y-[5vh] pt-[15vh]'>

            <div className='md:w-[40vw] w-[90vw] flex flex-col justify-center gap-y-[2vh]'>
                <div className='text-red-600 text-4xl font-bold'>Cafe Bakery</div>
                <div className='text-xl font-bold'>Run Your Cafe and Bakery with Automated Features of SambaPOS!</div>
                <div>
                    SambaPOS Cafe Bakery POS can help your business thrive! Are you researching 
                    ways to delight your customers and boost performance? Find out how to 
                    effectively manage your cafe or bakery with real-time customer display systems, 
                    faster billing, and loyalty rewards for your guests to keep coming back to you.
                </div>
            </div>

            <div>
                <div>
                    <img className='md:w-[40vw] w-[90vw]' src={CafeBakeryImage} alt="Fine Dining" />
                </div>
            </div>

        </div>

        <div className='flex md:flex-row flex-col justify-center items-center gap-x-[5vw] gap-y-[5vh] py-[10vh]'>

            <div className='md:w-[40vw] w-[90vw] flex flex-col justify-center gap-y-[2vh] md:order-1'>
                <div className='text-red-600 text-4xl font-bold'>Cafe Bakery POS System</div>
                <div className='text-xl font-bold'>Elevate Your Cafe Bakery Business</div>
                <div>
                    SambaPOS features all that you would need for a cafe or a bakery. Unearth 
                    the benefits of an organized inventory, real-time customer displays for 
                    orders, speedy payments, and more with the cafe bakery POS. Buy 
                    your SambaPOS license or become a part of our reseller team today.
                </div>
            </div>

            <div>
                <div>
                    <img className='md:w-[40vw] w-[90vw]' src={CafeBakeryImage2} alt="Fine Dining" />
                </div>
            </div>

        </div>

    </div>
  )
}

export default CafeBakery