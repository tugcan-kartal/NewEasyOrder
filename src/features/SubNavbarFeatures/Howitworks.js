import React, { useEffect, useState } from 'react';
import HowItWorksImage from "../../static/How-it-works.png";
import BusinessFundingImage from "../../static/businessfunding-howitwork.png";
import GhostKitchenImage from "../../static/ghostkitchen-howitwork.png";
import DriveThruPosImage from "../../static/drivethrupos-howitwork.png";
import DeliveryImage from "../../static/delivery-howitwork.png"
import TableServiceImage from "../../static/tableservice-howitwork.png";
import QuickServiceImage from "../../static/quickservice-howitwork.png";
import FullServiceImage from "../../static/fullservice-howitwork.png";
import IntegrationImage from "../../static/integration-howitwork.png";
import { CSSTransition } from 'react-transition-group';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from "react-i18next";



const Howitworks = () => {

    const { t } = useTranslation();

    const [isAnimated, setIsAnimated] = useState(false);
    const [isAnimated2, setIsAnimated2] = useState(false);
    const [isAnimated3, setIsAnimated3] = useState(false);
    const [isAnimated4, setIsAnimated4] = useState(false);
    const [isAnimated5, setIsAnimated5] = useState(false);
    const [isAnimated6, setIsAnimated6] = useState(false);
    const [isAnimated7, setIsAnimated7] = useState(false);
    const [isAnimated8, setIsAnimated8] = useState(false);
    const [isAnimated9, setIsAnimated9] = useState(false);

    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    const [ref2, inView2] = useInView({
        triggerOnce: true,
    });

    const [ref3, inView3] = useInView({
        triggerOnce: true,
    });

    const [ref4, inView4] = useInView({
        triggerOnce: true,
    });

    const [ref5, inView5] = useInView({
        triggerOnce: true,
    });

    const [ref6, inView6] = useInView({
        triggerOnce: true,
    });

    const [ref7, inView7] = useInView({
        triggerOnce: true,
    });

    const [ref8, inView8] = useInView({
        triggerOnce: true,
    });

    const [ref9, inView9] = useInView({
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
        setIsAnimated(true);
        }
    }, [inView]);

    useEffect(() => {
        if (inView2) {
            setIsAnimated2(true);
        }
    }, [inView2]);

    useEffect(() => {
        if (inView3) {
        setIsAnimated3(true);
        }
    }, [inView3]);

    useEffect(() => {
        if (inView4) {
            setIsAnimated4(true);
        }
    }, [inView4]);

    useEffect(() => {
        if (inView5) {
        setIsAnimated5(true);
        }
    }, [inView5]);

    useEffect(() => {
        if (inView6) {
            setIsAnimated6(true);
        }
    }, [inView6]);

    useEffect(() => {
        if (inView7) {
        setIsAnimated7(true);
        }
    }, [inView7]);

    useEffect(() => {
        if (inView8) {
        setIsAnimated8(true);
        }
    }, [inView8]);

    useEffect(() => {
        if (inView9) {
        setIsAnimated9(true);
        }
    }, [inView9]);

  return (
    <div>
        <div>


            {/* Own the online kısmı */}
            <div className='flex justify-center items-center gap-x-[5vw]'>
                <div className='md:h-[80vh] md:w-[50vw] flex flex-col gap-y-[5vh] md:pt-[15vh] pt-[5vh] pl-[6vw]'>
                    <div className='text-red-600 text-xl font-bold'>{t("Dominate the Online Market with SambaPOS -howitworks")}</div>
                    <div>
                        <div className='text-2xl font-bold'>{t("Create Your Own Branded Online Ordering System -howitworks")}</div>
                        <div className='text-2xl font-semibold'>{t("Designed for You and Your Customer -howitworks")}</div>
                    </div>
                    <div>
                        {t("Tailored to Meet Your Needs and Delight Your Customers With SambaPOS, you can establish your own branded ordering app and webpage, allowing you to forge a strong connection with your community. Customers will effortlessly discover your online presence, access essential business information, and seamlessly place orders from any device. Enhance your visibility on Google, surpassing competitors, and effortlessly attract new customers to your business. SambaPOS ensures that this goal is easily achieved. Ultimately, your loyal customers will have your app in their pocket, enabling you to engage them with highly relevant and personalized offerings. -howitworks")}
                    </div>
                </div>

                <div ref={ref}>
                    <CSSTransition
                        in={isAnimated}
                        timeout={3000}
                        classNames="slide-up"
                        unmountOnExit
                    >
                        <img className='w-[40vw] hidden md:block' src={HowItWorksImage} alt="not found" />
                    </CSSTransition>
                </div>
            </div>

            {/* For you for your customers açıklamaları ve resimleri */}
            <div>

                <div className='flex md:flex-row flex-col justify-center items-center gap-x-[10vw] gap-y-[10vh] mt-[15vh]'>

                    <div className='flex flex-col gap-y-[5vh] pl-[5vw] md:w-[40vw] w-[80vw] pt-[10vh]'>

                        <div className='flex items-center gap-x-[1vw]'>
                            <div className='px-[1.5vw] py-[1vh] rounded-2xl text-3xl bg-gray-900 text-red-400'>1</div>
                            <div>
                                <div className='text-red-600 font-semibold'>{t("Business Funding -howitworks")}</div>
                                <div className='text-2xl font-semibold'>{t("Give your business a boost. -howitworks")}</div>
                            </div>
                        </div>

                        <div className='text-gray-500'>
                            {t("From expanding your business to building up your inventory. Business funding is there to help you get to the next level. We have partnered with YouLend to offer you flexible funding that’s repaid as a fixed percentage of your daily sales revenues. If you’ve had a bumper month, you’ll pay a little more. And if it’s quiet, you’ll pay a little less. Built with your business in mind. -howitworks")}
                        </div>

                        <a href="/business-funding">
                            <button className='bg-red-400 hover:bg-blue-900 transition-all duration-300 px-[2vw] py-[1.5vh] rounded-2xl text-white font-semibold'>
                                {t("More Details -howitworks")}
                            </button>
                        </a>

                    </div>

                    <div ref={ref2} className='md:w-[40vw] w-[80vw]'>
                        <CSSTransition
                            in={isAnimated2}
                            timeout={3000}
                            classNames="slide-up"
                            unmountOnExit
                        >
                            <img src={BusinessFundingImage} alt="" />
                        </CSSTransition>
                    </div>               

                </div>

                <div className='flex md:flex-row flex-col justify-center items-center gap-x-[10vw] gap-y-[10vh] mt-[15vh]'>

                    <div className='flex flex-col gap-y-[5vh] pl-[5vw] md:w-[40vw] w-[80vw] pt-[10vh] md:order-1'>

                        <div className='flex items-center gap-x-[1vw]'>
                            <div className='px-[1.5vw] py-[1vh] rounded-2xl text-3xl bg-gray-900 text-red-400'>2</div>
                            <div>
                                <div className='text-red-600 font-semibold'>{t("Ghost Kitchen -howitworks")}</div>
                                <div className='text-2xl font-semibold'>{t("Launch your ghost kitchen and virtual restaurant with the power of SambaPOS! -howitworks")}</div>
                            </div>
                        </div>

                        <div className='text-gray-500'>
                            {t("Ghost kitchens are becoming a growing trend in the hospitality industry. Are you ready to take on the challenge of managing one? With delivery, takeaway, and order-ahead options chosen by many customers, you need to have a comprehensive solution to manage them all. SambaPOS can help you automate tasks, fulfil all orders, and increase sales with minimum effort, leaving you with more time to scale your business. -howitworks")}
                        </div>

                        <a href="/ghost-kitchen">
                            <button className='bg-red-400 hover:bg-blue-900 transition-all duration-300 px-[2vw] py-[1.5vh] rounded-2xl text-white font-semibold'>
                                {t("More Details -howitworks")}
                            </button>
                        </a>
                    </div>

                    <div ref={ref3} className='md:w-[40vw] w-[80vw]'>
                        <CSSTransition
                            in={isAnimated3}
                            timeout={3000}
                            classNames="slide-up"
                            unmountOnExit
                        >
                            <img src={GhostKitchenImage} alt="" />
                        </CSSTransition>
                    </div>

                </div>

                <div className='flex md:flex-row flex-col justify-center items-center gap-x-[10vw] gap-y-[10vh] mt-[15vh]'>

                    <div className='flex flex-col gap-y-[5vh] pl-[5vw] md:w-[40vw] w-[80vw] pt-[10vh]'>

                        <div className='flex items-center gap-x-[1vw]'>
                            <div className='px-[1.5vw] py-[1vh] rounded-2xl text-3xl bg-gray-900 text-red-400'>3</div>
                            <div>
                                <div className='text-red-600 font-semibold'>{t("Drive Thru POS -howitworks")}</div>
                                <div className='text-2xl font-semibold'>{t("SambaPOS for Drive Thru Restaurants – Impeccable Solution for Orders and More -howitworks")}</div>
                            </div>
                        </div>

                        <div className='text-gray-500'>
                            {t("The Drive Thru restaurant experience involves multiple stages and needs innovation each and every step of the way. That means a fully integrated POS system is the route to success. With SambaPOS, you can connect your drive thru service, back office, and kitchen operations. Get started with SambaPOS today and work with the most secure and beneficial software platform! -howitworks")}
                        </div>

                        <a href="/drive-thru-pos">
                            <button className='bg-red-400 hover:bg-blue-900 transition-all duration-300 px-[2vw] py-[1.5vh] rounded-2xl text-white font-semibold'>
                                {t("More Details -howitworks")}
                            </button>
                        </a>
                    </div>

                    <div ref={ref4} className='md:w-[40vw] w-[80vw]'>
                        <CSSTransition
                            in={isAnimated4}
                            timeout={3000}
                            classNames="slide-up"
                            unmountOnExit
                        >
                            <img src={DriveThruPosImage} alt="" />
                        </CSSTransition>
                    </div>

                </div>

                <div className='flex md:flex-row flex-col justify-center items-center gap-x-[10vw] gap-y-[10vh] mt-[15vh]'>

                    <div className='flex flex-col gap-y-[5vh] pl-[5vw] md:w-[40vw] w-[80vw] pt-[10vh] md:order-1'>

                        <div className='flex items-center gap-x-[1vw]'>
                            <div className='px-[1.5vw] py-[1vh] rounded-2xl text-3xl bg-gray-900 text-red-400'>4</div>
                            <div>
                                <div className='text-red-600 font-semibold'>{t("Delivery -howitworks")}</div>
                                <div className='text-2xl font-semibold'>{t("Serve your customers their delivery and takeaway orders – on time and with 100% accuracy! -howitworks")}</div>
                            </div>
                        </div>

                        <div className='text-gray-500'>
                            {t("With our restaurant delivery POS software, you can handle multiple processes like syncing your menu, assigning delivery drivers, sending order notifications, and providing loyalty and reward programs. Expand your business with SambaPOS and watch as customers come back for more! -howitworks")}
                        </div>

                        <a href="/delivery-solutions">
                            <button className='bg-red-400 hover:bg-blue-900 transition-all duration-300 px-[2vw] py-[1.5vh] rounded-2xl text-white font-semibold'>
                                {t("More Details -howitworks")}
                            </button>
                        </a>
                    </div>

                    <div ref={ref5} className='md:w-[40vw] w-[80vw]'>
                        <CSSTransition
                            in={isAnimated5}
                            timeout={3000}
                            classNames="slide-up"
                            unmountOnExit
                        >
                            <img src={DeliveryImage} alt="" />
                        </CSSTransition>
                    </div>

                </div>

                <div className='flex md:flex-row flex-col justify-center items-center gap-x-[10vw] gap-y-[10vh] mt-[15vh]'>

                    <div className='flex flex-col gap-y-[5vh] pl-[5vw] md:w-[40vw] w-[80vw] pt-[10vh]'>

                        <div className='flex items-center gap-x-[1vw]'>
                            <div className='px-[1.5vw] py-[1vh] rounded-2xl text-3xl bg-gray-900 text-red-400'>5</div>
                            <div>
                                <div className='text-red-600 font-semibold'>{t("Table Service -howitworks")}</div>
                                <div className='text-2xl font-semibold'>{t("A Table Service Restaurant POS Designed for Efficiency and Great Customer Experience -howitworks")}</div>
                            </div>
                        </div>

                        <div className='text-gray-500'>
                            {t("Ensure that you exceed your customers’ expectations. Effectively manage your wait staff and kitchen. Expedite service without compromising on quality. We help you set up a well-organized table service model that can deliver exceptional benefits for your business. -howitworks")}
                        </div>

                        <a href="/table-service">
                            <button className='bg-red-400 hover:bg-blue-900 transition-all duration-300 px-[2vw] py-[1.5vh] rounded-2xl text-white font-semibold'>
                                {t("More Details -howitworks")}
                            </button>
                        </a>
                    </div>

                    <div ref={ref6} className='md:w-[40vw] w-[80vw]'>
                        <CSSTransition
                            in={isAnimated6}
                            timeout={3000}
                            classNames="slide-up"
                            unmountOnExit
                        >
                            <img src={TableServiceImage} alt="" />
                        </CSSTransition>
                    </div>

                </div>

                <div className='flex md:flex-row flex-col justify-center items-center gap-x-[10vw] gap-y-[10vh] mt-[15vh]'>

                    <div className='flex flex-col gap-y-[5vh] pl-[5vw] md:w-[40vw] w-[80vw] pt-[10vh] md:order-1'>

                        <div className='flex items-center gap-x-[1vw]'>
                            <div className='px-[1.5vw] py-[1vh] rounded-2xl text-3xl bg-gray-900 text-red-400'>6</div>
                            <div>
                                <div className='text-red-600 font-semibold'>{t("Quick Service -howitworks")}</div>
                                <div className='text-2xl font-semibold'>{t("All-in-One Solution for Quick Service Restaurants -howitworks")}</div>
                            </div>
                        </div>

                        <div className='text-gray-500'>
                            {t("Stand out from the competition and ensure speedy service for your customers. With SambaPOS for quick service restaurants and cafes, you can keep the line moving and ensure perfection and accuracy in orders. SambaPOS software offers solutions for queue management, kitchen service optimization, billing and payments, menus, inventory management, smart reporting, and more. -howitworks")}
                        </div>

                        <a href="/quick-service">
                            <button className='bg-red-400 hover:bg-blue-900 transition-all duration-300 px-[2vw] py-[1.5vh] rounded-2xl text-white font-semibold'>
                                {t("More Details -howitworks")}
                            </button>
                        </a>
                    </div>

                    <div ref={ref7} className='md:w-[40vw] w-[80vw]'>
                        <CSSTransition
                            in={isAnimated7}
                            timeout={3000}
                            classNames="slide-up"
                            unmountOnExit
                        >
                            <img src={QuickServiceImage} alt="" />
                        </CSSTransition>
                    </div>

                </div>

                <div className='flex md:flex-row flex-col justify-center items-center gap-x-[10vw] gap-y-[10vh] mt-[15vh]'>

                    <div className='flex flex-col gap-y-[5vh] pl-[5vw] md:w-[40vw] w-[80vw] pt-[10vh]'>

                        <div className='flex items-center gap-x-[1vw]'>
                            <div className='px-[1.5vw] py-[1vh] rounded-2xl text-3xl bg-gray-900 text-red-400'>7</div>
                            <div>
                                <div className='text-red-600 font-semibold'>{t("Full Service -howitworks")}</div>
                                <div className='text-2xl font-semibold'>{t("SambaPOS – the Full Service Restaurant POS that synchronizes software with restaurant service -howitworks")}</div>
                            </div>
                        </div>

                        <div className='text-gray-500'>
                            {t("Your restaurant needs to deliver a complete and satisfying dining experience to your customers. With SambaPOS, you can do that and more. Orders, payments, kitchen management, performance analysis – we have solutions for them all. Streamline your operations and provide your guests with a memorable meal. -howitworks")}
                        </div>

                        <a href="/full-service">
                            <button className='bg-red-400 hover:bg-blue-900 transition-all duration-300 px-[2vw] py-[1.5vh] rounded-2xl text-white font-semibold'>
                                {t("More Details -howitworks")}
                            </button>
                        </a>
                    </div>

                    <div ref={ref8} className='md:w-[40vw] w-[80vw]'>
                        <CSSTransition
                            in={isAnimated8}
                            timeout={3000}
                            classNames="slide-up"
                            unmountOnExit
                        >
                            <img src={FullServiceImage} alt="" />
                        </CSSTransition>
                    </div>

                </div>

                <div className='flex md:flex-row flex-col justify-center items-center gap-x-[10vw] gap-y-[10vh] mt-[15vh]'>

                    <div className='flex flex-col gap-y-[5vh] pl-[5vw] md:w-[40vw] w-[80vw] pt-[10vh] md:order-1'>

                        <div className='flex items-center gap-x-[1vw]'>
                            <div className='px-[1.5vw] py-[1vh] rounded-2xl text-3xl bg-gray-900 text-red-400'>8</div>
                            <div>
                                <div className='text-red-600 font-semibold'>{t("Integrations -howitworks")}</div>
                                <div className='text-2xl font-semibold'>{t("SambaPOS assist to maximize the power of your POS with integration solutions -howitworks")}</div>
                            </div>
                        </div>

                        <div className='text-gray-500'>
                            {t("As a restaurant business, you need a streamlined and integrated POS solution that allows you to process sales, transactions, inventory, customer base and more. To thrive in an age of disruption and digitalization, choose SambaPOS to propel your business to the next level! -howitworks")}
                        </div>

                        <a href="/integrations">
                            <button className='bg-red-400 hover:bg-blue-900 transition-all duration-300 px-[2vw] py-[1.5vh] rounded-2xl text-white font-semibold'>
                                {t("More Details -howitworks")}
                            </button>
                        </a>
                    </div>

                    <div ref={ref9} className='md:w-[40vw] w-[80vw]'>
                        <CSSTransition
                            in={isAnimated9}
                            timeout={3000}
                            classNames="slide-up"
                            unmountOnExit
                        >
                            <img src={IntegrationImage} alt="" />
                        </CSSTransition>
                    </div>

                </div>

            </div>

            {/* Cycle Repeats */}
            <div className='flex flex-col items-center justify-center gap-y-[5vh] mt-[5vh]'>
              <div className='spinner'></div>
              <div className='text-lg font-semibold text-gray-700'>{t("And the cycle repeats. -howitworks")}</div>
            </div>
        </div>
    </div>
  )
}

export default Howitworks