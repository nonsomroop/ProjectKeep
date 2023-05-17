import { Box } from "@mui/material";
import "../styles/Reminder.css";
import React from "react";
import CardList from "./CardList";
function PastMemoryBox() {
  return (
    <Box className="pastMemoryClass">
      <Box sx={{ width: "95%" }} ml={"5%"}>
        <h2>Past mermory</h2>
      </Box>
      <hr></hr>
      <Box
        sx={{
          width: "80%",
          marginLeft: "10%",
          marginTop: "40px",
          marginBottom: "35px",
        }}
      >
        <CardList />
      </Box>
        <h1
          style={{
            textAlign: "center",
            marginBottom: "40px"
          }}
        >
          Timepass
        </h1>
      </Box>
  );
}

export default PastMemoryBox;
