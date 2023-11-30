import React, { useState, useEffect } from 'react'
import useAuth from '../CustomHooks_folder/useAuth';
import useFetch from '../CustomHooks_folder/useFetch';
import AxiosError from '../Components_folder/AxiosError';


function PaymentDetails() {
  const { user } = useAuth();
  const [data, setData] = useState();
  const axiosFetch = useFetch();


  useEffect(() => {

    axiosFetch.get(`/paymentInfo?email=${user?.email}`)
      .then(res => {
        console.log(res.data)
      })
      .catch(error => console.log(error))

  }, [])
  return (
    <>
      <div className='min-h-screen py-8 px-[5%]'>
        <h1 className="text-3xl font-medium text-[#343a40] ">My Salary Details</h1>
        <br />

        {data?.length > 0 ? <div>
          <table className="styled-table">
            <thead>
              <tr>
                <th className="text-sm">Month</th>

                <th className="text-sm">Year</th>
                <th className="text-sm">salary</th>
                <th className="text-sm">Payed Email</th>

                <th className="text-sm">payment Method</th>
                <th className="text-sm">Receive Email</th>
                <th className="text-sm">Transition Id</th>
              </tr>
            </thead>

            <tbody>

              {
                data?.map(employe => <tr key={employe?._id} >
                  <td>{employe?.salary_month}</td>
                  <td>{employe?.salary_year}</td>
                  <td>{employe?.salary}</td>
                  <td>{employe?.Pay_email}</td>
                  <td>{employe?.Payment_method}</td>
                  <td>{employe?.payment_recieve_email}</td>
                  <td>{employe?.Transition_Id}</td>
                </tr>)
              }

            </tbody>
          </table>

        </div> : <AxiosError />
        }

      </div>







    </>
  )
}

export default PaymentDetails