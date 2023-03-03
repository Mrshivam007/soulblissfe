import { Box } from "@mui/material";
import React from "react";
import CustomTab from "../../../components/common/CustomTab";
import Classes from "./Classes";
import Course from "./Course";
import Appointments from "./Appointments";
import {
  AppointmentIcon,
  ClassesIcon,
  CourseIcon,
} from "../../../assets/icons/TabIcons";

const tabs = [
  {
    label: "Classes",
    Component: <Classes />,
    icon: <ClassesIcon />,
  },
  {
    label: "Course",
    Component: <Course />,
    icon: <CourseIcon />,
  },
  {
    label: "Appointments",
    Component: <Appointments />,
    icon: <AppointmentIcon />,
  },
];

export default function MyClasses() {
  return (
    <Box>
      <CustomTab tabs={tabs} />
    </Box>
  );
}
