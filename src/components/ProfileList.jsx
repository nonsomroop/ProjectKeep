import { Box } from '@mui/material';
import React from 'react'
import "../styles/Profile.css"
function ProfileList() {
    const name = "Natthanon Somroop";
    const bio = "Life is a journey, not a destination. Enjoy the ride and cherish every moment.";
    const aboutme = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut lectus ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; "
  return (
    <Box className="profileListClass" sx={{display: "flex", flexDirection: "column"}}>
        <Box>
            <img src='src\assets\profilePic.jpg' alt='profile picture' className='profilePic' />
        </Box>
    </Box>
  )
}

export default ProfileList