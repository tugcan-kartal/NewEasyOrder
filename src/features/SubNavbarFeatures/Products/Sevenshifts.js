import React, { useState } from 'react';
import SevenshiftsImage from "../../../static/sevenshifts.png";
import TemplateImage from "../../../static/template-opacity.jpg";
import EasyButlerImage from "../../../static/eco-easybutler.png";
import EasyKioskImage from "../../../static/eco-easykiosk.png";
import EasyLoyaltyImage from "../../../static/eco-easyloyalty.png";
import EasyReservation from "../../../static/eco-easyreservation.png";

const Sevenshifts = () => {
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
                        SambaPOS 7shifts integrations
                    </div>

                    <div className='text-xl text-blue-900 font-semibold'>
                        Managing your team and the restaurant operations simultaneously can be challenging.
                    </div>

                    <div className='font-thin text-blue-900'>
                        SambaPOS 7shifts integrations provides you with the finest solution for team management!
                    </div>
                </div>

                <div>
                    <img className='md:w-[30vw]' src={SevenshiftsImage} alt='not found' />
                </div>
            </div>
            
        </div>

        {/* SambaPOS V5 Pro Digitally Transforms Your Restaurant kısmı */}
        <div>
            <div className='flex flex-col md:flex-row md:justify-center items-center gap-x-[10vw] gap-y-[5vh] py-[10vh]'>

                <div className='w-[80vw] md:w-[35vw] flex flex-col justify-center gap-y-[5vh]'>
                    <div className='text-blue-800 font-bold text-3xl'>
                        Plan your Employee Schedules
                    </div>

                    <div>
                        To deliver the best, you need to have a proper team scheduling system. SambaPOS 7shifts offers you the best tool to plan and manage the schedules for your employees. Customize the schedule for your team with templates to manage their shifts, day-offs, overtime and much more.
                    </div>
                </div>


                <div className='w-[80vw] md:w-[30vw]'>
                    <div>
                        <div className='bg-blue-900 text-white py-[2vh] flex flex-col items-center gap-y-[1vh]'>
                            <span className='text-xl font-bold'>7shifts Integration</span>
                            <span className='text-3xl font-semibold'>$99</span>
                            <span>Annual</span>
                        </div>

                        <div className='bg-white flex flex-col items-center gap-y-[2vh] py-[5vh] font-extralight text-center'>
                            <div>Manage the team efficiently</div>
                            <div>Handle payroll process</div>
                            <div>Encourage collaboration</div>
                            <div>Requires SambaPOS V5 License</div>
                            <button className='mx-auto bg-blue-900 text-white py-[1vh] px-[2vw] mt-[2vh] rounded-lg hover:bg-blue-500 hover:text-white'>Get a Quote</button>
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

export default Sevenshifts;
