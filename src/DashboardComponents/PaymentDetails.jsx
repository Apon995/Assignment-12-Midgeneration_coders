import React, { useState, useEffect } from 'react'
import useAuth from '../CustomHooks_folder/useAuth';
import useFetch from '../CustomHooks_folder/useFetch';

import { motion } from "framer-motion"


function PaymentDetails() {
  const { user } = useAuth();
  const [data, setData] = useState();
  const axiosFetch = useFetch();


  useEffect(() => {

    axiosFetch.get(`/paymentInfo?email=${user?.email}`)
      .then(res => {

        setData(res.data);
      })
      .catch(error => console.log(error))

  }, [])
  return (
    <>
      <div className='min-h-screen py-8 lg:px-[5%] px-[2%] '>
        <h1 className="lg:text-3xl text-xl font-medium text-[#343a40] ">My Salary Details</h1>
        <br />

        {data?.length > 0 ?

          <motion.div
            initial={{ opacity: 0, }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >

            <div>
              <table className="styled-table border-collapse ">
                <thead>
                  <tr>
                    <th className="lg:text-sm text-xs" style={{ fontSize: "12px" }}>Month</th>

                    <th className="lg:text-sm text-xs" style={{ fontSize: "12px" }}>Year</th>
                    <th className="lg:text-sm text-xs" style={{ fontSize: "12px" }}>salary</th>
                    <th className="lg:text-sm text-xs  " style={{ fontSize: "12px" }}>Payed Email</th>

                    <th className="lg:text-sm text-xs " style={{ fontSize: "12px" }}>payment Method</th>
                    <th className="lg:text-sm text-xs " style={{ fontSize: "12px" }}>Receive Email</th>
                    <th className="lg:text-sm text-xs " style={{ fontSize: "12px" }}>Transition Id</th>
                  </tr>
                </thead>

                <tbody>

                  {
                    data?.map(employe => <tr key={employe?._id} >
                      <td className="lg:text-sm text-xs" style={{ fontSize: "12px" }}>{employe?.salary_month}</td>
                      <td className="lg:text-sm text-xs" style={{ fontSize: "12px" }}>{employe?.salary_year}</td>
                      <td className="lg:text-sm text-xs" style={{ fontSize: "12px" }}>{employe?.salary}</td>
                      <td className="lg:text-sm text-xs " style={{ fontSize: "12px", lineBreak: "anywhere" }}>{employe?.Pay_email}</td>
                      <td className="lg:text-sm text-xs " style={{ fontSize: "12px" }}>{employe?.Payment_method}</td>
                      <td className="lg:text-sm text-xs " style={{ fontSize: "12px", lineBreak: "anywhere" }}>{employe?.payment_recieve_email}</td>
                      <td className="lg:text-sm text-xs  " style={{ fontSize: "12px", lineBreak: "anywhere" }}>{employe?.Transition_Id}</td>
                    </tr>)
                  }

                </tbody>
              </table>

            </div>
          </motion.div>
          : <div className='flex items-center justify-center w-full min-h-[60vh] text-center'>
            <h1 className='text-black text-2xl font-medium'>Payment history Empty !</h1>
          </div>
        }

      </div>







    </>
  )
}

export default PaymentDetails