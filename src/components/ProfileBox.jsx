import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ProfileBox.css";
import profilePic from "../assets/profilePic.jpg";

function ProfileBox() {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/Profile");
  }
  return (
    <Card className="profileCard" onClick={handleClick} sx={{display : {xs: "none", md: "block"}}}>

        <CardMedia
          className="profilePic"
          image={profilePic}
          title="Profile picture"
        />
        <CardContent className="profileName">
          <Typography gutterBottom variant="h5" component="h2">
            NatthanonS
          </Typography>
        </CardContent>
    </Card>
  );
}

export default ProfileBox;
