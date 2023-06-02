import { Box, Button, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../styles/Profile.css";
import profilePic from "../assets/profilePic.jpg";
import Axios from "../AxiosInstance";
import { useNavigate } from "react-router-dom";

function ProfileList() {
  const [userData, setUserData] = useState({});
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [bio, setBio] = useState("");
  const [aboutme, setAboutme] = useState("This is my aboutme");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    Axios.get("/showprofile")
      .then((res) => {
        console.log(res.data.data);
        setUserData(res.data.data);
        setName(res.data.data.username); 
        setAboutme(res.data.data.about_me);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const name = "Natthanon Somroop";
 
  return (
    <Box className="profileListClass">
      <Grid container columns={24}>
        <Grid
          item
          xs={24}
          md={8}
          lg={6}
          xl={5}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              height: "200px",
              width: "200px",
              marginTop: { xs: "3%", md: "calc(5% + 10px)" },
              overflow: "hidden",
              objectFit: "cover",
            }}
          >
            <img
              src={profilePic}
              alt="profile picture"
              className="profileListPic"
              style={{
                borderRadius: "5px",
                height: "80%",
                width: "80%",
                objectFit: "cover",
                marginBottom: "70%"
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={24} md={16} lg={18} xl={19}>
          <Box sx={{ margin: "3%", color: "var(--colorp1)", marginLeft: {xs: "3%", md: "0% "}}}>
            <h1 style={{ margin: "5px", marginLeft: "0px" }}>{name}</h1>
            <p style={{ margin: "0px", marginTop: "10px" }} className={"subp"}>
              {bio}
            </p>
            <h5
              style={{
                margin: "10px",
                marginTop: "20px",
                marginLeft: "0px",
                fontWeight: "bold",
              }}
              className={"subp"}
            >
              {" "}
              About me
            </h5>
            <p style={{ margin: "0px" }} className={"subp"}>
              {aboutme}
            </p>
          </Box>
          <Box display="flex" justifyContent="flex-end">
            <Button
              variant="contained"
              onClick={() => navigate("/Signout")}
              sx={{
                fontSize: "15px",
                height: "35px",
                width: "95px",
                marginRight: "3%",
                bgcolor: "var(--colorp3)",
                color: "var(--colorp1)",
                textTransform: "capitalize",
                "&:hover":{
                  bgcolor: "var(--colorp3)",
                  color: "var(--colorp1)",
                },
                "&:active":{
                  bgcolor: "var(--colorp3)",
                  color: "var(--colorp1)",
                },
              }}
            >
              Sign out
            </Button>
            <Button
              variant="contained"
              className="listButton"
              sx={{
                fontSize: "15px",
                height: "35px",
                width: "95px",
                marginRight: "4%",
                marginBottom: "25px",
                bgcolor: "var(--colorp1)",
                color: "var(--colorp3)",
                textTransform: "capitalize",
                "&:active , &:hover": {
                  bgcolor: "var(--colorp1)",
                  color: "var(--colorp3)",
                },
              }}
            >
              Edit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProfileList;
