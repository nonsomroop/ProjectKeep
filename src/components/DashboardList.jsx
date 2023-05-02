import { Box, Button, Container, Grid } from "@mui/material";
import React from "react";
import "../styles/DashboardList.css";
import CardList from "./CardList";

function DashboardList({ handleSearch }) {
  return (
    <Box className="listBox" sx={{marginBottom: "10px"}}>
      <Box ml={"5%"}>
        <h2>List</h2>
      </Box>
      <hr></hr>
      <Button
        variant="contained"
        className="listButton"
        sx={{
          fontSize: "20px",
          height: {xs: "40px", sm: "60px"},
          bgcolor: "var(--colorp1)",
          color: "var(--colorp3)",
          textTransform: "capitalize",
          marginLeft: "5%",
          "&:active , &:hover": {
            bgcolor: "var(--colorp1)",
            color: "var(--colorp3)",
          },
        }}
      >
        Add new List +
      </Button>
      <Grid
        container
        columns={6}
        spacing={"3%"}
        sx={{
          width: "90%",
          marginLeft: "3%",
          marginTop: "5px",
          marginBottom: "30px",
        }}
      >
        <Grid item xs={6} md={3}>
          <CardList />
        </Grid>
        <Grid item xs={6} md={3}>
          <CardList />
        </Grid>
        <Grid item xs={6} md={3}>
          <CardList />
        </Grid>
        <Grid item xs={6} md={3}>
          <CardList />
        </Grid>
        <Grid item xs={6} md={3}>
          <CardList />
        </Grid>
        <Grid item xs={6} md={3}>
          <CardList />
        </Grid>
        <Grid item xs={6} md={3}>
          <CardList />
        </Grid>
        <Grid item xs={6} md={3}>
          <CardList />
        </Grid>
      </Grid>
    </Box>
  );
}
export default DashboardList;
