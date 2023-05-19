import { Box, Button, Container, Grid } from "@mui/material";
import React from "react";
import "../styles/DashboardList.css";
import CardList from "./CardList";
import { useNavigate } from "react-router-dom";

function DashboardList({ handleSearch }) {

  const navigate = useNavigate();

  return (
    <div className="page-container">
      <Box className="listBox" sx={{ marginBottom: "10px" }}>
        <Box ml={"5%"}>
          <h2>List</h2>
        </Box>
        <hr></hr>
        <Button
          variant="contained"
          className="listButton"
          onClick={() => navigate("/Create")}
          sx={{
            fontSize: "20px",
            height: { xs: "40px", sm: "60px" },
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
          <Grid item xs={6} md={3}></Grid>
            
        </Grid>
      </Box>
    </div>
  );
}
export default DashboardList;
