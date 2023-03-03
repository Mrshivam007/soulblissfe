import React from "react";
import { Box } from "@mui/material";
import TeacherDetails from "./TeacherDetails";
import UnderlinedTab from "../../../components/UnderlinedTab";
import StudentDetails from "./StudentDetails";

export default function Details() {
  const tabs = [
    {
      label: "Teacher Details",
      component: <TeacherDetails />,
    },
    {
      label: "Student Details",
      component: <StudentDetails />,
    },
  ];
  return (
    <Box sx={{ width: "100%" }}>
      <UnderlinedTab tabs={tabs} />
    </Box>
  );
}
