import BackgroundMap from './components/BackgroundMap/BackgroundMap.jsx'
import './App.css'

export default function App() {
    const location = { lat: 30.5446, lng: -87.2120 };
    const mapId = import.meta.env.VITE_GOOGLE_MAPS_MAP_ID
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

    return (
        <div style={{ position: 'absolute', top: '0', left: '0', width: '100vw', height: '100vh' }}>
            <BackgroundMap location={location} map_id={mapId} api_key={apiKey}/>
        </div>
    );
}
