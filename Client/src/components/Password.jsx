import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import Axios from "../AxiosInstance";
import "../styles/Setting.css";
import { useNavigate } from "react-router-dom";

function Password() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validatePassword = () => {
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return false;
    }
    if (newPassword === "") {
      setError("Please enter a new password.");
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    event.preventDefault();
    if (!validatePassword()) {
      setNewPassword("");
      setConfirmPassword("");
      return;
    }

    try {
      await Axios.put("/updatepassword", { password: confirmPassword });
      navigate("/profile");
    } catch (error) {
      console.error("Error updating password:", error);
    }
  };

  return (
    <Box className="profileSettingBox">
      <Box ml={"5%"}>
        <h2>Change Password</h2>
      </Box>
      <hr />
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "20px",
        }}
      >
        <TextField
          variant="outlined"
          value={newPassword}
          placeholder="New Password"
          type="password"
          onChange={(e) => setNewPassword(e.target.value)}
          InputProps={{
            style: {
              fontSize: "16px",
              height: "40px",
            },
          }}
          sx={{ width: "75%", marginTop: "15px" }}
        />
        <TextField
          variant="outlined"
          value={confirmPassword}
          placeholder="Confirm Password"
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          InputProps={{
            style: {
              fontSize: "16px",
              height: "40px",
            },
          }}
          sx={{ width: "75%", marginTop: "15px", marginBottom: "30px" }}
        />
        {error && (
          <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>
        )}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            width: "88%",
          }}
        >
          <Button
            variant="contained"
            type="submit"
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
            Confirm
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default Password;
