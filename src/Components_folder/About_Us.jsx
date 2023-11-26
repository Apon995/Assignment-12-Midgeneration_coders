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
    </section>
  );
}

export default About_us;
