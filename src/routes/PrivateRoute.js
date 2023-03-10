import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const PrivateRoute = ({ children }) => {

    const { user } = useContext(AuthContext);

    console.log('private route ', user);

    const location = useLocation();
    console.log(location);

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    return children;
};

export default PrivateRoute;