import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../../styles/auth.css'

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const isValidEmail = (email) => {
        // Email regex pattern: firstname.lastname@ashesi.edu.gh
        const emailRegex = /^[a-zA-Z]+[.][a-zA-Z]+@ashesi\.edu\.gh$/;
        return emailRegex.test(email);
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        // if (!isValidEmail(email)) {
        //     // Display an error message or handle invalid email format
        //     console.error('Invalid email format');
        //     return;
        // }

        // login logic, api call, etc, etc, idk...

        // assuming successful login, navigate to desired route (for now, courses)
        const isSuccess = true; // replace with actual success check
        if (isSuccess) {
            navigate('/user/courses');
        }
    }

    return (
        <div className="login-container">
            <div className="login-top">
                <div className="login-form container">
                    <div className="login-content">
                        <div className="inner-content">
                            <div className="header">
                                <div className="login-header-logo">
                                <img alt="Ashesi University" src="https://instructure-uploads-eu.s3.eu-west-1.amazonaws.com/account_153630000000000001/attachments/659/ashesiLogo%20long.png" ></img>
                                </div>
                            </div>
                            <div className="login-body">
                                <form className="login_form" onSubmit={handleLogin}>
                                    <div className="form-control">
                                        <label className="form-label">Email</label>
                                        <input className="form-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                    </div>
                                    <div className="form-control">
                                        <label className="form-label">Password</label>
                                        <input className="form-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                    </div>
                                    <div className="login-actions">
                                        <div className="login-timeout">
                                            <input className="check" type="checkbox" value={1} name="check"></input>
                                            <label className="check" for="check">Stay signed in</label>
                                            <div className="login-forgot">
                                                <a>Forgot Password?</a>
                                            </div>
                                            <div className="login-forgot">
                                                <a onClick={( ) =>  navigate('/signup')}>Don't have an account?</a>
                                            </div>
                                        </div>
                                        <div className="form-login-button">
                                            <input type="submit" className="login-button" value="Log In"></input>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>
                        <footer className="login-footer">
                            <div className="login-footer__links">
                                <a className="flink" href="http://help.instructure.com/">Help</a>
                                <a className="flink" href="https://ashesi.instructure.com/privacy_policy">Privacy Policy</a>
                                {/* <a className="flink" href="https://ashesi.instructure.com/privacy_policy">Acceptable Use Policy</a> */}
                                <a className="flink" href="http://help.instructure.com/">Facebook</a>
                                <a className="flink" href="https://ashesi.instructure.com/privacy_policy">Twitter</a>
                            </div>
                        </footer>
                    </div>

                </div>
            </div>
            <div className="login-bottom"></div>
        </div>
    )
}

export default Login;