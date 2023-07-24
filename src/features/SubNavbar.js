import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../static/sambapos_logo.png';
import { useTranslation } from "react-i18next";

const SubNavbar = () => {
  const { t } = useTranslation();

  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const handleLinkClick = () => {
    setShowMenu(false);
  };

  return (
    <div className='all'>
      <div className='flex items-center justify-evenly gap-x-[10vw] h-[15vh] '>
        {/* Logo */}
        <div className=''>
          <Link to='/'>
            <img className='w-[35vw] h-[50px] pr-[2vw] md:pr-[10vw] object-contain' src={Logo} alt='SambaPOS Logo' />
          </Link>
        </div>

        {/* Asıl Navbar Seçenekleri */}
        <div className='hidden md:flex items-center gap-x-[2vw] text-[17px] text-blue-900 '>

          <div>
            <Link to="/how-it-works" className='cursor-pointer hover:text-red-600 transition-all duration-300'>
              {t("How It Works -subnavbar")}
            </Link>
          </div>

          <div className='dropdown'>
            <Link to="SambaPOSpro" className='cursor-pointer hover:text-red-600 transition-all duration-300'>
              {t("Products -subnavbar")}
            </Link>
            <div className='dropdown-content bg-gray-100 rounded-3xl mr-[20vw] z-10 mt-[4vh] font-semibold'>
              <ul className='py-2 text-sm text-gray-700 dark:text-gray-200 mx-[2vw]'>
                <li>
                  <div className='block px-4 py-2  text-blue-900 font-bold text-xl'>
                    {t("Point of Sale -subnavbar")}
                  </div>
                </li>
                <li>
                  <Link to="/SambaPOSpro" className='block px-4 py-2 hover:bg-gray-200 hover:text-red-400 rounded-2xl dark:hover:bg-gray-600 dark:hover:text-white'>
                    SambaPOS V5 Pro
                  </Link>
                </li>
                <li>
                  <Link to="/SambaPOSmobile" className='block px-4 py-2 hover:bg-gray-200 hover:text-red-400 rounded-2xl dark:hover:bg-gray-600 dark:hover:text-white'>
                    SambaPOS Mobile Client
                  </Link>
                </li>
                <li>
                  <Link to="/SambaPOSkiosk" className='block px-4 py-2 hover:bg-gray-200 hover:text-red-400 rounded-2xl dark:hover:bg-gray-600 dark:hover:text-white'>
                    SambaPOS GO Kiosk
                  </Link>
                </li>
                <li>
                  <Link to="/SambaPOStablet" className='block px-4 py-2 hover:bg-gray-200 hover:text-red-400 rounded-2xl dark:hover:bg-gray-600 dark:hover:text-white'>
                    SambaPOS GO Tablet
                  </Link>
                </li>
                <li>
                  <Link to="/SambaPOSjetrik" className='block px-4 py-2 hover:bg-gray-200 hover:text-red-400 rounded-2xl dark:hover:bg-gray-600 dark:hover:text-white'>
                    Jetrik QR Menu
                  </Link>
                </li>
                <li>
                  <Link to="/SambaPOSmetrik" className='block px-4 py-2 hover:bg-gray-200 hover:text-red-400 rounded-2xl dark:hover:bg-gray-600 dark:hover:text-white'>
                    SambaPOS Metrik
                  </Link>
                </li>
                <li>
                  <Link to="/SambaPOSkds" className='block px-4 py-2 hover:bg-gray-200 hover:text-red-400 rounded-2xl dark:hover:bg-gray-600 dark:hover:text-white'>
                    SambaPOS KDS
                  </Link>
                </li>
                <li>
                  <Link to="/SambaPOSandroid" className='block px-4 py-2 hover:bg-gray-200 hover:text-red-400 rounded-2xl dark:hover:bg-gray-600 dark:hover:text-white'>
                    SambaPOS Android CID
                  </Link>
                </li>
                <li>
                  <Link to="/SambaPOSneptune" className='block px-4 py-2 hover:bg-gray-200 hover:text-red-400 rounded-2xl dark:hover:bg-gray-600 dark:hover:text-white'>
                    SambaPOS Neptune
                  </Link>
                </li>
              </ul>
              <ul className='py-2 text-sm text-gray-700 dark:text-gray-200 mr-[2vw]'>
                <li>
                  <div to="#" className='block px-4 py-2 text-blue-900 font-bold text-xl'>
                    {t("Integrations -subnavbar")}
                  </div>
                </li>
                <li>
                  <Link to="/Sevenshifts" className='block px-4 py-2 hover:bg-gray-200 hover:text-red-400 rounded-2xl dark:hover:bg-gray-600 dark:hover:text-white'>
                    7shifts
                  </Link>
                </li>
                <li>
                  <Link to="/Einvoice" className='block px-4 py-2 hover:bg-gray-200 hover:text-red-400 rounded-2xl dark:hover:bg-gray-600 dark:hover:text-white'>
                    E-Invoice
                  </Link>
                </li>
              </ul>
              <ul className='py-2 text-sm text-gray-700 dark:text-gray-200 mr-[2vw]'>
                <li>
                  <div to="#" className='block px-4 py-2 text-blue-900 font-bold text-xl'>
                    {t("Payment Integrations -subnavbar")}
                  </div>
                </li>
                <li>
                  <Link to="/Paymentsense" className='block px-4 py-2 hover:bg-gray-200 hover:text-red-400 rounded-2xl dark:hover:bg-gray-600 dark:hover:text-white'>
                    PaymentSense
                  </Link>
                </li>
                <li>
                  <Link to="/Dojo" className='block px-4 py-2 hover:bg-gray-200 hover:text-red-400 rounded-2xl dark:hover:bg-gray-600 dark:hover:text-white'>
                    Dojo
                  </Link>
                </li>
                <li>
                  <Link to="/GlobalPayment" className='block px-4 py-2 hover:bg-gray-200 hover:text-red-400 rounded-2xl dark:hover:bg-gray-600 dark:hover:text-white'>
                    Global Payments Integrated
                  </Link>
                </li>
                <li>
                  <Link to="/Okcgmp3" className='block px-4 py-2 hover:bg-gray-200 hover:text-red-400 rounded-2xl dark:hover:bg-gray-600 dark:hover:text-white'>
                    OKC for Ingenico GMP3
                  </Link>
                </li>
                <li>
                  <Link to="/Okctsm" className='block px-4 py-2 hover:bg-gray-200 hover:text-red-400 rounded-2xl dark:hover:bg-gray-600 dark:hover:text-white'>
                    OKC for Ingenico TSM
                  </Link>
                </li>
              </ul>
              <ul className='py-2 text-sm text-gray-700 dark:text-gray-200 mr-[2vw]'>
                <li>
                  <div to="#" className='block px-4 py-2 text-blue-900 font-bold text-xl'>
                    {t("Online Ordering Integrations -subnavbar")}
                  </div>
                </li>
                <li>
                  <Link to="/YemeksepetiIntegration" className='block px-4 py-2 hover:bg-gray-200 hover:text-red-400 rounded-2xl dark:hover:bg-gray-600 dark:hover:text-white'>
                    Yemeksepeti Integration
                  </Link>
                </li>
                <li>
                  <Link to="/GetirIntegration" className='block px-4 py-2 hover:bg-gray-200 hover:text-red-400 rounded-2xl dark:hover:bg-gray-600 dark:hover:text-white'>
                    Getir Integration
                  </Link>
                </li>
                <li>
                  <Link to="/GloriafoodIntegration" className='block px-4 py-2 hover:bg-gray-200 hover:text-red-400 rounded-2xl dark:hover:bg-gray-600 dark:hover:text-white'>
                    GloriaFood Integration
                  </Link>
                </li>
                <li>
                  <Link to="/RestajetIntegration" className='block px-4 py-2 hover:bg-gray-200 hover:text-red-400 rounded-2xl dark:hover:bg-gray-600 dark:hover:text-white'>
                    RestaJet Integration
                  </Link>
                </li>
                <li>
                  <Link to="/JetrikIntegration" className='block px-4 py-2 hover:bg-gray-200 hover:text-red-400 rounded-2xl dark:hover:bg-gray-600 dark:hover:text-white'>
                    Jetrik Integration
                  </Link>
                </li>
                <li>
                  <Link to="/TakeawayIntegration" className='block px-4 py-2 hover:bg-gray-200 hover:text-red-400 rounded-2xl dark:hover:bg-gray-600 dark:hover:text-white'>
                    takeaway.com Integrations
                  </Link>
                </li>
              </ul>
              <ul className='py-2 text-sm text-gray-700 dark:text-gray-200 mr-[2vw]'>
                <li>
                  <div to="#" className='block px-4 py-2 text-blue-900 font-bold text-xl'>
                    {t("Regulations Integrations -subnavbar")}
                  </div>
                </li>
                <li>
                  <Link to="/RegulationTIMS" className='block px-4 py-2 hover:bg-gray-200 hover:text-red-400 rounded-2xl dark:hover:bg-gray-600 dark:hover:text-white'>
                    {t("Regulation TIMS for Samoa")}
                  </Link>
                </li>
                <li>
                  <Link to="/RegulationTSS" className='block px-4 py-2 hover:bg-gray-200 hover:text-red-400 rounded-2xl dark:hover:bg-gray-600 dark:hover:text-white'>
                    {t("Regulation TSS for Germany")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <Link to="download" className='cursor-pointer hover:text-red-600 transition-all duration-300'>
              {t("Download -subnavbar")}
            </Link>
          </div>
          
          <div className='dropdown3'>
            <Link to="business-funding" className='cursor-pointer hover:text-red-600 transition-all duration-300'>
              {t("Solutions -subnavbar")}
            </Link>
            <div className='dropdown-content3 bg-gray-100 rounded-3xl font-semibold text-sm z-10'>
              <ul className='text-gray-700 dark:text-gray-200 '>
                  <li>
                    <Link to="business-funding" className='px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white flex gap-x-[1vw]'>
                      <div className="text-black font-thin hover:bg-gray-200 hover:text-red-400 rounded-2xl">{t("Business Funding -subnavbar")}</div>
                    </Link>
                  </li>
                  <li>
                    <Link to="ghost-kitchen" className='px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white flex gap-x-[1vw]'>
                      <div className="text-black font-thin hover:bg-gray-200 hover:text-red-400 rounded-2xl">{t("Ghost Kitchen -subnavbar")}</div>
                    </Link>
                  </li>
                  <li>
                    <Link to="drive-thru-pos" className='px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white flex gap-x-[1vw]'>
                      <div className="text-black font-thin hover:bg-gray-200 hover:text-red-400 rounded-2xl">{t("Drive Thru POS -subnavbar")}</div>
                    </Link>
                  </li>
                  <li>
                    <Link to="delivery-solutions" className='px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white flex gap-x-[1vw]'>
                      <div className="text-black font-thin hover:bg-gray-200 hover:text-red-400 rounded-2xl">{t("Delivery -subnavbar")}</div>
                    </Link>
                  </li>
                  <li>
                    <Link to="table-service" className='px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white flex gap-x-[1vw]'>
                      <div className="text-black font-thin hover:bg-gray-200 hover:text-red-400 rounded-2xl">{t("Table Service -subnavbar")}</div>
                    </Link>
                  </li>
                  <li>
                    <Link to="quick-service" className='px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white flex gap-x-[1vw]'>
                      <div className="text-black font-thin hover:bg-gray-200 hover:text-red-400 rounded-2xl">{t("Quick Service -subnavbar")}</div>
                    </Link>
                  </li>
                  <li>
                    <Link to="full-service" className='px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white flex gap-x-[1vw]'>
                      <div className="text-black font-thin hover:bg-gray-200 hover:text-red-400 rounded-2xl">{t("Full Service -subnavbar")}</div>
                    </Link>
                  </li>
                  <li>
                    <Link to="integrations" className='px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white flex gap-x-[0.5vw]'>
                      <div className="text-black font-thin hover:bg-gray-200 hover:text-red-400 rounded-2xl">{t("Integrations -subnavbar")}</div>
                    </Link>
                  </li>
              </ul>
            </div>
          </div>

          <div className='dropdown2'>
            <Link to="fine-dining" className='cursor-pointer hover:text-red-600 transition-all duration-300'>
              {t("Restaurant Types -subnavbar")}
            </Link>
            <div className='dropdown-content2 bg-gray-100 rounded-3xl font-semibold text-sm z-10'>
              <ul className='text-gray-700 dark:text-gray-200 '>
                  <li>
                    <Link to="fine-dining" className='px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white flex gap-x-[1vw]'>
                      <div className="text-black font-thin hover:bg-gray-200 hover:text-red-400 rounded-2xl">{t("Fine Dining -subnavbar")}</div>
                    </Link>
                  </li>
                  <li>
                    <Link to="casual-dining" className='px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white flex gap-x-[1vw]'>
                      <div className="text-black font-thin hover:bg-gray-200 hover:text-red-400 rounded-2xl">{t("Casual Dining -subnavbar")}</div>
                    </Link>
                  </li>
                  <li>
                    <Link to="fast-food" className='px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white flex gap-x-[1vw]'>
                      <div className="text-black font-thin hover:bg-gray-200 hover:text-red-400 rounded-2xl">{t("Fast Food -subnavbar")}</div>
                    </Link>
                  </li>
                  <li>
                    <Link to="cafe-bakery" className='px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white flex gap-x-[1vw]'>
                      <div className="text-black font-thin hover:bg-gray-200 hover:text-red-400 rounded-2xl">{t("Cafe Bakery -subnavbar")}</div>
                    </Link>
                  </li>
                  <li>
                    <Link to="food-trucks" className='px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white flex gap-x-[1vw]'>
                      <div className="text-black font-thin hover:bg-gray-200 hover:text-red-400 rounded-2xl">{t("Food Trucks -subnavbar")}</div>
                    </Link>
                  </li>
                  <li>
                    <Link to="delivery" className='px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white flex gap-x-[1vw]'>
                      <div className="text-black font-thin hover:bg-gray-200 hover:text-red-400 rounded-2xl">{t("Delivery -subnavbar")}</div>
                    </Link>
                  </li>
                  <li>
                    <Link to="pool-aquapark" className='px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white flex gap-x-[1vw]'>
                      <div className="text-black font-thin hover:bg-gray-200 hover:text-red-400 rounded-2xl">{t("Pool Aqupark -subnavbar")}</div>
                    </Link>
                  </li>
                  <li>
                    <Link to="bars-nightclubs" className='px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white flex gap-x-[0.5vw]'>
                      <div className="text-black font-thin hover:bg-gray-200 hover:text-red-400 rounded-2xl">{t("Bars and Nightclubs -subnavbar")}</div>
                    </Link>
                  </li>
              </ul>
            </div>
          </div>

          <div>
            <Link to='about-us' className='cursor-pointer hover:text-red-600 transition-all duration-300'>
              {t("About Us -subnavbar")}
            </Link>
          </div>
          
          {/* <div>
            <Link to='contact' className='cursor-pointer hover:text-red-600 transition-all duration-300'>
              Contact Us
            </Link>
          </div> */}
          
        </div>

        {/* Navbar Butonu */}
        <div className='md:hidden'>
          <div onClick={handleMenuToggle} className='cursor-pointer hover:text-red-600 transition-all duration-300'>
            {showMenu ? <></> : <FaBars />}
          </div>
        </div>
      </div>

      {/* Butona Tıklandığında Açılan Navbar */}
      {showMenu && (
        <div className='fixed inset-0 bg-gray-800 bg-opacity-60 z-50 flex justify-center items-center'>
          <div className='backdrop-blur-sm bg-white/30 text-white rounded-lg py-8 px-4 w-[100vw] h-screen mx-auto opacity-90'>
            <div className='flex justify-center text-2xl mt-[5vh]'>
              <div onClick={handleMenuToggle} className='cursor-pointer text-gray-100'>
                <FaTimes />
              </div>
            </div>
            <div className='flex flex-col justify-start items-center gap-y-6 text-xl font-semibold mt-[5vh]'>
              <Link
                to="how-it-works"
                onClick={handleLinkClick}
                className='cursor-pointer hover:text-red-600 transition-all duration-300'
              >
                {t("How It Works -subnavbar")}
              </Link>
              <Link
                to="SambaPOSpro"
                onClick={handleLinkClick}
                className='cursor-pointer hover:text-red-600 transition-all duration-300'
              >
                {t("Products -subnavbar")}
              </Link>
              <Link
                to="download"
                onClick={handleLinkClick}
                className='cursor-pointer hover:text-red-600 transition-all duration-300'
              >
                {t("Download -subnavbar")}
              </Link>
              <Link
                to="business-funding"
                onClick={handleLinkClick}
                className='cursor-pointer hover:text-red-600 transition-all duration-300'
              >
                {t("Solutions -subnavbar")}
              </Link>
              <Link
                to="fine-dining"
                onClick={handleLinkClick}
                className='cursor-pointer hover:text-red-600 transition-all duration-300'
              >
                {t("Restaurant Types -subnavbar")}
              </Link>
              <Link
                to='/about-us'
                onClick={handleLinkClick}
                className='cursor-pointer hover:text-red-600 transition-all duration-300'
              >
                {t("About Us -subnavbar")}
              </Link>
              {/* <Link
                to='/contact'
                onClick={handleLinkClick}
                className='cursor-pointer hover:text-red-600 transition-all duration-300'
              >
                Contact Us
              </Link> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubNavbar;