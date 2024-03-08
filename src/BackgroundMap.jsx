import React, { useEffect, useRef, useState } from 'react';
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow, useMap } from '@vis.gl/react-google-maps'

export default function BackgroundMap({ location }) {

    const _onClick = (e) => {
        console.log(JSON.stringify(e.detail.latLng));
    };

    return (
        // TODO: move keys and ids to env
        <APIProvider apiKey="AIzaSyBH2Hs12RUpu_z2mTTex0FBnxRi9diSRHM">
            <div style={{ height: '100vh', width: '100wh' }}>
                <Map
                    defaultZoom={12}
                    defaultCenter={location}
                    mapId="83e6a4c4d2e69d8d"
                    gestureHandling={'greedy'}
                    disableDefaultUI={true}
                    onClick={_onClick}
                >
                    <AdvancedMarker position={location}/>
                </Map>
            </div>
        </APIProvider>
    );
}
