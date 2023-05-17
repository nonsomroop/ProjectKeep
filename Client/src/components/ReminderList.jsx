import { Box, Button, Grid } from "@mui/material";
import React from "react";
import "../styles/Reminder.css";
import ReminderCard from "./ReminderCard";
function ReminderList() {
  return (
    <Box className="reminderListBox">
      <Box ml={"5%"}>
        <h2>Upcoming</h2>
      </Box>
      <hr></hr>
      <Grid
        className="reminderCardList"
        container
        columns={6}
        spacing={"3%"}
        sx={{
          width: "90%",
          marginLeft: "3%",
          marginTop: "5px",
          marginBottom: "25px",
        }}
      >
        <Grid item sm={6} md={3}>
          <ReminderCard />
        </Grid>
        <Grid item sm={6} md={3}>
          <ReminderCard />
        </Grid>
        <Grid item sm={6} md={3}>
          <ReminderCard />
        </Grid>
        <Grid item sm={6} md={3}>
          <ReminderCard />
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          // onClick={handleSearch}
          sx={{
            fontSize: "16px",
            width: "200px",
            height: "45px",
            marginRight: "7%",
            marginBottom: "40px",
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
          Add new note+
        </Button>
      </Box>
    </Box>
  );
}

export default ReminderList;
