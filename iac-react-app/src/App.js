// App.js
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Login from '../src/pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import Courses from './pages/Courses';
import Screening from './pages/Screening';
import Layout from './Layout/Layout';
import SysPref from './pages/SysPref';
import Dashboard from './pages/Dashboard';

function App() {

    return (
        <div>
            <Routes>
                <Route path="/Login" element={<Login />} />
                <Route path="/Signup" element={<SignUp />} />
                <Route path="/" element={<Layout />}>
                    <Route path="/Dashboard" element={<Dashboard />} />
                    <Route path="/Dashboard/Courses" element={<Courses />} />
                    <Route path="/Screening" element={<Screening />} />
                    <Route path="/Preferences" element={<SysPref />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
