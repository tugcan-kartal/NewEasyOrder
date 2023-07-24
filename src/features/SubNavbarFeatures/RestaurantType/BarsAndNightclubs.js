import React from 'react';
import BarsAndNightclubsImage from '../../../static/barsandnightclubs1.png';
import BarsAndNightclubsImage2 from '../../../static/barsandnightclubs2.png';

const BarsAndNightclubs = () => {
  return (
    <div>

        <div className='flex md:flex-row flex-col justify-center items-center gap-x-[5vw] gap-y-[5vh] pt-[15vh]'>

            <div className='md:w-[40vw] w-[90vw] flex flex-col justify-center gap-y-[2vh]'>
                <div className='text-red-600 text-4xl font-bold'>Bars and Nightclubs</div>
                <div className='text-xl font-bold'>SambaPOS – Bars POS System that Optimizes Operations with Exclusive Features</div>
                <div>
                    Your bar or nightclub needs a system to keep the momentum going for your 
                    customers. SambaPOS offers you a speedy solution to avoid juggling between the 
                    front-end and back-end departments of your bar. You can entertain your guests, 
                    and SambaPOS can take care of the rest.
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
                <div className='text-red-600 text-4xl font-bold'>Bars and Nightclubs POS System</div>
                <div className='text-xl font-bold'>Get Start to Bars and Nightclubs for POS Software</div>
                <div>
                    SambaPOS is a service provider, offering support to restaurants, bars, 
                    nightclubs and cafes. We fulfill our customers’ needs and furnish them with 
                    the best solutions. If you want to avail the SambaPOS V5 Pro for your bar or 
                    nightclub, click here, or become a reseller!
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