import axios from 'axios'


const axiosFetch = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
    method: ["GET", "POST", "PUT", "PATCH", "DELETE"]
})


function useFetch() {




    return axiosFetch;
}

export default useFetch