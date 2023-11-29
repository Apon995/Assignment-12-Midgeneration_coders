import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import useFetch from "../CustomHooks_folder/useFetch";
import Loading from "../Components_folder/Loading";
import AxiosError from "../Components_folder/AxiosError";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAuth from "../CustomHooks_folder/useAuth";







function Employe() {
  const axiosFetch = useFetch();
  const [isverified, setIsverified] = useState(false);
  const navigate = useNavigate();
  const { ReceiveSalary } = useAuth()




  const {
    isPending,
    error,
    data = [],
    refetch,
  } = useQuery({
    queryKey: ["employeData"],
    queryFn: () => axiosFetch.get("/employes").then((data) => data.data),
  });

  const handleveified = (verified, email, currentVerifiedinfo) => {
    const obj = {
      employe_email: email,
      verified: verified,
    };

    if (currentVerifiedinfo == false) {
      Swal.fire({
        title: "Are you sure this employee verified ?",
        showDenyButton: true,
        confirmButtonText: "confirm",
        icon: "question",
        denyButtonText: `cencel`,
      }).then((result) => {
        if (result?.isConfirmed) {
          axiosFetch
            .patch("/employes", obj)
            .then((res) => {
              if (res?.data.modifiedCount == 1) {
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "user vefied !",
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
            title: "user vefied cancelled ! ",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    } else {
      Swal.fire({
        title: "Are you sure this employee unverified ?",
        showDenyButton: true,
        confirmButtonText: "unverified",
        icon: "question",
        denyButtonText: `cencel`,
      }).then((result) => {
        if (result?.isConfirmed) {
          axiosFetch
            .patch("/employes", obj)
            .then((res) => {
              if (res?.data.modifiedCount == 1) {
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "user unvefied done !",
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
            title: "user vefied unverifed action cancelled ! ",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    }
  };




  const handlePaysalary = async (salaryAmount, name, email) => {
    const { value: formValues } = await Swal.fire({
      title: "Enter Employe salary , Month or year !",
      confirmButtonText: "submit",
      showDenyButton: true,
      denyButtonText: 'Cencel',

      html: `
      <select class="selectMonth" id="months" name="months">
      <option value="January">January</option>
        <option value="February">February</option>
        <option value="March">March</option>
        <option value="April">April</option>
        <option value="May">May</option>
        <option value="June">June</option>
        <option value="July">July</option>
        <option value="August">August</option>
        <option value="September">September</option>
        <option value="October">October</option>
        <option value="November">November</option>
        <option value="December">December</option>
      </select>
      <br/>
      <input type="text" id="year" class="swal2-input" placeholder='Type year Name' />
      
      `,
      focusConfirm: false,
    })

    const obj = {
      "Salary": salaryAmount,
      "Name": name,
      "Email": email,
      "MonthName": document.getElementById('months')?.value,
      "YearName": document.getElementById('year')?.value
    }


    if (formValues) {

      if (!document.getElementById('months')?.value || !document.getElementById('year')?.value) {
        return Swal.fire({
          title: "Please enter month or year !",
          icon: "warning",
          showConfirmButton: false,
          timer: 1500,
        });
      }

      ReceiveSalary(obj)
      navigate("/Dashboard/pay")





    }
    else {
      Swal.fire({
        title: "Pay processing cencel",
        icon: "warning",
        showConfirmButton: false,
        timer: 1500,
      });

    }
  };










  const handleDelete = (employeId) => {
    Swal.fire({
      title: "Are you sure Delete it?",
      text: "Are you sure Delete this employe From Database ?",
      showDenyButton: true,
      confirmButtonText: "Confirm Delete ",
      icon: "question",
      denyButtonText: `Cancel Delete`,
    }).then((result) => {
      if (result?.isConfirmed) {
        axiosFetch
          .delete(`/employes?ID=${employeId}`)
          .then((res) => {
            if (res.data.deletedCount == 1) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Employe Delete successfully !",
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
          title: "Employe Delete cancel !",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <>
      <div className="py-8 px-[5%]">
        <h1 className="text-3xl font-medium text-[#343a40]">Our Employe's</h1>

        {/* --employee-Table-row  */}

        <div>
          {error ? (
            <AxiosError />
          ) : isPending ? (
            <Loading />
          ) : (
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Verified</th>
                  <th>Bank Account</th>
                  <th>Salary</th>
                  <th>Pay</th>
                  <th>Details</th>
                  <th>Delete</th>
                </tr>
              </thead>

              <tbody>
                {data?.map((employe) => (
                  <tr key={employe?._id}>
                    <td>{employe?.employeeName}</td>
                    <td>{employe?.employeeEmail}</td>
                    <td>
                      <button
                        onClick={() => {
                          handleveified(
                            isverified,
                            employe?.employeeEmail,
                            employe?.verified
                          ),
                            setIsverified(!isverified);
                        }}
                      >
                        {employe?.verified == true ? (
                          <i className="fa-solid fa-check text-xl text-[#2742fd]"></i>
                        ) : (
                          <i className="fa-solid fa-xmark text-xl text-red-600"></i>
                        )}
                      </button>
                    </td>
                    <td>{employe?.Bank_Account_no}</td>
                    <td>${employe?.salary}</td>
                    <td>

                      <button
                        disabled={employe?.verified != true}
                        onClick={() =>
                          handlePaysalary(
                            employe?.salary,
                            employe?.employeeName,
                            employe?.employeeEmail
                          )
                        }
                        className="pay-btn disabled:opacity-50 "
                      >
                        Pay
                      </button>

                    </td>

                    <td>
                      <button className="details-btn">Details</button>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(employe?._id)}
                        className="delete-btn"
                      >
                        <i className="fa-solid fa-trash-can"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>


    </>
  );
}

export default Employe;
