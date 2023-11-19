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

function App() {

    return (
        <div>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/user" element={<Layout />}>
                    <Route path="/user/courses" element={<Courses />} />
                    <Route path="/user/screening" element={<Screening />} />
                    <Route path="/user/syspref" element={<SysPref />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
