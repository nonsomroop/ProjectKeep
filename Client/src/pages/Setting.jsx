import React from 'react';
import SideNav from '../components/SideNav';
import { Box, Grid } from '@mui/material';
import SettingBox from '../components/SettingBox';
import ProfileSetting from '../components/ProfileSetting';

function Setting() {
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
          <h1 style={{ marginLeft: "20px" }}>Setting</h1>
        </Grid>
        {/* Box2 */}
        <Grid item xs={8}>
        </Grid>
        {/* Box3 */}
        <Grid item xs={18} sx={{ height: "100vh" }}>
          <ProfileSetting />
        </Grid>
        {/* Box4 */}
        <Grid item xs={10}>
          <SettingBox />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Setting;
