import { useAuth } from "./AuthContext"
import { useNavigate, Navigate } from 'react-router-dom';


function ProtectedRoute({children}){
    const navigate = useNavigate()
    const token  = useAuth()
    if (!token){
        navigate('/Login');
        // return <Navigate to="/home" replace />;
    }
    return(
        children
    )
}


export default ProtectedRoute