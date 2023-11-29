import axios from 'axios'
import React, { useEffect } from 'react';
import useAuth from './useAuth';


const axiosFetch = axios.create({
    // https://midgeneration-coders-server.vercel.app
    // http://localhost:5000
    baseURL: 'https://midgeneration-coders-server.vercel.app',
    withCredentials: true,
    method: ["GET", "POST", "PUT", "PATCH", "DELETE"]
})


function useFetch() {
    const auth = useAuth();

    useEffect(() => {
        axios.interceptors.response.use(response => {
            return response;
        }, (error) => {
            if (error.response.status == 401 || error.response.status == 403) {
                auth?.Logout()
            }

        })
    }, [])




    return axiosFetch;
}

export default useFetch