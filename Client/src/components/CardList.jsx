import { Box, Card, CardMedia } from "@mui/material";
import React from "react";
import profilePic from "../assets/profilePic.jpg";
import "../styles/Card.css";

function CardList() {
  const title = "Title";
  const desc =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, reiciendis! Laudantium, ea beatae quibusdam explicabo libero recusandae non! Dolore non officia debitis esse unde nihil eveniet rerum odio ullam laudantium.";
  return (
    <Card>
      <Box className="picture" sx={{display: "flex", justifyContent: "center" }}>
        <CardMedia className="cardImg" image={profilePic} title="Card image" />
      </Box>
      <Box className="cardText">
        <h2 className="cardTitle">{title}</h2>
        <p className="subp cardDescr"> {desc}</p>
      </Box>
      <Box>
        <Card
          className="priority"
          sx={{ float: "right", marginRight: "20px", marginBottom: "20px" }}
        >
          <h4 style={{ margin: "0", padding: "10px" }}>Mid</h4>
        </Card>
      </Box>
    </Card>
  );
}
export default CardList;