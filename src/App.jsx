//Router imports
import { Routes, Route } from "react-router-dom"

//Component imports
import BackgroundMap from './components/BackgroundMap/BackgroundMap'
import Login from './pages/Login/Login'

//Css imports
import './styles/App.css'


const location = { lat: 30.5446, lng: -87.2120 }; // Example location - San Francisco

function App() {

    return (
        <Routes>
        { /* <Route path='/' element={ <BackgroundMap location={location} /> } /> */ }
            <Route path='/' element={ <Login /> } />
        </Routes>
    );

}

export default App;
