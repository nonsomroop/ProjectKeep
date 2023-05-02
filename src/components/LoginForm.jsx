import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  TextField,
  makeStyles,
} from "@mui/material";
import "../styles/LoginForm.css";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login-form">
      <Card className="card" sx={{borderRadius: "5%"}}>
        <CardHeader className="card-header" title="Login" />
        <CardContent>
          <form className="form" onSubmit={handleSubmit}>
            <TextField sx={{paddingBottom: "8px"}}
              className="text-field"
              label="Username"
              variant="outlined"
              value={username}
              onChange={handleUsernameChange}
            />
            <TextField sx={{paddingBottom: "16px"}}
              className="text-field"
              label="Password"
              variant="outlined"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <Button
              className="button"
              variant="contained"
              color="primary"
              type="submit"
            >
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default LoginForm;
