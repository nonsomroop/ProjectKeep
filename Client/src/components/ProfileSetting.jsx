import React, { useEffect, useState } from "react";
import "../styles/Setting.css";
import { Box, Button, Grid, TextField } from "@mui/material";
import Axios from "../AxiosInstance";
import { useNavigate } from "react-router-dom";


function ProfileSetting() {
  const [data, setData] = useState({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    about_me: '',
  });
  const [errors, setErrors] = useState({});
  const navigation = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    Axios.get("/showprofile")
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (event, fieldName) => {
    setData((prevData) => ({
      ...prevData,
      [fieldName]: event.target.value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: "",
    }));
  };

  const handleSave = () => {
    const validationErrors = {};

    // Check for validation errors
    if (!data.username) {
      validationErrors.username = "Username is required";
    }
    if (!data.first_name) {
      validationErrors.first_name = "First name is required";
    }
    if (!data.last_name) {
      validationErrors.last_name = "Last name is required";
    }
    if (!data.email) {
      validationErrors.email = "Email is required";
    }

    // Update the errors state
    setErrors(validationErrors);

    // Save the data if there are no validation errors
    if (Object.keys(validationErrors).length === 0) {
      saveData();
    }
  };

  const saveData = () => {
    Axios.patch("/saveprofile", data)
      .then((res) => {
        console.log(res.data);
        navigation("/Profile");
      })
      .catch((err) => {
        console.log(err);
        // Show error message or handle the error
      });
    console.log(data)
  };

  return (
    <Box className="profileSettingBox">
      <Box ml={"5%"}>
        <Box>
          <h2>Edit Profile</h2>
        </Box>
      </Box>
      <hr />

      <Box display={"flex"} flexDirection={"column"} ml={"6%"} width={"90%"}>
        <Grid container>
          <Grid item xs={12}>
            <Box display={"flex"} alignItems={"center"}>
              <h4 style={{ marginRight: "4%" }}>Username</h4>
              <TextField
                value={data.username}
                onChange={(event) => handleChange(event, "username")}
                placeholder={data.username}
                error={!!errors.username}
                helperText={errors.username}
                InputProps={{
                  style: {
                    fontSize: "16px",
                    height: "35px",
                  },
                }}
              ></TextField>
            </Box>
            <Box display={"flex"} alignItems={"center"}>
              <h4 style={{ marginRight: "4%" }}>Firstname</h4>
              <TextField
                value={data.first_name}
                onChange={(event) => handleChange(event, "first_name")}
                placeholder={data.first_name}
                error={!!errors.first_name}
                helperText={errors.first_name}
                InputProps={{
                  style: {
                    fontSize: "16px",
                    height: "35px",
                  },
                }}
              ></TextField>
            </Box>
            <Box display={"flex"} alignItems={"center"}>
              <h4 style={{ marginRight: "4%" }}>Lastname</h4>
              <TextField
                value={data.last_name}
                onChange={(event) => handleChange(event, "last_name")}
                placeholder={data.last_name}
                error={!!errors.last_name}
                helperText={errors.last_name}
                InputProps={{
                  style: {
                    fontSize: "16px",
                    height: "35px",
                  },
                }}
              ></TextField>
            </Box>
            <Box display={"flex"} alignItems={"center"}>
              <h4 style={{ marginRight: "4%" }}>Email</h4>
              <TextField
                value={data.email}
                onChange={(event) => handleChange(event, "email")}
                placeholder={data.email}
                error={!!errors.email}
                helperText={errors.email}
                InputProps={{
                  style: {
                    fontSize: "16px",
                    height: "35px",
                  },
                }}
              ></TextField>
            </Box>
          </Grid>
        </Grid>
        <Box display={"flex"} flexDirection={"column"}>
          <h4 style={{ marginRight: "2%" }}>About me</h4>
          <TextField
            value={data.about_me}
            onChange={(event) => handleChange(event, "about_me")}
            placeholder={data.about_me}
            fullWidth
            multiline
            InputProps={{
              style: {
                fontSize: "16px",
                paddingTop: "5px",
                paddingBottom: "5px",
                minHeight: "70px",
              },
            }}
            sx={{ width: "98%", marginBottom: "20px" }}
          ></TextField>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="contained"
              sx={{
                flex: "end",
                fontSize: "15px",
                height: "35px",
                width: "95px",
                marginRight: "2%",
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
              onClick={handleSave}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ProfileSetting;
