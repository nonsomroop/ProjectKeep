import { Box, Button, Grid } from "@mui/material";
import React from "react";
import "../styles/Reminder.css";
import ReminderCard from "./ReminderCard";
import { useNavigate } from "react-router-dom";
function ReminderList({ data }) {4
  const navigate = useNavigate();
  function formatDate(date) {
    const year = date.getFullYear().toString().padStart(4, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    
    return `${year}-${month}-${day}`;
  }
  
  function getTodayDate() {
    const today = new Date();
    return formatDate(today);
  }
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
        {data
          .filter((item) => {
            let today = getTodayDate();
            if (item.reminder < today) {
              return false;
            } 
            return true;
          })
          .map((item) => (
            <Grid item sm={6} md={3} key={item.id}>
              <ReminderCard info={item} />
            </Grid>
          ))}
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          onClick={() => navigate("/Create")}
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
