import React from 'react';
import PoolAquparkImage from '../../../static/poolaqupark1.png';
import PoolAquparkImage2 from '../../../static/poolaqupark2.png';

const PoolAqupark = () => {
  return (
    <div>

        <div className='flex md:flex-row flex-col justify-center items-center gap-x-[5vw] gap-y-[5vh] pt-[15vh]'>

            <div className='md:w-[40vw] w-[90vw] flex flex-col justify-center gap-y-[2vh]'>
                <div className='text-red-600 text-4xl font-bold'>Pool Aquapark</div>
                <div className='text-xl font-bold'>Elevate Your Guest Experience By The Poolside With Pool Aquapark POS!</div>
                <div>
                    For any business in the hospitality industry, offering an excellent customer service 
                    experience is the foundation that defines the success of any restaurant in the 
                    service industry. Therefore, with our Pool Aquapark POS system, you can 
                    streamline your poolside operations and simplify critical processes for a more 
                    satisfying guest experience.
                </div>
            </div>

            <div>
                <div>
                    <img className='md:w-[40vw] w-[90vw]' src={PoolAquparkImage} alt="Fine Dining" />
                </div>
            </div>

        </div>

        <div className='flex md:flex-row flex-col justify-center items-center gap-x-[5vw] gap-y-[5vh] py-[10vh]'>

            <div className='md:w-[40vw] w-[90vw] flex flex-col justify-center gap-y-[2vh] md:order-1'>
                <div className='text-red-600 text-4xl font-bold'>Pool Aquapark POS System</div>
                <div className='text-xl font-bold'>With SambaPOS Manage All Your Restaurant Operations On A Single Platform</div>
                <div>
                    SambaPOS is the only Point-Of-Sale system you will need to modernize 
                    and better manage your restaurant’s operations. Control your kitchen, 
                    inventory, staff and completely update your restaurant management 
                    system with SambaPOS. With tools and features such as Pool Aquapark POS,
                    governing poolside operations is exceptionally convenient. 
                    Implementing Pool Aquapark POS can help you stay ahead of the competition
                     with the best-in-class poolside services delivered to your guests. Buy SambaPOS here, or apply to become a partner here.
                </div>
            </div>

            <div>
                <div>
                    <img className='md:w-[40vw] w-[90vw]' src={PoolAquparkImage2} alt="Fine Dining" />
                </div>
            </div>

        </div>

    </div>
  )
}

export default PoolAqupark