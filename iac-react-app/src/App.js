// App.js
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AuthProvider } from './pages/auth/AuthContext';
import Login from '../src/pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import Course from './pages/Course';
import Screening from './pages/Screening';
import Layout from './Layout/Layout';
import SysPref from './pages/SysPref';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './pages/auth/ProtectedRoute';

function App() {
    const [authToken, setAuthToken] = useState(null)

    return (
        <AuthProvider>
            <Routes>
                <Route index element={<Login />} />
                <Route path='/Login' element={<Login />} />
                <Route path="/Signup" element={<SignUp />} />
                <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
                    <Route path="/Dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                    <Route path="/Dashboard/:courseID" element={<ProtectedRoute><Course /></ProtectedRoute>} />
                    <Route path="/Screening" element={<ProtectedRoute><Screening /></ProtectedRoute>} />
                    <Route path="/Preferences" element={<ProtectedRoute><SysPref /></ProtectedRoute>} />
                </Route>
            </Routes>
        </AuthProvider>
    );
}

export default App;
