import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import BackgroundMap from './BackgroundMap.jsx'
import './App.css'

function App() {
    const location = { lat: 30.5446, lng: -87.2120 };
    return (
        <div style={{ position: 'absolute', top: '0', left: '0', width: '100vw', height: '100vh' }}>
            <BackgroundMap location={location}/>
        </div>
    );
}

export default App
