import { Box, Card, Grid } from "@mui/material";
import React from "react";
import "../styles/Reminder.css";

function ReminderCard() {
  const title = "Title";
  const desc =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, reiciendis! Laudantium, ea beatae quibusdam explicabo libero recusandae non! Dolore non officia debitis esse unde nihil eveniet rerum odio ullam laudantium.";

  return (
    <Card>
      <Box className="reminderCardText">
        <h2 className="reminderCardTitle">{title}</h2>
        <p className="subp reminderCardDescr"> {desc}</p>
      </Box>
      <Box>
        <Grid container columns={2}>
          <Grid item xs={1}>
            <h2 style={{marginLeft: "10%"}}>Countdown</h2>
          </Grid>
          <Grid item xs={1}>
            <Card
              className="reminderCardPriority"
              sx={{ float: "right", marginRight: "20px", marginBottom: "20px" }}
            >
              <h4 style={{ margin: "0", padding: "10px" }}>Mid</h4>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}

export default ReminderCard;
