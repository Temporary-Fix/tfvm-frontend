import React, { useEffect, useRef, useState } from 'react';
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow, useMap } from '@vis.gl/react-google-maps'

export default function BackgroundMap({ location, api_key, map_id }) {

    const _onClick = (e) => {
        console.log(JSON.stringify(e.detail.latLng));
    };

    return (
        <APIProvider apiKey={api_key}>
            <Map
                defaultZoom={12}
                defaultCenter={location}
                mapId={map_id}
                gestureHandling={'cooperative'}
                disableDefaultUI={true}
                onClick={_onClick}
            >
                <AdvancedMarker position={location}/>
            </Map>
        </APIProvider>
    );
}

