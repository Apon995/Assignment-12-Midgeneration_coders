import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from './Loading';
import useAuth from '../CustomHooks_folder/useAuth';


function Private({ children }) {
    const { user, loading } = useAuth();
    const location = useLocation();

  

    if (loading) {
       return <Loading/>
    }


    if (user) {
        return children;
    }

    return <Navigate state={location?.pathname} to='/Login' />


}

export default Private