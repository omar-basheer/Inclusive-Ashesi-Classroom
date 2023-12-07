// import { useAuth } from "./AuthProvider"
import { useNavigate, Navigate } from 'react-router-dom';


function ProtectedRoute({children}){
    const navigate = useNavigate()
    const token  = true
    if (!token){
        navigate('/Login');
    }
    return(
        children
    )
}


export default ProtectedRoute