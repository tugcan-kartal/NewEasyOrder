import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import CompleteCustomizationIcon from "../static/Complete-Customization-image.png";
import AdvancedReportingIcon from "../static/advanced-reporting-image.png";
import IntegrationsIcon from "../static/integration.png";
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const FourthSection = () => {
  const { t } = useTranslation();

  const [isAnimated, setIsAnimated] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setIsAnimated(true);
    }
  }, [inView]);

  return (
    <div>
      <div className='md:mx-[0vw] mx-[5vw]' ref={ref}>
        <div className='flex flex-col justify-center items-center gap-y-[3vh] '>
          <CSSTransition
            in={isAnimated}
            timeout={1000}
            classNames="fade"
            unmountOnExit
          >
            <div className='text-3xl text-blue-900 font-bold text-center'>
              {t("Many Choices, One Answer -fourthsection")}
            </div>
          </CSSTransition>
          <div className='md:text-lg text-md text-blue-900 md:px-[0vw] px-[4vw]'>
            <p className='text-center'>{t("We constantly add new features allowing us to help you stay up to date with the technology you need so your -fourthsection -fourthsection")}</p>
            <p className='text-center'>{t("business can focus on what matters most, serving your customers. -fourthsection")}</p>
          </div>
        </div>
        <div>
          <div>
            <div className='flex flex-col md:flex-row mx-[2vw] gap-x-[4vw] mt-[10vh]'>
              <div>
                <CSSTransition
                  in={isAnimated}
                  timeout={3000}
                  classNames="slide-up"
                  unmountOnExit
                >
                  <img className='w-[60vw] md:mx-[0vw] mb-[5vh] mx-auto' src={CompleteCustomizationIcon} alt='not found'/>
                </CSSTransition>
              </div>
              <div className='flex flex-col justify-center gap-y-[4vh]'>
                <div className='text-3xl text-blue-900 font-bold'>{t("Complete Customization -fourthsection")}</div>
                <div className='text-xl text-red-600 font-bold'>{t("Create Snazzy Menus, Custom Reports and More… -fourthsection")}</div>
                <div className='text-blue-900'>
                  {t("Fine tune SambaPOS to cater to the needs of your restaurant. With screen customization,you can provide your staff with powerful, adjustable tools to serve your valued customers. -fourthsection")}
                </div>
                <Link to="products">
                  <button className='text-white bg-blue-900 py-[2vh] md:w-[10vw] w-[45vw] rounded-lg hover:text-blue-900 hover:bg-white transition-all duration-300 border-2 border-blue-900'>{t("See All Features -fourthsection")}</button>
                </Link>
              </div>
            </div>
            <div className='flex flex-col md:flex-row mx-[2vw] gap-x-[4vw] mt-[10vh]'>
              <div className='md:order-2'>
                <CSSTransition
                  in={isAnimated}
                  timeout={3000}
                  classNames="slide-up"
                  unmountOnExit
                >
                  <img className='w-[60vw] md:mx-[0vw] mb-[5vh] mx-auto' src={AdvancedReportingIcon} alt='not found'/>
                </CSSTransition>
              </div>
              <div className='flex flex-col justify-center gap-y-[4vh]'>
                <div className='text-3xl text-blue-900 font-bold'>{t("Advanced Reporting -fourthsection")}</div>
                <div className='text-xl text-red-600 font-bold'>{t("Real-time Data at Your Fingertips -fourthsection")}</div>
                <div className='text-blue-900'>
                  {t("Don’t leave your restaurant’s potential success in the hands of fate. Decide which aspects of your business need attention and effortlessly create reports that will aid you in making informed decisions. -fourthsection")}
                </div>
                <Link to="products">
                <button className='text-white bg-blue-900 py-[2vh] md:w-[10vw] w-[45vw] rounded-lg hover:text-blue-900 hover:bg-white transition-all duration-300 border-2 border-blue-900'>{t("See All Features -fourthsection")}</button>
                </Link>
              </div>
            </div>
            <div className='flex flex-col md:flex-row mx-[2vw] gap-x-[4vw] mt-[10vh]'>
              <div>
                <CSSTransition
                  in={isAnimated}
                  timeout={3000}
                  classNames="slide-up"
                  unmountOnExit
                >
                  <img className='w-[60vw] md:mx-[0vw] mb-[5vh] mx-auto' src={IntegrationsIcon} alt='not found'/>
                </CSSTransition>
              </div>
              <div className='flex flex-col justify-center gap-y-[4vh]'>
                <div className='text-3xl text-blue-900 font-bold'>{t("Integrations -fourthsection")}</div>
                <div className='text-xl text-red-600 font-bold'>{t("Seamlessly Integrate Existing Software with SambaPOS -fourthsection")}</div>
                <div className='text-blue-900'>
                  {t("Integrating SambaPOS with other applications is so easy. Thanks to our integration with numerous applications, you are afforded more solutions. -fourthsection")}
                </div>
                <Link to="products">
                  <button className='text-white bg-blue-900 py-[2vh] md:w-[10vw] w-[45vw] rounded-lg hover:text-blue-900 hover:bg-white transition-all duration-300 border-2 border-blue-900'>{t("See All Features -fourthsection")}</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FourthSection;