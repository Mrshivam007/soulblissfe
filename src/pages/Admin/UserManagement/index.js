import { Box } from "@mui/material";
import React from "react";
import Students from "./Students";
import Teachers from "./Teachers";
import PeopleIcon from "@mui/icons-material/People";
import CustomTab from "../../../components/common/CustomTab";
const tabs = [
  {
    label: "Teachers",
    Component: <Teachers />,
    icon: <PeopleIcon />,
  },
  {
    label: "Students",
    Component: <Students />,
    icon: <PeopleIcon />,
  },
];
const UserManagement = () => {
  return (
    <Box>
      <CustomTab tabs={tabs} />
    </Box>
  );
};

export default UserManagement;
