import React from 'react'
import Navbar from './Components_folder/Navbar';
import { Outlet } from 'react-router-dom'
import Footer from './Components_folder/Footer';

function App() {
  return (
    <>

      <header>
        <Navbar />
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