import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";

const Signin = ({ name, password, submitBtn, onClick, setLoginPassword, setLoginEmail, clicked, loginpassword, loginemail}) => {
    return (
        <div className="section-1">
        <div className="header"><h1>Sign in with PaymentApp</h1></div>
        <div className="container-ctn">
            <div className="signin-box-container">
                <form onSubmit={submitBtn}>
                    <label htmlFor="">EMAIL, MOBILE, OR USERNAME</label>
                    <input type="text" id="email" value={name} onChange={ (e) => setLoginEmail(e.target.value)} />
                    <label htmlFor="">PASSWORD</label>
                    <input type="password" id="password" value={password} onChange={ (e1) => setLoginPassword(e1.target.value)} onClick={ (e) => {clicked(e.target.value)}} />
                    <div className="lower-form">
                        <a href="#">Forgot Password?</a>
                        {loginpassword !== "" && loginemail !== "" ? <Link to="/home"><button className="signin-btn" onClick={onClick}>Sign In</button></Link> : <Link to="/signin"><button className="signin-btn">Sign In</button></Link>}
                        
                    </div>
                </form>
            </div>
        </div>   
        <div id="btnsignin">
            <Link to="/signup">Sign up</Link>
   
        </div>
    </div>
    )
}

export default Signin
