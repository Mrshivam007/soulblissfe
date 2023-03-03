import { Box } from "@mui/material";
import React from "react";
import CustomTab from "../../../components/common/CustomTab";
import AppointmentHistory from "./AppointmentHistory";
import BookNewAppointment from "./BookNewAppointment";
import CurrentAppointment from "./CurrentAppointment";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { AppointmentIcon } from "../../../assets/icons/TabIcons";
const tabs = [
  {
    label: "Current Appointment",
    Component: <CurrentAppointment />,
    icon: <AppointmentIcon />,
  },
  {
    label: "Book New Appointment",
    Component: <BookNewAppointment />,
    icon: <ImportContactsIcon />,
  },
  {
    label: "Appointment History",
    Component: <AppointmentHistory />,
    icon: <AssignmentIcon />,
  },
];

export default function Appointments() {
  return (
    <>
      <Box sx={{ mt: 10 }}>
        <CustomTab tabs={tabs} />
      </Box>
    </>
  );
}
