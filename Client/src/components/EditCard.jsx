import {
  Box,
  Button,
  Chip,
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import "../styles/ShowList.css";
import ImageUploadBox from "./ImageUploadBox";
import Axios from "../AxiosInstance";
import Cookies from "js-cookie";

function EditCard() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [tags, setTags] = useState([]);
  const [categories, setCategories] = useState([]);
  const [inputTagValue, setInputTagValue] = useState("");
  const [inputCategoryValue, setInputCategoryValue] = useState("");
  const [createDate, setCreateDate] = useState("");
  const [selectedPriority, setSelectedPriority] = useState("");
  const [reminder, setReminder] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const noteData = {
      title: title,
      description: description,
      latitude: latitude,
      longitude: longitude,
      tags: tags,
      categories: categories,
      createDate: createDate,
      selectedPriority: selectedPriority,
      reminder: reminder,
    };

    try {
      const token = Cookies.get("user"); // Retrieve the token from the cookie
      const response = await Axios.post(
        "http://localhost:3000/create-note",
        noteData,
        // {
        //   headers: {
        //     Authorization: `Bearer ${token}`, // Include the token in the request headers
        //   },
        // }
      );
      // Handle the response
      console.log("Note created:", response.data);
    } catch (error) {
      // Handle errors
      console.error("Error creating note:", error);
    }
  };

  const handleInputTagChange = (event) => {
    setInputTagValue(event.target.value);
  };

  const handleInputTagKeyPress = (event) => {
    if (event.key === "Enter" && inputTagValue.trim() !== "") {
      if (tags.length < 5) {
        setTags([...tags, inputTagValue.trim()]);
        setInputTagValue("");
      }
    }
  };

  const handleInputCategoryChange = (event) => {
    setInputCategoryValue(event.target.value);
  };

  const handleInputCategoryKeyPress = (event) => {
    if (event.key === "Enter" && inputCategoryValue.trim() !== "") {
      if (categories.length < 5) {
        setCategories([...categories, inputCategoryValue.trim()]);
        setInputCategoryValue("");
      }
    }
  };

  const handleTagDelete = (tagToDelete) => {
    setTags(tags.filter((tag) => tag !== tagToDelete));
  };

  const handleCategoryDelete = (categoryToDelete) => {
    setCategories(
      categories.filter((category) => category !== categoryToDelete)
    );
  };

  return (
    <Box className="searchListBox" height={"auto"} pb={"25px"}>
      <Box display={"flex"} ml={"3%"} mt={"20px"}>
        <TextField
          id="standard-basic"
          variant="outlined"
          placeholder="Untitle"
          InputProps={{
            style: {
              fontSize: "40px",
              fontWeight: "bold",
              height: "60px",
            },
          }}
          required
          onChange={(e) => setTitle(e.target.value)}
          sx={{ width: "97%" }}
        ></TextField>
      </Box>
      <hr style={{ width: "94%" }} />
      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          ml={"4%"}
          mr={"4%"}
          sx={{ order: { xs: "2", md: "1" } }}
        >
          <Grid container>
            <Grid item xs={12} display={"flex"} mt={"15px"}>
              <Box
                sx={{
                  width: "120px",
                  margin: "7px 20px 0 0",
                }}
              >
                <h4 style={{ margin: "6px 20px 0 0" }}>Description</h4>
              </Box>
              <TextField
                id="standard-basic"
                onChange={(e) => setDescription(e.target.value)}
                fullWidth
                multiline
                rows={2}
                InputProps={{
                  style: {
                    fontSize: "16px",
                    minHeight: "35px",
                  },
                }}
              ></TextField>
            </Grid>
            <Grid item xs={12} display={"flex"} mt={"15px"}>
              <Box
                sx={{
                  width: "150px",
                }}
              >
                <h4 style={{ margin: "6px 20px 0 0" }}>Tags</h4>
              </Box>
              <TextField
                value={inputTagValue}
                onChange={handleInputTagChange}
                onKeyPress={handleInputTagKeyPress}
                placeholder="Add tags..."
                fullWidth
                InputProps={{
                  style: {
                    fontSize: "16px",
                    height: "35px",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Box mt={"5px"} mb={"5px"}>
                {tags.map((tag, index) => (
                  <Chip
                    key={index}
                    label={tag}
                    onDelete={() => handleTagDelete(tag)}
                    sx={{
                      marginRight: "5px",
                      backgroundColor: "var(--colorp1)",
                      color: "white",
                      fontSize: "10px",
                      height: "20px",
                      maxWidth: "18%",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                    }}
                  />
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} display={"flex"} mt={"5px"}>
              <Box
                sx={{
                  width: "120px",
                }}
              >
                <h4 style={{ margin: "6px 20px 0 0" }}>Categories</h4>
              </Box>
              <TextField
                value={inputCategoryValue}
                onChange={handleInputCategoryChange}
                onKeyPress={handleInputCategoryKeyPress}
                placeholder="Add categories..."
                fullWidth
                InputProps={{
                  style: {
                    fontSize: "16px",
                    height: "35px",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Box mt={"5px"} mb={"5px"}>
                {categories.map((category, index) => (
                  <Chip
                    key={index}
                    label={category}
                    onDelete={() => handleCategoryDelete(category)}
                    sx={{
                      marginRight: "5px",
                      backgroundColor: "var(--colorp1)",
                      color: "white",
                      fontSize: "10px",
                      height: "20px",
                      maxWidth: "18%",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                    }}
                  />
                ))}
              </Box>
            </Grid>
            <Grid container>
              <Grid
                item
                xs={12}
                md={6}
                display={"flex"}
                mt={"6px"}
                sx={{ pr: { xs: "0%", md: "4%" } }}
              >
                <h4
                  style={{
                    margin: "6px 20px 0 0",
                  }}
                >
                  Latitude
                </h4>
                <TextField
                  id="standard-basic"
                  fullWidth
                  onClick={(e) => setLatitude(e.target.value)}
                  InputProps={{
                    style: {
                      fontSize: "16px",
                      height: "35px",
                    },
                  }}
                ></TextField>
              </Grid>

              <Grid
                item
                xs={12}
                md={6}
                display={"flex"}
                sx={{ mt: { xs: "12px", md: "5px" } }}
              >
                <h4
                  style={{
                    margin: "6px 20px 0 0",
                  }}
                >
                  Longitude
                </h4>
                <TextField
                  id="standard-basic"
                  fullWidth
                  onClick={(e) => setLongitude(e.target.value)}
                  InputProps={{
                    style: {
                      fontSize: "16px",
                      height: "35px",
                    },
                  }}
                ></TextField>
              </Grid>
            </Grid>
            <Grid container>
              <Grid
                item
                xs={6}
                display={"flex"}
                mt={"12px"}
                sx={{ pr: { xs: "0%", md: "4%" } }}
              >
                <h4
                  style={{
                    margin: "6px 20px 0 0",
                  }}
                >
                  Date
                </h4>
                <TextField
                  id="standard-basic"
                  fullWidth
                  type="date"
                  sx={{ pr: { xs: "16px", md: "0px" } }}
                  InputProps={{
                    style: {
                      fontSize: "16px",
                      height: "35px",
                    },
                  }}
                ></TextField>
              </Grid>
              <Grid item xs={6} display={"flex"} mt={"12px"}>
                <h4
                  style={{
                    margin: "6px 20px 0 0",
                  }}
                >
                  Priority
                </h4>
                <FormControl>
                  <Select
                    labelId="priority-label"
                    id="priority-select"
                    value={selectedPriority}
                    onChange={(e) => setSelectedPriority(e.target.value)}
                    sx={{ fontSize: "16px", height: "35px", width: "100%" }}
                  >
                    <MenuItem value="low">Low</MenuItem>
                    <MenuItem value="mid">Mid</MenuItem>
                    <MenuItem value="height">Height</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}></Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            order: { xs: "1", md: "2" },
          }}
        >
          <ImageUploadBox />
        </Grid>
      </Grid>
      <Box className="details" mt={"40px"} ml={"4%"} mr={"4%"}>
        <h4
          style={{
            margin: "6px 20px 0 0",
          }}
        >
          Details
        </h4>
        <TextField fullWidth multiline rows={3}></TextField>
      </Box>
      <Box display={"flex"} justifyContent={"flex-end"} mt={"20px"} mr={"3%"}>
        <h4
          style={{
            margin: "6px 20px 0 0",
          }}
        >
          Set Reminder
        </h4>
        <TextField
          id="standard-basic"
          type="date"
          onChange={(e) => setReminder(e.target.value)}
          InputProps={{
            style: {
              fontSize: "16px",
              height: "35px",
            },
          }}
        ></TextField>
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{
            fontSize: "16px",
            width: "120px",
            height: "35px",
            marginBottom: "0px",
            bgcolor: "var(--colorp1)",
            color: "var(--colorp3)",
            textTransform: "capitalize",
            marginLeft: "20px",
            "&:active , &:hover": {
              bgcolor: "var(--colorp1)",
              color: "var(--colorp3)",
            },
          }}
        >
          Saved
        </Button>
      </Box>
    </Box>
  );
}

export default EditCard;
