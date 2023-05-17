import React from "react";
import SideNav from "../components/SideNav";
import { Box, Grid } from "@mui/material";
import ProfileBox from "../components/ProfileBox";
import DashboardList from "../components/DashboardList";
import SearchBox from "../components/SeachBox";


function DashBoardPage() {
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ height: "" }}></Box>
      <Box sx={{ width: { sm: "100px", md: "280px" } }}>
        <SideNav />
      </Box>
      <Grid
        container
        columns={28}
        sx={{ marginTop: { xs: "50px", sm: "0px" } }}
      >
        <Grid item xs={20}>
          <h1 style={{ marginLeft: "20px"}}>DashBoard</h1>
        </Grid>
        <Grid item xs={8}>
          <ProfileBox />
        </Grid>
        <Grid item xs={28} sm={18} sx={{order: {xs: "2", sm: "1"}}} style={{ height: "100vh" }}>
          <DashboardList />
        </Grid>
        <Grid item  xs={28} sm={10} sx={{order: {xs: "1", sm: "2"}}}>
          <SearchBox />
        </Grid>
      </Grid>
    </Box>
  );
}

export default DashBoardPage;
