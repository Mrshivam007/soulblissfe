import { Box, ButtonBase, Typography } from "@mui/material";
import React from "react";

const CourseAboutCard = ({ title, about, aboutImg, type = "course" }) => {
  return (
    <Box>
      <Typography variant="h6" fontWeight={"bold"}>
        {type === "user" ? "Teacher" : "About this course"}
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 3,
        }}
      >
        <Box py={2}>
          <img
            src={aboutImg}
            alt="bg"
            width="100px"
            height="80px"
            style={
              type === "user"
                ? {
                    width: "80px",
                    aspectRatio: "1",
                    borderRadius: "100%",
                    objectPosition: "center",
                    objectFit: "cover",
                  }
                : {
                    borderRadius: "15px",
                  }
            }
          />
        </Box>
        <Box
          py={2}
          sx={{
            display: "grid",
            gridTemplateRows: "1fr",
            gap: 1,
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6">{title}</Typography>
          {type === "user" && (
            <ButtonBase
              sx={{
                background: "hsl(225,80%,75%)",
                borderRadius: "20px",
                color: "#fff",
                padding: "0.5rem 1rem",
                boxShadow: "-1px 1px 8px rgba(0, 0, 0, 0.15)",
                transition: "background 150ms ease-in",
                "&:hover": {
                  background: "hsl(225,80%,70%)",
                },
              }}
            >
              View Profile
            </ButtonBase>
          )}
        </Box>
      </Box>
      <Typography variant="body1">{about}</Typography>
    </Box>
  );
};

export default CourseAboutCard;
