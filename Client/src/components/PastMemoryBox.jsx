import { Box } from "@mui/material";
import "../styles/Reminder.css";
import React, { useEffect, useState } from "react";
import CardList from "./CardList";
import { useNavigate } from "react-router-dom";
import Axios from "../AxiosInstance";

function PastMemoryBox({ data }) {
  const navigate = useNavigate();
  const [timePass, setTimePass] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [randomMemory, setRandomMemory] = useState(null); // Declare randomMemory variable

  useEffect(() => {
    calculateTimePass();
  }, [data]);

  const calculateTimePass = () => {
    if (Object.keys(data).length > 0) {
      const filtered = data.filter((item) => {
        const createdDate = new Date(item.created_at);
        const currentDate = new Date();
        const year = createdDate.getFullYear();
        console.log(year + " year is Here");
        return year >= 2000;
      });

      setFilteredData(filtered);

      if (filtered.length > 0) {
        const randomIndex = Math.floor(Math.random() * filtered.length);
        const randomMemory = filtered[randomIndex];
        const createdDate = new Date(randomMemory.created_at);
        const currentDate = new Date();
        const timeDiff = currentDate.getTime() - createdDate.getTime();
        const daysPassed = Math.floor(timeDiff / (1000 * 3600 * 24));
        setTimePass(`${daysPassed} days ago`);
        setRandomMemory(randomMemory); // Assign randomMemory
      } else {
        setTimePass("");
      }
    }
  };

  return (
    <Box className="pastMemoryClass">
      <Box sx={{ width: "95%" }} ml={"5%"}>
        <h2>Past memory</h2>
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
        {console.log(filteredData.length)}
        {filteredData.length > 0 && timePass !== "" && randomMemory !== null ? (
          <CardList data={randomMemory} />
        ) : (
          <></>
        )}
      </Box>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        {timePass}
      </h1>
    </Box>
  );
}

export default PastMemoryBox;
