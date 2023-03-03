import { Box, Paper } from "@mui/material";
import React from "react";
import {
  Scheduler,
  DayView,
  Appointments,
  AppointmentTooltip,
} from "@devexpress/dx-react-scheduler-material-ui";
// import appointments from "./TodayAppointments";
import appointments from "./AppointmentsData/TodayAppointments";

// import { WeeklyCalendar } from "../../../components/common/CustomCalendar/";
export default function CurrentAppointment() {
  return (
    <Box mt={1}>
      {/* <WeeklyCalendar /> */}
      <Paper>
        <Scheduler data={appointments}>
          <DayView startDayHour={8} endDayHour={13} />
          <Appointments />
          <AppointmentTooltip />
        </Scheduler>
      </Paper>
    </Box>
  );
}
