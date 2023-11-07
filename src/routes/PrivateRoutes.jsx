import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useLocation } from 'react-router-dom';

const PrivateRoutes = () => {
    const {user, isLoading} = useContext(AuthContext);
    const location = useLocation()
    console.log(location.pathname);

    if(isLoading) {
        return <progress className="progress w-56"></progress>
    }

    if(user?.email){
        return children;
    }

    return <Navigate state={location.pathname} to="/login" replace></Navigate>;
 
};

export default PrivateRoutes;