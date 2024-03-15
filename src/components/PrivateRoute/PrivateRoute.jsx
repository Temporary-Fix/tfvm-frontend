import { useAuth } from '../AuthProvider/AuthProvider'
import { Navigate, Outlet, Route } from 'react-router-dom'

import { CircularProgress } from '@mui/material';

export const PrivateRoutes = () => {
    const { authLoading, isLoggedIn } = useAuth();

    if (authLoading) {
        return (<CircularProgress />)
    }
    else {
        return (isLoggedIn ? <Outlet/> : <Navigate to='/login'/>)
    }
}

export const PrivateRoute = ({children, ...rest}) => {
    const { authLoading, isLoggedIn } = useAuth();

    if (authLoading) {
        return (<CircularProgress />)
    }
    else {
        return(
            <Route {...rest}>
                { isLoggedIn ? children : <Redirect to="/login" /> }
            </Route>
        )
    }
}
