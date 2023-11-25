import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../CustomHooks_folder/useAuth';
import Swal from 'sweetalert2';

function Register() {


  const [createShowpass, setCreateshowpass] = useState(false);
  const [ConfirmShowpass, setConfirmShowpass] = useState(false);
  const [accept, setAccept] = useState(false);
  const [terms, setTerms] = useState(false);
  const [Error, setError] = useState(null);
  const { RegisterEmailorPass } = useAuth();
  const navigate = useNavigate();




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
    const email = from.get('email');
    const createPassword = from.get('createPassword');
    const confirmPassword = from.get('confirmPassword');

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



    RegisterEmailorPass(email, confirmPassword)
      .then(result => {
        e.target.reset();
        if (result) {
          Swal.fire({
            title: 'Account Register Succesfull !',
            text: 'your account have Logged !',
            icon: 'success',
            showConfirmButton: false,
            timer: 1000,

          })
          navigate('/')
          
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
            <div className="input-box">
              <input type="text" name='name' placeholder="Enter your name" required />
            </div>
            <div className="input-box">
              <input type="email" name='email' placeholder="Enter your email" required />
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
            <br />
            <br />
            <div className="text">
              <h3>Already have an account? <Link to='/Login'>Login now</Link></h3>
            </div>
          </form>
        </div>
      </div>









    <br />
    <br />
    <br />
    </>
  )
}

export default Register