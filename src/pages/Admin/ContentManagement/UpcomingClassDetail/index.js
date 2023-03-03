import { Box } from "@mui/material";
import React from "react";
import UnderlinedTab from "../../../../components/UnderlinedTab";
import ClassDetails from "./ClassDetails";
import ClassMaterial from "./ClassMaterial";
import PaymentDetails from "./PaymentDetails";
import StudentDetails from "./StudentDetails";

const tabs = [
  {
    label: "Class Details",
    component: <ClassDetails />,
  },
  {
    label: "Student Details",
    component: <StudentDetails />,
  },
  {
    label: "Payment Details",
    component: <PaymentDetails />,
  },
  {
    label: "Class Materials",
    component: <ClassMaterial />,
  },
];
const UpcomingClassDetail = () => {
  return (
    <Box>
      <UnderlinedTab tabs={tabs} />
    </Box>
  );
};

export default UpcomingClassDetail;
