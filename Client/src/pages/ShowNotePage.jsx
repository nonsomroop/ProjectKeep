import { Box, Grid } from "@mui/material";
import React from "react";
import SideNav from "../components/SideNav";
import ShowList from "../components/ShowList";
import ProfileBox from "../components/ProfileBox";
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ShowNote from "../components/ShowNote";

function ShowNotePage() {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ height: "20vh" }}></Box>
      {/* Sidebar */}
      <Box sx={{ width: { sm: "100px", md: "280px" } }}>
        <SideNav />
      </Box>

      <Grid
        container
        columns={28}
        sx={{ marginTop: { xs: "50px", sm: "0px" } }}
      >
        {/* Box1 */}
        <Grid item xs={20}>
          <Box
            ml={"20px"}
            sx={{
              display: "flex",
              alignitems: "center",
              cursor: "pointer",
              width: "100px",
            }}
            onClick={() => navigate(-1)}
          >
            <ArrowBackIosIcon sx={{ marginTop: "26px" }} />
            <h1>Back</h1>
          </Box>
        </Grid>
        {/* Box2 */}
        <Grid item xs={8}>
          <ProfileBox />
        </Grid>
        {/* Box3 */}
        <Grid item xs={27} sx={{ height: "80vh" }}>
          <ShowNote />
        </Grid>
      </Grid>
    </Box>
  );
}

export default ShowNotePage;
