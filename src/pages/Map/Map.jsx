import { Container, Typography, Tab, Tabs, Box, AppBar } from '@mui/material';
import { useAuth } from '../../components/AuthProvider/AuthProvider';
import React, { useState } from 'react';
import BackgroundMap from '../../components/BackgroundMap/BackgroundMap'

export default function Map() {
    const location = { lat: 30.5446, lng: -87.2120 };
    const mapId = import.meta.env.VITE_GOOGLE_MAPS_MAP_ID
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    const [tabSelected, setTabSelected] = useState(0);

    const handleTabClick = (event, newTab) => {
        setTabSelected(newTab);
    };

    return (
        <Container component="main" sx={{ bgcolor: '#cfe8fc', width: '100vw' }}>
            <Box sx={{ p: 3 }}>
                <Typography component="h1" variant="h4" sx={{ my: 2 }}>
                    PlaceHolder
                </Typography>
                <Tabs
                    value={tabSelected}
                    onChange={handleTabClick}
                    aria-label="basic tab usage"
                >
                    <Tab label="Search for Trips"/>
                    <Tab label="Current Trips" />
                    <Tab label="Update Preferences" />
                    <Tab label="Map" />
                </Tabs>
                <TabPanel tab={tabSelected} index={0}>
                    PlaceHolder
                </TabPanel>
                <TabPanel tab={tabSelected} index={1}>
                    PlaceHolder
                </TabPanel>
                <TabPanel tab={tabSelected} index={2}>
                    PlaceHolder
                </TabPanel>
                <TabPanel tab={tabSelected} index={3}>
                    <BackgroundMap location={location} map_id={mapId} api_key={apiKey} />
                </TabPanel>
            </Box>
        </Container>
    );

}

function TabPanel(props) {
    return (
        props.tab===props.index && (
            <Box height='70vh' width='90wh'>
                {props.children}
            </Box>
        )
    )
}
