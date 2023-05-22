import React from "react";
import SideNav from "../components/SideNav";
import { Box, Grid } from "@mui/material";
import ProfileBox from "../components/ProfileBox";
import "../styles/ShowList.css";
import image from "../assets/mempic.jpg";
import logo from "../assets/logowhite.svg";

function HomePage() {
  return (
    <Box
      sx={{
        display: "flex",
        backgroundImage: `url(${image})`,
        width: "100vw",
        height: "100vh",
      }}
    >
      <SideNav />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: { xs: "100%", sm: "calc(100% - 232px)" },
          marginLeft: { xs: "0px", sm: "232px" },
        }}
      >
        <img
          src={logo}
          width={"35%"}
          style={{ filter: "drop-shadow(0 0.5rem 1rem rgba(0, 0, 0, 0.15))" }}
        />
      </Box>
    </Box>
  );
}

export default HomePage;
