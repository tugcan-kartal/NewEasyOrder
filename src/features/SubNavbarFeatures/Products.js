import React, { useState } from 'react';
import ProductsImage from "../../static/products.png";
import TemplateImage from "../../static/template-opacity.jpg";
import EasyButlerImage from "../../static/eco-easybutler.png";
import EasyKioskImage from "../../static/eco-easykiosk.png";
import EasyLoyaltyImage from "../../static/eco-easyloyalty.png";
import EasyReservation from "../../static/eco-easyreservation.png";

const Products = () => {
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
        <div>
            <div className='flex md:flex-row flex-col justify-center items-center gap-x-[10vw] gap-y-[10vh] px-[10vw]'>
                <div className='md:w-[40vw] flex flex-col gap-y-[3vh]'>
                    <div className='md:text-5xl text-3xl text-red-600 font-bold'>
                        Build your Restaurant Business with SambaPOS V5 Pro
                    </div>

                    <div className='text-xl text-blue-900 font-semibold'>
                        SambaPOS V5 Pro is the perfect hospitality solution for your business.
                    </div>

                    <div className='font-thin text-blue-900'>
                        It is an all-in-one platform that will assist you to manage every aspect of your restaurant, from taking orders to managing inventory and more. Personalize it to suit your brand and style.
                    </div>
                </div>

                <div>
                    <img className='md:w-[30vw]' src={ProductsImage} alt='not found' />
                </div>
            </div>

            <div className='flex md:flex-row flex-col gap-x-[10vw] gap-y-[5vh] mt-[10vh] mx-[5vw]'>
                <div className='flex flex-col gap-y-[4vh] bg-white text-blue-900 rounded-xl md:w-[20vw] w-[90vw] py-[3vh] text-center'>
                    <div className='font-bold'>Download and Try for FREE</div>
                    <div className='border-[1px] border-blue-900 md:w-[10vw] w-[40vw] rounded-2xl py-[1vh] mx-auto hover:bg-blue-900 hover:text-white transition-all duration-500 cursor-pointer'><span className='font-bold'>+</span> DOWNLOAD</div>
                </div>

                <div className='flex flex-col gap-y-[4vh] bg-white text-blue-900 rounded-xl md:w-[20vw] w-[90vw] py-[3vh] text-center'>
                    <div className='font-bold'>Download and Try for FREE</div>
                    <div className='border-[1px] border-blue-900 md:w-[10vw] w-[40vw] rounded-2xl py-[1vh] mx-auto hover:bg-blue-900 hover:text-white transition-all duration-500 cursor-pointer'><span className='font-bold'>+</span> DOWNLOAD</div>
                </div>

                <div className='flex flex-col gap-y-[4vh] bg-white text-blue-900 rounded-xl md:w-[20vw] w-[90vw] py-[3vh] text-center'>
                    <div className='font-bold'>Download and Try for FREE</div>
                    <div className='border-[1px] border-blue-900 md:w-[10vw] w-[40vw] rounded-2xl py-[1vh] mx-auto hover:bg-blue-900 hover:text-white transition-all duration-500 cursor-pointer'><span className='font-bold'>+</span> DOWNLOAD</div>
                </div>
            </div>
        </div>

        {/* SambaPOS V5 Pro Digitally Transforms Your Restaurant kısmı */}
        <div>
            <div className='flex flex-col md:flex-row md:justify-center items-center gap-x-[10vw] gap-y-[5vh] py-[10vh]'>

                <div className='w-[80vw] md:w-[35vw] flex flex-col justify-center gap-y-[5vh]'>
                    <div className='text-blue-800 font-bold text-3xl'>
                        SambaPOS V5 Pro Digitally Transforms Your Restaurant
                    </div>

                    <div>
                        The world is becoming digital, and so is restaurant management. With SambaPOS, you can integrate all your business processes and manage your restaurant with a simple interface. We have not only included the basic features but have also developed value-added services for all types of restaurants. Experience the benefits of SambaPOS today.
                    </div>
                </div>


                <div className='w-[80vw] md:w-[30vw]'>
                    <div>
                        <div className='bg-blue-900 text-white py-[2vh] flex flex-col items-center gap-y-[1vh]'>
                            <span className='text-xl font-bold'>SambaPOS V5 Pro </span>
                            <span className='text-3xl font-semibold'>$249</span>
                            <span>One Time Payment </span>
                        </div>

                        <div className='bg-white flex flex-col items-center gap-y-[2vh] py-[5vh] font-extralight text-center'>
                            <div>Lifetime License</div>
                            <div>Multiple Terminal Usage</div>
                            <div>Table Service Management</div>
                            <div>Delivery Service Management</div>
                            <div>Custom Reports and Data Analytics</div>
                            <div>Inventory, Sales, and Cost Tracking System</div>
                            <div>-</div>
                            <div>* Customize it As Per Your Needs</div>
                            <div>* Requirements: Windows 10 or higher Operating System</div>
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

export default Products;
