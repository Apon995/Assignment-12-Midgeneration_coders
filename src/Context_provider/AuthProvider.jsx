import React, { createContext, useState ,useEffect } from 'react'
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../../firebase.config';
import Swal from 'sweetalert2';

export const AuthContext = createContext(null);

function AuthProvider({ children }) {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

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
        if(res == undefined){
          Swal.fire({
            title: 'Sign out successfull !',
            icon: 'success',
            showConfirmButton: false,
            timer: 2000,

          })
        }
      })
      .catch(error => console.log(error));

  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {

      setUser(currentUser);
      setLoading(false)

    })


    return () => {
      unsubscribe();
    }
  }, [])



















  const ShareObj = {
    user,
    loading,
    GoogleLogin,
    RegisterEmailorPass,
    LoginEmailorPass,
    Logout


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