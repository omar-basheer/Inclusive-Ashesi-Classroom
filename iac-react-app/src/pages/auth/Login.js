import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { AuthContext, useAuth } from './AuthProvider'
import '../../styles/auth.css'
import { handleLogin } from "../../services/services";

/**
 * Renders the login page.
 * @returns {JSX.Element} The login page component.
 */
function Login() {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showAlert, setShowAlert] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowAlert(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, [showAlert]);

    return (
        <div className="login-container">
            {showAlert && (
                <div className="flash-message-container" aria-hidden="true">
                    <div class="ic-flash__icon">
                        <i class="icon-warning"></i>
                    </div>
                    Invalid username or password. Trouble logging in? <a href="https://community.canvaslms.com/docs/DOC-25242-955611231352">Check out our Login FAQs</a>.
                </div>)}
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
                                <form className="login_form" onSubmit={(e) => handleLogin(e, email, password, login, navigate, setShowAlert)}>
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
                                            <input className="check" type="checkbox" value={0} name="check"></input>
                                            <label className="check" for="check">Stay signed in</label>
                                            <div className="login-forgot">
                                                <a>Forgot Password?</a>
                                            </div>
                                            <div className="login-forgot">
                                                <a onClick={() => navigate('/Signup')}>Don't have an account?</a>
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