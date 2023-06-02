import React from "react";
import SideNav from "../components/SideNav";
import { Box, Button, Grid } from "@mui/material";
import ProfileBox from "../components/ProfileBox";
import "../styles/ShowList.css";
import image from "../assets/mempic.jpg";
import logo from "../assets/logowhite.svg";
import Ad from "../components/ad";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        backgroundImage: `url(${image})`,
        width: "100vw",
        height: "100vh",
      }}
    >
      {/* <Ad /> */}
      <SideNav />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: { xs: "100%", sm: "calc(100% - 232px)" },
          marginLeft: { xs: "0px", sm: "232px" },
        }}
      >
        <img
          src={logo}
          width={"35%"}
          style={{ filter: "drop-shadow(0 0.5rem 1rem rgba(0, 0, 0, 0.5))" }}
        />
        <Button
          variant="contained"
          onClick={() => navigate("/Create")}
          sx={{
            fontSize: "20px",
            height: { xs: "40px", sm: "60px" },
            bgcolor: "var(--colorp1)",
            color: "var(--colorp3)",
            marginTop: "20px",
            marginRight: {xs: "0", sm: "5%"},
            textTransform: "capitalize",
            "&:active , &:hover": {
              bgcolor: "var(--colorp1)",
              color: "var(--colorp3)",
            },
          }}
        >
          Create your Note +
        </Button>
      </Box>
    </Box>
  );
}

export default HomePage;
