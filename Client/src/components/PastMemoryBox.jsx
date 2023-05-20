import { Box } from "@mui/material";
import "../styles/Reminder.css";
import React, { useEffect, useState } from "react";
import CardList from "./CardList";
import { useNavigate } from "react-router-dom";
import Axios from "../AxiosInstance";

function PastMemoryBox() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    Axios.get("/shownote")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Box className="pastMemoryClass">
      <Box sx={{ width: "95%" }} ml={"5%"}>
        <h2>Past mermory</h2>
      </Box>
      <hr></hr>
      <Box
        sx={{
          width: "80%",
          marginLeft: "10%",
          marginTop: "40px",
          marginBottom: "35px",
        }}
      >
        <CardList data={data} />
      </Box>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        Timepass
      </h1>
    </Box>
  );
}

export default PastMemoryBox;
