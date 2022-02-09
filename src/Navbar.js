import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";

const Navbar = ({user, onClick, toggleuserloggedonstatus, loggedonstatus}) => {
    return (
        <div className="signup-container">   
            <div className="nav" id="nav-color">
                <div className="logo">
                    <a href="#">PaymentApp</a>
                </div>
                
                <div className="signin-nav">
                    {user != null ? <a onClick={onClick}>Sign out</a> : <Link to="/signin">Sign in</Link>}
                    <div id="loggedInUser" >{user?.email}</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
