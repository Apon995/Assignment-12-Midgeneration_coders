import React from 'react'
import useAuth from '../CustomHooks_folder/useAuth'

function Home() {
  const { user } = useAuth();


  console.log(user)
  return (
    <>

      <section className='min-h-screen'>

        <div className='py-6'>
          <div className='flex  justify-center items-center w-full flex-col'>
            <h1 className='text-4xl font-bold text-[#343a40] w-[320px] text-center'>We <span className='text-[#ff695f]'>Provide</span> The Best Service</h1>
            <span className='text-base text-[#ff695f] opacity-[0.65]'>OUR SERVICES</span>
          </div>

          <div>

          </div>
        </div>

      </section>














    </>
  )
}

export default Home