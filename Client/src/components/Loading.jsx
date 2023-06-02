import React from "react";
import { CircularProgress, Box } from "@mui/material";

function Loading() {
  const spinnerStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100$"
  };

  return (
    <Box sx={spinnerStyles}>
      <CircularProgress />
    </Box>
  );
}

export default Loading;
