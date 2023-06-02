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
import React, { useState } from "react";
import "../styles/ShowList.css";
import Axios from "../AxiosInstance";
import { useNavigate } from "react-router-dom";

function CreateCard() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [tags, setTags] = useState([]);
  const [categories, setCategories] = useState([]);
  const [inputTagValue, setInputTagValue] = useState("");
  const [inputCategoryValue, setInputCategoryValue] = useState("");
  const [createDate, setCreateDate] = useState("");
  const [selectedPriority, setSelectedPriority] = useState("Low");
  const [reminder, setReminder] = useState("");
  const [detail, setDetail] = useState("");
  const [titleError, setTitleError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (title === "") {
      return setTitleError("Please insert title");
    }
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
      detail: detail
    };

    try {
      const response = await Axios.post("/create-note", noteData);
      console.log("Note created:", response.data);
      navigate(-1);
    } catch (error) {
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
          error={!!titleError}
          helperText={titleError}
          onChange={(e) => setTitle(e.target.value)}
          sx={{ width: "97%" }}
        ></TextField>
      </Box>
      <hr style={{ width: "94%" }} />
      <Grid container>
        <Grid
          item
          xs={12}
          md={12}
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
                  onChange={(e) => setLatitude(e.target.value)}
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
                  onChange={(e) => setLongitude(e.target.value)}
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
                  onChange={(e) => setCreateDate(e.target.value)}
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
                    <MenuItem value="Low">Low</MenuItem>
                    <MenuItem value="Mid">Mid</MenuItem>
                    <MenuItem value="High">High</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}></Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* Image */}
      </Grid>
      <Box className="details" mt={"40px"} ml={"4%"} mr={"4%"}>
        <h4
          style={{
            margin: "6px 20px 0 0",
          }}
        >
          Details
        </h4>
        <TextField
          fullWidth
          multiline
          rows={3}
          onChange={(e) => setDetail(e.target.value)}
        ></TextField>
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

export default CreateCard;
