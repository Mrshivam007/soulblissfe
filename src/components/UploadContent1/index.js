import { Box, Button, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import React from "react";

export const UploadContent = ({
  buttonLabel = "Upload",
  uploadLabel = "Image",
}) => {
  return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "0.5rem",
          border: "4px dashed #8DA0D8",
          paddingY: 2,
          // width: "32ch",
          gap: 2,
          backgroundColor: "#E8ECF7",
        }}
      >
        <CloudUploadIcon color="primary" fontSize="large" />
        <Typography variant="h6" textAlign={"center"} fontWeight="bold">
          Upload a {uploadLabel} of your class
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component="label"
          sx={{ textTransform: "capitalize" }}
        >
          {buttonLabel}
          <input type="file" hidden />
        </Button>
      </Box>
  );
};
