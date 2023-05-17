import React from "react";
import SideNav from "../components/SideNav";
import { Box, Grid } from "@mui/material";
import ProfileBox from "../components/ProfileBox";
import ShowList from "../components/ShowList";

function CalendarPage() {
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ height: "20vh" }}></Box>
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
          <h1 style={{ marginLeft: "20px" }}>Calendar</h1>
        </Grid>
        {/* Box2 */}
        <Grid item xs={8}>
          <ProfileBox />
        </Grid>
        {/* Box3 */}
        <Grid item xs={27} sx={{ height: "80vh" }}>
          <ShowList />
        </Grid>
      </Grid>
    </Box>
  );
}

export default CalendarPage;
