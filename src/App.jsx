import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Components_folder/Navbar";
import { Outlet, useNavigation, useLocation } from "react-router-dom";
import Footer from "./Components_folder/Footer";
import Banner from "./Components_folder/Banner";
import Loading from "./Components_folder/Loading";
import StartOnLoad from "./Components_folder/StartOnLoad";


function App() {


  const navigation = useNavigation();
  const location = useLocation();
  const [header, setHeader] = useState(false);
  const [startOnloading, setStartOnloading] = useState(true)



  useEffect(() => {
    setTimeout(() => {
      setStartOnloading(false)
    }, 1000);
  }, [])

  const handlefixedHeader = () => {
    if (window.scrollY >= 600) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handlefixedHeader);
  }, []);


  return (

    startOnloading ? <StartOnLoad /> :

      <div>
        <header
          className={` ${location?.pathname == "/Login" ||
            location.pathname == "/Register" ||
            location.pathname == "/Dashboard"
            ? ""
            : "headerbg"
            }`}
        >
          <Navbar />
          <br />
          <br />
          <Banner />
        </header>

        <main>{navigation.state == "idle" ?


      


          
              <Outlet />



          



          : <Loading />}</main>

        <footer>
          <Footer />
        </footer>
      </div>


  );
}

export default App;
