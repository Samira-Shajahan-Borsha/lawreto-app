import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged, signOut, sendPasswordResetEmail } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    console.log('state user', user);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const signInWithGithub = provider => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    const passwordReset = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('inside on auth state', currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }
    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        signInWithGoogle,
        signInWithGithub,
        passwordReset,
        logOut
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;