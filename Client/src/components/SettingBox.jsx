import { Box, ListItemText } from "@mui/material";
import React from "react";
import "../styles/Setting.css";
import { NavLink } from "react-router-dom";

function SettingBox() {
  const links = [
    { to: "/Profile", name: "Profile" },
    { to: "/Setting/Password", name: "Password" },
    { to: "/Setting/Theme", name: "Theme" },
    { to: "/Signout", name: "Sign out" },
  ];

  return (
    <Box className="settingBoxClass" sx={{width: {xs: "95%", sm: "85%"}}}>
      {links.map(({ to, name }, index) => (
        <NavLink
          key={to}
          to={to}
          className="inactive-link"
          activeclassname="active-link"
        >
          <React.Fragment key={index}>
            <Box
              pt={"2%"}
              pb={"2%"}
              m={"2.5%"}
              sx={{
                display: "flex",
                color: "var(--colorp1)",
              }}
            >
              <ListItemText
                primary={name}
                primaryTypographyProps={{
                  style: {
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "20px",
                    fontWeight: 600,
                    marginLeft: "10%",
                  },
                }}
              />
            </Box>
            {index !== links.length - 1 && (
              <hr style={{ width: "80%", color: "#FFFFFF"}} />
            )}
          </React.Fragment>
        </NavLink>
      ))}
    </Box>
  );
}

export default SettingBox;
