import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../CustomHooks_folder/useAuth';
import Swal from 'sweetalert2';
import useFetch from '../CustomHooks_folder/useFetch';




function Login() {
  const [showPass, setshowPass] = useState(false);
  const [Error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { LoginEmailorPass, GoogleLogin, user } = useAuth();
  const axiosFetch = useFetch();



  const HandleLogin = (e) => {
    e.preventDefault();

    const from = new FormData(e.currentTarget);
    const email = from.get('email');
    const password = from.get('password');

    if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{6,}$/.test(password)) {

      setError('Wrong password try again !');

      setTimeout(() => {
        setError(null)
      }, 5000);

      return
    }

    LoginEmailorPass(email, password)
      .then(result => {
        if (result) {
          e.target.reset();
          navigate(location?.state ? location?.state : '/')
        }
      })
      .catch(error => {
        if ("auth/invalid-login-credentials") {
          setError('please check your email and password !')
          setTimeout(() => {
            setError(null)
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
              "user_roll": "Employee"

            }

            axiosFetch.post('/user', obj)
              .then(() => {
                Swal.fire({
                  title: 'Account Login Succesfull !',
                  text: 'your account have Logged !',
                  icon: 'success',
                  showConfirmButton: false,
                  timer: 1000,

                })
                navigate(location?.state ? location?.state : '/')

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
              "user_roll": "Hr"

            }

            axiosFetch.post('/user', obj)
              .then(() => {
                Swal.fire({
                  title: 'Account Login Succesfull !',
                  text: 'your account have Logged !',
                  icon: 'success',
                  showConfirmButton: false,
                  timer: 1000,

                })
                navigate(location?.state ? location?.state : '/')
                

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
      <div className='Login-page min-h-screen '>
        <div className="wrapper">
          <h2>Login</h2>
          {Error && <span style={{ color: 'red', fontSize: '14px', fontWeight: '500', }}>{Error}</span>}
          <br />
          <form onSubmit={HandleLogin}>
            <div className="input-box">
              <input type="email" name='email' placeholder="Enter your email" required />
            </div>
            <div className="input-box password-box">
              <input type={showPass ? 'text' : 'password'} name='password' autoComplete='false' placeholder="Enter password" required />
              <i className={`fa-solid  ${showPass ? 'fa-eye' : 'fa-eye-slash'}`} onClick={() => setshowPass(!showPass)}></i>
            </div>

            <br />
            <button className='btn-create'>Login Now</button>
          </form>
          <br />
          <p className='or-span'>----------OR---------</p>
          <br />
          <div className='social-icons'>
            <button onClick={HandleGoogleLogin}><i className="fa-brands fa-google"></i></button>
            <button><i className="fa-brands fa-facebook"></i></button>
            <button><i className="fa-brands fa-linkedin"></i></button>
          </div>
          <br />

          <div className="text">
            <h3>You don't have an account? <Link to='/Register'>Register now</Link></h3>
          </div>
        </div>
      </div>



      <br />
      <br />
      <br />
    </>
  )
}

export default Login