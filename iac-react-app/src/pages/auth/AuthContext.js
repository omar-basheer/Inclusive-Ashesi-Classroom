import React, { createContext, useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../../styles/auth.css'

const AuthContext = createContext()
const useAuth = () => {
  return useContext(AuthContext);
};

function AuthProvider({children}) {
    const [authToken, setAuthToken] = useState(null)

    const login = (newToken) => {
        setAuthToken(newToken);
      };
    
      const logout = () => {
        setAuthToken(null);
      };
      
    return(
        <AuthContext.Provider value={{authToken, login, logout}}>
            {children}
        </AuthContext.Provider>
    )

}

export { AuthProvider, useAuth };

