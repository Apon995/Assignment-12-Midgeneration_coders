import React, { createContext, useState, useEffect } from 'react'
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../../firebase.config';
import Swal from 'sweetalert2';
import useFetch from '../CustomHooks_folder/useFetch';




export const AuthContext = createContext(null);







function AuthProvider({ children }) {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const axiosFetch = useFetch();
  const [data, setData] = useState()
  


  const ReceiveObj = (obj) => {
    setData(obj);


  }

  const GoogleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  }


  const RegisterEmailorPass = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const LoginEmailorPass = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const Logout = () => {
    setLoading(true);
    signOut(auth)
      .then((res) => {
        if (res == undefined) {
          axiosFetch.post('/jwtTokenClear', {}, { withCredentials: true })
            .then(() => {
              Swal.fire({
                title: 'Sign out successfull !',
                icon: 'success',
                showConfirmButton: false,
                timer: 2000,

              })
            })
            .catch(error => { console.log(error) })
        }
      })
      .catch(error => console.log(error));

  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      const loggeduser = { email: currentUser?.email || user?.email };
      setUser(currentUser);
      setLoading(false)

      if (currentUser) {

        axiosFetch.post('/jwtToken', loggeduser, { withCredentials: true })
          .then(res => {
            console.log(res.data);
          })
          .catch(error => console.log(error))
      }
      else {
        setUser(null);
      }

    })


    return () => {
      unsubscribe();
    }
  }, [])



















  const ShareObj = {
    user,
    loading,
    data,
    GoogleLogin,
    RegisterEmailorPass,
    LoginEmailorPass,
    Logout,
    ReceiveObj,


  }




  return (
    <>
      <AuthContext.Provider value={ShareObj}>
        {children}
      </AuthContext.Provider>
    </>
  )
}

export default AuthProvider