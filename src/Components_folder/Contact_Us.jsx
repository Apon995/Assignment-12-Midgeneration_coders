import React from 'react'
import contactImg from '../assets/contact-image.png';
import { motion } from "framer-motion"

function Contact_Us() {
  return (
    <section className='min-h-screen xl:px-[5%] md:px-[2%] px-[2%]' >

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >

        {/* --contact-us */}
        <div id="Contact" className="flex gap-2 md:flex-row-reverse items-center flex-col w-full mt-20">
          <div className="lg:w-[40%] md:w-[50%] w-full  ">


            <form id='contact' onSubmit={(e) => e.preventDefault()}>
              <div>
                <input type="text" placeholder="Name" />
              </div>
              <div>
                <input type="text" placeholder="Surname" />
              </div>
              <div>

                <input type="text" placeholder="your Email" />
              </div>
              <div>
                <input type="text" placeholder="your Website link" />
              </div>

              <button>Submit request</button>
            </form>


          </div>
          <div className="lg:w-[60%] md:w-[50%] lg:p-9 w-full">

            <img src={contactImg} alt="" />

          </div>

        </div>

      </motion.div>


      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >

        {/* --subscribe-newsletter- */}
        <div id="subscribe" className="subscribe mt-20 md:block hidden">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner-content xl:after:left-[85%] lg:after:left-[800px] md:after:left-[558px] md:after:top-[0%]">
                  <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                      <h2 className='uppercase'>Contact with us by email </h2>
                      <form onSubmit={(e) => e.preventDefault()} id="subscribe">
                        <input type="text" name="website" id="website" placeholder="Your Name " />
                        <input type="text" name="email" id="email" placeholder="Your Email Address / Contact number" />
                        <button type="submit" id="form-submit" className="main-button ">
                          send request
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>



      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        whileInView={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 2 }}
      >
        {/* ----MAP-SECTION--- */}
        <div className='max-w-6xl mx-auto pt-36 pb-10'>
          <iframe className="rounded-[10px]" width="100%" height="500" src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Auckland+(Hotel%20relax)&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population mapping</a></iframe>

        </div>

      </motion.div>












    </section>
  )
}

export default Contact_Us