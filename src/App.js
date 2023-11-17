// App.js
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Login from '../src/pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import Courses from './pages/Courses';
import Screening from './pages/Screening';
import Layout from './Layout/Layout';

function App() {
    const [isLoggedIn, setLoggedIn] = useState(true);
    const navigate = useNavigate();

    const handleLogin = () => {
        setLoggedIn(true)
    }

    return (
        <div>
            <Routes>
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/user" element={<Layout />}>
                    <Route path="/user/courses" element={<Courses />} />
                    <Route path="/user/screening" element={<Screening />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
