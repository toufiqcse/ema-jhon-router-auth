// @ts-nocheck
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut} from 'firebase/auth'
// create context
export const AuthContext = createContext()

// get auth
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    // for setting the user info
    const [user, setUser] = useState({})

    // set loading
    const [loading, setLoading] = useState(true)

    // create user 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email,password)
    }

    // Login method
    const Login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }


    // logout method
    const LogOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // emailverify 
    const emailverify =() => {
        return sendEmailVerification(auth.currentUser);
    }

    // set method for observer setting on current user
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("current user:", currentUser);

            // without verified email no one can login to the account
            if(currentUser === null || currentUser.emailVerified){
                setUser(currentUser)
            }
            // set loading for data load time require
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    },[])

    const authInfo ={user,createUser,Login,LogOut,setUser,setLoading, loading,emailverify}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;