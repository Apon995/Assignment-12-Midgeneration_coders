import React, { useEffect, useState } from 'react'
import useFetch from '../CustomHooks_folder/useFetch';
import { useQuery } from '@tanstack/react-query';
import AxiosError from '../Components_folder/AxiosError';
import Loading from '../Components_folder/Loading';
import Swal from 'sweetalert2';
import useAuth from '../CustomHooks_folder/useAuth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

function VerifiedEmploye() {


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
    queryKey: ["verifiedemploye"],
    queryFn: () =>
      axiosFetch
        .get("/employee")
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


      <div className="py-8 px-[5%]">
        <h1 className="text-3xl font-medium text-[#343a40] ">Verified Employes</h1>

        <br />

        {
          error ? <AxiosError /> : isPending ? <Loading /> : <div >
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Salary</th>
                  <th>Verified status</th>
                  <th>Edit Employe</th>
                  <th>Fire</th>
                </tr>
              </thead>

              <tbody>

                {data?.map(employe => <tr key={employe?._id}>
                  <td>{employe?.user_name}</td>
                  <td>{employe?.user_email}</td>
                  <td>{employe?.user_salary}</td>
                  <td>{employe?.verified == true && <i className="fa-solid fa-circle-check text-xl text-[#2742fd]"></i>}</td>
                  <td><button onClick={() => handleUpdate(employe?._id)}><i className="fa-solid fa-pen-to-square text-xl"></i></button></td>
                  <td><button onClick={() => handleDelete(employe._id)}><i className="fa-solid fa-trash-can text-xl"></i></button></td>
                </tr>)
                }
              </tbody>
            </table>
          </div>
        }





      </div>









    </>
  )
}

export default VerifiedEmploye