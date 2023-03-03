import { Box } from "@mui/material";
import React from "react";
import UnderlinedTab from "../../../../components/UnderlinedTab";
import Downloadable from "../../../Students/Library/Downloadable";

const RecordedVideos = () => {
  return (
    <>
      <Downloadable />
    </>
  );
};

const Downloadables = () => {
  return (
    <>
      <Downloadable />
    </>
  );
};
const PreviousClassDetail = () => {
  const tabs = [
    {
      label: "Recorded Videos",
      component: <RecordedVideos />,
    },
    {
      label: "Downloadables",
      component: <Downloadables />,
    },
  ];

  return (
    <>
      <Box>
        <UnderlinedTab tabs={tabs} />
      </Box>
    </>
  );
};

export default PreviousClassDetail;
