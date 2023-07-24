import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import RestaurantIcon from "../static/restaurant-icon.png";
import DeliveryIcon from "../static/delivery.png";
import BeachesIcon from "../static/beaches.png";
import CafeIcon from "../static/cafe-icon.png";
import FastFoodIcon from "../static/fastfood.png";
import { useInView } from 'react-intersection-observer';
import { useTranslation } from "react-i18next";


const ThirdSection = () => {
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
      <div className='pb-[10vh]'>
        <div className='text-3xl text-blue-900 font-bold text-center mb-[10vh]'>
          {t("All-in-one solution -thirdsection")} <div className='md:hidden block'></div>{t("for your business -thirdsection")} 
        </div>

        <div className='flex md:flex-row flex-col justify-center md:gap-x-[6vw]'>
          <div className='flex flex-col gap-y-[8vh]'>
            <div className='flex items-center md:gap-x-[2vw] gap-x-[10vw] md:px-[0vw] px-[5vw]'>
              <div ref={ref}>
                <CSSTransition
                  in={isAnimated}
                  timeout={3000} // Animasyon süresi (ms)
                  classNames="slide-up" // CSS sınıf ismi
                  unmountOnExit
                >
                  <img className='md:w-[5vw] w-[35vw]' src={RestaurantIcon} alt='not found' />
                </CSSTransition>
              </div>

              <div className='flex flex-col gap-y-[1vh]'>
                <div className='text-2xl font-bold text-blue-900'>{t("Restaurants -thirdsection")}</div>
                <div className='text-blue-900 text-lg'>
                  <p>{t("Work with an infrastructure that was specifically built for high-functioning -thirdsection")}</p>
                  <p>{t("restaurants. Instantly send orders to the kitchen display or printer. Print and -thirdsection")}</p>
                  <p>{t("split bills right at the table. -thirdsection")}</p>
                </div>
              </div>
            </div>

            <div className='flex items-center md:gap-x-[2vw] gap-x-[10vw] md:px-[0vw] px-[5vw]'>
              <div>
                <CSSTransition
                  in={isAnimated}
                  timeout={3000}
                  classNames="slide-up"
                  unmountOnExit
                >
                  <img className='md:w-[5vw] w-[35vw]' src={DeliveryIcon} alt='not found' />
                </CSSTransition>
              </div>

              <div className='flex flex-col gap-y-[1vh]'>
                <div className='text-2xl font-bold text-blue-900'>{t("Delivery & Take-aways -thirdsection")}</div>
                <div className='text-blue-900 text-lg'>
                  <p>{t("Easily swap between various menus and price lists. Gain easy access to -thirdsection")}</p>
                  <p>{t("customer info while taking orders with the Caller ID feature. You can also -thirdsection")}</p>
                  <p>{t("take orders with Twitter. -thirdsection")}</p>
                </div>
              </div>
            </div>

            <div className='flex items-center md:gap-x-[2vw] gap-x-[10vw] md:px-[0vw] px-[5vw]'>
              <div>
                <CSSTransition
                  in={isAnimated}
                  timeout={3000}
                  classNames="slide-up"
                  unmountOnExit
                >
                  <img className='md:w-[5vw] w-[35vw]' src={BeachesIcon} alt='not found' />
                </CSSTransition>
              </div>

              <div className='flex flex-col gap-y-[1vh]'>
                <div className='text-2xl font-bold text-blue-900'>{t("Beaches & Pools -thirdsection")}</div>
                <div className='text-blue-900 text-lg'>
                  <p>{t("Sambacard lets you offer custom membership cards so members can pay -thirdsection")}</p>
                  <p>{t("quickly without carrying cash. -thirdsection")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-y-[8vh] md:mt-[0vh] mt-[7vh]'>
            <div className='flex items-center md:gap-x-[2vw] gap-x-[10vw] md:px-[0vw] px-[5vw]'>
              <div>
                <CSSTransition
                  in={isAnimated}
                  timeout={3000}
                  classNames="slide-up"
                  unmountOnExit
                >
                  <img className='md:w-[5vw] w-[35vw]' src={CafeIcon} alt='not found' />
                </CSSTransition>
              </div>

              <div className='flex flex-col gap-y-[1vh]'>
                <div className='text-2xl font-bold text-blue-900'>{t("Cafes & Bars -thirdsection")}</div>
                <div className='text-blue-900 text-lg'>
                  <p>{t("No matter the demand, count on SambaPOS to boost your service speed. -thirdsection")}</p>
                  <p>{t("SambaPOS doesn’t rely on the internet to run. -thirdsection")}</p>
                </div>
              </div>
            </div>

            <div className='flex items-center md:gap-x-[2vw] gap-x-[10vw] md:px-[0vw] px-[5vw]'>
              <div>
                <CSSTransition
                  in={isAnimated}
                  timeout={3000}
                  classNames="slide-up"
                  unmountOnExit
                >
                  <img className='md:w-[5vw] w-[35vw]' src={FastFoodIcon} alt='not found' />
                </CSSTransition>
              </div>

              <div className='flex flex-col gap-y-[1vh]'>
                <div className='text-2xl font-bold text-blue-900'>{t("Fast Food -thirdsection")}</div>
                <div className='text-blue-900 text-lg'>
                  <p>{t("Time is money. SambaPOS can fulfill the needs of even the most fast and -thirdsection")}</p>
                  <p>{t("furious restaurant environments. -thirdsection")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;