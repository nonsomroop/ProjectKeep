import { Box, Card, CardMedia } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import profilePic from "../assets/profilePic.jpg";
import "../styles/Card.css";

function CardList({ data }) {
  const [title, setTitle] = useState(data.title);
  const [desc, setDesc] = useState(data.description);
  const navigate = useNavigate();
  return (
    <Card
      onClick={() => navigate(`/note/${data.id}`)}
      sx={{ cursor: "pointer" }}
    >
      <Box
        className="picture"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <CardMedia className="cardImg" image={profilePic} title="Card image" />
      </Box>
      <Box className="cardText">
        <h2 className="cardTitle">{title}</h2>
        <p className="subp cardDescr">{desc}</p>
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
