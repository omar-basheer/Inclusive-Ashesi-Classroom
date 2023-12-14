// import { useAuth } from "./AuthProvider"
import { useNavigate, Navigate } from 'react-router-dom';


function ProtectedRoute({children}){
    const navigate = useNavigate()
    const token = JSON.parse(localStorage.getItem('token'))
    // if (token === null) {
	// 	window.history.replaceState(null, '', '/Login');
	// 	window.location.reload();
	// }
    // if (!token){
    //     navigate('/login');
    // }
    return(
        children
    )
}


export default ProtectedRoute