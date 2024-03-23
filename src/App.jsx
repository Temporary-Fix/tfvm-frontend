//Router imports
import { Routes, Route } from "react-router-dom"

//Component imports
import BackgroundMap from './components/BackgroundMap/BackgroundMap'
import Map from './pages/Map/Map'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Landing from './pages/Landing/Landing'
import { PrivateRoutes } from './components/PrivateRoute/PrivateRoute'
import { UnauthRoutes } from './components/UnauthRoute/UnauthRoute'

//Css imports
import './styles/App.css'

function App() {
    const location = { lat: 30.5446, lng: -87.2120 };
    const mapId = import.meta.env.VITE_GOOGLE_MAPS_MAP_ID
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

    return (
        <Routes>

            <Route element={<PrivateRoutes/>}>
                <Route path='/' element={ <Landing /> } />
                <Route path='/map' element={ <Map /> } />
            </Route>
            
            <Route element={<UnauthRoutes/>}>
                <Route path='/register' element={ <Register /> } />
                <Route path='/login' element={ <Login /> } />
            </Route>

        </Routes>
    );

}

export default App;
