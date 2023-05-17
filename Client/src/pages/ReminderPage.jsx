import React from 'react'
import SideNav from '../components/SideNav'
import { Box, Grid } from '@mui/material'
import ProfileBox from '../components/ProfileBox'
import ReminderList from '../components/ReminderList';
import PastMemoryBox from '../components/PastMemoryBox';

function ReminderPage() {
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
          <h1 style={{ marginLeft: "20px"}}>Reminder</h1>
        </Grid>
        {/* Box2 */}
        <Grid item xs={8}>
          <ProfileBox />
        </Grid>
        {/* Box3 */}
        <Grid item xs={18} sm={15} sx={{ height: "100vh"}}>
          <ReminderList />
        </Grid>
        {/* Box4 */}
        <Grid item xs={10} sm={13} >
          <PastMemoryBox />
        </Grid>
      </Grid>
    </Box>
  );
}

export default ReminderPage;
