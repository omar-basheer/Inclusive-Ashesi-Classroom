import React, { createContext, useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../../styles/auth.css'

const AuthContext = createContext()
const useAuth = () => {
  return useContext(AuthContext);
};

function AuthProvider({children}) {
    const [authToken, setAuthToken] = useState(null)
    const [userInfo, setUserInfo] = useState(null)

    const login = (newToken, user) => {
        setAuthToken(newToken);
        setUserInfo(user)
      };
    
      const logout = () => {
        setAuthToken(null);
        setUserInfo(null)
      };
      
    return(
        <AuthContext.Provider value={{authToken, userInfo, login, logout}}>
            {children}
        </AuthContext.Provider>
    )

}

export { AuthProvider, useAuth };

