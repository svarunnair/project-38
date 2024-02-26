import React, { useState } from 'react';
import { Box, Button, styled } from '@mui/material';

const OuterContainer = styled(Box)(({ theme }) => ({
    // border:"2px solid black",
   
    padding:100,
   
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

function Location() {
    const [locationDetails, setLocationDetails] = useState('');
    const [error, setError] = useState('');

    const handleClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setLocationDetails(`Latitude: ${latitude}, Longitude: ${longitude}`);
                },
                (error) => {
                    setError(error.message);
                    console.log("error", error.message);
                }
            );
        }
    };

    return (
        <OuterContainer >
            <Button sx={{position:"static"}} variant="contained" onClick={handleClick}>Get Location</Button>
            <div className="showDetails">
                {locationDetails && <p>{locationDetails}</p>}
                {error && <p>Error: {error}</p>}
            </div>
        </OuterContainer>
    );
}

export default Location;