import React from 'react'
import { motion } from "framer-motion"
import useFetch from '../CustomHooks_folder/useFetch';
import Swal from 'sweetalert2';
import useAuth from '../CustomHooks_folder/useAuth';
import { useNavigate } from 'react-router-dom';

function Updateservice() {


    const axiosFetch = useFetch();
    const { data } = useAuth();
    const navigate = useNavigate();

    console.log(data);


    const HandleUpdateService = (e) => {
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

        axiosFetch.put(`/Updateservice?ID=${data._id}`, obj)
            .then(res => {

                console.log(res.data)
                if (res.data.modifiedCount == 1) {
                    Swal.fire({
                        title: 'Update successfully',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 2000,

                    })

                    e.target.reset();

                    setTimeout(() => {
                        navigate('/Dashboard/Services')
                    }, 2000);
                }
            })
            .catch(error => console.log(error));
    }


    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
        >

            <div className="py-8 px-[5%] min-h-screen fixed lg:w-[80%] md:w-[100%] w-[100%]">
                <h1 className="text-3xl font-medium text-[#343a40] ">Update service</h1>
                <br />

                <br />
                <div className='update-page '>
                    <form onSubmit={HandleUpdateService}>
                        <div className='update-form'>
                            <div >

                                <label htmlFor="Name">
                                    <p className='text-base uppercase font-medium text-black pb-2'>Service Name</p>
                                    <input type="text" id='Name' name='Name' defaultValue={`${data?.serviceName}`} placeholder='Service Name' className='input' />
                                </label>
                                <br />
                                <br />

                                <label htmlFor="price" >
                                    <p className='text-base uppercase font-medium text-black pb-2'>Service Price</p>
                                    <input type="text" id='price' name='price' defaultValue={`${data?.servicePrice}`} placeholder='service price' className='input' />
                                </label>
                                <br />
                                <br />

                                <label htmlFor="tools" >
                                    <p className='text-base uppercase font-medium text-black pb-2'>Service Tools</p>
                                    <input type="text" id='tools' name='tools' defaultValue={`${data?.serviceTools}`} placeholder='Service tools' className='input' />
                                </label>


                                <br />
                                <br />

                            </div>

                            <div>


                                <label htmlFor="discount">
                                    <p className='text-base uppercase font-medium text-black pb-2'>Service Discount</p>
                                    <input type="text" id='discount' name='discount' defaultValue={`${data?.serviceDiscount}`} placeholder='Service Discount' className='input' />
                                </label>


                                <br />
                                <br />

                                <label htmlFor="previousPrice">
                                    <p className='text-base uppercase font-medium text-black pb-2'>previous price</p>

                                    <input type="text" id='previousPrice' name='previousPrice' defaultValue={`${data?.previousPrice}`} placeholder='service previous price' className='input' />
                                </label>







                            </div>

                        </div>


                        <br />
                        <div >

                            <button className='btn-full'>Update now</button>
                        </div>
                    </form>



                </div>
            </div>
        </motion.div>
    )
}

export default Updateservice