import React, { createContext, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    // const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = { createUser, loginUser }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;