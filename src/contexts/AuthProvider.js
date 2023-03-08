import React, { createContext } from 'react';



export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const studentName = 'samira';

    const authInfo = { studentName }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;