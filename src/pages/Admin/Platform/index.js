import { Box, Typography } from "@mui/material";
import React from "react";
import { UploadContent } from "../../../components/UploadContent";
import BannerTable from "./BannerTable";

const Platform = () => {
  return (
    <Box
      sx={{
        paddingLeft: {
          xs: 2,
          md: 0,
        },
        paddingRight: {
          xs: 2,
        },
      }}
    >
      <UploadContent buttonLabel={"Uplaod Images"} uploadLabel="banner" />
      <Typography variant="h6" fontWeight={"bold"} marginY={2}>
        Your Files
      </Typography>
      <BannerTable />
    </Box>
  );
};

export default Platform;
