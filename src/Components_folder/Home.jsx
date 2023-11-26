import React from "react";
// import useAuth from "../CustomHooks_folder/useAuth";
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
import aboutSlide1 from "../assets/about-slide.png";
import 'swiper/css/navigation';
import AxiosError from "./AxiosError.jsx";




function Home() {
  // const { user } = useAuth();
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
      <section className="min-h-screen px-[5%]">

        {/* ---service-section-- */}
        <div id="Service" className="py-6 mt-9">
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
          <div className="z-50">
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

        <br />
        <br />
        <br />
        {/* ---grow-your-busniess-section */}
        <div id="About" className="flex gap-2 items-center mt-20">
          <div className="w-[50%]">
            <div>
              <img src={twoGirlsworking} alt="Two Girls working together" />
            </div>
          </div>
          <div className="w-[50%]">
            <div>
              <h2 className="text-[#2a2a2a] text-5xl font-bold  leading-tight">
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

        {/* ---Testimonials-section- */}
        <div className="mt-20" >

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


        {/* --subscribe-newsletter */}
        <div id="subscribe" className="subscribe mt-20  ">
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
        <br />
        <br />

        {/* videos--section */}
        <div className="flex gap-4 items-center mt-20">
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

        {/* ----contact-section-- */}
        <div id="Contact" className="flex gap-2 lg:flex-row-reverse items-center flex-col w-full mt-20">
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
