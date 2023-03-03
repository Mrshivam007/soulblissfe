import { Box, Card, CardActionArea, Typography, Button } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

export default function AddUpcomingClasses() {
  const navigate = useNavigate();
  const upcomingClassesHandler = () => {
    navigate("add");
  };

  return (
    <>
      {/* <Box ml={"2%"} width={"23%"}>
        <Card
          sx={{
            maxWidth: '100%',
            height: '88%',
            borderRadius: "2rem 2rem 0 0",
            marginLeft: "2%",
            marginTop: "4vh",
          }}
        >
          <Typography
            variant="h5"
            fontWeight={"bold"}
            textAlign={"center"}
            marginY={2}
          >
            Add Class
          </Typography>
          <CardActionArea
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "75%",
              width: "40ch",
            }}
            onClick={() => upcomingClassesHandler()}
          >
            <AddIcon color="primary" fontSize="large" />
          </CardActionArea>
        </Card>
      </Box> */}
      <Box mr={"4%"} sx={{ float: 'right'}}>
        <Button
          // className="commonbtn"
          variant="contained"
          size="small"
          sx={{
            fontSize: "10px",
            height: '40px',
            textTransform: "capitalize",
            boxShadow: "none",
          }}
          onClick={() => upcomingClassesHandler()}
        >
          <Typography>Add Class</Typography>
          <AddIcon color="white" />
        </Button>
      </Box>
    </>
  );
}
