import React, { useState } from 'react'
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
            navigate('/home');
        }).catch((error) => {
            console.log(error);
            setError(error.message);
        })
    }
    return (
        <div className="section-1">
        <div className="header"><h1>Sign in with PaymentApp</h1></div>
        <div className="container-ctn">
            <div className="signin-box-container">
                <form onSubmit={signIn}>
                    <label htmlFor="">EMAIL</label>
                    <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <label htmlFor="">PASSWORD</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <div className="lower-form">
                        <p class="forgotpassword" href="#">Forgot Password?</p>
                        <button type="submit" className="signin-btn" >
                            Sign in
                        </button>
                    </div>
                    
                </form>
                
            </div>
        </div>   
        <div style={{textAlign: 'center'}}>
            <p>Don't have an account?</p>
            <p class="forgotpassword" href="#"><Link to="/">Create Account</Link></p>
        </div>
        <div id="btnsignin">

        </div>
        <div style={{textAlign: 'center', marginTop: '60px'}}>
            {error && <p style={{color: '#ba3127'}}>Invalid Username or Password</p>} 
        </div>
    </div>
    )
}

export default Signin
