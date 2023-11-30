import React, { useEffect, useState } from 'react'
import useAuth from '../CustomHooks_folder/useAuth'
import useFetch from '../CustomHooks_folder/useFetch';

function MyProfile() {
  const { user } = useAuth();
  const axiosFetch = useFetch();
  const [data, setData] = useState();

  useEffect(() => {
    axiosFetch.get(`/Profiledata?email=${user.email}`)
      .then(res => setData(res?.data[0]))
      .catch(error => console.log(error));
  }, [])

  console.log(user)


  return (
    <div className="py-8 px-[5%] ">
      <h1 className="text-3xl font-medium text-[#343a40] ">My profile page</h1>

      <div className='flex flex-col sm:flex-row items-center gap-14 mt-8'>
        <div className='flex justify-center flex-col items-center shadow-md px-8 py-4 rounded'>
          {
            user?.photoURL ? <img src={user?.photoURL} alt="" className='rounded-full' style={{ width: "16rem", height: "16rem" }} /> :
              <img src={` https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D`} alt="" className='rounded-full' style={{ width: "16rem", height: "16rem" }} />
          }
          <div className='text-center mt-4'>
            <p className='font-bold text-2xl font-serif'>{data?.user_name || user.displayName}</p>
            <p>{data?.user_email || user.email}</p>
            <p>{data?.user_roll || 'anonymous'}</p>
          </div>
        </div>
        <div className='w-full sm:w-1/2 md:w-4/5 lg:w-1/2'>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 bg-white border border-gray-200 rounded-md">

              <tbody >
                <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Name
                  </th>
                  <td className="px-6 py-4">
                    {data?.user_name || user.displayName}
                  </td>
                </tr>

                <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Role
                  </th>
                  <td className="px-6 py-4">
                    {data?.user_roll || 'anonymous'}
                  </td>
                </tr>

                <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Email
                  </th>
                  <td className="px-6 py-4">
                    {data?.user_email || user.email}
                  </td>
                </tr>

                {data?.user_Bank_Ac_no ? <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Bank Account
                  </th>
                  <td className="px-6 py-4">
                    {data?.user_Bank_Ac_no}
                  </td>
                </tr> : ""
                }

                {
                  data?.user_salary ? <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      Salary
                    </th>
                    <td className="px-6 py-4">
                      ${data?.user_salary}
                    </td>
                  </tr> : ""
                }

              </tbody>

            </table>
          </div>

        </div>
      </div>




    </div>

  )
}

export default MyProfile