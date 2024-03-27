import { Container, Typography, Tab, Tabs, Box, Paper, CssBaseline } from '@mui/material';
import React, { useState } from 'react';
import BackgroundMap from '../../components/BackgroundMap/BackgroundMap'

export default function Map() {
    const [tabSelected, setTabSelected] = useState(0);

    const location = { lat: 30.5446, lng: -87.2120 };
    const mapId = import.meta.env.VITE_GOOGLE_MAPS_MAP_ID
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

    const handleTabClick = (event, newTab) => {
        setTabSelected(newTab);
    };

    return (
        <Container component="main" disableGutters
            sx={{
                height: '100vh',
                width: '100vw',
                m: 0,
                p: 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}
        >

            <CssBaseline/>
            <Box sx={{ p: 3, bgcolor: '#cfe8fc', borderRadius: 8 }}>

                <Typography component="h1" variant="h4" sx={{ my: 2 }}>
                    Temp Fix Travel Planner
                </Typography>

                <Tabs
                    centered
                    value={tabSelected}
                    onChange={handleTabClick}
                    aria-label="basic tab usage"
                >
                    <Tab label="Search for Trips"/>
                    <Tab label="Current Trips" />
                    <Tab label="Update Preferences" />
                    <Tab label="Map" />
                </Tabs>

                <Paper elevation={4} sx={{ p: 4, borderRadius: 8 }}>
                    <TabPanel tab={tabSelected} index={0}>
                        <Typography component="h1" variant="h5">
                            PlaceHolder
                        </Typography>
                    </TabPanel>
                    <TabPanel tab={tabSelected} index={1}>
                        <Typography component="h1" variant="h5">
                            PlaceHolder
                        </Typography>
                    </TabPanel>
                    <TabPanel tab={tabSelected} index={2}>
                        <Typography component="h1" variant="h5">
                            PlaceHolder
                        </Typography>
                    </TabPanel>
                    <TabPanel tab={tabSelected} index={3}>
                        <Paper elevation={2} sx={{ height: '70vh', border: 1, borderRadius: 4, overflow: 'hidden' }}>
                            <BackgroundMap location={location} map_id={mapId} api_key={apiKey} />
                        </Paper>
                    </TabPanel>
                </Paper>

            </Box>

        </Container>
    );

}

function TabPanel(props) {
    return (
        props.tab===props.index && (
            <Box height='70vh'>
                {props.children}
            </Box>
        )
    )
}
