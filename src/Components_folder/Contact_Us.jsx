import React from 'react'
import contactImg from '../assets/contact-image.png'

function Contact_Us() {
  return (
    <section className='min-h-screen' >
      {/* --contact-us */}
      <div className="flex lg:flex-row-reverse items-center flex-col w-full my-32 px-[5%]">
        <div className="lg:w-[40%] ">


          <form id='contact' onSubmit={(e) => e.preventDefault()}>
            <div>
              <input type="text" placeholder="Your Name" />
            </div>
            <div>
              <input type="text" placeholder="Your Contact Number" />
            </div>
            <div>

              <input type="text" placeholder="Your Email Address" />
            </div>
            <div>
             <textarea name="message"  placeholder='Write your Message'></textarea>
            </div>

            <button>send request</button>
          </form>


        </div>
        <div className="lg:w-[60%] lg:p-9">

          <img src={contactImg} alt="" />


        </div>

      </div>

      {/* --subscribe-newsletter- */}
      <div id="subscribe" className="subscribe px-[4%] ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-content xl:after:left-[85%] xl:after:top-[0%]">
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



      <div className='max-w-6xl mx-auto pt-36 pb-10'>
        <iframe className="rounded-[10px]" width="100%" height="500" src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Auckland+(Hotel%20relax)&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population mapping</a></iframe>

      </div>











    </section>
  )
}

export default Contact_Us