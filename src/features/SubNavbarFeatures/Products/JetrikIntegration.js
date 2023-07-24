import React, { useState } from 'react';
import JetrikIntegrationImage from "../../../static/jetrikintegration.png";
import TemplateImage from "../../../static/template-opacity.jpg";
import EasyButlerImage from "../../../static/eco-easybutler.png";
import EasyKioskImage from "../../../static/eco-easykiosk.png";
import EasyLoyaltyImage from "../../../static/eco-easyloyalty.png";
import EasyReservation from "../../../static/eco-easyreservation.png";

const JetrikIntegration = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  function changeOpacity(imageId) {
    const updatedSelection = [...selectedImages];
    const index = updatedSelection.indexOf(imageId);

    if (index === -1) {
      updatedSelection.push(imageId);
    } else {
      updatedSelection.splice(index, 1);
    }

    setSelectedImages(updatedSelection);
  }

  return (
    <div>
        {/* Download and Try for FREE kısmı 3 button sonuna kadar olan part */}
        <div className='mt-[10vh]'>
            <div className='flex md:flex-row flex-col justify-center items-center gap-x-[10vw] gap-y-[10vh] px-[10vw]'>
                <div className='md:w-[40vw] flex flex-col gap-y-[3vh]'>
                    <div className='md:text-5xl text-3xl text-red-600 font-bold'>
                        Jetrik Integration
                    </div>

                    <div className='text-xl text-blue-900 font-semibold'>
                        Manage online orders through an exclusive online ordering system!
                    </div>

                    <div className='font-thin text-blue-900'>
                        SambaPOS can help you deliver excellent customer service by managing online food orders through JetriK. JetriK can now keep the online food orders coming in and they can be managed via SambaPOS itself.</div>
                    </div>

                    <div>
                        <img className='md:w-[30vw]' src={JetrikIntegrationImage} alt='not found' />
                    </div>
            </div>
            
        </div>

        {/* SambaPOS V5 Pro Digitally Transforms Your Restaurant kısmı */}
        <div>
            <div className='flex flex-col md:flex-row md:justify-center items-center gap-x-[10vw] gap-y-[5vh] py-[10vh]'>

                <div className='w-[80vw] md:w-[35vw] flex flex-col justify-center gap-y-[5vh]'>
                    <div className='text-blue-800 font-bold text-3xl'>
                        Orders are taken from the JetriK website as well as the mobile devices and are assigned to SambaPOS seamlessly by the SambaPOS JetriK integration.                    
                    </div>

                    <div>
                        Unlimited Orders
                        The online cloud system can handle any number of orders. They are then centrally processed on SambaPOS.
                        Custom Display
                        JetriK customers can enjoy their favourite food at the comfort of their homes with the help of the online ordering system that can be easily used. Jetrik is easy to use and encourages larger orders.
                    </div>

                </div>


                <div className='w-[80vw] md:w-[30vw]'>
                    <div>
                        <div className='bg-blue-900 text-white py-[2vh] flex flex-col items-center gap-y-[1vh]'>
                            <span className='text-xl font-bold'>Jetrik  Integration</span>
                            <span className='text-3xl font-semibold'>$79</span>
                            <span>annual</span>
                        </div>

                        <div className='bg-white flex flex-col items-center gap-y-[2vh] py-[5vh] font-extralight text-center'>
                            <div>Have your own web ordering system</div>
                            <div>Create QR menu and print for tables</div>
                            <div>Send orders directly to the kitchen</div>
                            <div>Integrated payment solution</div>
                            <button className='mx-auto bg-blue-900 text-white py-[1vh] px-[2vw] mt-[2vh] rounded-lg hover:bg-blue-500 hover:text-white'>BUY NOW</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        {/* Discover our ecosystem kısmı */}
        <div className='relative'>

            <div className='flex flex-col gap-y-[5vh] z-10 absolute top-[10vh] left-5'>

                <div>
                    <div className='text-red-600 text-2xl font-bold'>Make it omnichannel</div>
                    <div className='text-4xl font-bold text-gray-800'>Discover our ecosystem</div>
                </div>

                <div className='flex flex-col gap-y-[3vh] z-10'>

                    <div>
                        <label className="bg-red-300 rounded-md px-3 py-2 border border-gray-300 cursor-pointer">
                            <input
                                type="checkbox"
                                checked
                            />
                            <span className="ml-2 text-white">easyorder</span>
                        </label>
                    </div>

                    <div>
                        <label className="bg-purple-300 rounded-md px-3 py-2 border border-gray-300 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={selectedImages.includes('easybutlerImage')}
                                onChange={() => changeOpacity('easybutlerImage')}
                            />
                            <span className="ml-2 text-white">easybutler</span>
                        </label>
                    </div>

                    <div>
                        <label className="bg-orange-300 rounded-md px-3 py-2 border border-gray-300 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={selectedImages.includes('easyreservationImage')}
                                onChange={() => changeOpacity('easyreservationImage')}
                            />
                            <span className="ml-2 text-white">easyreservation</span>
                        </label>
                    </div>

                    <div>
                        <label className="bg-blue-300 rounded-md px-3 py-2 border border-gray-300 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={selectedImages.includes('easyloyaltyImage')}
                                onChange={() => changeOpacity('easyloyaltyImage')}
                            />
                            <span className="ml-2 text-white">easyloyalty</span>
                        </label>
                    </div>

                    <div>
                        <label className="bg-purple-500 rounded-md px-3 py-2 border border-gray-300 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={selectedImages.includes('easykioskImage')}
                                onChange={() => changeOpacity('easykioskImage')}
                            />
                            <span className="ml-2 text-white">easykiosk</span>
                        </label>
                    </div>

                </div>

            </div>


            <div className='relative'>
                <img className='h-[60vh] md:h-auto' src={TemplateImage} alt='not found' />
                <img
                id="easybutlerImage"
                className={`absolute md:top-0 md:left-auto top-[25vh] left-[3vw] ${selectedImages.includes('easybutlerImage') ? 'opacity-100' : 'opacity-40'}`}
                src={EasyButlerImage}
                alt='not found'
                />
                <img
                id="easykioskImage"
                className={`absolute md:top-0 md:left-auto top-[25vh] left-[3vw] ${selectedImages.includes('easykioskImage') ? 'opacity-100' : 'opacity-40'}`}
                src={EasyKioskImage}
                alt='not found'
                />
                <img
                id="easyloyaltyImage"
                className={`absolute md:top-0 md:left-auto top-[25vh] left-[3vw] ${selectedImages.includes('easyloyaltyImage') ? 'opacity-100' : 'opacity-40'}`}
                src={EasyLoyaltyImage}
                alt='not found'
                />
                <img
                id="easyreservationImage"
                className={`absolute md:top-0 md:left-auto top-[25vh] left-[3vw] ${selectedImages.includes('easyreservationImage') ? 'opacity-100' : 'opacity-40'}`}
                src={EasyReservation}
                alt='not found'
                />
            </div>

        </div>
    </div>
  )
}

export default JetrikIntegration;
