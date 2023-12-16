import React from 'react'
import { motion } from "framer-motion"
import useFetch from '../CustomHooks_folder/useFetch';
import Swal from 'sweetalert2';

function Addservice() {

    const axiosFetch = useFetch();


    const HandleAddservice = (e) => {
        e.preventDefault();

        const from = new FormData(e.currentTarget);


        const name = from.get("Name");
        const price = parseInt(from.get("price"));
        const tools = from.get("tools").split(' ');
        const discount = parseInt(from.get("discount"));
        const previousprice = parseInt(from.get("previousPrice"));


        const obj = {

            "serviceName": name,
            "servicePrice": price,
            "previousPrice": previousprice,
            "serviceDiscount": discount,
            "serviceTools": tools,

        }

        axiosFetch.post('/Addservice', obj)
        .then(res => {
            if(res?.data?.insertedId){
                Swal.fire({
                    title: 'Service Add successfully',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 2000,

                })

                e.target.reset();
            }
        })
        .catch(error => console.log(error))
    }


    return (

        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
        >

            <div className="py-8 px-[5%] min-h-screen fixed lg:w-[80%] md:w-[100%] w-[100%]">
                <h1 className="text-3xl font-medium text-[#343a40] ">Add service now</h1>
                <br />

                <br />
                <div className='update-page '>
                    <form onSubmit={HandleAddservice}>
                        <div className='update-form'>
                            <div >

                                <label htmlFor="Name">

                                    <input type="text" id='Name' name='Name' required placeholder='Service Name' className='input' />
                                </label>
                                <br />
                                <br />

                                <label htmlFor="price" >

                                    <input type="text" id='price' name='price' required placeholder='service price' className='input' />
                                </label>
                                <br />
                                <br />

                                <label htmlFor="tools" >
                                    <input type="text" id='tools' name='tools' required placeholder='Service tools' className='input' />
                                </label>


                                <br />
                                <br />

                            </div>

                            <div>


                                <label htmlFor="discount">

                                    <input type="text" id='discount' name='discount' required placeholder='Service Discount' className='input' />
                                </label>


                                <br />
                                <br />

                                <label htmlFor="previousPrice">

                                    <input type="text" id='previousPrice' name='previousPrice' required placeholder='service previous price' className='input' />
                                </label>







                            </div>

                        </div>


                        <br />
                        <div >

                            <button className='btn-full'>Add now</button>
                        </div>
                    </form>



                </div>
            </div>
        </motion.div>
    )
}

export default Addservice