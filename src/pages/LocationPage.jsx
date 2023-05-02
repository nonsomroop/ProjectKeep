import React from 'react'
import SideNav from '../components/SideNav'
import { Box, Grid } from '@mui/material'
import ProfileBox from '../components/ProfileBox'

function LocationPage() {
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
        {/* Box1 */}
        <Grid item xs={20}>
          <h1 style={{ marginLeft: "20px"}}>Location</h1>
        </Grid>
        {/* Box2 */}
        <Grid item xs={8}>
          <ProfileBox />
        </Grid>
        {/* Box3 */}
        <Grid item xs={18} sx={{ height: "100vh"}}>
        </Grid>
        {/* Box4 */}
        <Grid item xs={10}>
        </Grid>
      </Grid>
    </Box>
  )
}

export default LocationPage