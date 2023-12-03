import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {fakeAuth, handleSignUp} from '../../services/user_auth'
import '../../styles/auth.css'

function SignUp() {
    const navigate = useNavigate();
    const [student_id, setStudentId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

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
                                <form className="login_form" action="" method="">
                                    <div className="form-control">
                                        <label className="form-label">Student ID</label>
                                        <input className="form-input" type="text" value={student_id} onChange={(e) => setStudentId(e.target.value)} />
                                    </div>
                                    <div className="form-control">
                                        <label className="form-label">First Name</label>
                                        <input className="form-input" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                    </div>
                                    <div className="form-control">
                                        <label className="form-label">Last Name</label>
                                        <input className="form-input" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                    </div>
                                    <div className="form-control">
                                        <label className="form-label">Email</label>
                                        <input className="form-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="form-control">
                                        <label className="form-label">Password</label>
                                        <input className="form-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <div className="form-control">
                                        <label className="form-label">Confirm Password</label>
                                        <input className="form-input" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                    </div>
                                    <div className="login-actions">
                                        <div className="login-timeout">
                                            <div className="login-forgot">
                                                <a onClick={( ) => navigate('/Login')}>Already have an account?</a>
                                            </div>
                                        </div>
                                        <div className="form-login-button">
                                            <input type="submit" className="login-button" value="Sign Up" onClick={(e) => handleSignUp(
                                                e,
                                                student_id,
                                                firstName,
                                                lastName,
                                                email,
                                                password,
                                                confirmPassword,
                                                navigate
                                                )}></input>
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

export default SignUp;