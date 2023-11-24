import { useContext } from 'react'
import { AuthContext } from '../Context_provider/AuthProvider'

function useAuth() {
    const sharedata = useContext(AuthContext);


    return sharedata;
}

export default useAuth