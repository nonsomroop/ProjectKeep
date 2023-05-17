import React, { useState } from "react";
import { Box, Button, CardContent, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Axios from "../AxiosInstance";

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleFirstnameChange = (event) => {
    setFirstname(event.target.value);
  };

  const handleLastnameChange = (event) => {
    setLastname(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirm(event.target.value);
  };

  const validateForm = () => {
    let check = true;
    let updatedErrors = {};

    if (password !== confirm) {
      setPassword("");
      setConfirm("");
      updatedErrors = {
        ...updatedErrors,
        password: "Password and Confirm Password do not match",
      };
      check = false;
    }

    if (username === "") {
      updatedErrors = {
        ...updatedErrors,
        username: "Please enter your username",
      };
      check = false;
    }

    if (firstname === "") {
      updatedErrors = {
        ...updatedErrors,
        firstname: "Please enter your firstname",
      };
      check = false;
    }

    if (lastname === "") {
      updatedErrors = {
        ...updatedErrors,
        lastname: "Please enter your lastname",
      };
      check = false;
    }

    if (email === "") {
      updatedErrors = { ...updatedErrors, email: "Please enter your email" };
      check = false;
    }

    if (password === "") {
      updatedErrors = {
        ...updatedErrors,
        password: "Please enter your password",
      };
      check = false;
    }

    if (confirm === "") {
      updatedErrors = {
        ...updatedErrors,
        confirm: "Please enter your confirm password",
      };
      check = false;
    }

    setErrors({ ...updatedErrors });

    return check;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const response = await Axios.post("/register", {
        username,
        password,
        firstname,
        lastname,
        email,
      });

      if (response.data.success) {
        // Handle success response
        console.log(response.data.message);
        navigate("/login");
      } else {
        // Handle error response
        setUsername("");
        setPassword("");
        setConfirm("");
        console.error(response.data.error);
        setErrors({ username: "Username is already exist" });
      }
    } catch (e) {
      // Handle Axios error
      setPassword("");
      setConfirm("");
      if (e instanceof AxiosError) {
        if (e.response) {
          // Handle error response
          console.error(e.response.data.error);
          navigate("/error3");
        }
      }
    }
  };

  return (
    <Box
      sx={{
        bgcolor: "white",
        width: "450px",
        minHeight: "530px",
        padding: "20px",
        paddingBottom: "20px",
        borderRadius: { xs: "0px", sm: "2px", md: "5px" },
        boxShadow: "0 0.5rem 1rem rgba(0,0,0,.15)",
      }}w
    >
      <Box ml={2}>
        <h2
          style={{ fontSize: "26px", marginBottom: "8px", marginTop: "15px" }}
        >
          Register
        </h2>
        <p style={{ fontSize: "15px", marginBottom: "0px", marginTop: "0px" }}>
          Memories Matter, Keep Today
        </p>
      </Box>
      <CardContent>
        <form className="form" onSubmit={handleSubmit}>
          <Box display={"flex"}>
            <TextField
              sx={{ paddingBottom: "12px", width: "100%", marginRight: "5px" }}
              className="firstname"
              label="Firstname"
              variant="outlined"
              value={firstname}
              error={!!errors.firstname}
              helperText={errors.firstname}
              onChange={handleFirstnameChange}
            />
            <TextField
              sx={{ paddingBottom: "12px", width: "100%", marginLeft: "5px" }}
              className="lastname"
              label="Lastname"
              variant="outlined"
              value={lastname}
              error={!!errors.lastname}
              helperText={errors.lastname}
              onChange={handleLastnameChange}
            />
          </Box>
          <TextField
            sx={{ paddingBottom: "12px", width: "100%" }}
            className="text-field"
            label="Username"
            variant="outlined"
            value={username}
            onChange={handleUsernameChange}
            error={!!errors.username}
            helperText={errors.username}
          />
          <TextField
            sx={{ paddingBottom: "12px", width: "100%" }}
            className="text-field"
            label="Email"
            type="email"
            variant="outlined"
            value={email}
            error={!!errors.email}
            helperText={errors.email}
            onChange={handleEmailChange}
          />
          <TextField
            sx={{ paddingBottom: "12px", width: "100%" }}
            className="text-field"
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            error={!!errors.password}
            helperText={errors.password}
            onChange={handlePasswordChange}
          />
          <TextField
            sx={{ width: "100%" }}
            className="text-field"
            label="Confirm Password"
            variant="outlined"
            type="password"
            error={!!errors.confirm}
            helperText={errors.confirm}
            value={confirm}
            onChange={handleConfirmPasswordChange}
          />
          <Button
            type="submit"
            sx={{
              width: "100%",
              height: "45px",
              bgcolor: "var(--colorp1)",
              color: "var(--colorp3)",
              marginBottom: "20px",
              marginTop: "20px",
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
            Register
          </Button>
        </form>
      </CardContent>
      <Box
        display={"flex"}
        width={"100%"}
        justifyContent={"center"}
        mt={"30px"}
        mb={"20px"}
      >
        <p
          style={{
            fontSize: "13px",
            margin: "0",
            marginRight: "3px",
          }}
        >
          Have an account?
        </p>
        <Link
          to="/login"
          style={{
            textDecoration: "none",
            color: "#383737",
          }}
        >
          <p style={{ fontSize: "13px", fontWeight: "bold", margin: "0" }}>
            Log in
          </p>
        </Link>
      </Box>
    </Box>
  );
}

export default RegisterForm;
