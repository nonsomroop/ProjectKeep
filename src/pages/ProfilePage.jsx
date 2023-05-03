import React from 'react'
import SideNav from '../components/SideNav'
import { Box, Grid } from '@mui/material'
import ProfileList from '../components/ProfileList';

function ProfilePage() {
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ height: "" }}></Box>
      {/* Sidebar */}
      <Box sx={{ width: { sm: "100px", md: "280px" } }}>
        <SideNav />
      </Box>
      
      <Grid
        container
        columns={28}
        sx={{ marginTop: { xs: "50px", sm: "0px" } }}
      >
        {/* Box1 no Box2 */}
        <Grid item xs={28}>
          <h1 style={{ marginLeft: "20px"}}>Back</h1>
        </Grid>
        <Grid item xs={27} sx={{ height: "50vh"}}>
        <ProfileList />
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProfilePage;
