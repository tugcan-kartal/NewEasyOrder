import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import TechsImage from "../static/techs.png";
import { useInView } from 'react-intersection-observer';
import { useTranslation } from "react-i18next";

const SecondSection = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setIsAnimated(true);
    }
  }, [inView]);

  const { t } = useTranslation();

  return (
    <div className='h-screen'>
      <div className='flex flex-col gap-y-[5vh]'>
        <div className='flex justify-center items-center'>
          <div ref={ref}>
            <CSSTransition
              in={isAnimated}
              timeout={3000} // Animasyon süresi (ms)
              classNames="slide-up" // CSS sınıf ismi
              unmountOnExit
            >
              <img className='md:w-[60vw]' src={TechsImage} alt="Techs" />
            </CSSTransition>
          </div>
        </div>

        <div>
          <div className='md:text-2xl text-xl flex flex-col text-blue-900 md:px-[0] px-[10vw] text-center'>
            <CSSTransition
              in={isAnimated}
              timeout={1000}
              classNames="fade"
              unmountOnExit
            >
              <div>
                <p><span className='font-semibold'>SambaPOS</span> {t("is the ultimate restaurant POS software. Our advanced features provide you with the means -secondsection")}</p>
                <p>{t("is the ultimate restaurant POS software. Our advanced features provide you with the means -secondsection")}</p>
                <p>{t("be used to make important business decisions. -secondsection")}</p>
              </div>
            </CSSTransition>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondSection;