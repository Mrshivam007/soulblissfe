import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import TeacherDayAppointment from "../../../components/TeacherDayAppointment";

const TeacherCalendar = () => {
  return (
    <Box
      sx={{
        paddingInline: {
          xs: 2,
          md: 0,
        },
      }}
    >
      <Link
        to="/appointments"
        style={{
          textDecoration: "none",
        }}
        draggable="false"
      >
        <Button
          variant="outlined"
          color="secondary"
          sx={{
            mb: 2,
          }}
        >
          Back
        </Button>
      </Link>
      <TeacherDayAppointment />
    </Box>
  );
};

export default TeacherCalendar;
