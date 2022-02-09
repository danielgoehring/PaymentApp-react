import Home from './Home';
import Signup from './Signup'
import Signin from './Signin'
import Navbar from './Navbar'
import db from "./firebase";
import {auth} from './firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import { useEffect, useState } from 'react'; 
import { onSnapshot, collection, addDoc } from 'firebase/firestore';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";

function App() {

  const [toggleSignin, setToggleSignin] = useState(true)
  const [toggleSignup, setToggleSignup] = useState(true)
  const [toggleNavbar, setToggleNavbar] = useState(true)
  const [toggleHome, setToggleHome] = useState(true)
  const [loggedOnStatus, setLoggedOnStatus] = useState(true)
  const [visible, setVisible] = useState(true);
  //------------------

  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  //-----------------------------------------

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })
  const register = async () => {
    try {
      if (registerPassword !== "" && registerEmail !== "") {
    setLoggedOnStatus(true);
    const username =  await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
    console.log(username);
    console.log("Name Created");
      }
      
    } catch (error) {
      console.log(error.message);
    }
  }

//----------------

  const login = async () => {
    try {
      if (loginPassword !== "" && loginEmail !== "") {
        
          } else {
            
          }
      
      console.log("you signed in");
      const username =  await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      if (username) {
        setLoggedOnStatus(true);
      }
      console.log(username);
      } catch (error) {
        console.log(error.message);
      }
  }

  const logout = async () => {
    await signOut(auth);
    setLoggedOnStatus(false);
  }
  //-----------------------------------------

  const submitBtn = (e, e1) => {
      e.preventDefault();
      if (e.target.value !== "") {
      
    }
      console.log("name: " + name);
      console.log("password: " + password);
  }

  const submitSignupForm = (e) => {
    e.preventDefault();
  }
  
  let isClicked = false;
  
  const clicked = () => {
    isClicked = true;
    
  }

  //-------------------------------------------

 
  const toggleSignupPage = () => {
          setToggleSignin(false);
          setToggleSignup(false);

  }

  const toggleSigninPage = () => {
      setToggleSignup(true);
      setToggleSignin(true);
      
      

}

  const toggleUserLoggedOnStatus = () => {
    setToggleSignin(false);
  }
  //-------------------------------------------


  useEffect(() => {
    const unsub = onSnapshot(collection(db, "users"), (snapshot) => {
      setUsers(snapshot.docs.map(doc => (doc.data())));
    });
    return unsub;
  }, []);


  const handleNew = async () => {
      const collectionRef = collection(db, "users");
      const payload = {username: name, password: password}
      if (isClicked){
        await addDoc(collectionRef, payload);
      } 
  }

  return (
    <Router>
        <div className="App">
      
        
          <Navbar user={user} onClick={logout} toggleuserloggedonstatus={toggleUserLoggedOnStatus} loggedonstatus={loggedOnStatus} />
            <Routes>
              <Route path="/home" element={<Home user={user}/>} />
              <Route path="/signin" element={<Signin setLoginEmail={setLoginEmail} setLoginPassword={setLoginPassword} onClick={login} togglesigninpage={toggleSigninPage} submitBtn={submitBtn} clicked={clicked} loginpassword={loginPassword} loginEmail={loginEmail}/>} />
              <Route path="/" element={<Signup password={password} setName={setName} setPassword={setPassword} submitBtn={submitSignupForm} onClick={register} isClicked={clicked} setRegisterEmail={setRegisterEmail} setRegisterPassword={setRegisterPassword} togglesignuppage={toggleSignupPage}/>} />
            </Routes>
        
      </div>
    </Router>
  );
}





export default App;
