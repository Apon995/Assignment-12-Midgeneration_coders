import React from 'react'
import Navbar from './Components_folder/Navbar';
import { Outlet } from 'react-router-dom'
import Footer from './Components_folder/Footer';
import Banner from './Components_folder/Banner';

function App() {
  return (
    <>

      <header id='headerStyle'>
        <Navbar />
        <Banner/>
      </header>
      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>














    </>
  )
}

export default App