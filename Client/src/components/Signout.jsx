import { Box, Button } from "@mui/material";
import React from "react";

function Signout() {
  const modalBox = {
    borderRadius: "5px",
  };

  function removeCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    window.location.reload();
  }
  return (
    <Box className="profileSettingBox">
      <Box ml={"5%"}>
        <h2>Sign out</h2>
      </Box>
      <hr />
      <Box ml={"7%"}>
        <p>You are about to signed out of KEEP</p>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            onClick={removeCookie("user")}
            sx={{
              flex: "end",
              fontSize: "15px",
              height: "35px",
              width: "95px",
              marginRight: "7%",
              marginBottom: "30px",
              bgcolor: "var(--colorp1)",
              color: "var(--colorp3)",
              textTransform: "capitalize",
              "&:hover": {
                bgcolor: "var(--colorp1)",
                color: "var(--colorp3)",
              },
              "&:active": {
                bgcolor: "var(--colorp1)",
                color: "var(--colorp3)",
              },
            }}
          >
            Sign out
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Signout;
