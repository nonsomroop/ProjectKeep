import { Box, Grid } from "@mui/material";
import React from "react";
import "../styles/ShowList.css";

function ShowList() {
  return (
    <Box
      className="searchListBox"
      sx={{ display: "flex", justifyContent: "center", alignItems: "center"}}
    >
      {/* <Grid container>
        <Grid item xs={6}>

        </Grid>
        <Grid item xs={6}></Grid>
      </Grid> */}
      <h1 style={{marginTop: "0px"}}>Coming Soon</h1>
    </Box>
  );
}

export default ShowList;
