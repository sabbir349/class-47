import React, { Children, createContext, useState } from 'react';
import app from '../FireBase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, GoogleAuthProvider, GithubAuthProvider, updateProfile, sendEmailVerification, sendPasswordResetEmail } from 'firebase/auth';



// auth initialize
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const AuthContext = createContext()
const UsersContexts = ({ children }) => {
    const[loading,setLoading] = useState(true)
    const [user, setUser] = useState({})
    console.log(user)
    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update user

    const updateUser = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {

        })
            .catch((error) => {

            });
    }


    // verify user by using email

    const verifyUser = () => {
        return sendEmailVerification(auth.currentUser)
    }

    // login user

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // forget password

    const forgetPassword = (email) => {
     return sendPasswordResetEmail(auth, email)
    }

    // login user with google

    const continueWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    }


    // login user with github

    const continueWithGithub = () => {
        return signInWithPopup(auth, githubProvider)
    }

    // log out

    const logOut = () => {
        signOut(auth)
            .then(() => {
            })
            .catch((error) => {
                console.log(error)
            });
    }

    const unSubscribe = onAuthStateChanged(auth, currentUser => {
        setLoading(false)
        setUser(currentUser)
        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo = {
        createUser,
        loginUser,
        user,
        logOut,
        continueWithGoogle,
        continueWithGithub,
        updateUser,
        verifyUser,
        forgetPassword,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UsersContexts;