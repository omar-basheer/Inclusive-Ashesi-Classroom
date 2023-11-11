// App.js
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../src/pages/auth/Login';
import SignUp from './pages/auth/SignUp';

function App() {
    const [isLoginPage, setIsLoginPage] = useState(true);

    const switchToLogin = () => {
        setIsLoginPage(true)
    }
    const switchToSignUp = () => {
        setIsLoginPage(false)
    }
    return (
        <div>
            {isLoginPage ? (
                <Login switchToSignUp={switchToSignUp} />
            ) : (
                <SignUp switchToLogin={switchToLogin} />
            )}
        </div>


    );
}

export default App;
