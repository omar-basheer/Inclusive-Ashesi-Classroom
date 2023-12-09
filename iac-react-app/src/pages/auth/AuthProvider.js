import React, { createContext, useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../../styles/auth.css'


// create context for authentication
const AuthContext = createContext()

function AuthProvider({ children }) {
  // create state that contains token and additional user information
  const [user, setUser] = useState(null)

  const login = (token, student_id) => {
    // document.cookie = `authToken=${token}; path=/; secure; HttpOnly`
    localStorage.setItem('token', JSON.stringify(token));
    localStorage.setItem('student_id', JSON.stringify(student_id));
    setUser({token, student_id})
  };

  const logout = () => {
    // document.cookie = 'authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; secure; HttpOnly';
    localStorage.removeItem('token');
    localStorage.removeItem('student_id');
    setUser(null)
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, AuthContext };

