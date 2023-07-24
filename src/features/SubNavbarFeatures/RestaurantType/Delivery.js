import React from 'react';
import DeliveryImage from '../../../static/delivery1.png';
import DeliveryImage2 from '../../../static/delivery2.png';

const Delivery = () => {
  return (
    <div>

        <div className='flex md:flex-row flex-col justify-center items-center gap-x-[5vw] gap-y-[5vh] pt-[15vh]'>

            <div className='md:w-[40vw] w-[90vw] flex flex-col justify-center gap-y-[2vh]'>
                <div className='text-red-600 text-4xl font-bold'>Delivery</div>
                <div className='text-xl font-bold'>Automate your food truck operations and delight your customers!</div>
                <div>
                    Being on the go is the core of your business. SambaPOS Food Truck comes to your 
                    rescue to manage the front-end and back-end processes!
                </div>
            </div>

            <div>
                <div>
                    <img className='md:w-[40vw] w-[90vw]' src={DeliveryImage} alt="Fine Dining" />
                </div>
            </div>

        </div>

        <div className='flex md:flex-row flex-col justify-center items-center gap-x-[5vw] gap-y-[5vh] py-[10vh]'>

            <div className='md:w-[40vw] w-[90vw] flex flex-col justify-center gap-y-[2vh] md:order-1'>
                <div className='text-red-600 text-4xl font-bold'>Food Truck POS System</div>
                <div className='text-xl font-bold'>Get Started to Use SambaPOS for Your Food Truck!</div>
                <div>
                    SambaPOS has been providing solutions and services for restaurants. 
                    Improve your food truck operations with automated solutions for inventory, 
                    orders, billing, and more. If you are looking for a new approach to your 
                    business, buy SambaPOS or apply to be a partner!
                </div>
            </div>

            <div>
                <div>
                    <img className='md:w-[40vw] w-[90vw]' src={DeliveryImage2} alt="Fine Dining" />
                </div>
            </div>

        </div>

    </div>
  )
}

export default Delivery