// App.js
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AuthProvider } from './pages/auth/AuthProvider';
import Login from '../src/pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import Course from './pages/Course';
import Screening from './pages/Screening';
import Layout from './Layout/Layout';
import Preferences from './pages/Preferences';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './pages/auth/ProtectedRoute';
import Modules from './pages/Modules/Modules';
import TextModule from './pages/Modules/TextModule';
import VideoModule from './pages/Modules/VideoModule';

function App() {

    return (
        <AuthProvider>
            <Routes>
                <Route index element={<Login />} />
                <Route path='/Login' element={<Login />} />
                <Route path="/Signup" element={<SignUp />} />
                <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
                    <Route path="/Dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                    <Route path="/:courseID" element={<ProtectedRoute><Course /></ProtectedRoute>} />
                    <Route path="/:courseID/Modules" element={<ProtectedRoute><Modules /></ProtectedRoute>} />
                    <Route path="/:courseID/Modules/Video/:file_id" element={<ProtectedRoute><VideoModule /></ProtectedRoute>} />
                    <Route path="/:courseID/Modules/Doc/:file_id" element={<ProtectedRoute><TextModule /></ProtectedRoute>} />
                    <Route path="/Preferences" element={<ProtectedRoute><Preferences /></ProtectedRoute>} />
                    <Route path="/Screening" element={<ProtectedRoute><Screening /></ProtectedRoute>} />
                </Route>
                    {/* <Route path="/Preferences" element={<ProtectedRoute><Preferences /></ProtectedRoute>} /> */}
            </Routes>
        </AuthProvider>
    );
}

export default App;
