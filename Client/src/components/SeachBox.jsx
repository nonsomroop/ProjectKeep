import React, { useState } from "react";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Box,
  Button,
} from "@mui/material";
import "../styles/SearchBox.css";

const SearchBox = ({ setSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [tag, setTag] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [midPriority, setMidPriority] = useState(false);
  const [lowPriority, setLowPriority] = useState(false);
  const [highPriority, setHighPriority] = useState(false);

  function handleSearch() {
    const searchParams = {
      searchTerm,
      category,
      tag,
      startDate,
      endDate,
      midPriority,
      lowPriority,
      highPriority,
    };

    console.log(searchParams);

    setSearch(searchParams);
  }

  return (
    <Box
      className="searchBoxClass"
      display="flex"
      flexDirection={"column"}
      alignItems="center"
      mb={2}
      sx={{ width: { xs: "95%", md: "90%" } }}
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
      <Box display={"none"}>
        <TextField
          className="inputBar"
          label="Category"
          variant="outlined"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          margin="dense"
        />
        <TextField
          className="inputBar"
          label="Tag"
          variant="outlined"
          value={tag}
          onChange={(event) => setTag(event.target.value)}
          margin="dense"
        />
      </Box>
      <Box
        display={"flex"}
        width={"80%"}
        sx={{ flexDirection: { xs: "column", md: "row" } }}
      >
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
          onChange={(event) => setEndDate(event.target.value)}
          margin="dense"
          sx={{ ml: { xs: "0", md: "4%" } }}
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
        onClick={handleSearch}
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
