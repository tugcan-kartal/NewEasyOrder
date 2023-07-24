import React from 'react';
import FastFoodImage from '../../../static/fast-food1.png';
import FastFoodImage2 from '../../../static/fast-food2.png';

const FastFood = () => {
  return (
    <div>

        <div className='flex md:flex-row flex-col justify-center items-center gap-x-[5vw] gap-y-[5vh] pt-[15vh]'>

            <div className='md:w-[40vw] w-[90vw] flex flex-col justify-center gap-y-[2vh]'>
                <div className='text-red-600 text-4xl font-bold'>Fast Food</div>
                <div className='text-xl font-bold'>Fast Food POS for Quick Operations and Service</div>
                <div>
                    With the assistance of our Samba POS software, you can manage your outlet 
                    efficiently with the least amount of manual intervention. SambaPOS software takes 
                    care of everything from managing payroll, customer service, and handling orders.
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
                <div className='text-red-600 text-4xl font-bold'>Fast Food POS System</div>
                <div className='text-xl font-bold'>Transformational Business Experience with SambaPOS</div>
                <div>
                Our SambaPOS software is dedicated to helping you with the fastest 
                service while maintaining the best quality. Start using our solutions and 
                streamline your daily business operations without any chances of error. 
                Order management, inventory monitoring, menu system – we have got it 
                all. Click here to buy, or apply to be a partner!
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