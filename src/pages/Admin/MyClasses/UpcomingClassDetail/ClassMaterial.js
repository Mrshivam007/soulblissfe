import { Typography, Box } from "@mui/material";
import React from "react";
import FileTable from "../../../../components/FileTable";
import PrevClass from "../../../../components/PrevClassList";
import { UploadContent } from "../../../../components/UploadContent";

export default function ClassMaterial() {
  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            // md: "repeat(3, 1fr)",
          },
          paddingRight: { xs: 3, lg: 3 },
          gap: 1,
          pb: 3,
        }}
      >
        <Typography variant="h6" fontWeight={"bold"} marginY={2}>
          Upload file
          <UploadContent />
        </Typography>
        <Typography variant="h6" fontWeight={"bold"} marginY={2}>
          Select class
          <PrevClass />
        </Typography>
      </Box>

      <Typography variant="h6" fontWeight={"bold"} marginY={2}>
        Your Files
      </Typography>
      <FileTable />
    </>
  );
}
