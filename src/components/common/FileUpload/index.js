import React from "react";
import { Box, Typography } from "@mui/material";
import { StyledFileUpload } from "./style";
import download_icon from "../../../assets/images/download_icon.svg";

function FileUpload() {
  return (
    <StyledFileUpload>
      <Box
        sx={{
          width: "100%",
          padding: "32px 40px",
        }}
      >
        <Box
          sx={{ border: 1, padding: { xs: "20px 10px", sm: "20px 120px" } }}
          className="buttonPadding"
        >
          <div className="contentBind">
            <img src={download_icon} alt="" />
            <Typography
              variant="h5"
              sx={{
                my: 4,
                fontSize: "20px",
                fontWeight: 700,
                textAlign: { xs: "center", sm: "none" },
              }}
            >
              Upload a Material to get started
            </Typography>
            <input
              id="contained-button-file"
              type="file"
              style={{ display: "none" }}
            />
            <label htmlFor="contained-button-file">
              <span className="choose">Upload Videos</span>
            </label>
          </div>
        </Box>
      </Box>
    </StyledFileUpload>
  );
}
export default FileUpload;
