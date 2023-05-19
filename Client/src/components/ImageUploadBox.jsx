import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

function ImageUploadBox({ onImageChange }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [squareSize, setSquareSize] = useState(0);

  useEffect(() => {
    const calculateSquareSize = () => {
      const longerSide = Math.max(window.innerWidth, window.innerHeight);
      const squareSize = Math.min(280, longerSide * 0.4);
      setSquareSize(squareSize);
    };

    calculateSquareSize();

    window.addEventListener("resize", calculateSquareSize);

    return () => {
      window.removeEventListener("resize", calculateSquareSize);
    };
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
    console.log(selectedImage)
    onImageChange(file); // Call the onImageChange callback with the selected image
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    onImageChange(null); // Call the onImageChange callback with null to indicate image removal
  };

  return (
    <Box position="relative">
      <input
        accept="image/*"
        id="image-upload"
        type="file"
        style={{ display: "none" }}
        onChange={handleImageUpload}
      />
      <label htmlFor="image-upload">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "solid 1px #c4c4c4",
            color: "var(--colorp1)",
            height: `${squareSize}px`,
            width: `${squareSize}px`,
            maxHeight: "280px",
            maxWidth: "280px",
            borderRadius: "5px",
            cursor: "pointer",
            overflow: "hidden",
            "&:hover": {
              borderColor: "black",
            },
          }}
        >
          {selectedImage ? (
            <img
              src={selectedImage}
              alt="Selected"
              width="100%"
              height="100%"
              style={{ objectFit: "cover" }}
            />
          ) : (
            <AddPhotoAlternateIcon />
          )}
        </Box>
      </label>

      {selectedImage && (
        <Box
          position="absolute"
          bottom={0}
          width="100%"
          height={"35px"}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            borderRadius: "0 0 5px 5px",
            border: "none",
          }}
          onClick={handleRemoveImage}
        >
          Remove Image
        </Box>
      )}
    </Box>
  );
}

export default ImageUploadBox;
