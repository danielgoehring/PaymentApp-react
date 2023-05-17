import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user); 
            } else {
                setAuthUser(null);
            }
        });
        return () => {
            listen();
        }
    }, []);

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('sign out successful')
            navigate('/signin');
        }).catch(error => console.log(error));
    }
    return (
        <div>{authUser ? <><p>{`${authUser.email}`}</p><p style={{color: '#33a340', cursor: 'pointer'}} onClick={userSignOut}>Sign out</p></> : <p></p>}</div>
    )
}

export default AuthDetails;