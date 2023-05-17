import {
  Box,
  Card,
  CardMedia,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ProfileBox.css";
import profilePic from "../assets/profilePic.jpg";

function ProfileBox() {
  const username = "NatthanonS";
  let navigate = useNavigate();
  function handleClick() {
    navigate("/Profile");
  }
  return (
    <Card
      className="profileCard"
      onClick={handleClick}
      sx={{ display: { xs: "none", md: "block" }, alignItems: "center"}}
    >
      <Box height={"100%"} display={"flex"} alignItems={"center"}>
      <CardMedia
        className="profilePic"
        image={profilePic}
        title="Profile picture"
        sx={{marginLeft: "4px", marginRight: "20px"}}
      />
      <Box>
        <h2 style={{padding: "0"}}>{username}</h2>
      </Box>
      </Box>
    </Card>
  );
}

export default ProfileBox;
