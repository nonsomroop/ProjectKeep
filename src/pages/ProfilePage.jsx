import React from 'react'
import SideNav from '../components/SideNav'
import { Box, Grid } from '@mui/material'

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
        {/* Box3 */}
        <Grid item xs={18} sx={{ height: "100vh"}}>
        </Grid>
        {/* Box4 */}
        <Grid item xs={10}>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProfilePage;
