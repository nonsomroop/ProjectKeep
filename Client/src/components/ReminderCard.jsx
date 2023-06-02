import React, { useEffect, useState } from "react";
import { Box, Card, Grid } from "@mui/material";
import "../styles/Reminder.css";
import { Navigate, useNavigate } from "react-router-dom";

function ReminderCard({ info }) {
  const [countdown, setCountdown] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(updateCountdown, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const updateCountdown = () => {
    const reminderDate = new Date(info.reminder);
    const currentDate = new Date();
    const timeDifference = reminderDate - currentDate;

    if (timeDifference > 0) {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      setCountdown(`${days}d ${hours}h`);
    } else {
      setCountdown("Expired");
    }
  };

  return (
    <Card onClick={() => navigate(`/note/${info.id}`)} sx={{cursor: "pointer"}}>
      <Box className="reminderCardText">
        <h2 className="reminderCardTitle">{info.title}</h2>
        <p className="subp reminderCardDescr">{info.description}</p>
      </Box>
      <Box>
        <Grid container columns={2}>
          <Grid item xs={1}>
            <h2 style={{ marginLeft: "10%", marginTop: "7%" }}>{countdown}</h2>
          </Grid>
          <Grid item xs={1}>
            <Card
              className="reminderCardPriority"
              sx={{ float: "right", marginRight: "20px", marginBottom: "20px" }}
            >
              <h4 style={{ margin: "0", padding: "10px" }}>{info.priority}</h4>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}

export default ReminderCard;
