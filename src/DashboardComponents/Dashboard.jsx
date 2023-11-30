import React, { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Dashboardsvg from '../assets/svgFolder/Dashboard.svg'
import useAuth from '../CustomHooks_folder/useAuth'
import useFetch from '../CustomHooks_folder/useFetch';

function Dashboard() {
    const { user } = useAuth();
    const [usertype, setUsertype] = useState();
    const axiosFetch = useFetch();

    useEffect(() => {
        axiosFetch.post('/userType', { email: user?.email })
            .then(res => {
                setUsertype(res.data?.user_roll)
            })
            .catch(error => console.log(error))
    }, [])











    return (
        <>
            <div className='min-h-screen flex gap-1 '>

                {/* ---Dashboard_routes */}
                <div className='w-[20%] dashboard min-h-screen  bg-[#2742fd] text-white flex justify-between flex-col py-9 px-2 '>

                    <div>
                        <div className="border-b-2 w-full border-white pb-3 flex gap-2 pl-5">
                            <img className='text-white' src={Dashboardsvg} alt="Dashboardsvg" />
                            <h1 className='text-2xl font-normal text-gray-950'> Dashboard</h1>
                        </div>

                        <div className='pt-3'>

                            {/* ---dynamic-routes-dependsOn user type--  */}


                            <ul className='flex flex-col gap-2'>

                                <li ><NavLink className=" hover:bg-[#4070f4] rounded-md w-full py-2 px-1 hover:cursor-pointer font-normal text-base inline-flex items-center gap-2" to='/'><i className="fa-solid fa-house"></i> Home</NavLink></li>
                                <li ><NavLink className=" hover:bg-[#4070f4] rounded-md w-full py-2 px-1 hover:cursor-pointer font-normal text-base inline-flex items-center gap-2" to='/Dashboard/MyProfile'><i className="fa-regular fa-user"></i> My profile</NavLink></li>

                                {usertype == 'Hr' || usertype == 'hr' || usertype == "HR" || usertype == 'hR' ? <li ><NavLink className=" hover:bg-[#4070f4] rounded-md w-full py-2 px-1 hover:cursor-pointer font-normal text-base inline-flex items-center gap-2" to='/Dashboard/employee'><i className="fa-solid fa-users"></i> Employe</NavLink></li> : ""}
                                {usertype == 'employee' || usertype == "Employee" || usertype == "Employe" || usertype == "employe" || usertype == "EMPLOYE" ? <li ><NavLink className=" hover:bg-[#4070f4] rounded-md w-full py-2 px-1 hover:cursor-pointer font-normal text-base inline-flex items-center gap-2" to='/Dashboard/PayHistory'><i className="fa-solid fa-clock-rotate-left"></i> Payment History</NavLink></li> : ""}
                                {usertype == 'Admin' || usertype == "admin" || usertype == "ADMIN" ? <li ><NavLink className=" hover:bg-[#4070f4] rounded-md w-full py-2 px-1 hover:cursor-pointer font-normal text-base inline-flex items-center gap-2" to='/Dashboard/Alluser'><i className="fa-solid fa-users"></i> All Member</NavLink></li> : ""}
                                {usertype == 'Admin' || usertype == "admin" || usertype == "ADMIN" ? <li ><NavLink className=" hover:bg-[#4070f4] rounded-md w-full py-2 px-1 hover:cursor-pointer font-normal text-base inline-flex items-center gap-2" to='/Dashboard/VerifiedEmploye'><i className="fa-solid fa-user-check"></i> Verified employee</NavLink></li> : ""}

                            </ul>


                        </div>
                    </div>

                    <div>
                        <div className="border-b-2 w-full border-white pb-3 flex gap-2 pl-5">
                            <i className="fa-solid fa-headphones text-2xl text-gray-950"></i>
                            <h1 className='text-2xl font-normal text-gray-950'>Contact Us</h1>
                        </div>
                        <div className='pt-3'>
                            <ul>
                                <li  ><NavLink className=" hover:bg-[#4070f4] rounded-md w-full py-2 px-1 hover:cursor-pointer font-normal text-base  inline-flex items-center gap-2" to={'/Contact'} ><i className="fa-solid fa-phone"></i>  Call us</NavLink></li>
                                <li  ><NavLink className=" hover:bg-[#4070f4] rounded-md w-full py-2 px-1 hover:cursor-pointer font-normal text-base inline-flex items-center gap-2" to={'/Contact'} ><i className="fa-brands fa-rocketchat"></i>  Chat us</NavLink></li>
                                <li  ><NavLink className=" hover:bg-[#4070f4] rounded-md w-full py-2 px-1 hover:cursor-pointer font-normal text-base inline-flex items-center gap-2" to={'/Contact'} ><i className="fa-solid fa-envelope"></i>  email us</NavLink></li>
                            </ul>
                        </div>
                    </div>

                </div>


                {/* ----dashboard-content//outelet */}
                <div className='w-[80%]'>
                    <Outlet />
                </div>

            </div>











        </>
    )
}

export default Dashboard