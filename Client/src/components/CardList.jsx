import { Box, Card, CardMedia } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Card.css";

function CardList({ data }) {
  const [title, setTitle] = useState(data.title);
  const [desc, setDesc] = useState(data.description);
  const [priority, setPriority] = useState(data.priority);

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
        <Box
          className="cardImg"
          sx={{
            bgcolor:
              priority === "Low"
                ? "#d3d3d3"
                : priority === "Mid"
                ? "#888888"
                : "black",
          }}
        ></Box>
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
          <h4 style={{ margin: "0", padding: "10px" }}>{priority}</h4>
        </Card>
      </Box>
    </Card>
  );
}
export default CardList;
