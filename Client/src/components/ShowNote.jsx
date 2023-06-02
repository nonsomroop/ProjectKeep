import { Box, Button, Chip } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "../AxiosInstance";
import { AttachEmail } from "@mui/icons-material";
import Loading from "./Loading";

function ShowNote() {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const { noteid } = useParams();
  const [tags, setTags] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [squareSize, setSquareSize] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const label = {
    marginLeft: "4%",
    display: "flex",
    paddingRight: "4%",
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await Axios.delete(`/delete-note/${noteid}`);
      console.log("Note delete", response);
      navigate("/dashboard");
    } catch (error) {
      // Handle errors
      console.log("Hello");
      console.error("Error deleting note:", error);
    }
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
        setIsLoading(true);
        setTags(res.data[0].Tags);
        setCategories(res.data[0].Categories);
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

  function convertDecimalToDms(decimal) {
    const degrees = Math.floor(decimal);
    const minutesDecimal = (decimal - degrees) * 60;
    const minutes = Math.floor(minutesDecimal);
    const seconds = Math.round((minutesDecimal - minutes) * 60 * 10) / 10;

    return `${degrees}°${minutes}'${seconds}"`;
  }

  if (!isLoading) {
    return <Loading />;
  }

  return (
    <Box className="searchListBox" height={"auto"} pb={"25px"}>
      <Box ml={"3%"} mr={"3%"} display={"flex"}>
        <h1>{data.title}</h1>
        {!isDelete ? (
          <Box ml={"auto"} display={"flex"}>
            {" "}
            <Button
              onClick={(id) => navigate(`/Edit/${noteid}`)}
              sx={{
                marginLeft: "auto",
                bgcolor: "var(--colorp1)",
                color: "var(--colorp3)",
                height: "40px",
                width: "80px",
                marginTop: "21.44px",
                marginRight: "5%",
                textTransform: "capitalize",
                "&:hover": {
                  bgcolor: "var(--colorp1)",
                  color: "var(--colorp3)",
                },
              }}
            >
              Edit
            </Button>
            <Button
              sx={{
                marginLeft: "0px",
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
              onClick={() => setIsDelete(true)}
            >
              Delete
            </Button>
          </Box>
        ) : (
          <Box ml={"auto"} display={"flex"}>
            {" "}
            <Button
              onClick={() => setIsDelete(false)}
              sx={{
                marginLeft: "auto",
                bgcolor: "var(--colorp3)",
                color: "var(--colorp1)",
                height: "40px",
                width: "80px",
                marginTop: "21.44px",
                marginRight: "5%",
                textTransform: "capitalize",
                "&:hover": {
                  bgcolor: "var(--colorp3)",
                  color: "var(--colorp1)",
                },
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              sx={{
                marginLeft: "0px",
                bgcolor: "var(--colorp1)",
                color: "var(--colorp3)",
                height: "40px",
                width: "160px",
                marginTop: "21.44px",
                marginRight: "3%",
                textTransform: "capitalize",
                "&:hover": {
                  bgcolor: "var(--colorp1)",
                  color: "var(--colorp3)",
                },
              }}
            >
              Confirm Delete
            </Button>
          </Box>
        )}
      </Box>
      <hr style={{ width: "94%" }} />
      {data.image ? (
        <img style={{ height: `${squareSize}px`, width: `${squareSize}px` }} />
      ) : (
        <></>
      )}
      <Box sx={label}>
        {data.description != "" ? (
          <>
            <p style={{ fontWeight: "bold", marginRight: "3%" }}>Description</p>
            <p>{data.description}</p>
          </>
        ) : (
          <></>
        )}
      </Box>
      <Box sx={label}>
        {tags != "" ? (
          <>
            <p style={{ fontWeight: "bold", marginRight: "3%" }}>Tags</p>
            {tags.map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                sx={{
                  marginRight: "5px",
                  marginTop: "20px",
                  backgroundColor: "var(--colorp1)",
                  color: "white",
                  fontSize: "13px",
                  height: "25px",
                  maxWidth: "18%",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              />
            ))}
          </>
        ) : (
          <></>
        )}
      </Box>
      <Box sx={label}>
        {categories != "" ? (
          <>
            <p style={{ fontWeight: "bold", marginRight: "3%" }}>Categories</p>
            {categories.map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                sx={{
                  marginRight: "5px",
                  marginTop: "20px",
                  backgroundColor: "var(--colorp1)",
                  color: "white",
                  fontSize: "13px",
                  height: "25px",
                  maxWidth: "18%",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              />
            ))}
          </>
        ) : (
          <></>
        )}
      </Box>
      <Box sx={label}>
        {data.latitude == "" ? (
          <>
            <p style={{ fontWeight: "bold", marginRight: "3%" }}>Location</p>
            <p>{convertDecimalToDms(data.latitude)}</p>
            <p style={{ marginLeft: "3%" }}>
              {convertDecimalToDms(data.longitude)}
            </p>
          </>
        ) : (
          <></>
        )}
      </Box>
      <Box sx={label}>
        <p style={{ fontWeight: "bold", marginRight: "3%" }}>Priority</p>
        <p>{data.priority}</p>
        {parseInt(data.created_at.substring(0, 5)) > 2000 ? (
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
            <p>{data.created_at.substring(0, 10)}</p>
          </>
        ) : (
          <></>
        )}
      </Box>
      <Box sx={{ marginLeft: "4%", paddingRight: "4%" }}>
        {data.content != "" ? (
          <>
            <p style={{ fontWeight: "bold", marginRight: "3%" }}>Detail</p>
            <p>{data.content}</p>
          </>
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
}

export default ShowNote;
