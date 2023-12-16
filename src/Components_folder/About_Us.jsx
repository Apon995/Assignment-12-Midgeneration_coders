import React, { useEffect, useState } from "react";
import contactImg from "../assets/contact-image.png";
import useFetch from "../CustomHooks_folder/useFetch";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
import Loading from "../Components_folder/Loading.jsx";
import ServiceCart from "../Cart_Folder/ServiceCart.jsx";
import { Link, useLocation } from "react-router-dom";
import member1 from "../assets/OurTeamMember/member1.png"
import member2 from "../assets/OurTeamMember/member2.png"
import member3 from "../assets/OurTeamMember/member3.png"
import member4 from "../assets/OurTeamMember/member4.png"
import aboutSlide1 from "../assets/about-slide.png";
import AxiosError from "./AxiosError.jsx";
import { motion } from "framer-motion"






function About_us() {
  const axiosFetch = useFetch();
  const [perView, setPerview] = useState(1);
  const location = useLocation();


  const handleScreen = () => {
    if (window.innerWidth <= 576) {
      setPerview(1);
    } else if (window.innerWidth > 576 && window.innerWidth <= 992) {
      setPerview(2);
    } else {
      setPerview(3);
    }
  };

  useEffect(() => {
    handleScreen();

    const handleResize = () => {
      handleScreen();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [location.pathname]);


  const {
    isPending,
    error,
    data = [],
  } = useQuery({
    queryKey: ["serviceData"],
    queryFn: () => axiosFetch.get("/services").then((data) => data.data),
  });
  return (
    <section className="min-h-screen px-[4%]">

      <motion.div
        initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        {/* ---about-us-section */}
        <div className="flex gap-3 lg:flex-row-reverse items-center flex-col w-full md:my-28 my-10 ">
          <div className="lg:w-[50%] ">
            <h1 className="text-[#292929] font-[600] leading-[1.2] md:text-3xl text-xl ">
              Welcome to Mid Generation Coders, where passion meets innovation in
              the world of technology!
            </h1>
            <br />

            <p className="text-[#707070] leading-[1.78] md:text-[18px] text-sm">
              At Mid Generation Coders, we believe that age is no barrier to
              mastering the language of the future - coding. Our platform was born
              out of the recognition that learning and excelling in coding isn't
              confined to any particular age group. Whether you're a seasoned
              professional looking to stay updated with the latest tech trends or
              someone exploring coding for the first time, we provide a nurturing
              and inclusive environment for all. What sets us apart is our
              dedication to catering specifically to individuals within the
              mid-generation spectrum - those who are enthusiastic about
              leveraging technology to shape their futures. Our mission is to
              bridge the gap between generations, fostering a community where
              experienced minds meet youthful zeal, creating a unique synergy that
              drives innovation.
            </p>
          </div>
          <div className="lg:w-[50%] lg:p-9">
            <img src={contactImg} alt="" />
          </div>
        </div>

      </motion.div>


      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1}}
        transition={{ duration: 2 }}
      >
        {/* ---service-section-- */}
        <div id="Service" className="py-6 mt-9">
          <div className="flex  justify-center items-center w-full flex-col">
            <br />
            <h1 className="md:text-4xl text-2xl font-bold text-[#343a40] uppercase">
              Our Services
            </h1>
            <span className="text-base text-[#ff695f] opacity-[0.65]">
              OUR SERVICES
            </span>
          </div>
          <br />
          <div className="z-50">
            <Swiper
              slidesPerView={perView}
              spaceBetween={30}
              freeMode={true}
              autoplay={{
                delay: 2900,
                disableOnInteraction: false,
              }}
              modules={[FreeMode, Pagination, Autoplay]}
              className="mySwiper w-full mx-auto"
            >
              {error ? <AxiosError error={error?.message} /> : isPending ? (<Loading />) : (data?.map((service) => (<SwiperSlide key={service?._id}><ServiceCart service={service} /></SwiperSlide>)))}
            </Swiper>
          </div>
        </div>

      </motion.div>

      <br />
      <br />
      <br />

      <motion.div
        initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        {/* ---our-team-member */}
        <div className="flex items-center justify-center flex-col py-11">
          <div className="flex  justify-center items-center w-full flex-col">
            <br />
            <h1 className="md:text-4xl text-2xl text-center font-bold text-[#343a40] uppercase">
              Our expert
              team Member's
            </h1>
            <span className="text-base text-[#ff695f] opacity-[0.65] text-center uppercase">
              Our Members
            </span>
          </div>
          <br />
          <br />
          {/* team-member-row */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-7">
            {/* -member-one- */}
            <div>
              <div className="member">
                <div className="member-img">
                  <img src={member3} alt="member1" />
                  <br />
                </div>
                <div className="member-content">
                  <h3>
                    Kabita Islam
                  </h3>
                  <p>Web Developer<br />
                    & Seo expert</p>
                  <div className="social-links">

                    <ul>
                      <li><Link to="/" >
                        <i className="fa fa-facebook"></i>
                      </Link></li>

                      <li>
                        <Link to="/" >
                          <i className="fa fa-twitter"></i>
                        </Link>
                      </li>

                      <li>
                        <Link to="/">
                          <i className="fa fa-instagram"></i>
                        </Link>
                      </li>

                      <li>
                        <Link to="/" >
                          <i className="fa fa-linkedin"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* --member-two */}
            <div>
              <div className="member">
                <div className="member-img">
                  <img src={member4} alt="member2" />
                  <br />
                </div>
                <div className="member-content">
                  <h3>
                    Apon Mahbub
                  </h3>
                  <p>

                    Front End Developer <br />
                    & Creative Director
                  </p>
                  <div className="social-links">

                    <ul>
                      <li><Link to="/" >
                        <i className="fa fa-facebook"></i>
                      </Link></li>

                      <li>
                        <Link to="/" >
                          <i className="fa fa-twitter"></i>
                        </Link>
                      </li>

                      <li>
                        <Link to="/">
                          <i className="fa fa-instagram"></i>
                        </Link>
                      </li>

                      <li>
                        <Link to="/" >
                          <i className="fa fa-linkedin"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* --member-three */}
            <div>
              <div className="member">
                <div className="member-img">
                  <img src={member1} alt="member3" />
                  <br />
                </div>
                <div className="member-content">
                  <h3>
                    Farzana Akter
                  </h3>
                  <p>Content Writer <br />
                    & Head Of Marketing</p>
                  <div className="social-links">

                    <ul>
                      <li><Link to="/" >
                        <i className="fa fa-facebook"></i>
                      </Link></li>

                      <li>
                        <Link to="/" >
                          <i className="fa fa-twitter"></i>
                        </Link>
                      </li>

                      <li>
                        <Link to="/">
                          <i className="fa fa-instagram"></i>
                        </Link>
                      </li>

                      <li>
                        <Link to="/" >
                          <i className="fa fa-linkedin"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>


            {/* -member-four */}
            <div>
              <div className="member">
                <div className="member-img">
                  <img src={member2} alt="member4" />
                  <br />
                </div>
                <div className="member-content">
                  <h3>
                    Ashiqul islam
                  </h3>
                  <p>
                    SEO Specialist <br />
                    & Full stack Developer</p>
                  <div className="social-links">

                    <ul>
                      <li><Link to="/" >
                        <i className="fa fa-facebook"></i>
                      </Link></li>

                      <li>
                        <Link to="/" >
                          <i className="fa fa-twitter"></i>
                        </Link>
                      </li>

                      <li>
                        <Link to="/">
                          <i className="fa fa-instagram"></i>
                        </Link>
                      </li>

                      <li>
                        <Link to="/" >
                          <i className="fa fa-linkedin"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>

      </motion.div>


      <br />
      <br />
      <br />

      <motion.div
        initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
      {/* ----what-our-client-say */}
      <div className="mt-20" >

        <div className='text-center space-y-2'>
          <h2 className='md:text-4xl text-2xl font-semibold text-[#252525]'>What Our client's Say</h2>
          <span className="md:ext-2xl text-base text-[#ff695f] opacity-[0.65] pt-2">
            our client's
          </span>


        </div>

        <br />
        <br />

        <Swiper
          spaceBetween={10}
          centeredSlides={true}
          navigation={false}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}


          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >



          <SwiperSlide>
            <div className="flex md:flex-row flex-col items-center gap-2 ">
              <div className="md:w-[40%] w-full">
                <img src={aboutSlide1} alt="" className="w-[280px] md:w-fit mx-auto" />
              </div>
              <div className="md:w-[55%] w-full ">

                <div>
                  <h1 className="md:text-3xl text-base font-[600] text-[#2742fd]">Khairul islam , <span className="text-[#343a40] md:text-sm text-xs font-normal">Company of Automobile</span></h1>
                  <br />
                  <p className="md:text-xl text-sm text-[#292929] leading-[1.6] font-medium">Mid Generation Coders has been an absolute game-changer for our business. Their tech services are unparalleled! The team seamlessly integrated innovative solutions, optimizing our operations and boosting efficiency. Their commitment to understanding our unique needs and delivering tailored tech solutions was impressive. Thanks to them, our growth trajectory has been phenomenal.</p>
                </div>

              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide >
            <div className="flex md:flex-row flex-col items-center gap-2">
              <div className="md:w-[40%] w-full">
                <img src={aboutSlide1} alt="" />
              </div>
              <div className="md:w-[55%] w-full">

                <div>
                  <h1 className="md:text-3xl text-base font-[600] text-[#2742fd]">Abdur Rahman, <span className="text-[#343a40] md:text-sm text-xs font-normal">Maya Fashion</span></h1>
                  <br />
                  <p className="md:text-xl text-sm text-[#292929] leading-[1.6] font-medium">
                    Mid Generation Coders is a gem in the tech service industry. Their expertise and professionalism are evident from the get-go. They didn't just provide a service; they became strategic partners, guiding us through complex technological advancements. Their solutions were not just about fixing problems; they were about enhancing our capabilities for the long run. Working with them was not just a service experience; it was a journey towards technological excellence.
                  </p>
                </div>

              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide >
            <div className="flex md:flex-row flex-col items-center gap-2 ">
              <div className="md:w-[40%] w-full">
                <img src={aboutSlide1} alt="" />
              </div>
              <div className="md:w-[55%] w-full">

                <div>
                  <h1 className="md:text-3xl text-base font-[600] text-[#2742fd]">Ashiqul islam ayon , <span className="text-[#343a40]  md:text-sm text-xs  font-normal">MidGeneration.com - ower</span></h1>
                  <br />
                  <p className="md:text-xl text-sm text-[#292929] leading-[1.6] font-medium">
                    I can't recommend Mid Generation Coders enough! Their team's dedication to delivering top-notch tech services is unmatched. They not only met but exceeded our expectations. Their attention to detail, promptness in addressing concerns, and ability to adapt to our evolving needs made the collaboration seamless. Thanks to them, our digital infrastructure is now robust, reliable, and ready for future challenges.
                  </p>
                </div>

              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide >
            <div className="flex md:flex-row flex-col items-center gap-2 ">
              <div className="md:w-[40%] w-full">
                <img src={aboutSlide1} alt="" />
              </div>
              <div className="md:w-[55%] w-full">

                <div>
                  <h1 className="md:text-3xl text-base font-[600] text-[#2742fd]">Mark zuckerberg, <span className="text-[#343a40] md:text-sm text-xs font-normal">Facebook.com - seo & owner</span></h1>
                  <br />
                  <p className="md:text-xl text-sm text-[#292929] leading-[1.6] font-medium">
                    I can't recommend Mid Generation Coders enough! Their team's dedication to delivering top-notch tech services is unmatched. They not only met but exceeded our expectations. Their attention to detail, promptness in addressing concerns, and ability to adapt to our evolving needs made the collaboration seamless. Thanks to them, our digital infrastructure is now robust, reliable, and ready for future challenges.
                  </p>
                </div>

              </div>
            </div>
          </SwiperSlide>





        </Swiper>




      </div>

      </motion.div>



      <br />
      <br />
      <br />
    </section>
  );
}

export default About_us;
