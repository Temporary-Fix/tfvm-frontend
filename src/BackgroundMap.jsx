import React, { useEffect, useRef, useState } from 'react';

function BackgroundMap({ location }) {
    const [map, setMap] = useState(null);
    const mapContainerRef = useRef(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBH2Hs12RUpu_z2mTTex0FBnxRi9diSRHM&callback=initMap`;
        script.defer = true;
        script.async = true;

        window.initMap = () => {
            const mapInstance = new window.google.maps.Map(mapContainerRef.current, {
                center: location,
                zoom: 12,
            });
            setMap(mapInstance);
        };

        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, [location]);

    useEffect(() => {
        if (map && location) {
            new window.google.maps.Marker({ position: location, map: map });
            map.setCenter(location);
        }
    }, [map, location]);

    return (
        <div
        style={{ width: '100vw', height: '100vh' }}
        ref={mapContainerRef}
        />
    );
}

export default BackgroundMap;
