import React, { useState, useEffect } from 'react'
import useAuth from '../CustomHooks_folder/useAuth';
import useFetch from '../CustomHooks_folder/useFetch';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion"

function Update() {
    const [Error, setError] = useState();
    const [update, setUpdate] = useState();
    const axiosFetch = useFetch();
    const { data } = useAuth();
    const navigate = useNavigate();


    useEffect(() => {

        axiosFetch.get(`/update?ID=${data}`)
            .then(res => {
                setUpdate(res?.data)
                console.log(res.data)
            })
            .catch(error => console.log(error));


    }, [])



    const HandleUpdate = (e) => {
        e.preventDefault();

        const from = new FormData(e.currentTarget);


        const Name = from.get("Name");
        const Role = from.get("Role");
        const Email = from.get("email");
        const BankAccount = parseInt(from.get("Bank"));
        const salary = parseInt(from.get('salary'));
        const verified = from.get('status');

        if (from.get('Bank').length < 10) {
            setError('Minimum 10 number of Bank account')
            setTimeout(() => {
                setError(null);
            }, 5000);
            return;

        }


        const obj = {
            "user_name": Name,
            "user_email": Email,
            "user_roll": Role,
            "user_salary": salary,
            "user_Bank_Ac_no": BankAccount,
            "verified": verified
        }


        axiosFetch.put('/update', obj)
            .then(res => {
                if (res.data.modifiedCount == 1) {
                    Swal.fire({
                        title: 'Update successfully',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 2000,

                    })

                    setTimeout(() => {
                        navigate(location?.state ? location?.state : '/Dashboard/Alluser')
                    }, 2200);
                }
            })
            .catch(error => console.log(error));



    }
    return (
        <>
        
      <motion.div
        initial={{ opacity: 0,  }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
            <div className="py-8 px-[5%] min-h-screen fixed lg:w-[80%] md:w-[100%] w-[100%]">
                <h1 className="text-3xl font-medium text-[#343a40] ">Update page</h1>
                <br />
                {Error && <span style={{ color: 'red', fontSize: '14px', fontWeight: '500', display: "block" }}>{Error}</span>}
                <br />
                <div className='update-page'>
                    <form onSubmit={HandleUpdate}>
                        <div className='update-form'>
                            <div >

                                <label htmlFor="Name">
                                    <p >Enter Name  </p>
                                    <input type="text" id='Name' name='Name' defaultValue={update?.user_name} readOnly className='input' />
                                </label>
                                <br />
                                <br />

                                <label htmlFor="Role" >
                                    <p >Enter User Role</p>
                                    <input type="text" id='Role' name='Role' defaultValue={update?.user_roll} className='input' />
                                </label>
                                <br />
                                <br />

                                <label htmlFor="email">
                                    <p >Enter Mail address</p>
                                    <input type="email" id='email' name='email' defaultValue={update?.user_email} readOnly className='input' />
                                </label>
                                <br />
                                <br />

                            </div>

                            <div>


                                <label htmlFor="Bank">
                                    <p >Bank Account no </p>
                                    <input type="text" id='Bank' name='Bank' defaultValue={update?.user_Bank_Ac_no} readOnly className='input' />
                                </label>


                                <br />
                                <br />


                                <label htmlFor="salary" >
                                    <p >Enter salary </p>
                                    <input type="text" id='salary' name='salary' defaultValue={update?.user_salary} required className='input' />
                                </label>
                                <br />
                                <br />
                                <label htmlFor="status" >
                                    <p >Verified Status</p>
                                    <input type="text" id='status' name='status' defaultValue={update?.verified} readOnly className='input' />
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





        </>
    )
}

export default Update