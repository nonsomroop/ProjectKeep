import React, { useState } from "react";
import { Box, Button, CardContent, Checkbox, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import Axios from "../AxiosInstance";

function LoginForm() {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usernameOrEmailError, setUsernameOrEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!validateForm()) return;
      const response = await Axios.post("/login", {
        usernameOrEmail,
        password,
      });
      if (response.data.success) {
        // localStorage.setItem("token", response.data.token);
        // localStorage.setItem("userId", response.data.user.id);
        console.log("success");
        navigate("/");
      } else {
        setUsernameOrEmail("");
        setPassword("");
        setUsernameOrEmailError("Incorrect username or email");
        setPasswordError("Incorrect password");
      }
    } catch (e) {
      setUsernameOrEmail("");
      setPassword("");
      if (e instanceof AxiosError) {
        if (e.response) return console.log(e.message);
      }
      return console.log(e.message);
    }
  };

  const validateForm = () => {
    let isValid = true;
    if (usernameOrEmail == "") {
      setUsernameOrEmailError("Username or email is required");
      isValid = false;
    }
    if (password == "") {
      setPasswordError("Password is required");
      isValid = false;
    }
    return isValid;
  };

  return (
    <Box
      sx={{
        bgcolor: "white",
        width: "430px",
        minHeight: "400px",
        padding: "20px",
        paddingBottom: "20px",
        borderRadius: { xs: "0px", sm: "2px", md: "5px" },
        boxShadow: "0 0.5rem 1rem rgba(0,0,0,.15)",
      }}
    >
      <Box ml={2}>
        <h2
          style={{ fontSize: "26px", marginBottom: "10px", marginTop: "15px" }}
        >
          Log in
        </h2>
        <p style={{ fontSize: "15px", marginBottom: "0px", marginTop: "0px" }}>
          Keep Memories Alive
        </p>
      </Box>

      <CardContent sx={{ marginTop: "12px" }}>
        <form className="form" onSubmit={handleSubmit}>
          <TextField
            sx={{ paddingBottom: "12px", width: "100%" }}
            className="text-field"
            label="Username or Email"
            variant="outlined"
            value={usernameOrEmail}
            onChange={(e) => setUsernameOrEmail(e.target.value)}
            error={!!usernameOrEmailError}
            helperText={usernameOrEmailError}
          />
          <TextField
            sx={{ width: "100%" }}
            className="text-field"
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!passwordError}
            helperText={passwordError}
          />
          {/* <Box  sx={{ display: "flex" }}> */}
          <Box sx={{ display: "none" }}>
            <Box width={"50%"} display={"flex"}>
              <Checkbox
                sx={{
                  color: "var(--colorp2)", // Set the color when the checkbox is checked
                  margin: "0",
                  padding: "0",
                  height: "13px",
                  marginTop: "11px",
                  "&.Mui-checked": {
                    borderColor: "var(--colorp2)", // Set the color when the checkbox is checked
                  },
                }}
              />
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "10px",
                  marginLeft: "5px",
                }}
              >
                Remember me
              </p>
            </Box>
            <Box
              width={"50%"}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "10px",
                  fontWeight: "600",
                }}
              >
                Forgot password?
              </p>
            </Box>
          </Box>
          <Button
            type="submit"
            sx={{
              width: "100%",
              // height: "42px"
              height: "50px",
              bgcolor: "var(--colorp1)",
              color: "var(--colorp3)",
              marginBottom: "60px",
              marginTop: "25px",
              // marginTop: "15px",
              float: "right",
              fontSize: "16px",
              fontWeight: "400",
              textTransform: "capitalize",
              "&:active , &:hover": {
                bgcolor: "var(--colorp1)",
                color: "var(--colorp3)",
              },
            }}
          >
            Login
          </Button>
        </form>
      </CardContent>
      <Box
        display={"flex"}
        width={"100%"}
        justifyContent={"center"}
        mt={"30px"}
      >
        <p
          style={{
            fontSize: "13px",
            margin: "0",
            marginRight: "3px",
          }}
        >
          Need an account?
        </p>
        <Link
          to="/register"
          style={{
            textDecoration: "none",
            color: "#383737",
          }}
        >
          <p style={{ fontSize: "13px", fontWeight: "bold", margin: "0" }}>
            SignUp
          </p>
        </Link>
      </Box>
    </Box>
  );
}

export default LoginForm;
