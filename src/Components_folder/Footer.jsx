import React from 'react'
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className='w-full xl:px-[3%] px-[1%] bg-[#000000] text-[#FFF] py-9 footer md:text-start text-center ' >

      <div className=' flex md:flex-row flex-col items-center justify-between py-9'>
        {/* --footer-1st-col-- */}
        <div>
           
        <div className='flex items-center flex-col uppercase font-extrabold text-xl leading-[24px]'>
            <h1>Mid Generation</h1>
            <span >Coders</span>
          </div>


          <div>
            <p className='text-base  font-normal md:leading-[20px] leading-normal md:w-[260px] py-3'>
              MidGeneration Coders company All the coders are very intelligent and smart to code .
            </p>
          </div>

          <div className='flex items-center gap-4 pt-4 md:justify-start justify-center' id='socialIcons'>
            <div>
              <i className="fa-brands fa-facebook"></i>
            </div>
            <div>
              <i className="fa-brands fa-twitter"></i>
            </div>
            <div>
              <i className="fa-brands fa-instagram"></i>
            </div>
            <div>
              <i className="fa-brands fa-linkedin"></i>
            </div>
          </div>
        </div>





        {/* --footer-2nd-col-- */}
        <div className='lg:block hidden'>
          <h1 className='pb-4 font-semibold text-2xl'>Our Services</h1>
          <div>
            <ul className='text-base font-medium space-y-2' id='quickLinks'>
              <li><Link to='/' >SEO Development</Link></li>
              <li><Link to='/' >Business Growth</Link></li>
              <li><Link to='/' >Social Media Managment</Link></li>
              <li><Link to='/' >Website Optimization</Link></li>

            </ul>
          </div>
        </div>

        {/* --foter-3rd-col-- */}
        <div className='lg:block hidden'>
          <h1 className='pb-4 font-semibold text-2xl'>Community</h1>

          <ul className='text-base font-medium space-y-2' id='serviceLinks'>
            <li><Link to='/'>Digital Marketing</Link></li>
            <li><Link to='/'>Business Ideas</Link> </li>
            <li><Link to='/'>Website Checkup</Link></li>
            <li><Link to='/'>Page Speed Test</Link></li>


          </ul>
        </div>

        {/* --footer-4th-col-- */}
        <div className='md:block hidden'>
          <h1 className='pb-4 font-semibold text-2xl'>Contact info </h1>

          <div>
            <ul className='text-base font-medium space-y-2'>
              <li>Auckland city in new zealand ,</li>
              <li>Celendon park , Nearby ocean Tower - 12123</li>
              <li>Hotline : +9990003</li>
              <li>Email : Hotel_realx2023@gmail.com</li>

            </ul>
          </div>
        </div>
      </div>

      <hr />
      <div className='mt-3 flex items-center justify-between'>
        <p className='text-base font-normal'>Copyright &copy; 2023 Mid Generation Coders. All Rights Reserved.</p>

        <div>
          <button onClick={() => window.scrollTo(0, 0)} className='bg-[#Ffff] text-[#000000] md:py-4 py-1 md:px-10 px-2 text-xl hover:bg-[#2742fd] hover:text-white hover:rounded-md transition-all duration-500'><i className="fa-solid fa-arrow-up"></i></button>
        </div>

      </div>




    </div>

  )
}

export default Footer