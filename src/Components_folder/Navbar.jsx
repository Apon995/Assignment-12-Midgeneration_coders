import React from 'react'
import { NavLink } from 'react-router-dom';
import MidgenLogo from '../assets/MidgenLogo.png'

function Navbar() {
  return (

    <>
      <nav className='flex items-center justify-between px-[2%]'>
        <div className='flex items-center gap-12'>
        
            <img src={MidgenLogo} alt="Mid Generation Coders Logo" />
          

          <div>
            <ul className='flex items-center gap-4'>
              <li><NavLink to='/' >Home</NavLink></li>
              <li><NavLink to='/Services' >Services</NavLink></li>
              <li><NavLink to='/About' >About us</NavLink></li>
              <li><NavLink to='/Contact' >Contact us</NavLink></li>
              <li><NavLink to='/Dashboard' >Dashboard</NavLink></li>
            </ul>
          </div>
        </div>


        <div>
          <button>Login now</button>
        </div>













      </nav>



















    </>
  )
}

export default Navbar