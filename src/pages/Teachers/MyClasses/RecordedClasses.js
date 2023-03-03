import { Box, Card, CardActionArea, Grid, Typography } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import RecordedClassDetail from "./UpcomingClassDetail/RecordedClassDetail";

export default function RecordedClasses() {
  const navigate = useNavigate();
  const upcomingClassesHandler = () => {
    navigate("add");
  };

  return (
    <>
      <Box>
        {/* <Typography variant="h5" mb={0.5}>
          Add CLass
        </Typography> */}
        <Card
          sx={{
            maxWidth: 250,
            height: 200,
            borderRadius: "2rem 2rem 0 0",
            marginLeft: "5vh",
            marginTop: "4vh",
          }}
        >
          <CardActionArea
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              width: "35ch",
            }}
            onClick={() => upcomingClassesHandler()}
          >
            <AddIcon color="primary" fontSize="large" />
          </CardActionArea>
        </Card>

        {/* <RecordedClassDetail /> */}
      </Box>
    </>
  );
}
