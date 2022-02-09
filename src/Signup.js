/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";


const Signup = ({ name, setName, password, setPassword, submitBtn, onClick, isClicked, setRegisterEmail, setRegisterPassword, currentUser, togglesignuppage }) => {
    
    


    return (
        
        <div className="section-1">
            <div className="header"><h1>Sign up with PaymentApp</h1></div>
            <div className="container-ctn">
                <div className="signin-box-container">
                    <form onSubmit={submitBtn} onClick={onClick}>
                        <label htmlFor="">EMAIL, MOBILE, OR USERNAME</label>
                        <input type="text" id="email" onChange={ (e) => setRegisterEmail(e.target.value)} />
                        <label htmlFor="">PASSWORD</label>
                        <input type="password" id="password" onChange={ (e1) => setRegisterPassword(e1.target.value)} />
                        <div className="lower-form">
                            <a href="#">Forgot Password?</a>
                            <button type="submit" className="signin-btn" onClick={onClick}>Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>   
            <div id="btnsignin">
                <Link to="/signin">Sign in</Link>
               
                
            </div>
        </div>
    )
}

export default Signup
