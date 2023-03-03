import { Box, Typography } from "@mui/material";
import React from "react";
import FileTable from "../../../components/FileTable";
import { UploadContent } from "../../../components/UploadContent";

const Materials = ({ edit = false }) => {
  return (
    <Box>
      <UploadContent buttonLabel={"Upload Material"} />
      <Typography variant="h6" fontWeight={"bold"} marginY={2}>
        Your Files
      </Typography>
      <FileTable fileList={edit ? null : []} />
    </Box>
  );
};

export default Materials;
