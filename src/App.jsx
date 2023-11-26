import React, { useEffect, useState } from 'react'
import Navbar from './Components_folder/Navbar';
import { Outlet, useNavigation, useLocation } from 'react-router-dom'
import Footer from './Components_folder/Footer';
import Banner from './Components_folder/Banner';
import Loading from './Components_folder/Loading';

function App() {
  const navigation = useNavigation();
  const location = useLocation();
  const [header, setHeader] = useState(false)

  const handlefixedHeader = ()=>{
    if(window.scrollY >= 600){
      setHeader(true)
    }
    else{
      setHeader(false)
    }
  }

  useEffect(()=>{
    window.addEventListener("scroll", handlefixedHeader)
  },[])


  return (
    <>

   

      <header className={` ${location?.pathname == '/Login' || location.pathname == '/Register' || location.pathname == '/Dashboard' ? '' : 'headerbg'}`}>
        <Navbar />
        <br />
        <br />
        <Banner  />
      </header>
     
      <main>
        {
          navigation.state == 'idle' ? <Outlet /> : <Loading />
        }

      </main>

      <footer>
        <Footer />
      </footer>














    </>
  )
}

export default App