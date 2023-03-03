import { Box } from "@mui/material";
import React from "react";
import CustomTab from "../../../components/common/CustomTab";
import CourseCarousel from "../../../components/CourseCarousel";
import UpcomingClasses from "./UncommingClasses";
import PastClasses from "./PastClasses";
import LastPageIcon from "@mui/icons-material/LastPage";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import { AppointmentIcon } from "../../../assets/icons/TabIcons";

const tabs = [
  {
    label: "Upcoming Classes",
    Component: <UpcomingClasses />,
    icon: <LastPageIcon />,
  },
  {
    label: "Appointments",
    Component: <UpcomingClasses />,
    icon: <AppointmentIcon />,
  },
  {
    label: "Past classes",
    Component: <PastClasses />,
    icon: <FirstPageIcon />,
  },
];

export default function MyClasses() {
  return (
    <Box sx={{ mt: 10 }}>
      <Box sx={{ mt: 2 }}>
        <CourseCarousel />
        <CustomTab tabs={tabs} />
      </Box>
    </Box>
  );
}
