import React from "react";
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
import { Link } from "react-router-dom";
import member1 from "../assets/OurTeamMember/member1.png"
import member2 from "../assets/OurTeamMember/member2.png"
import member3 from "../assets/OurTeamMember/member3.png"
import member4 from "../assets/OurTeamMember/member4.png"
import aboutSlide1 from "../assets/about-slide.png";
import AxiosError from "./AxiosError.jsx";






function About_us() {
  const axiosFetch = useFetch();

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
      {/* ---about-us-section */}
      <div className="flex gap-3 lg:flex-row-reverse items-center flex-col w-full my-28 ">
        <div className="lg:w-[50%] ">
          <h1 className="text-[#292929] font-[600] leading-[1.2] text-3xl ">
            Welcome to Mid Generation Coders, where passion meets innovation in
            the world of technology!
          </h1>
          <br />

          <p className="text-[#707070] leading-[1.78] text-[18px]">
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

      {/* ---service-section-- */}
      <div id="Service" className="py-6">
        <div className="flex  justify-center items-center w-full flex-col">
          <br />
          <h1 className="text-4xl font-bold text-[#343a40] uppercase">
            What we Offer
          </h1>
          <span className="text-base text-[#ff695f] opacity-[0.65]">
            OUR SERVICES
          </span>
        </div>
        <br />
        <div className="px-[5%] z-50">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            autoplay={{
              delay: 2900,
              disableOnInteraction: false,
            }}
            modules={[FreeMode, Pagination, Autoplay]}
            className="mySwiper w-full mx-auto"
          >
            {error ? (
              <AxiosError error={error?.message} />
            ) : isPending ? (
              <Loading />
            ) : (
              data?.map((service) => (
                <SwiperSlide key={service?._id}>
                  <ServiceCart service={service} />
                </SwiperSlide>
              ))
            )}
          </Swiper>
        </div>
      </div>

      <br />
      <br />
      <br />

      {/* ---our-team-member */}
      <div className="flex items-center justify-center flex-col py-11">
        <div className="flex  justify-center items-center w-full flex-col">
          <br />
          <h1 className="text-4xl font-bold text-[#343a40] uppercase">
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
        <section className="flex items-center gap-7">
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

      <br />
      <br />
      <br />

      {/* ----what-our-client-say */}
      <div >

        <div className='text-center space-y-2'>
          <h2 className='text-4xl font-semibold text-[#252525]'>What Our client's Say</h2>
          <span className="text-2xl text-[#ff695f] opacity-[0.65] pt-2">
            our client's
          </span>


        </div>

        <br />
        <br />

        <Swiper
          spaceBetween={10}
          centeredSlides={true}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}


          modules={[Pagination, Navigation]}
          className="mySwiper"
        >



          <SwiperSlide>
            <div className="flex items-center gap-2 ">
              <div className="w-[40%]">
                <img src={aboutSlide1} alt="" />
              </div>
              <div className="w-[55%] ">

                <div>
                  <h1 className="text-3xl font-[600] text-[#2742fd]">Khairul islam , <span className="text-[#343a40] text-sm font-normal">Company of Automobile</span></h1>
                  <br />
                  <p className="text-xl text-[#292929] leading-[1.6] font-medium">Mid Generation Coders has been an absolute game-changer for our business. Their tech services are unparalleled! The team seamlessly integrated innovative solutions, optimizing our operations and boosting efficiency. Their commitment to understanding our unique needs and delivering tailored tech solutions was impressive. Thanks to them, our growth trajectory has been phenomenal.</p>
                </div>

              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex items-center gap-2 ">
              <div className="w-[40%]">
                <img src={aboutSlide1} alt="" />
              </div>
              <div className="w-[55%] ">

                <div>
                  <h1 className="text-3xl font-[600] text-[#2742fd]">Abdur Rahman, <span className="text-[#343a40] text-sm font-normal">Maya Fashion</span></h1>
                  <br />
                  <p className="text-xl text-[#292929] leading-[1.6] font-medium">
                    Mid Generation Coders is a gem in the tech service industry. Their expertise and professionalism are evident from the get-go. They didn't just provide a service; they became strategic partners, guiding us through complex technological advancements. Their solutions were not just about fixing problems; they were about enhancing our capabilities for the long run. Working with them was not just a service experience; it was a journey towards technological excellence.
                  </p>
                </div>

              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex items-center gap-2 ">
              <div className="w-[40%]">
                <img src={aboutSlide1} alt="" />
              </div>
              <div className="w-[55%] ">

                <div>
                  <h1 className="text-3xl font-[600] text-[#2742fd]">Ashiqul islam ayon , <span className="text-[#343a40] text-sm font-normal">MidGeneration.com - ower</span></h1>
                  <br />
                  <p className="text-xl text-[#292929] leading-[1.6] font-medium">
                    I can't recommend Mid Generation Coders enough! Their team's dedication to delivering top-notch tech services is unmatched. They not only met but exceeded our expectations. Their attention to detail, promptness in addressing concerns, and ability to adapt to our evolving needs made the collaboration seamless. Thanks to them, our digital infrastructure is now robust, reliable, and ready for future challenges.
                  </p>
                </div>

              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex items-center gap-2 ">
              <div className="w-[40%]">
                <img src={aboutSlide1} alt="" />
              </div>
              <div className="w-[55%] ">

                <div>
                  <h1 className="text-3xl font-[600] text-[#2742fd]">Mark zuckerberg, <span className="text-[#343a40] text-sm font-normal">Facebook.com - seo & owner</span></h1>
                  <br />
                  <p className="text-xl text-[#292929] leading-[1.6] font-medium">
                    I can't recommend Mid Generation Coders enough! Their team's dedication to delivering top-notch tech services is unmatched. They not only met but exceeded our expectations. Their attention to detail, promptness in addressing concerns, and ability to adapt to our evolving needs made the collaboration seamless. Thanks to them, our digital infrastructure is now robust, reliable, and ready for future challenges.
                  </p>
                </div>

              </div>
            </div>
          </SwiperSlide>





        </Swiper>




      </div>


      <br />
      <br />
      <br />
    </section>
  );
}

export default About_us;
