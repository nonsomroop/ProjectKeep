import { Box, Button, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../styles/DashboardList.css";
import CardList from "./CardList";
import { useNavigate } from "react-router-dom";
import Axios from "../AxiosInstance";

function DashboardList({ search }) {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const checkSearch = () => {
    alert(search);
    console.log(search);
  };
  const fetchData = async () => {
    Axios.get("/shownote")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="page-container">
      <Box className="listBox" sx={{ marginBottom: "10px" }}>
        <Box ml={"5%"}>
          <h2>List</h2>
        </Box>
        <hr></hr>
        <Button
          variant="contained"
          className="listButton"
          onClick={() => navigate("/Create")}
          sx={{
            fontSize: "20px",
            height: { xs: "40px", sm: "60px" },
            bgcolor: "var(--colorp1)",
            color: "var(--colorp3)",
            textTransform: "capitalize",
            marginLeft: "5%",
            "&:active , &:hover": {
              bgcolor: "var(--colorp1)",
              color: "var(--colorp3)",
            },
          }}
        >
          Add new List +
        </Button>
        <Grid
          container
          columns={6}
          spacing={"3%"}
          sx={{
            width: "90%",
            marginLeft: "3%",
            marginTop: "5px",
            marginBottom: "30px",
          }}
        >
          {!search
            ? data.map((item) => (
                <Grid item xs={6} md={3} key={item.id}>
                  <CardList data={item} />
                </Grid>
              ))
            : data
                .filter((item) => {
                  if (
                    search.searchTerm &&
                    !item.title.includes(search.searchTerm)
                  ) {
                    return false;
                  }
                  if (search.startDate && item.created_at < search.startDate) {
                    return false;
                  }
                  if (search.endDate && item.created_at > search.endDate) {
                    return false;
                  }
                  if (search.highPriority && item.priority !== 'High') {
                    return false;
                  }
                  if (search.midPriority && item.priority !== 'Mid') {
                    return false;
                  }
                  if (search.lowPriority && item.priority !== 'Low') {
                    return false;
                  }
                  return true;
                })
                .map((item) => (
                  <Grid item xs={6} md={3} key={item.id}>
                    <CardList data={item} />
                  </Grid>
                ))}
        </Grid>
        {/* <Box
          sx={{ height: "100px", width: "200px", bgcolor: "red" }}
          onClick={checkSearch}
        ></Box> */}
      </Box>
    </div>
  );
}
export default DashboardList;
