import React, { useState } from 'react'
import useFetch from '../CustomHooks_folder/useFetch';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import Loading from '../Components_folder/Loading';
import AxiosError from '../Components_folder/AxiosError';
import { useNavigate } from 'react-router-dom';
import useAuth from '../CustomHooks_folder/useAuth';
import { motion } from "framer-motion"


function AllUsers() {
    const axiosFetch = useFetch();
    const navigate = useNavigate();
    const { ReceiveObj } = useAuth()

    const {
        isPending,
        error,
        data = [],
        refetch
    } = useQuery({
        queryKey: ["Alluserdata"],
        queryFn: () =>
            axiosFetch
                .get(`/users?Role=${"Hr"}`)
                .then((data) => data.data)

    });



    const handleDelete = (employeId) => {
        Swal.fire({
            title: "Are you sure Delete it?",
            text: "Are you sure Delete this employe delete From MidGeneration Coders?",
            showDenyButton: true,
            confirmButtonText: "Confirm Delete ",
            icon: "question",
            denyButtonText: `Cancel Delete`,
        }).then((result) => {
            if (result?.isConfirmed) {
                axiosFetch
                    .delete(`/users?ID=${employeId}`)
                    .then((res) => {
                        if (res.data.deletedCount == 1) {
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: " Delete successfully !",
                                showConfirmButton: false,
                                timer: 1500,
                            });

                            refetch();
                        }
                    })
                    .catch((error) => console.log(error));
            } else if (result?.isDenied) {
                Swal.fire({
                    position: "center",
                    icon: "info",
                    title: "Delete cancel !",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        });
    };



    const handleUpdate = (Id) => {

        Swal.fire({
            title: "Are you sure Edit this employee Information ?",
            showDenyButton: true,
            confirmButtonText: "Edit",
            icon: "question",
            denyButtonText: `cencel`,
        }).then((result) => {

            if (result?.isConfirmed) {
                ReceiveObj(Id)
                navigate('/Dashboard/update')



            } else if (result?.isDenied) {
                Swal.fire({
                    position: "center",
                    icon: "info",
                    title: "user Edit action cancelled ! ",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        });


    }





    return (
        <>

            <motion.div
                initial={{ opacity: 0 , y:90}}
                whileInView={{ opacity: 1 , y : 0 }}
                transition={{ duration: 2 }}
            >


                <div className="py-8 px-[5%]">
                    <h1 className="text-3xl font-medium text-[#343a40] ">All Members</h1>

                    <br />
                    {
                        error ? <AxiosError /> : isPending ? <Loading /> : <div>
                            <table className="styled-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Type</th>
                                        <th>Verified status</th>
                                        <th>Edit user</th>
                                        <th>Fire</th>
                                    </tr>
                                </thead>

                                <tbody>

                                    {
                                        data?.map(user => <tr key={user?._id}>
                                            <td>{user?.user_name}</td>
                                            <td>{user?.user_email}</td>
                                            <td>{user?.user_roll}</td>
                                            <td>{user?.verified == "true" || user?.verified == true ? <i className="fa-solid text-[#2742fd] fa-circle-check"></i> : ""}</td>
                                            <td>
                                                {user?.user_roll == "Admin" ? <button><i className="fa-solid fa-triangle-exclamation text-xl text-red-700"></i></button> : <button onClick={() => handleUpdate(user?._id)}> <i className="fa-solid fa-pen-to-square"></i></button>}
                                            </td>
                                            <td>
                                                {user?.user_roll == "Admin" ? <button> <i className="fa-solid fa-trash-can text-xl text-red-700"></i></button> : <button onClick={() => handleDelete(user?._id)}>     <i className="fa-solid fa-trash-can"></i></button>}
                                            </td>



                                        </tr>)
                                    }

                                </tbody>
                            </table>
                        </div>
                    }






                </div>
            </motion.div>












        </>
    )
}

export default AllUsers