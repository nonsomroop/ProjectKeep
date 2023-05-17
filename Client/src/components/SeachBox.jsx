import React, { useState } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Box,
  Button,
} from "@mui/material";
import "../styles/SearchBox.css";

const SearchBox = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [tag, setTag] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [midPriority, setMidPriority] = useState(false);
  const [lowPriority, setLowPriority] = useState(false);
  const [highPriority, setHighPriority] = useState(false);
  const [tags, setTags] = useState(["Tag 1", "Tag 2", "Tag 3"]);

  const handleAddTag = (newTag) => {
    if (!tags.includes(newTag)) {
      setTags([...tags, newTag]);
    }
  };

  function handleSearch() {
    onSearch({
      searchTerm,
      category,
      tag,
      startDate,
      endDate,
      midPriority,
      lowPriority,
      highPriority,
    });
  }

  return (
    <Box
      className="searchBoxClass"
      display="flex"
      flexDirection={"column"}
      alignItems="center"
      mb={2}
      sx={{width: {xs: "95%", md: "90%"}}}
    >
      <Box sx={{ width: "95%" }} ml={"5%"}>
        <h2>Search</h2>
      </Box>
      <hr></hr>
      <TextField
        className="inputBar"
        label="Name"
        variant="outlined"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        margin="dense"
      />
      <FormControl className="inputBar" variant="outlined" margin="dense">
        <InputLabel id="category-label">Category</InputLabel>
        <Select
          labelId="category-label"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          label="Category"
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Category 1">Category 1</MenuItem>
          <MenuItem value="Category 2">Category 2</MenuItem>
          <MenuItem value="Category 3">Category 3</MenuItem>
        </Select>
      </FormControl>
      <FormControl className="inputBar" variant="outlined" margin="dense">
        <InputLabel id="tag-label">Tag</InputLabel>
        <Select
          labelId="tag-label"
          value={tag}
          onChange={(event) => setTag(event.target.value)}
          label="Tag"
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Tag 1">Tag 1</MenuItem>
          <MenuItem value="Tag 2">Tag 2</MenuItem>
          <MenuItem value="Tag 3">Tag 3</MenuItem>
        </Select>
      </FormControl>
      <Box display={"flex"} width={"80%"} sx={{
        flexDirection: {xs: "column", md: "row"}
      }}>
        <TextField
          label="Start Date"
          type="date"
          value={startDate}
          onChange={(event) => setStartDate(event.target.value)}
          margin="dense"
          InputLabelProps={{
            shrink: true,
            placeholder: "",
          }}
        />

        <TextField
          label="End Date"
          type="date"
          variant="outlined"
          value={endDate}
          // onChange={(event) => setEndDate(event.target.value)}
          margin="dense"
          sx={{ ml: {xs: "0", md: "4%"}}}
          InputLabelProps={{
            shrink: true,
            placeholder: "",
          }}
        />
      </Box>
      <Box sx={{ marginLeft: "10%", marginRight: "10%" }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={midPriority}
              onChange={(event) => setMidPriority(event.target.checked)}
              color="primary"
            />
          }
          label="Mid"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={lowPriority}
              onChange={(event) => setLowPriority(event.target.checked)}
              color="primary"
            />
          }
          label="Low"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={highPriority}
              onChange={(event) => setHighPriority(event.target.checked)}
              color="primary"
            />
          }
          label="High"
        />
      </Box>
      <Button
        variant="contained"
        // onClick={handleSearch}
        sx={{
          bgcolor: "var(--colorp3)",
          color: "var(--colorp1)",
          marginBottom: "30px",
          marginTop: "20px",
          float: "right",
          textTransform: "capitalize",
          "&:active": {
            bgcolor: "var(--colorp1)",
            color: "var(--colorp3)",
          },
          "&:hover": {
            bgcolor: "var(--colorp2)",
            color: "var(--colorp1)",
          },
        }}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchBox;
