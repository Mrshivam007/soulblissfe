import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "calc(100vh - 88px)",
      }}
    >
      <Box>
        <Typography variant="h2" color="primary">
          404
        </Typography>
        <Typography variant="h3" color={"primary"}>
          Page Not Found
        </Typography>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Button
            variant="outlined"
            color={"primary"}
            sx={{
              mt: 2,
            }}
          >
            Go to Home
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default PageNotFound;
