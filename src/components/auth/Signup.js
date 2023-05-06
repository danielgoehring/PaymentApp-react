import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, {useState} from 'react'
import { auth } from "../../firebase";
import { Link, useNavigate } from 'react-router-dom';



const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

        const navigate = useNavigate();
       
      
    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        
        .then((userCredential) => {
            console.log(userCredential);
            navigate('/home');
        }).catch((error) => {
            console.log(error);
        })
        
    }
    return (
        <div className="section-1">
        <div className="header"><h1>Sign up with PaymentApp</h1></div>
        <div className="container-ctn">
            <div className="signin-box-container">
                <form onSubmit={signUp}>
                    <label htmlFor="">EMAIL</label>
                    <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <label htmlFor="">PASSWORD</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <div className="lower-form">
                        <p class="forgotpassword" href="#">Forgot Password?</p>
                        <button type="submit" className="signin-btn" >
                            Sign up
                        </button>
                    </div>
                </form>
            </div>
        </div>   
        <div style={{textAlign: 'center'}}>
            <p>Already have an account?</p>
            <p class="forgotpassword" href="#"><Link to="/signin">Sign in</Link></p>
        </div>
        <div id="btnsignin">
        
        </div>
    </div>
    )
}

export default Signup
