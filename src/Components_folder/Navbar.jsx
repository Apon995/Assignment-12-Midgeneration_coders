import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import useAuth from '../CustomHooks_folder/useAuth';

function Navbar() {
  const [navbar , setNavbar] = useState(false);

  const { user } = useAuth()


  
  const handleChangeNav = () => {
    if (window.scrollY > 90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };


  useEffect(() => {
 

      window.addEventListener("scroll", handleChangeNav);
    
   
     
    
  }, [ handleChangeNav])



  return (

    <>
      <nav style={{ backgroundColor: navbar ? '#2742fd' : 'inherit', transition: 'background 0.2s' , position : navbar ? 'fixed' : 'static' , zIndex : 80}} className={`flex  w-full items-center  justify-between px-[2%] py-4 text-white`}>
        <div className='flex items-center gap-12'>

          <div className='flex items-center flex-col uppercase font-extrabold text-xl leading-[24px]'>
            <h1>Mid Generation</h1>
            <span >Coders</span>
          </div>


          <div>
            <ul className='flex items-center gap-4 text-white' id='NavLinks'>
              <li><NavLink to='/' >Home</NavLink></li>
              <li><NavLink to='/Service' >Services</NavLink></li>
              <li><NavLink to='/About' >About us</NavLink></li>
              <li><NavLink to='/Contact' >Contact us</NavLink></li>
              <li><NavLink to='/Dashboard' >Dashboard</NavLink></li>
            </ul>
          </div>
        </div>


        <div>


          {

            user ? <div className='flex items-center gap-3 text-white'>
              {/* --LOG OUT-BUTTON-- */}
              <i className="fa-solid fa-right-from-bracket text-2xl"></i>
              <button style={{backgroundColor : navbar ? 'white' : '#2742fd' , color : navbar ? 'black' : 'white'}} className={` px-3 py-2 md:border-none border-[1px] border-black rounded-md font-medium `}>Log out</button>

            </div> : <div className='flex items-center gap-3'>
              {/* --LOGIN-BUTTON-- */}
              <i className="fa-solid fa-right-to-bracket text-2xl"></i>
              <button style={{backgroundColor : navbar ? 'white' : '#2742fd' , color : navbar ? 'black' : 'white'}} className={` px-3 py-2 md:border-none border-[1px] border-black rounded-md font-medium `}>Log in</button>

            </div>

          }








        </div>













      </nav>



















    </>
  )
}

export default Navbar