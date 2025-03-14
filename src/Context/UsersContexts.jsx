import React, { Children, createContext, useState } from 'react';
import app from '../FireBase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';



// auth initialize
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const AuthContext = createContext()
const UsersContexts = ({ children }) => {

    const [user, setUser] = useState({})
    console.log(user)
    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
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
        setUser(currentUser)
        {
            () => unSubscribe()
        }

    },[])

    const authInfo = {
        createUser,
        loginUser,
        user,
        logOut,
        continueWithGoogle,
        continueWithGithub
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UsersContexts;