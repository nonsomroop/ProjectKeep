import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Box,
  Icon,
  IconButton,
  ListItemText,
  SwipeableDrawer,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Home as HomeIcon,
  Settings as SettingsIcon,
  Dashboard as DashboardIcon,
  LocationOn as LocationOnIcon,
  CalendarMonth as CalendarMonthIcon,
  NotificationsActive as NotificationsActiveIcon,
} from "@mui/icons-material";
import "../styles/SideNav.css";

const resDisplay = {
  width: { xs: "5rem", md: "14.5rem" },
  fontSize: { xs: "120%", md: "210%" },
  display: { xs: "none", md: "block" },
};

const links = [
  { to: "/", label: "Home", icon: <HomeIcon /> },
  { to: "/Dashboard", label: "Dashboard", icon: <DashboardIcon /> },
  { to: "/Calendar", label: "Calendar", icon: <CalendarMonthIcon /> },
  { to: "/Location", label: "Location", icon: <LocationOnIcon /> },
  { to: "/Reminder", label: "Reminder", icon: <NotificationsActiveIcon /> },
  { to: "/Setting", label: "Setting", icon: <SettingsIcon /> },
];

function SideNav() {
  const [activeLink, setActiveLink] = useState("");
  const [state, setState] = useState({
    top: false,
  });
  const anchor = "top";
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  return (
    <>
    {/* Responsive (Phone size) */}
      <Box
        sx={{
          position: "fixed",
          top: "0",
          left: "0",
          display: { xs: "block", sm: "none" },
          zIndex: "9999"
        }}  
      >
        <AppBar
          position="static"
          sx={{ backgroundColor: "var(--colorp3)", width: "100vw" }}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Typography
              sx={{
                color: "var(--colorp1)",
                fontSize: "120%",
                fontWeight: "bolder",
              }}
            >
              KEEP
            </Typography>

            <React.Fragment key={top}>
              <IconButton
                color="var(--colorp1)"
                edge="start"
                sx={{ mr: 2 }}
                onClick={toggleDrawer(anchor, true)}
              >
                <MenuIcon />
              </IconButton>
              {/* Drawer appear when clicking on the button */}
              <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                <Box
                  sx={{ width: resDisplay.width, marginTop: "3.5rem" }}
                  onClick={toggleDrawer(anchor, false)}
                  onKeyDown={toggleDrawer(anchor, false)}
                >
                  {links.map(({ to, label}) => (
                    <NavLink
                      key={to}
                      to={to}
                      className="inactive-link"
                      activeclassname="active-link"
                      onClick={() => setActiveLink(to)}
                    >
                      <Box sx={{display: "flex", color: "var(--colorp1)", width: "100vw", padding: "1rem"}}>
                        <ListItemText sx={{fontWeight: "bolder"}}>{label}</ListItemText>
                      </Box>
                    </NavLink>
                  ))}
                </Box>
              </SwipeableDrawer>
            </React.Fragment>
          </Toolbar>
        </AppBar>
      </Box>
      <Box
        id="sidenav"
        sx={{ width: resDisplay.width, display: { xs: "none", sm: "block" } }}
      >
        <NavLink
          key={"/"}
          to={"/"}
          className="inactive-link"
          activeclassname="active-link"
          onClick={() => setActiveLink("/")}
        >
          <Box
            id="logo"
            sx={{
              paddingTop: { xs: "25%", md: "8%" },
              paddingBottom: { xs: "0%", md: "8%" },
            }}
          >
            <Box id="logoicon" sx={{ fontSize: resDisplay.fontSize }}>
              KEEP
            </Box>
          </Box>
        </NavLink>

        {links.map(({ to, label, icon }) => (
          <NavLink
            key={to}
            to={to}
            className="inactive-link"
            activeclassname="active-link"
            onClick={() => setActiveLink(to)}
          >
            <Box
              id="sidenavbutton"
              sx={{ paddingLeft: { xs: "1.75rem", md: "2.5rem" } }}
            >
              <Icon id="sidenavicon">{icon}</Icon>
              <Box sx={{ display: resDisplay.display }}>
                <h2>{label}</h2>
              </Box>
            </Box>
          </NavLink>
        ))}
      </Box>
    </>
  );
}

export default SideNav;
