import React, { useState } from "react";
import useAuth from "../CustomHooks_folder/useAuth";
import ServiceCart from "../Cart_Folder/ServiceCart";
import useFetch from "../CustomHooks_folder/useFetch";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import Loading from "../Components_folder/Loading.jsx";
import twoGirlsworking from "../assets/about-left-image.png";
import service1 from "../assets/ShapeFolder/service-icon-01.png";
import service2 from "../assets/ShapeFolder/service-icon-02.png";
import service3 from "../assets/ShapeFolder/service-icon-03.png";

function Home() {
  const { user } = useAuth();
  const axiosFetch = useFetch();

  // axiosFetch.get('/services')
  //   .then(data => console.log(data.data))
  //   .catch(error => console.log(error))

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
        .catch((error) => error),
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
        <div className="py-6">
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
              {isPending ? (
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

        {/* ---grow-your-busniess-section */}
        <div className="flex gap-2 items-center px-5 mt-36">
          <div className="w-[50%]">
            <div>
              <img src={twoGirlsworking} alt="Two Girls working together" />
            </div>
          </div>
          <div className="w-[50%]">
            <div>
              <h2 className="text-[#2a2a2a] text-6xl font-bold w-[700px] leading-tight">
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
        <br />
        {/* videos--section */}
        <div className="flex gap-4 px-[4%] mt-20 items-center">
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
        <br />
        <br />
      </section>
    </>
  );
}

export default Home;
