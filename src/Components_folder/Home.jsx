import React, { useState } from "react";
import useAuth from "../CustomHooks_folder/useAuth";
import ServiceCart from "../Cart_Folder/ServiceCart";
import useFetch from "../CustomHooks_folder/useFetch";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
import Loading from "../Components_folder/Loading.jsx";
import twoGirlsworking from "../assets/about-left-image.png";
import service1 from "../assets/ShapeFolder/service-icon-01.png";
import service2 from "../assets/ShapeFolder/service-icon-02.png";
import service3 from "../assets/ShapeFolder/service-icon-03.png";


import 'swiper/css/navigation';
import AxiosError from "./AxiosError.jsx";




function Home() {
  const { user } = useAuth();
  const axiosFetch = useFetch();


  const {
    isPending,
    error,
    data = [],
  } = useQuery({
    queryKey: ["serviceData"],
    queryFn: () =>
      axiosFetch
        .get("/services")
        .then((data) => data.data)

  });




  const HandleChangevideo = (query) => {
    if (query == 'Growthbussniess') {
      document.getElementById('GraphicDesign').classList.add('videoHidden')
      document.getElementById('WebDev').classList.add('videoHidden');
      document.getElementById('AppDev').classList.add('videoHidden')
      document.getElementById('BussinessGrow').classList.remove('videoHidden')

      document.getElementById('btnWeb').classList.remove('videobtnactive')
      document.getElementById('btnApp').classList.remove('videobtnactive')
      document.getElementById('btnGraphic').classList.remove('videobtnactive')
      document.getElementById('btnGrowth').classList.add('videobtnactive')
    }
    else if (query == "WebDevelopment") {
      document.getElementById('BussinessGrow').classList.add('videoHidden')
      document.getElementById('AppDev').classList.add('videoHidden')
      document.getElementById('GraphicDesign').classList.add('videoHidden')
      document.getElementById('WebDev').classList.remove('videoHidden');


      document.getElementById('btnApp').classList.remove('videobtnactive')
      document.getElementById('btnGraphic').classList.remove('videobtnactive')
      document.getElementById('btnGrowth').classList.remove('videobtnactive')
      document.getElementById('btnWeb').classList.add('videobtnactive')



    }
    else if (query == 'AppDevelopment') {
      document.getElementById('BussinessGrow').classList.add('videoHidden')
      document.getElementById('GraphicDesign').classList.add('videoHidden')
      document.getElementById('WebDev').classList.add('videoHidden');
      document.getElementById('AppDev').classList.remove('videoHidden')

      document.getElementById('btnWeb').classList.remove('videobtnactive')
      document.getElementById('btnGraphic').classList.remove('videobtnactive')
      document.getElementById('btnGrowth').classList.remove('videobtnactive')
      document.getElementById('btnApp').classList.add('videobtnactive')
    }
    else if (query == 'GraphicDesign') {
      document.getElementById('BussinessGrow').classList.add('videoHidden')
      document.getElementById('WebDev').classList.add('videoHidden');
      document.getElementById('AppDev').classList.add('videoHidden')
      document.getElementById('GraphicDesign').classList.remove('videoHidden')


      document.getElementById('btnWeb').classList.remove('videobtnactive')
      document.getElementById('btnApp').classList.remove('videobtnactive')
      document.getElementById('btnGrowth').classList.remove('videobtnactive')
      document.getElementById('btnGraphic').classList.add('videobtnactive')
    }
  }

  return (
    <>
      <section className="min-h-screen">

        {/* ---service-section-- */}
        <div id="Service" className="py-6">
          <div className="flex  justify-center items-center w-full flex-col">
            <br />
            <h1 className="text-4xl font-bold text-[#343a40] uppercase">
              Our Services
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
              {error ? <AxiosError error={error?.message} /> : isPending ? (<Loading />) : (data?.map((service) => (<SwiperSlide key={service?._id}><ServiceCart service={service} /></SwiperSlide>)))}
            </Swiper>
          </div>
        </div>

        {/* ---grow-your-busniess-section */}
        <div id="About" className="flex gap-2 items-center px-5 mt-36">
          <div className="w-[50%]">
            <div>
              <img src={twoGirlsworking} alt="Two Girls working together" />
            </div>
          </div>
          <div className="w-[50%]">
            <div>
              <h2 className="text-[#2a2a2a] text-6xl font-bold  leading-tight">
                Grow your <em className="text-[#03a4ed]">business</em> with us
                &amp; be a part of our{" "}
                <span className="text-[#ff695f]">family</span>
              </h2>
              <br />
              <p className="text-[18px] font-medium text-[#2a2a2a]">
                Our team can help you to improve your business and reach your
                desire destinations.
              </p>
              <br />
              <div className="flex items-center space-x-5">
                <div>
                  <div>
                    <div className="space-y-3">
                      <div>
                        <img src={service1} alt="" />
                      </div>
                      <h1 className="text-5xl font-bold">153</h1>
                      <h2 className="text-xl font-medium text-[#ff695f]">
                        Projects
                      </h2>
                      <br />
                      <p className="text-[#2a2a2a] text-[18px] font-medium border-t-2 border-[#eee] pt-5">
                        We completed 153 projects and your project may be the
                        next one.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div className="space-y-3">
                      <div>
                        <img src={service2} alt="" />
                      </div>
                      <h1 className="text-5xl font-bold">60</h1>
                      <h2 className="text-xl font-medium text-[#ff695f]">
                        Websites
                      </h2>
                      <br />
                      <p className="text-[#2a2a2a] text-[18px] font-medium border-t-2 border-[#eee] pt-5">
                        sixty websites are live on the internet which are
                        created by us.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div className="space-y-3">
                      <div>
                        <img src={service3} alt="" />
                      </div>
                      <h1 className="text-5xl font-bold">147</h1>
                      <h2 className="text-xl font-medium text-[#ff695f]">
                        Satisfied Clients
                      </h2>
                      <br />
                      <p className="text-[#2a2a2a] text-[18px] font-medium border-t-2 border-[#eee] pt-5">
                        We have 147 satisfied clients and we hope you will be
                        the next.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />

        {/* ---Testimonials-section- */}
        <div className="mt-28  px-5">

          <div className='text-center space-y-2'>
            <h2 className='text-4xl font-semibold text-[#252525]'>Our Testimonials</h2>
            <span className="text-2xl text-[#ff695f] opacity-[0.65] pt-2">
              OUR Clients
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
              <div className='grid  lg:grid-cols-2 md:grid-cols-1 grid-cols-1 lg:gap-0 md:gap-5  lg:px-[5%] md:px-[3%] px-[3%] '>
                {/* ---client-one-- */}
                <div className='flex md:flex-row flex-col border-[1px] cursor-pointer hover:shadow-lg hover:bg-white rounded-md '>
                  <div className='w-full my-auto'>
                    <img src={'https://media.istockphoto.com/id/1435745704/photo/portrait-of-smiling-mid-adult-businessman-standing-at-corporate-office.jpg?s=2048x2048&w=is&k=20&c=GEVT5y1Q8Gcf8M8lg2FMzb_WGc_zgm_nb312SG_DUzo='} alt=".." className='md:w-full w-fit mx-auto h-[150px] my-auto' />
                  </div>
                  <div className='py-2 px-2 space-y-3'>
                    <h1 className='text-base font-normal text-[#636363]'>
                      Mid Generation Coders has been an absolute game-changer for our business. Their tech services are unparalleled! The team seamlessly integrated innovative solutions, optimizing our operations and boosting efficiency. Their commitment to understanding our unique needs and delivering tailored tech solutions was impressive. Thanks to them, our growth trajectory has been phenomenal.
                    </h1>
                    <p className='text-sm font-semibold text-[#252525]'>Andrew row</p>
                  </div>

                </div>
                {/* ---client-two-- */}
                <div className='flex md:flex-row flex-col border-[1px] cursor-pointer hover:shadow-lg hover:bg-white rounded-md py-1'>
                  <div className='w-full my-auto'>
                    <img src={'https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.jpg?s=1024x1024&w=is&k=20&c=zvw6qDmYHmIvvCbEn2ZUF0tdSbKPnEWRsVAzd9g4hCM='} alt=".." className='md:w-full w-fit mx-auto h-[150px] my-auto' />
                  </div>
                  <div className='py-2 px-2 space-y-3'>
                    <h1 className='text-base font-normal text-[#636363]'>
                      Mid Generation Coders is a gem in the tech service industry. Their expertise and professionalism are evident from the get-go. They didn't just provide a service; they became strategic partners, guiding us through complex technological advancements. Their solutions were not just about fixing problems; they were about enhancing our capabilities for the long run. Working with them was not just a service experience; it was a journey towards technological excellence.
                    </h1>
                    <p className='text-sm font-semibold text-[#252525]'>Dilon do</p>
                  </div>

                </div>
                {/* ---client-three-- */}
                <div className='flex md:flex-row flex-col border-[1px] cursor-pointer hover:shadow-lg hover:bg-white rounded-md py-1'>
                  <div className='w-full my-auto'>
                    <img src={'https://media.istockphoto.com/id/1431057864/photo/modern-business-man-in-casual-blue-shirt-standing-with-crossed-arms-on-blue-background.jpg?s=1024x1024&w=is&k=20&c=1ztNg_LSiHmSkwnV_VtMSOjkKByQzvWZ06XaSiQ9WJc='} alt=".." className='md:w-full w-fit mx-auto h-[150px] my-auto' />
                  </div>
                  <div className='py-2 px-2 space-y-3'>
                    <h1 className='text-base font-normal text-[#636363]'>
                      I can't recommend Mid Generation Coders enough! Their team's dedication to delivering top-notch tech services is unmatched. They not only met but exceeded our expectations. Their attention to detail, promptness in addressing concerns, and ability to adapt to our evolving needs made the collaboration seamless. Thanks to them, our digital infrastructure is now robust, reliable, and ready for future challenges.
                    </h1>
                    <p className='text-sm font-semibold text-[#252525]'>Mark hanry </p>
                  </div>

                </div>
                {/* ---client-four-- */}
                <div className='flex md:flex-row flex-col border-[1px] cursor-pointer hover:shadow-lg hover:bg-white rounded-md py-1'>
                  <div className='w-full my-auto'>
                    <img src={'https://media.istockphoto.com/id/1490764451/photo/headshot-portrait-of-confident-handsome-mature-middle-age-businessman-at-office.jpg?s=1024x1024&w=is&k=20&c=IkX_YEoSCKwvrUcoQMuvTnGf7Hap5RRts13L7R5a_Q8='} alt=".." className='md:w-full w-fit mx-auto h-[150px] my-auto' />
                  </div>
                  <div className='py-2 px-2 space-y-3'>
                    <h1 className='text-base font-normal text-[#636363]'>
                      Choosing Mid Generation Coders was one of the best decisions we made for our business. Their tech services transformed our operations, streamlining processes and enhancing productivity. Their team's depth of knowledge and innovative approach ensured that we stayed ahead in a rapidly changing technological landscape. Their commitment to excellence and customer satisfaction is truly commendable. We're grateful for their expertise that helped us achieve remarkable results.
                    </h1>
                    <p className='text-sm font-semibold text-[#252525]'>gaptil sah</p>
                  </div>

                </div>


              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='grid  lg:grid-cols-2 md:grid-cols-1 grid-cols-1 lg:gap-0 md:gap-5  lg:px-[5%] md:px-[3%] px-[3%] '>
                {/* ---client-one-- */}
                <div className='flex md:flex-row flex-col border-[1px] cursor-pointer hover:shadow-lg hover:bg-white rounded-md '>
                  <div className='w-full my-auto'>
                    <img src={'https://media.istockphoto.com/id/1438969575/photo/smiling-young-male-college-student-wearing-headphones-standing-in-a-classroom.jpg?s=1024x1024&w=is&k=20&c=jts1sdkLPskbbDU4_k56chBuOaxhqJGofM64c8VEUpM='} alt=".." className='md:w-full w-fit mx-auto h-[150px] my-auto' />
                  </div>
                  <div className='py-2 px-2 space-y-3'>
                    <h1 className='text-base font-normal text-[#636363]'>
                      Mid Generation Coders epitomizes professionalism and expertise in the tech service realm. Their comprehensive solutions and personalized approach set them apart. Their team's proficiency in understanding our requirements and translating them into effective tech solutions was impressive. They not only solved our immediate challenges but also future-proofed our systems. Working with Mid Generation Coders was an investment that yielded exceptional returns.
                    </h1>
                    <p className='text-sm font-semibold text-[#252525]'>POllad king</p>
                  </div>

                </div>
                {/* ---client-two-- */}
                <div className='flex md:flex-row flex-col border-[1px] cursor-pointer hover:shadow-lg hover:bg-white rounded-md py-1'>
                  <div className='w-full my-auto'>
                    <img src={'https://media.istockphoto.com/id/1490764451/photo/headshot-portrait-of-confident-handsome-mature-middle-age-businessman-at-office.jpg?s=2048x2048&w=is&k=20&c=2gehqHNhdLXLgbbBGhBqD34JACHtNXMN3IPszf6U8pk='} alt=".." className='md:w-full w-fit mx-auto h-[150px] my-auto' />
                  </div>
                  <div className='py-2 px-2 space-y-3'>
                    <h1 className='text-base font-normal text-[#636363]'>
                      Mid Generation Coders has been a catalyst in our technological evolution. Their services are not just about fixing issues; they're about revolutionizing how we operate. Their team's expertise, coupled with their dedication to understanding our business, resulted in tailor-made solutions that exceeded our expectations. Collaborating with Mid Generation Coders was a transformative experience, propelling us towards success in an increasingly tech-driven world.
                    </h1>
                    <p className='text-sm font-semibold text-[#252525]'>juanko pais</p>
                  </div>

                </div>
                {/* ---client-three-- */}
                <div className='flex md:flex-row flex-col border-[1px] cursor-pointer hover:shadow-lg hover:bg-white rounded-md py-1'>
                  <div className='w-full my-auto'>
                    <img src={'https://media.istockphoto.com/id/1437931505/photo/businessman-digital-tablet-or-strategy-planning-in-hotel-conference-lobby-or-airport-travel.jpg?s=1024x1024&w=is&k=20&c=vU0weWc6R-GBsHKTVrX-I_tdYTdgqB8gX1MzffJMyKI='} alt=".." className='md:w-full w-fit mx-auto h-[150px] my-auto' />
                  </div>
                  <div className='py-2 px-2 space-y-3'>
                    <h1 className='text-base font-normal text-[#636363]'>
                      Mid Generation Coders is a paragon of excellence in the tech industry. Their commitment to delivering innovative solutions is unwavering. From the initial consultation to the implementation phase, their team demonstrated exceptional professionalism and expertise. Their ability to navigate complex technical landscapes and simplify solutions made our journey with them not just productive but enjoyable. We are grateful for their partnership, which has undoubtedly elevated our business
                    </h1>
                    <p className='text-sm font-semibold text-[#252525]'>suria Kumar </p>
                  </div>

                </div>
                {/* ---client-four-- */}
                <div className='flex md:flex-row flex-col border-[1px] cursor-pointer hover:shadow-lg hover:bg-white rounded-md py-1'>
                  <div className='w-full my-auto'>
                    <img src={'https://images.unsplash.com/photo-1480429370139-e0132c086e2a?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt=".." className='md:w-full w-fit mx-auto h-[150px] my-auto' />
                  </div>
                  <div className='py-2 px-2 space-y-3'>
                    <h1 className='text-base font-normal text-[#636363]'>
                      Partnering with Mid Generation Coders was a game-changer for us. Their tech services are a perfect blend of cutting-edge innovation and practicality. Their team's proactive approach in foreseeing challenges and providing preemptive solutions saved us time and resources. The seamless integration of their services into our existing framework showcased their adaptability and skill. Mid Generation Coders is more than a service provider; they are a strategic ally for sustainable growth.
                    </h1>
                    <p className='text-sm font-semibold text-[#252525]'>Martin jampa</p>
                  </div>

                </div>


              </div>
            </SwiperSlide>


            <SwiperSlide>
              <div className='grid  lg:grid-cols-2 md:grid-cols-1 grid-cols-1 lg:gap-0 md:gap-5  lg:px-[5%] md:px-[3%] px-[3%] '>
                {/* ---client-one-- */}
                <div className='flex md:flex-row flex-col border-[1px] cursor-pointer hover:shadow-lg hover:bg-white rounded-md '>
                  <div className='w-full my-auto'>
                    <img src={'https://media.istockphoto.com/id/1435745704/photo/portrait-of-smiling-mid-adult-businessman-standing-at-corporate-office.jpg?s=2048x2048&w=is&k=20&c=GEVT5y1Q8Gcf8M8lg2FMzb_WGc_zgm_nb312SG_DUzo='} alt=".." className='md:w-full w-fit mx-auto h-[150px] my-auto' />
                  </div>
                  <div className='py-2 px-2 space-y-3'>
                    <h1 className='text-base font-normal text-[#636363]'>
                      Mid Generation Coders has been an absolute game-changer for our business. Their tech services are unparalleled! The team seamlessly integrated innovative solutions, optimizing our operations and boosting efficiency. Their commitment to understanding our unique needs and delivering tailored tech solutions was impressive. Thanks to them, our growth trajectory has been phenomenal.
                    </h1>
                    <p className='text-sm font-semibold text-[#252525]'>Andrew row</p>
                  </div>

                </div>
                {/* ---client-two-- */}
                <div className='flex md:flex-row flex-col border-[1px] cursor-pointer hover:shadow-lg hover:bg-white rounded-md py-1'>
                  <div className='w-full my-auto'>
                    <img src={'https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.jpg?s=1024x1024&w=is&k=20&c=zvw6qDmYHmIvvCbEn2ZUF0tdSbKPnEWRsVAzd9g4hCM='} alt=".." className='md:w-full w-fit mx-auto h-[150px] my-auto' />
                  </div>
                  <div className='py-2 px-2 space-y-3'>
                    <h1 className='text-base font-normal text-[#636363]'>
                      Mid Generation Coders is a gem in the tech service industry. Their expertise and professionalism are evident from the get-go. They didn't just provide a service; they became strategic partners, guiding us through complex technological advancements. Their solutions were not just about fixing problems; they were about enhancing our capabilities for the long run. Working with them was not just a service experience; it was a journey towards technological excellence.
                    </h1>
                    <p className='text-sm font-semibold text-[#252525]'>Dilon do</p>
                  </div>

                </div>
                {/* ---client-three-- */}
                <div className='flex md:flex-row flex-col border-[1px] cursor-pointer hover:shadow-lg hover:bg-white rounded-md py-1'>
                  <div className='w-full my-auto'>
                    <img src={'https://media.istockphoto.com/id/1431057864/photo/modern-business-man-in-casual-blue-shirt-standing-with-crossed-arms-on-blue-background.jpg?s=1024x1024&w=is&k=20&c=1ztNg_LSiHmSkwnV_VtMSOjkKByQzvWZ06XaSiQ9WJc='} alt=".." className='md:w-full w-fit mx-auto h-[150px] my-auto' />
                  </div>
                  <div className='py-2 px-2 space-y-3'>
                    <h1 className='text-base font-normal text-[#636363]'>
                      I can't recommend Mid Generation Coders enough! Their team's dedication to delivering top-notch tech services is unmatched. They not only met but exceeded our expectations. Their attention to detail, promptness in addressing concerns, and ability to adapt to our evolving needs made the collaboration seamless. Thanks to them, our digital infrastructure is now robust, reliable, and ready for future challenges.
                    </h1>
                    <p className='text-sm font-semibold text-[#252525]'>Mark hanry </p>
                  </div>

                </div>
                {/* ---client-four-- */}
                <div className='flex md:flex-row flex-col border-[1px] cursor-pointer hover:shadow-lg hover:bg-white rounded-md py-1'>
                  <div className='w-full my-auto'>
                    <img src={'https://media.istockphoto.com/id/1490764451/photo/headshot-portrait-of-confident-handsome-mature-middle-age-businessman-at-office.jpg?s=1024x1024&w=is&k=20&c=IkX_YEoSCKwvrUcoQMuvTnGf7Hap5RRts13L7R5a_Q8='} alt=".." className='md:w-full w-fit mx-auto h-[150px] my-auto' />
                  </div>
                  <div className='py-2 px-2 space-y-3'>
                    <h1 className='text-base font-normal text-[#636363]'>
                      Choosing Mid Generation Coders was one of the best decisions we made for our business. Their tech services transformed our operations, streamlining processes and enhancing productivity. Their team's depth of knowledge and innovative approach ensured that we stayed ahead in a rapidly changing technological landscape. Their commitment to excellence and customer satisfaction is truly commendable. We're grateful for their expertise that helped us achieve remarkable results.
                    </h1>
                    <p className='text-sm font-semibold text-[#252525]'>gaptil sah</p>
                  </div>

                </div>


              </div>
            </SwiperSlide>



          </Swiper>




        </div>
        <br />
        <br />
        <br />


        {/* --subscribe-newsletter */}
        <div id="subscribe" className="subscribe px-[4%] ">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner-content xl:after:left-[85%] xl:after:top-[0%]">
                  <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                      <h2>Know Your Website SEO Score by Email</h2>
                      <form onSubmit={(e) => e.preventDefault()} id="subscribe">
                        <input type="text" name="website" id="website" placeholder="Your Website URL" />
                        <input type="text" name="email" id="email" placeholder="Your Email" />
                        <button type="submit" id="form-submit" className="main-button">
                          Subscribe
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />


        {/* videos--section */}
        <div className="flex gap-4 px-[4%] mt-20 items-center ">
          <div className="w-[65%]">
            <div className="w-full h-[550px] bg-black rounded-[20px]">
              <iframe
                id="BussinessGrow"
                className="rounded-[20px] "
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dJQn4DqzMVQ?si=rg9z9VocTUMMHGkX"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <iframe
                id="WebDev"
                className="rounded-[20px] videoHidden"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/6usGikNmYsw?si=rwpP17rTXuudobUa"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <iframe
                id="AppDev"
                className="rounded-[20px] videoHidden "
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/fis26HvvDII?si=RdYfG8wb3pxAg4zV"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>

              <iframe id="GraphicDesign" className="rounded-[20px] videoHidden " width="100%" height="100%" src="https://www.youtube.com/embed/dFSia1LZI4Y?si=7llCuVoCRbPn9yrJ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen ></iframe>
            </div>
          </div>
          <div className="w-[35%] flex flex-col gap-3">
            <button onClick={() => HandleChangevideo("Growthbussniess")} id="btnGrowth" className={`videobtn videobtnactive`}>How to Grow Bussiness</button>
            <button onClick={() => HandleChangevideo("WebDevelopment")} id="btnWeb" className="videobtn">Custom Web developemt </button>
            <button onClick={() => HandleChangevideo("AppDevelopment")} id="btnApp" className="videobtn">Andorid App developemt </button>
            <button onClick={() => HandleChangevideo("GraphicDesign")} id="btnGraphic" className="videobtn">Graphic desgin </button>
          </div>
        </div>
        <br />

        {/* ----contact-section-- */}
        <div id="Contact" className="flex gap-2 lg:flex-row-reverse items-center flex-col w-full mt-32 px-8">
          <div className="lg:w-[40%] ">


            <form id='contact' onSubmit={(e) => e.preventDefault()}>
              <div>
                <input type="text" placeholder="Name" />
              </div>
              <div>
                <input type="text" placeholder="Surname" />
              </div>
              <div>

                <input type="text" placeholder="your Email" />
              </div>
              <div>
                <input type="text" placeholder="your Website link" />
              </div>

              <button>Submit request</button>
            </form>


          </div>
          <div className="lg:w-[60%] lg:p-9">

            <iframe className="rounded-[10px]" width="100%" height="500" src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Auckland+(Hotel%20relax)&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population mapping</a></iframe>

          </div>

        </div>

      </section>
      <br />
      <br />
      <br />
    </>
  );
}

export default Home;
