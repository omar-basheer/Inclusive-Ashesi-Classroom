import React, { createContext, useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../../styles/auth.css';

const AuthContext = createContext();

/**
 * AuthProvider component provides authentication functionality to its children components.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components to be wrapped by AuthProvider.
 * @returns {ReactNode} The wrapped child components with authentication context.
 */
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = (token, student_id) => {
    localStorage.setItem('token', JSON.stringify(token));
    localStorage.setItem('student_id', JSON.stringify(student_id));
    setUser({ token, student_id });
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('student_id');
    setUser(null);
  
    // Replace the entire history with the login page path
    window.history.replaceState(null, '', '/');
    alert("Logged out successfully!");
    
    // Reload the page to ensure the state is updated
    window.location.reload();
    
  };
  

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
