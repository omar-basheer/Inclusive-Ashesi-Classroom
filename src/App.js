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
                <Route path="/" element={<Layout />}>
                {isLoggedIn ? (
                        <>
                            <Route path="/courses" element={<Courses />} />
                            <Route path="/screening" element={<Screening />} />
                        </>
                    ) : (
                        navigate('login')
                    )}
                </Route>
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </div>
    );
}

export default App;
