import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import MapImage from "../../static/map-contact.png"
import PhoneImage from "../../static/phone-contact.png"
import MailImage from "../../static/email-contact.png"
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import { useTranslation } from "react-i18next";

export const Support = () => {
  const { t } = useTranslation();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // EmailJS'de oluşturduğunuz hizmet ve şablon kimliklerini burada kullanın
    const serviceID = 'service_avwc7nl';
    const templateID = 'template_24lps0i';
    const userID = 'mnuShqIvu94MetvGL';

    // Form verilerini alın
    const formData = new FormData(form.current);
    // Form verilerini nesne formatına dönüştürün
    const templateParams = Object.fromEntries(formData);

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        Toastify({
          text: "Email sent successfully",
          duration: 1000
        }).showToast();
      })
      .catch((error) => {
        console.error('Failed to send email:', error.text);
      });
  };

  return (
    <div>
        <div className='md:w-[50vw] flex md:flex-row flex-col mx-auto justify-center items-center gap-x-[10vw] shadow-lg my-[5vh] py-[5vh]'>
            <div>
                <div className='flex flex-col gap-y-[10vh]'>
                    <div>
                        <div className='text-red-400 text-2xl font-bold'>{t("Contact form -support")}</div>
                        <div className='text-4xl'>{t("Contact Us -support")}</div>
                    </div>

                    <div className='flex flex-col gap-y-[5vh]'>
                        <a target="_blank" rel="noopener noreferrer" className='shadow-2xl p-6 rounded-full hover:opacity-80 cursor-pointer' href='https://www.google.com/maps/dir//mipos/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x14cc153470663563:0xbe27bcfef0a225b9?sa=X&ved=2ahUKEwiFmIHKpp2AAxX4RPEDHbFdDCoQ9Rd6BAgyEAA&ved=2ahUKEwiFmIHKpp2AAxX4RPEDHbFdDCoQ9Rd6BAhDEAU'>
                            <img className='md:w-[5vw] w-[20vw] ml-[10%]' src={MapImage} alt='not found'/>
                            <div className='font-semibold'>Eskisehir,Turkey</div>
                        </a>

                        <a href="tel:08508852634" className='shadow-2xl p-6 rounded-full hover:opacity-80 cursor-pointer'>
                            <img className='md:w-[5vw] w-[20vw]' src={PhoneImage} alt='not found'/>
                            <div className='font-semibold'>0850 885 26 34</div>
                        </a>

                        <a href="mailto:info@easorder.com" className='shadow-2xl p-6 rounded-full hover:opacity-80 cursor-pointer'>
                            <img className='md:w-[5vw] w-[20vw]' src={MailImage} alt='not found'/>
                            <div className='font-semibold'>info@easorder.com</div>
                        </a>

                    </div>
                </div>
            </div>

            <div>
                <form className='flex flex-col' ref={form} onSubmit={sendEmail}>
                    <label className='text-gray-500 mt-[10vh]'>{t("Name -support")}</label>
                    <input className='py-[1vh] px-[1.5vw] rounded-2xl shadow-2xl' type="text" name="to_name" required />
                    <label className='text-gray-500 mt-[5vh]'>{t("Email -support")}</label>
                    <input className='py-[1vh] px-[1.5vw] rounded-2xl shadow-2xl' type="email" name="from_email" required />
                    <label className='text-gray-500 mt-[5vh]'>{t("Phone -support")}</label>
                    <input className='py-[1vh] px-[1.5vw] rounded-2xl shadow-2xl' type="tel" name="phone" required />
                    <label className='text-gray-500 mt-[5vh]'>{t("Message -support")}</label>
                    <textarea className='py-[1vh] px-[1.5vw] rounded-2xl shadow-2xl' name="message" required />
                    <input className='mt-[5vh] bg-red-400 text-white font-semibold shadow-2xl rounded-2xl w-[10vw] py-[1vh] mx-auto hover:bg-black transition-all duration-700' type="submit" value="Send" />
                </form>
            </div>
        </div>
    </div>
  );
};

export default Support;
