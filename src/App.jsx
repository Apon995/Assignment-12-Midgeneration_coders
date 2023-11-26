import React from 'react'
import Navbar from './Components_folder/Navbar';
import { Outlet , useNavigation , useLocation } from 'react-router-dom'
import Footer from './Components_folder/Footer';
import Banner from './Components_folder/Banner';
import Loading from './Components_folder/Loading';

function App() {
  const navigation = useNavigation();
  const location = useLocation();

  
  return (
    <>

      <header  className={` ${location?.pathname == '/Login' || location.pathname == '/Register' || location.pathname =='/Dashboard' ? '' : 'headerbg' }`}>
        <Navbar />
        <Banner />
      </header>
      <main>
        {
          navigation.state == 'idle' ?  <Outlet /> : <Loading/>
        }
       
      </main>

      <footer>
        <Footer />
      </footer>














    </>
  )
}

export default App