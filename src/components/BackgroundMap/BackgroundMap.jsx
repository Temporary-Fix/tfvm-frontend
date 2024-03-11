import React, { useEffect, useRef, useState } from 'react';
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow, useMap } from '@vis.gl/react-google-maps'

export default function BackgroundMap({ location, api_key, map_id }) {

    const _onClick = (e) => {
        console.log(JSON.stringify(e.detail.latLng));
    };

    return (
        // TODO: move keys and ids to env
        <div style={{ position: 'absolute', top: '0', left: '0', width: '100vw', height: '100vh' }}>
            <APIProvider apiKey={api_key}>
                <Map
                    defaultZoom={12}
                    defaultCenter={location}
                    mapId={map_id}
                    gestureHandling={'greedy'}
                    disableDefaultUI={true}
                    onClick={_onClick}
                >
                    <AdvancedMarker position={location}/>
                </Map>
            </APIProvider>
        </div>
    );
}

