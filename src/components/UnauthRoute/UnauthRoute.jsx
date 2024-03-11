import { useAuth } from '../AuthProvider/AuthProvider'
import { Navigate, Outlet, Route } from 'react-router-dom'

import { CircularProgress } from '@mui/material';

export const UnauthRoutes = () => {
    const { authLoading, isLoggedIn } = useAuth();

    if (authLoading) {
        return (<CircularProgress />)
    }
    else {
        return (!isLoggedIn ? <Outlet/> : <Navigate to='/'/> )
    }
}

export const UnauthRoute = ({children, ...rest}) => {
    const { authLoading, isLoggedIn } = useAuth();

    if (authLoading) {
        return (<CircularProgress />)
    }
    else {
        return(
            <Route {...rest}>
                { isLoggedIn ? <Redirect to="/" /> : children }
            </Route>
        )
    }
}
