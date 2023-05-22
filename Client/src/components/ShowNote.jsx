import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "../AxiosInstance";
import { AttachEmail } from "@mui/icons-material";

function ShowNote() {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const { noteid } = useParams();
  const [tags, setTags] = useState({});
  const latitude = 13.7563;
  const longitude = 100.5018;
  const [selectedImage, setSelectedImage] = useState(null);
  const [squareSize, setSquareSize] = useState(0);

  const label = {
    marginLeft: "4%",
    display: "flex",
    paddingRight: "4%",
  };

  useEffect(() => {
    fetchData();
    calculateSquareSize();
    window.addEventListener("resize", calculateSquareSize);

    return () => {
      window.removeEventListener("resize", calculateSquareSize);
    };
  }, []);

  const fetchData = async () => {
    console.log(noteid);
    Axios.get("/notedetail", { params: { noteid: noteid } })
      .then((res) => {
        console.log(res.data[0]);
        setData(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const calculateSquareSize = () => {
    const longerSide = Math.max(window.innerWidth, window.innerHeight);
    const squareSize = Math.min(280, longerSide * 0.4);
    setSquareSize(squareSize);
  };

  return (
    <Box className="searchListBox" height={"auto"} pb={"25px"}>
      <Box ml={"3%"} display={"flex"}>
        <h1>{data.title}</h1>
        <Button
          onClick={(id) => navigate(`/Edit/${noteid}`)}
          sx={{
            marginLeft: "auto",
            bgcolor: "var(--colorp1)",
            color: "var(--colorp3)",
            height: "40px",
            width: "80px",
            marginTop: "21.44px",
            marginRight: "3%",
            textTransform: "capitalize",
            "&:hover": {
              bgcolor: "var(--colorp1)",
              color: "var(--colorp3)",
            },
          }}
        >
          Edit
        </Button>
      </Box>
      <hr style={{ width: "94%" }} />
      {data.image ? (
        <img style={{ height: `${squareSize}px`, width: `${squareSize}px` }} />
      ) : (
        <></>
      )}
      <Box sx={label}>
        <p style={{ fontWeight: "bold", marginRight: "3%" }}>Description</p>
        <p>{data.description}</p>
      </Box>
      <Box sx={label}>
        <p style={{ fontWeight: "bold", marginRight: "3%" }}>Tags</p>
        <p>{data.description}</p>
      </Box>
      <Box sx={label}>
        <p style={{ fontWeight: "bold", marginRight: "3%" }}>Categories</p>
        <p>{data.description}</p>
      </Box>
      <Box sx={label}>
        <p style={{ fontWeight: "bold", marginRight: "3%" }}>Location</p>
        <p>{latitude}</p>
        <p style={{ marginLeft: "3%" }}>{longitude}</p>
      </Box>
      <Box sx={label}>
        <p style={{ fontWeight: "bold", marginRight: "3%" }}>Priority</p>
        <p>{data.priority}</p>
        {data.created_at != "1899-11-29T17:17:56.000Z" ? (
          <>
            <p
              style={{
                fontWeight: "bold",
                marginLeft: "5%",
                marginRight: "3%",
              }}
            >
              Date
            </p>
            <p>{data.created_at}</p>
          </>
        ) : (
          <>
          </>
        )}
      </Box>
      <Box sx={{ marginLeft: "4%", paddingRight: "4%" }}>
        <p style={{ fontWeight: "bold", marginRight: "3%" }}>Detail</p>
        <p>{data.content}</p>
      </Box>
    </Box>
  );
}

export default ShowNote;
