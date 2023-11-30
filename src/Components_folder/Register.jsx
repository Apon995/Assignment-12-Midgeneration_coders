import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../CustomHooks_folder/useAuth';
import Swal from 'sweetalert2';
import useFetch from '../CustomHooks_folder/useFetch';


function Register() {


  const [createShowpass, setCreateshowpass] = useState(false);
  const [ConfirmShowpass, setConfirmShowpass] = useState(false);
  const [userRole, setUserRole] = useState(false);

  const [accept, setAccept] = useState(false);
  const [terms, setTerms] = useState(false);
  const [Error, setError] = useState(null);
  const { RegisterEmailorPass, GoogleLogin, user } = useAuth();
  const navigate = useNavigate();
  const axiosFetch = useFetch();



  const HandleSubmitRegister = (e) => {

    e.preventDefault();

    if (!accept) {
      setTerms(true);
      setTimeout(() => {
        setTerms(false)
      }, 5000);
      return;
    }

    const from = new FormData(e.currentTarget);
    const email = from.get('email').toLocaleLowerCase();
    const name = from.get('name');
    const createPassword = from.get('createPassword');
    const confirmPassword = from.get('confirmPassword');
    const userrole = from.get('user-roll');
    const usersalary = parseInt(from.get('employe-salary'))
    const bankAccount = parseInt(from.get('bankAccount'))


    if (typeof (bankAccount) == 'string') {
      setError("please Enter number in Bank Account field !")
      setTimeout(() => {
        setError(null);
      }, 5000);
      return;
    }



    if (from.get('bankAccount').length < 10) {
      setError('Minimum 10 number of Bank account')
      setTimeout(() => {
        setError(null);
      }, 5000);
      return;

    }



    if (confirmPassword !== createPassword) {

      setError('Please match the password fields !')
      setTimeout(() => {
        setError(null);
      }, 5000);
      return;

    }

    if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{6,}$/.test(confirmPassword)) {

      setError('please Type a strong password !');
      setTimeout(() => {
        setError(null);
      }, 5000);

      return;
    }


    const obj = {
      "user_name": name,
      "user_email": email,
      "user_roll": userrole,
      "user_salary": usersalary,
      "user_Bank_Ac_no": bankAccount,
      "verified": false
    }



    RegisterEmailorPass(email, confirmPassword)
      .then(result => {
        if (result) {
          axiosFetch.post('/user', obj)
            .then(() => {

              e.target.reset();
              Swal.fire({
                title: 'Account Register Succesfull !',
                text: 'your account have Logged !',
                icon: 'success',
                showConfirmButton: false,
                timer: 1000,

              })
              navigate('/')




            })
            .catch(error => console.log(error?.message))
        }
      })
      .catch(error => {
        if ('auth/email-already-in-use') {
          setError('This email already used ! try another.');

          setTimeout(() => {
            setError(null);
          }, 5000);

        }
        else {
          console.log(error)
        }
      })



  }


  const HandleGoogleLogin = () => {
    if (user) {
      Swal.fire({
        title: 'User Already exists',
        icon: 'warning',
        showConfirmButton: false,
        timer: 1000,

      })
      return;
    }


    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: true
    });
    swalWithBootstrapButtons.fire({
      title: "Please Choose user Roll ?",
      text: "Choose your roll employee or hr ?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Employee",
      cancelButtonText: "Hr",
      reverseButtons: true
    }).then((result) => {
      if (result?.isConfirmed) {
        GoogleLogin()
          .then(res => {
            const obj = {
              "user_name": res?.user?.displayName,
              "user_email": res?.user?.email,
              "user_roll": "employee",
              "user_salary": 25000,
              "user_Bank_Ac_no": 23043343433,
              "verified": false

            }

            axiosFetch.post('/user', obj)
              .then(() => {
                Swal.fire({
                  title: 'Account Register Succesfull !',
                  text: 'your account have Logged !',
                  icon: 'success',
                  showConfirmButton: false,
                  timer: 1000,

                })
                navigate('/')

              })
              .catch(error => console.log(error));

          })
          .catch(error => console.log(error))
      }
      else {
        GoogleLogin()
          .then(res => {
            const obj = {
              "user_name": res?.user?.displayName,
              "user_email": res?.user?.email,
              "user_roll": "Hr",
              "user_salary": 35000,
              "user_Bank_Ac_no": 23043343433,
              "verified": null

            }

            axiosFetch.post('/user', obj)
              .then(() => {
                Swal.fire({
                  title: 'Account Register Succesfull !',
                  text: 'your account have Logged !',
                  icon: 'success',
                  showConfirmButton: false,
                  timer: 1000,

                })
                navigate('/')

              })
              .catch(error => console.log(error));


          })
          .catch(error => console.log(error))
      }
    });








  }


  return (
    <>

      <br />
      <br />
      <br />
      <br />

      <div className='Register-page min-h-screen '>

        <div className="wrapper">
          <h2>Registration</h2>
          {Error && <span style={{ color: 'red', fontSize: '14px', fontWeight: '500', }}>{Error}</span>}
          <br />
          <form onSubmit={HandleSubmitRegister}>
            <div>
              <h1 className='text-base font-medium text-gray-800  pb-3'>Choose Your Desgination</h1>
              <select className="selectOption" onChange={() => setUserRole(!userRole)} name="user-roll" id="user-roll" >
                <option value="employee">Employee</option>
                <option value="Hr">Human Resource Executive</option>
              </select>
            </div>

            {
              userRole == false ? <div className='mt-2' >
                <h1 className='text-base font-medium text-gray-800 pb-3'>Choose Your Salary Range</h1>
                <select className="selectOption" name="employe-salary" id="employe-salary" >
                  <option value="25000">25000</option>
                  <option value="28000">28000</option>
                  <option value="30000">30000</option>
                </select>
              </div> : <div className='mt-2'>
                <h1 className='text-base font-medium text-gray-800 pb-3'>Choose Your Salary Range</h1>
                <select className="selectOption" name="employe-salary" id="employe-salary" >
                  <option value="35000">35000</option>
                  <option value="38000">38000</option>
                  <option value="40000">40000</option>
                </select>
              </div>
            }
            <div className="input-box">
              <input type="text" name='name' placeholder="Enter your name" required />
            </div>
            <div className="input-box">
              <input type="email" name='email' placeholder="Enter your email" required />
            </div>
            <div className="input-box">
              <input type="text" name='bankAccount' placeholder="Enter your Bank Account number" required />
            </div>
            <div className="input-box password-box">
              <input type={ConfirmShowpass ? 'text' : 'password'} name='createPassword' placeholder="Create password" required />
              <i className={`fa-solid  ${ConfirmShowpass ? 'fa-eye' : 'fa-eye-slash'}`} onClick={() => setConfirmShowpass(!ConfirmShowpass)}></i>
            </div>
            <div className="input-box password-box">
              <input type={createShowpass ? 'text' : 'password'} name='confirmPassword' placeholder="Confirm password" required />
              <i className={`fa-solid  ${createShowpass ? 'fa-eye' : 'fa-eye-slash'}`} onClick={() => setCreateshowpass(!createShowpass)}></i>
            </div>
            {terms && <span style={{ color: 'red', fontSize: '14px', fontWeight: '500', }}>Please accpect terms & conditions !</span>}
            <br />
            <div className="policy">
              <input type="checkbox" id='checkbox' onClick={() => setAccept(!accept)} />
              <h3>I accept all terms & condition</h3>
            </div>
            <br />
            <button className='btn-create'>Create Now</button>
          </form>
          <br />

          <div className='social-icons'>
            <button onClick={HandleGoogleLogin}><i className="fa-brands fa-google"></i></button>
            <button><i className="fa-brands fa-facebook"></i></button>
            <button><i className="fa-brands fa-linkedin"></i></button>
          </div>
          <br />
          <div className="text">
            <h3>Already have an account? <Link to='/Login'>Login now</Link></h3>
          </div>
        </div>
      </div>









      <br />
      <br />
      <br />
    </>
  )
}

export default Register