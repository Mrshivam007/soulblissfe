import { Grid, Box, Avatar, Typography, ButtonBase } from "@mui/material";
import React from "react";
const teacherData = {
  title: "Akash Singh",
  Img: "https://picsum.photos/300/300",
  about:
    "Akash is the Founder of Super-Conscious Tribe which provides healing, coaching, and spiritual guidance service. With a strong background in Energy Healing like Reiki, Pranic, and Angel Coaching. ",
};
export default function TeacherDetails() {
  return (
    <>
      <Grid container spacing={1} maxWidth="md">
        <Grid item xs={6} sm={4} md={2}>
          <Avatar
            src={teacherData.Img}
            sx={{
              width: "110px",
              height: "110px",
              margin: "0 auto",
            }}
          />
        </Grid>
        <Grid item xs={6} sm={8} md={2}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              paddingY: 2,
              alignItems: "center",
              height: "100%",
              gap: 2,
            }}
          >
            <Typography variant="h6">{teacherData.title}</Typography>
            <ButtonBase
              sx={{
                background: "#8DA0D8",
                borderRadius: "20px",
                color: "#fff",
                fontSize: "12px",
                padding: "0.5rem 1rem",
                boxShadow: "-1px 1px 8px rgba(0, 0, 0, 0.15)",
              }}
            >
              View Profile
            </ButtonBase>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={8}
          sx={{
            display: "flex",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              paddingTop: {
                xs: "10px",
                sm: 2,
              },
            }}
          >
            {teacherData.about}
          </Typography>
        </Grid>
      </Grid>
      <Box
        sx={{
          marginTop: {
            xs: "20px",
            sm: "20px",
            md: "30px",
            lg: "30px",
            xl: "30px",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: "18px",
              sm: "18px",
              md: "20px",
              lg: "20px",
              xl: "20px",
            },
            fontWeight: "Bold",
            color: "#9d78bd",
            marginBottom: "20px",
          }}
        >
          Teacher Report
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: "#F5F5F5",
            borderRadius: "10px",
          }}
        ></Box>
      </Box>
    </>
  );
}
