import React, { createContext, useState } from 'react'


export const AuthContext = createContext(null);

function AuthProvider({ children }) {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);



















  const ShareObj = {
    user,
    loading,
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