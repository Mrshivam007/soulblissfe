import { CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { format } from "date-fns";
import React from "react";
import CurrentAppointment from "../../pages/Students/Appointments/CurrentAppointment";
import { DailyCalendar } from "../common/CustomCalendar";

const TeacherDayAppointment = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: {
            xs: 2,
            sm: 3,
            md: 5,
          },
          boxShadow: "0px 1px 10px 0px rgba(0,0,0,0.1)",
          borderLeft: "10px solid #9d78bd",
        }}
      >
        <CardMedia
          component="img"
          image={"https://picsum.photos/300"}
          alt={"teacher name"}
          sx={{
            width: {
              xs: 120,
              md: 150,
            },
            bgcolor: "grey.200",
            border: "none",
          }}
          style={{
            aspectRatio: "1/1",
          }}
        ></CardMedia>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            fontWeight={"500"}
            component="h5"
            gutterBottom
            variant="h5"
          >
            {"teacher name"}
          </Typography>
          <Typography
            component="p"
            lineHeight={"17px"}
            color={"grey.600"}
            variant="body1"
            gutterBottom
          >
            {"teacher description"}
          </Typography>
        </Box>
      </Box>
      <Box pr={1} mt={2} mb={5}>
        <Typography fontWeight={"500"} variant="h5">
          {format(new Date(), "do MMMM yyyy")}
        </Typography>
        {/* <DailyCalendar /> */}
        <CurrentAppointment />
      </Box>
    </Box>
  );
};

export default TeacherDayAppointment;
