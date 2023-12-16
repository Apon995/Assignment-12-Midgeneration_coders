import React, { useEffect, useState } from 'react'
import useFetch from '../CustomHooks_folder/useFetch'
import { motion } from "framer-motion"


function Mywork() {
    const axiosFetch = useFetch();
    const [data, setData] = useState();

    useEffect(() => {
        axiosFetch.get('/work')
            .then(res => setData(res?.data))
            .catch(error => console.log(error))
    }, [])




    return (


        <div className='min-h-screen w-full p-9'>
            <h1 className="text-3xl font-medium text-[#343a40]">My work</h1>

            <br />

            <div className='grid  grid-cols-1 gap-4 gap-y-16 '>


                {
                    data?.map((workdata) =>
                        <motion.div
                            initial={{ opacity: 0, y: 190 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2 }}
                        >


                            <div key={workdata?._id} className='flex items-center justify-center flex-col'>
                                <h1 className='text-2xl text-black font-medium border-b-2 border-black'>{workdata?.subject}</h1>
                                <br />
                                <div className='flex gap-2 items-center mx-auto flex-wrap justify-center'>

                                    {
                                        workdata?.tools?.frontend?.map((tool, index) => <h1 key={index} className='hover:bg-[#2742fd] transition-all duration-500 hover:text-white cursor-pointer text-xl font-medium border-[0.5px] border-black p-2 rounded-md'>{tool}</h1>)

                                    }
                                    {
                                        workdata?.tools?.backend?.map((tool, index) => <h1 key={index} className='text-xl hover:bg-[#2742fd] transition-all duration-500 hover:text-white cursor-pointer font-medium border-[0.5px] border-black p-2 rounded-md'>{tool}</h1>)
                                    }


                                </div>

                                <br />

                                <img className='rounded-md border-8 p-1 border-black lg:w-[80%] duration-700 hover:cursor-pointer hover:scale-105' src={workdata?.demoPicture || "https://repository-images.githubusercontent.com/384091706/a1614500-e03f-11eb-986a-30f6f0d4f1cc"} alt="" />
                                <br />


                                <div className='bg-[#2742fd] p-2 rounded-md text-white'>Production time {workdata?.deliveryTime}</div>


                            </div>
                        </motion.div>
                    )
                }



            </div>

        </div>
    )
}

export default Mywork