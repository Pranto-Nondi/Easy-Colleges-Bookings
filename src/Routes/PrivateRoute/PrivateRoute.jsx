import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';



const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return (
            <div
                className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                style={{ zIndex: 9999 }}
            >
                <div>
                    <button className="btn loading btn-primary ">loading</button>
                </div>
            </div>
        );
    }


    if (user) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace={true} ></Navigate>
};

export default PrivateRoute;