import React, { useEffect, useState } from 'react'
import useFetch from '../CustomHooks_folder/useFetch';
import { useQuery } from '@tanstack/react-query';
import AxiosError from '../Components_folder/AxiosError';
import Loading from '../Components_folder/Loading';
import Swal from 'sweetalert2';
import useAuth from '../CustomHooks_folder/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion"

function Allservice() {





  const axiosFetch = useFetch();
  const { ReceiveObj } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();


  const {
    isPending,
    error,
    data = [],
    refetch
  } = useQuery({
    queryKey: ["Servicedb"],
    queryFn: () =>
      axiosFetch
        .get("/services")
        .then((data) => data.data)

  });




  const handleDelete = (Id) => {
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
          .delete(`/services?ID=${Id}`)
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




  const HandleUpdate = (serviceID) => {

    Swal.fire({
      title: "sure update this service ?",
      showDenyButton: true,
      confirmButtonText: "Confirm update",
      icon: "question",
      denyButtonText: `Cancel update`,
    }).then((result) => {
      if (result?.isConfirmed) {


        axiosFetch.get(`/updateservice?ID=${serviceID}`)
          .then(res => {
            ReceiveObj(res?.data)
            navigate('/Dashboard/updateService')
          })
          .catch(error => console.log(error));



      }


    })



  }



  return (
    <>

      <motion.div
        initial={{ opacity: 0,  }}
        whileInView={{ opacity: 1}}
        transition={{ duration: 2 }}
      >

        <div className="py-8 px-[5%]">
          <h1 className="text-3xl font-medium text-[#343a40] ">All services</h1>

          <br />

          {
            error ? <AxiosError /> : isPending ? <Loading /> : <div >
              <table className="styled-table">
                <thead>
                  <tr>
                    <th>Service Name</th>
                    <th>Service price</th>
                    <th>Service Tools</th>
                    <th>Edit Service</th>
                    <th>Delete</th>
                  </tr>
                </thead>


                <tbody>
                  {
                    data.map(service => <tr key={service?._id}>
                      <td>{service?.serviceName}</td>
                      <td>{service?.servicePrice}</td>
                      <td>{service?.serviceTools}</td>
                      <td><button onClick={() => HandleUpdate(service?._id)}><i className="fa-solid fa-pen-to-square"></i></button></td>
                      <td><button onClick={() => handleDelete(service?._id)}><i className="fa-solid fa-trash"></i></button></td>

                    </tr>)
                  }
                </tbody>
              </table>
            </div>
          }



          <br />
          <br />
          <br />
          <button onClick={() => navigate('/Dashboard/Addservice')} className='px-4 py-2 font-medium text-base block text-white bg-[#2742fd] rounded-md mx-auto'>Add service</button>

        </div>

      </motion.div>











    </>
  )
}

export default Allservice