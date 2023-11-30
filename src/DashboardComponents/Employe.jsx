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
  const { ReceiveObj } = useAuth()
  const [year, setyear] = useState()
  const [month, setMonth] = useState()

  useEffect(() => {

    function generateYears(startYear, endYear) {
      const years = [];
      for (let year = startYear; year <= endYear; year++) {
        years.push(year);
      }
      return years;
    }
    function generateMonths() {
      return [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];
    }


    const currentYear = new Date().getFullYear();


    const years = generateYears(1900, currentYear);


    const months = generateMonths();

    setMonth(months);
    setyear(years);
  }, [])


  const {
    isPending,
    error,
    data = [],
    refetch,
  } = useQuery({
    queryKey: ["employeData"],
    queryFn: () => axiosFetch.get(`/employes?Role=${"employee"}`).then((data) => data.data),
  });

  

  const handleveified = (verified, email, currentVerifiedinfo) => {
    const obj = {
      user_email: email,
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

    Swal.fire({
      title: 'Select Month and Year',
      html:
        `<div>

          <select class="selectMonth" id="month-select" class="swal2-select">
            ${month?.map((month) => `<option value="${month}">${month}</option>`).join('')}
          </select>
          <br/><br/>
          
          <select class="selectMonth w-[57%]" id="year-select" class="swal2-select">
            ${year?.map((year) => `<option value="${year}">${year}</option>`).join('')}
          </select>
        </div>`,
      showCancelButton: true,
      confirmButtonText: 'Select',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        if (!document.getElementById('month-select')?.value || !document.getElementById('year-select')?.value) {
          Swal.fire({
            position: "center",
            icon: "warning",
            title: "Please select Year or Month",
            showConfirmButton: false,
            timer: 1500,
          });

          return;

        }
        const obj = {
          "Salary": salaryAmount,
          "Name": name,
          "Email": email,
          "MonthName": document.getElementById('month-select')?.value,
          "YearName": document.getElementById('year-select')?.value
        }

        ReceiveObj(obj)
        console.log(obj)

        setTimeout(() => {
          navigate("/Dashboard/pay")

        }, 2000);

      }
      else {
        Swal.fire({
          position: "center",
          icon: "info",
          title: "Payment processing cancel! ",
          showConfirmButton: false,
          timer: 1500,
        });

      }
    });







  };




  const HandleDetails = (email) => {

    axiosFetch.get(`/paymentInfo?email=${email}`)
      .then(res => {
        ReceiveObj(res?.data)
        navigate('/Dashboard/Chart')
      })
      .catch(error => {
        console.log(error)
      })

  }








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
        <h1 className="text-3xl font-medium text-[#343a40] ">Our Employe's</h1>

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
                    <td>{employe?.user_name}</td>
                    <td>{employe?.user_email}</td>
                    <td>
                      <button
                        onClick={() => {
                          handleveified(
                            isverified,
                            employe?.user_email,
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
                    <td>{employe?.user_Bank_Ac_no}</td>
                    <td>${employe?.user_salary}</td>
                    <td>

                      <button
                        disabled={employe?.verified != true}
                        onClick={() =>
                          handlePaysalary(
                            employe?.user_salary,
                            employe?.user_name,
                            employe?.user_email
                          )
                        }
                        className="pay-btn disabled:opacity-50 "
                      >
                        Pay
                      </button>

                    </td>

                    <td>
                      <button onClick={() => HandleDetails(employe?.user_email)} className="details-btn">Details</button>
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
