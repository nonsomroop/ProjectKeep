import { Box } from "@mui/material";
import React from "react";
import LoginFrom from "../components/LoginForm";
function LoginPage({onLogin}) {
  return (
    <Box
      sx={{
        height: "calc(100vh - 50px)",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <LoginFrom onLogin={onLogin} />
    </Box>
  );
}

export default LoginPage;
