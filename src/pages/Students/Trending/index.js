import { Box } from "@mui/material";
import React from "react";
import CustomTab from "../../../components/common/CustomTab";
import CourseCarousel from "../../../components/CourseCarousel";
import LiveClasses from "./LiveClasses";
import UpcomingClasses from "./UpcomingClasses";
import LastPageIcon from '@mui/icons-material/LastPage';
import LiveTvIcon from '@mui/icons-material/LiveTv';

const tabs = [
  {
    label: "Live Classes",
    Component: <LiveClasses />,
    icon: <LiveTvIcon />
  },
  {
    label: "Upcoming Classes",
    Component: <UpcomingClasses />,
    icon: <LastPageIcon />

  },
];

export default function Trending() {
  return (
    <>
      <Box sx={{ mt: 10 }}>
        <Box sx={{ mt: 2 }}>
          <CourseCarousel/>
          <CustomTab tabs={tabs} />
        </Box>
      </Box>
    </>
  );
}
