import React from 'react'
import useAuth from '../CustomHooks_folder/useAuth'
import ServiceCart from '../Cart_Folder/ServiceCart';
import useFetch from '../CustomHooks_folder/useFetch';
import { useQuery } from '@tanstack/react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import Loading from '../Components_folder/Loading.jsx'

function Home() {
  const { user } = useAuth();

  const axiosFetch = useFetch();

  // axiosFetch.get('/services')
  //   .then(data => console.log(data.data))
  //   .catch(error => console.log(error))


  const { isPending, error, data = [] } = useQuery({
    queryKey: ['serviceData'],
    queryFn: () =>
      axiosFetch.get('/services')
        .then(data => data.data)
        .catch(error => error)

  })




  return (
    <>

      <section className='min-h-screen'>

        <div className='py-6'>
          <div className='flex  justify-center items-center w-full flex-col'>
            <br />
            <h1 className='text-4xl font-bold text-[#343a40] uppercase'>Our Services</h1>
            <span className='text-base text-[#ff695f] opacity-[0.65]'>OUR SERVICES</span>
          </div>
          <br />
          <div className='px-[5%] z-50'>

            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2900,
                disableOnInteraction: true,
            }}
              modules={[FreeMode, Pagination,Autoplay]}
              className="mySwiper w-full mx-auto"
            >

              {

                isPending ? <Loading/> : data?.map(service => <SwiperSlide key={service?._id}><ServiceCart service={service} /></SwiperSlide>)

              }
              
             
            </Swiper>

            

          </div>
        </div>

      </section>














    </>
  )
}

export default Home