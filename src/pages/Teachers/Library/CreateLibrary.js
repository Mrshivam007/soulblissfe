import React from "react";
import VideocamIcon from "@mui/icons-material/Videocam";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import InfoIcon from "@mui/icons-material/Info";
import CustomTab from "../../../components/common/CustomTab";
import CourseDetail from "./CourseDetail";
import Materials from "./Materials";
import VideoUpload from "./VideoUpload";
import { Box } from "@mui/material";

const tabs = [
  {
    label: "Course Detail",
    Component: <CourseDetail />,
    icon: <InfoIcon />,
  },
  {
    label: "Video Upload",
    Component: <VideoUpload />,
    icon: <VideocamIcon />,
  },
  {
    label: "Materials",
    Component: <Materials />,
    icon: <MenuBookIcon />,
  },
];
const AddLibrary = () => {
  return (
    <Box>
      <CustomTab tabs={tabs} />
    </Box>
  );
};

export default AddLibrary;
