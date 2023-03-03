import { Box } from "@mui/material";
import React from "react";

import CustomTab from "../../../components/common/CustomTab";
import CurrentAppointment from "./CurrentAppointment";
import LastPageIcon from "@mui/icons-material/LastPage";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import PastAppointment from "./PastAppointment";
import NewAppointment from "./NewAppointment";

const tabs = [
  {
    label: "Current Appointment",
    Component: <CurrentAppointment />,
    icon: <LiveTvIcon />,
  },
  {
    label: "Past Appointments",
    Component: <PastAppointment />,
    icon: <LastPageIcon />,
  },
  {
    label: "New Appointments",
    Component: <NewAppointment />,
    icon: <LastPageIcon />,
  },
];

const TeacherAppointments = () => {
  return (
    <Box>
      <CustomTab tabs={tabs} />
    </Box>
  );
};

export default TeacherAppointments;
