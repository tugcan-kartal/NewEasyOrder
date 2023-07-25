import React, { useState } from 'react';
import ProductsImage from "../../../static/products.png";
import TemplateImage from "../../../static/template-opacity.jpg";
import EasyButlerImage from "../../../static/eco-easybutler.png";
import EasyKioskImage from "../../../static/eco-easykiosk.png";
import EasyLoyaltyImage from "../../../static/eco-easyloyalty.png";
import EasyReservation from "../../../static/eco-easyreservation.png";
import { useTranslation } from "react-i18next";

const SambaPOSpro = () => {
  
  const { t } = useTranslation();

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

  const handleDownloadClick = () => {
    // Dosyanın URL'sini buraya ekleyin
    const fileUrl = 'https://sambapos.com/download/sambapos_setups/SambaSetup560.exe';

    // Dosya indirme işlemi için yeni bir link oluşturuyoruz
    const downloadLink = document.createElement('a');
    downloadLink.href = fileUrl;
    downloadLink.download = 'SambaSetup560'; // İndirilen dosyanın adı
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };


  return (
    <div>
        {/* Download and Try for FREE kısmı 3 button sonuna kadar olan part */}
        <div>
            <div className='flex md:flex-row flex-col justify-center items-center gap-x-[10vw] gap-y-[10vh] px-[10vw]'>
                <div className='md:w-[40vw] flex flex-col gap-y-[3vh]'>
                    <div className='md:text-5xl text-3xl text-red-600 font-bold'>
                        {t("Build your Restaurant Business with SambaPOS V5 Pro -sambasproproducts")}
                    </div>

                    <div className='text-xl text-blue-900 font-semibold'>
                        {t("SambaPOS V5 Pro is the perfect hospitality solution for your business. -sambasproproducts")}
                    </div>

                    <div className='font-thin text-blue-900'>
                        {t("It is an all-in-one platform that will assist you to manage every aspect of your restaurant, from taking orders to managing inventory and more. Personalize it to suit your brand and style. -sambasproproducts")}
                    </div>
                </div>

                <div>
                    <img className='md:w-[30vw]' src={ProductsImage} alt='not found' />
                </div>
            </div>

            <div className='flex md:flex-row flex-col gap-x-[10vw] gap-y-[5vh] mx-[5vw]'>
                <div className='flex flex-col gap-y-[4vh] bg-gray-200 text-blue-900 rounded-xl md:w-[20vw] w-[90vw] py-[3vh] md:ml-[4vw] text-center'>
                    <div  className='font-bold'>{t("Download and Try for FREE -sambasproproducts")}</div>
                    <div onClick={handleDownloadClick} className='border-[1px] border-blue-900 md:w-[10vw] w-[40vw] rounded-2xl py-[1vh] mx-auto hover:bg-blue-900 hover:text-white transition-all duration-500 cursor-pointer'><span className='font-bold'>+</span> {t("DOWNLOAD -sambasproproducts")}</div>
                </div>

                {/* <div className='flex flex-col gap-y-[4vh] bg-white text-blue-900 rounded-xl md:w-[20vw] w-[90vw] py-[3vh] text-center'>
                    <div className='font-bold'>Quick Setup Documents</div>
                    <div className='border-[1px] border-blue-900 md:w-[10vw] w-[40vw] rounded-2xl py-[1vh] mx-auto hover:bg-blue-900 hover:text-white transition-all duration-500 cursor-pointer'><span className='font-bold'>+</span> DOWNLOAD</div>
                </div>

                <div className='flex flex-col gap-y-[4vh] bg-white text-blue-900 rounded-xl md:w-[20vw] w-[90vw] py-[3vh] text-center'>
                    <div className='font-bold'>How to activate SambaPOS V5 license?</div>
                    <div className='border-[1px] border-blue-900 md:w-[10vw] w-[40vw] rounded-2xl py-[1vh] mx-auto hover:bg-blue-900 hover:text-white transition-all duration-500 cursor-pointer'><span className='font-bold'>+</span> DOWNLOAD</div>
                </div> */}
            </div>
        </div>

        {/* SambaPOS V5 Pro Digitally Transforms Your Restaurant kısmı */}
        <div>
            <div className='flex flex-col md:flex-row md:justify-center items-center gap-x-[10vw] gap-y-[5vh] py-[10vh]'>

                <div className='w-[80vw] md:w-[35vw] flex flex-col justify-center gap-y-[5vh]'>
                    <div className='text-blue-800 font-bold text-3xl'>
                    {t("SambaPOS V5 Pro Digitally Transforms Your Restaurant -sambasproproducts")}
                    </div>

                    <div>
                    {t("The world is becoming digital, and so is restaurant management. With SambaPOS, you can integrate all your business processes and manage your restaurant with a simple interface. We have not only included the basic features but have also developed value-added services for all types of restaurants. Experience the benefits of SambaPOS today. -sambasproproducts")}
                    </div>
                </div>


                <div className='w-[80vw] md:w-[30vw]'>
                    <div>
                        <div className='bg-blue-900 text-white py-[2vh] flex flex-col items-center gap-y-[1vh]'>
                            <span className='text-xl font-bold'>{t("SambaPOS V5 Pro -sambasproproducts")}</span>
                            <span className='text-3xl font-semibold'>$249</span>
                            <span>{t("One Time Payment -sambasproproducts")}</span>
                        </div>

                        <div className='bg-white flex flex-col items-center gap-y-[2vh] py-[5vh] font-extralight text-center'>
                            <div>{t("Lifetime License -sambasproproducts")}</div>
                            <div>{t("Multiple Terminal Usage -sambasproproducts")}</div>
                            <div>{t("Table Service Management -sambasproproducts")}</div>
                            <div>{t("Delivery Service Management -sambasproproducts")}</div>
                            <div>{t("Custom Reports and Data Analytics -sambasproproducts")}</div>
                            <div>{t("Inventory, Sales, and Cost Tracking System -sambasproproducts")}</div>
                            <div>-</div>
                            <div>* {t("Customize it As Per Your Needs -sambasproproducts")}</div>
                            <div>* {t("Requirements: Windows 10 or higher Operating System -sambasproproducts")}</div>
                            <button className='mx-auto bg-blue-900 text-white py-[1vh] px-[2vw] mt-[2vh] rounded-lg hover:bg-blue-500 hover:text-white'>{t("BUY NOW -sambasproproducts")}</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        {/* Discover our ecosystem kısmı */}
        <div className='relative'>

            <div className='flex flex-col gap-y-[5vh] z-10 absolute top-[10vh] left-5'>

                <div>
                    <div className='text-red-600 text-2xl font-bold'>{t("Make it omnichannel -sambasproproducts")}</div>
                    <div className='text-4xl font-bold text-gray-800'>{t("Discover our ecosystem -sambasproproducts")}</div>
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

export default SambaPOSpro;
