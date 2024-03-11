//Router imports
import { Routes, Route } from "react-router-dom"

//Component imports
import BackgroundMap from './components/BackgroundMap/BackgroundMap'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Landing from './pages/Landing/Landing'
import { PrivateRoutes } from './components/PrivateRoute/PrivateRoute'
import { UnauthRoute, UnauthRoutes } from './components/UnauthRoute/UnauthRoute'

//Css imports
import './styles/App.css'

const location = { lat: 30.5446, lng: -87.2120 }; // Example location - San Francisco

function App() {

    return (
        <Routes>
        { /* <Route path='/' element={ <BackgroundMap location={location} /> } /> */ }
            <Route element={<PrivateRoutes/>}>
                <Route path='/' element={ <Landing /> } />
            </Route>
            
            <Route path='/register' element={ <Register /> } />
            <Route path='/login' element={ <Login /> } />
            <Route element={<UnauthRoutes />}>
        
            </Route>
        </Routes>
    );

}

export default App;
