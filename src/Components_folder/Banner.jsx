import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BannerImg from "../assets/Banner-image.png";
import shape1 from "../assets/ShapeFolder/shape1.png";
import shape2 from "../assets/ShapeFolder/shape2.png";
import shape3 from "../assets/ShapeFolder/shape3.png";
import shape4 from "../assets/ShapeFolder/shape4.png";
import shape5 from "../assets/ShapeFolder/shape5.png";
import shape6 from "../assets/ShapeFolder/shape6.png";
import contactImg from "../assets/contact-image.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion, useAnimation } from "framer-motion";

function Banner() {
    const controls = useAnimation();

    const location = useLocation();



    return (
        <div
            id="Banner"
            className={`lg:px-[5%]  md:px-[2%] px-[2%] gap-4 ${location?.pathname == "/Login" ||
                    location.pathname == "/Register" ||
                    location.pathname == "/Dashboard"
                    ? "hidden"
                    : "flex"
                } items-center md:flex-row flex-col pt-10 py-5 `}
        >
            <div className="md:w-[50%] w-full ">
                <motion.div
                    animate={controls}
                    initial={{ opacity: 0, y2: 90 }}
                    whileInView={{ opacity: 1, y2: 1 }}
                    transition={{ duration: 2 }}
                >
                    {location.pathname == "/Contact" || location.pathname == "/About" ? (
                        <div>
                            <h1 className="text-white font-bold lg:text-7xl md:text-5xl text-3xl text-center pb-3">
                                {location.pathname == "/About" ? "About us" : "Contact us"}
                            </h1>
                            <p className="text-center text-white text-base font-normal">
                                {location.pathname == "/About" ? "Home/About" : "Home/Contact"}
                            </p>
                        </div>
                    ) : (
                        <Swiper
                            spaceBetween={10}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="text-white ">
                                    <h1 className="text-xl pb-5 text-white font-medium">
                                        Welcome to Mid Generation coders
                                    </h1>
                                    <h2 className="lg:text-7xl md:text-5xl text-3xl font-bold leading-normal lg:leading-[90px] text-[#ff695f]">
                                        Wanna build
                                        <span className="text-[#03a4ed]"> a website</span> for your
                                        <span className="text-[#2742fd]">business</span>?
                                    </h2>
                                    <br />

                                    <p className="text-base font-medium text-white lg:w-[500px] ">
                                        Our professionals will give you the best idea and they will
                                        help you to reach your goal.
                                    </p>
                                    <br />

                                    <div className="flex gap-4  md:w-fit items-center">
                                        <button className="bg-[#2742fd] p-4 px-6 rounded-[20px] md:text-base text-base">
                                            {" "}
                                            <i className="fa fa-phone "></i> Call now
                                        </button>

                                        <h2 className="font-normal md:text-xl text-base">
                                            +88034434090
                                        </h2>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="text-white ">
                                    <h1 className="text-xl pb-5 text-[#03a4ed] font-bold uppercase">
                                        {" "}
                                        Grow up your business!
                                    </h1>
                                    <h2 className="lg:text-7xl md:text-5xl text-3xl font-bold leading-normal lg:leading-[70px] text-[#ff695f]">
                                        Grow your <span className="text-white">Busniess by</span>{" "}
                                        <span className="text-[#2742fd]">the help of </span>{" "}
                                        <span className="text-[#03a4ed]">Technology !</span>
                                    </h2>
                                    <br />

                                    <p className="text-base font-medium  lg:w-[450px] text-white">
                                        A company website is a great way to increase conversion
                                        rates and reach a wider customer base.
                                    </p>
                                    <br />

                                    <button className="bg-[#03a4ed] p-4 px-6 rounded-[20px] text-base">
                                        Watch videos
                                    </button>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="text-white ">
                                    <h1 className="text-xl pb-5 text-[#ff695f] font-medium">
                                        Idea !
                                    </h1>
                                    <h2 className="lg:text-7xl md:text-5xl text-3xl font-bold leading-normal lg:leading-[90px]">
                                        Get the
                                        <span className="text-[#03a4ed]"> best Idea's</span> for
                                        your
                                        <span className="text-[#2742fd]">
                                            {" "}
                                            business . <span className="text-[#ff695f]"></span>
                                        </span>
                                    </h2>
                                    <br />

                                    <p className="text-base font-medium  lg:w-[550px] w-fit text-white">
                                        Our professionals will give you the best idea and they will
                                        help you to reach your goal.
                                    </p>
                                    <br />

                                    <div className="flex gap-4  lg:w-fit items-center">
                                        <button className="bg-[#03a4ed] p-4 md:px-6 px-3 rounded-[20px] text-base">
                                            {" "}
                                            Our Services
                                        </button>

                                        <h2 className="font-normal md:text-xl text-sm">
                                            {" "}
                                            <i className="fa fa-phone "></i> +88034434090
                                        </h2>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    )}
                </motion.div>
            </div>

            <div className="md:w-[50%]  w-full pt-8 md:pt-0">
              
               
                    <img
                        className="bannerimg md:w-fit w-[280px] mx-auto"
                        src={`${location.pathname == "/Contact" || location.pathname == "/About"
                                ? contactImg
                                : BannerImg
                            }`}
                        alt=""
                    />
               
            </div>

            <div className="lg:block hidden">
                <img className="shape1" src={shape1} alt="" />
                <img className="shape2" src={shape2} alt="" />
                <img className="shape3" src={shape3} alt="" />
                <img className="shape4" src={shape4} alt="" />
                <img className="shape5" src={shape5} alt="" />
                <img className="shape6" src={shape6} alt="" />
            </div>
        </div>
    );
}

export default Banner;
