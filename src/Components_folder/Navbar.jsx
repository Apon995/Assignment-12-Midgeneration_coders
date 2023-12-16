import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../CustomHooks_folder/useAuth';


function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const { user, Logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [menu, setMenu] = useState(true);




  const HandleShowLinks = () => {
    setMenu(!menu)

    if (!menu) {


      document.getElementById("NavBarLink").classList.remove("left-[-175px]")
      document.getElementById("NavBarLink").classList.add("left-0")

      document.getElementById('Buttons').classList.remove("left-[-140px]")
      document.getElementById('Buttons').classList.add("left-[15px]")

    }
    else {
      document.getElementById("NavBarLink").classList.remove("left-0")
      document.getElementById("NavBarLink").classList.add("left-[-175px]")

      document.getElementById('Buttons').classList.remove("left-[15px]")
      document.getElementById('Buttons').classList.add("left-[-140px]")


    }
  }



  const handleChangeNav = () => {
    if (window.scrollY > 90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };


  useEffect(() => {

    if (location?.pathname == '/Login' || location.pathname == '/Register' || location.pathname == '/Dashboard') {
      return setNavbar(true);
    }
    else {
      window.addEventListener("scroll", handleChangeNav);

    }






  }, [handleChangeNav, location.pathname])



  useEffect(()=>{
    if(location.pathname == '/Register'){
      return
    }
    HandleShowLinks();
  },[location.pathname])
  



  return (

    <>
      <nav style={{ backgroundColor: navbar ? '#2742fd' : 'inherit', transition: 'background 0.2s', position: 'fixed', zIndex: 999 }} className={`flex top-0 max-w-[100vw]  w-full items-center  justify-between px-[2%] py-4 text-white`}>
        <div className='flex items-center gap-12'>

          <div className='flex items-center flex-col uppercase font-extrabold md:text-xl texct-base leading-normal md:leading-[24px]'>
            <h1>Mid Generation</h1>
            <span >Coders</span>
          </div>

          {/* left-[-175px] */}
          <div id='NavBarLink' className='md:static duration-1000 transition-all absolute top-0 left-[-175px] md:bg-inherit bg-[#2742fd] w-[165px] md:w-fit h-screen md:h-fit '>
            <ul className='flex md:flex-row flex-col items-center justify-center h-screen md:h-fit gap-4 text-white' id='NavLinks'>
              <li>
                <NavLink to={'/'}>Home</NavLink>
              </li>
              <li>
                <NavLink to={'/About'}>About us</NavLink>
              </li>

              <li>
                <NavLink to={'/Contact'}>Contact us</NavLink>
              </li>
              <li><NavLink to='/Dashboard/MyProfile' >Dashboard</NavLink></li>
            </ul>
          </div>
        </div>

        {/* left-[15px] */}
        <div id='Buttons' className='md:static absolute top-[65px] left-[-140px] duration-1000 transition-all'>


          {

            user ? <div className='flex items-center gap-2 text-white'>
              {/* --LOG OUT-BUTTON-- */}
              <i className="fa-solid fa-right-from-bracket text-2xl"></i>
              <button onClick={() => Logout()} style={{ backgroundColor: navbar ? 'white' : '#2742fd', color: navbar ? 'black' : 'white' }} className={` px-3 py-2 md:border-none border-[1px] border-black rounded-md font-medium  `}>Log out</button>



            </div> : <div className='flex items-center gap-3'>
              {/* --LOGIN-BUTTON-- */}
              <i className="fa-solid fa-right-to-bracket text-2xl"></i>
              <button onClick={() => navigate('/Login')} style={{ backgroundColor: navbar ? 'white' : '#2742fd', color: navbar ? 'black' : 'white' }} className={` px-3 py-2 md:border-none border-[1px] border-black rounded-md font-medium `}>Log in</button>

            </div>

          }








        </div>


        <div className='md:hidden block'>
          <button onClick={HandleShowLinks} className='text-2xl font-bold text-white duration-1000 transition-all'> {menu ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}</button>
        </div>













      </nav>



















    </>
  )
}

export default Navbar