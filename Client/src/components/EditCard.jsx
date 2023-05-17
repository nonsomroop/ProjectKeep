import {
  Box,
  Chip,
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import "../styles/ShowList.css";

function EditCard() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [tags, setTags] = useState([]);
  const [categories, setCategories] = useState([]);
  const [inputTagValue, setInputTagValue] = useState("");
  const [inputCategoryValue, setInputCategoryValue] = useState("");
  const [selectedPriority, setSelectedPriority] = useState("");

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
    <Box className="searchListBox">
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
          onChange={(e) => setTitle(e.target.value)}
          sx={{ width: "97%" }}
        ></TextField>
      </Box>
      <hr style={{ width: "94%" }} />
      <Grid container>
        <Grid item xs={6} ml={"4%"}>
          <Grid container>
            <Grid item xs={12} display={"flex"} mt={"15px"}>
              <Box
                sx={{
                  width: "120px",
                  margin: "6px 20px 0 0",
                  bgcolor: "red",
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
                  bgcolor: "blue",
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
              <Box mt={"10px"} sx={{ height: "20px" }}>
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
            <Grid item xs={12} display={"flex"} mt={"15px"}>
              <Box
                sx={{
                  width: "120px",
                  bgcolor: "pink",
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
              <Box mt={"10px"} sx={{ height: "20px" }}>
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
              <Grid item xs={6} display={"flex"} mt={"15px"}>
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
                  InputProps={{
                    style: {
                      fontSize: "16px",
                      height: "35px",
                    },
                  }}
                ></TextField>
              </Grid>

              <Grid item xs={6} display={"flex"} mt={"15px"}>
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
              <Grid item xs={6} display={"flex"} mt={"15px"}>
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

              <Grid item xs={6} display={"flex"} mt={"15px"}>
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
                  InputProps={{
                    style: {
                      fontSize: "16px",
                      height: "35px",
                    },
                  }}
                ></TextField>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
      <Box className="tagInput"></Box>
    </Box>
  );
}

export default EditCard;
