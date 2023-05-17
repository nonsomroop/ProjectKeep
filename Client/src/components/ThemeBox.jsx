import { Box } from "@mui/material";
import "../styles/Setting.css";
import { useEffect } from "react";

function ThemeBox() {
  const colors = [
    { id: 1, label: "Dark Gray", code: "#383737" },
    { id: 2, label: "Pink", code: "#FFCCCC" },
  ];

  const setDarkGrayTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "dg");
    localStorage.setItem("selectedTheme", "dg");
  }

  const setPinkTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "pink");
    localStorage.setItem("selectedTheme", "pink");
  }

  const handleClick = (color) => {
    if (color.code === "#383737") {
      setDarkGrayTheme();
    } else if (color.code === "#FFCCCC") {
      setPinkTheme();
    }
  };

  useEffect(() => {
    const selectedTheme = localStorage.getItem("selectedTheme");
    if (selectedTheme === "dg") {
      setDarkGrayTheme();
    } else if (selectedTheme === "pink") {
      setPinkTheme();
    }
  }, []);

  return (
    <Box className="profileSettingBox">
      <Box ml={"5%"}>
        <h2>Theme</h2>
      </Box>
      <hr />
      {colors.map((color) => (
        <Box key={color.id} ml={"7%"} display={"flex"} alignItems={"center"}>
          <Box
            sx={{
              width: "20px",
              height: "20px",
              bgcolor: color.code,
              marginRight: "15px",
              cursor: "pointer",
            }}
            onClick={() => handleClick(color)}
          />
          <h2>{color.label}</h2>
        </Box>
      ))}
    </Box>
  );
}

export default ThemeBox;
