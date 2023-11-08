import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, isLoading} = useContext(AuthContext);
    const location = useLocation()
    console.log(location.pathname);

    if(isLoading) {
        return  <div className='flex justify-center items-center my-4 h-screen'><span className="loading loading-dots loading-lg text-center"></span></div>
    }

    if(user?.email){
        return children;
    }

    return <Navigate state={location.pathname} to="/login" replace></Navigate>;
 
};

export default PrivateRoutes;