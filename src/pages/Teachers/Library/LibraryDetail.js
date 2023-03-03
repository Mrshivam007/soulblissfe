import { Box } from "@mui/material";
import React from "react";
import CustomTab from "../../../components/common/CustomTab";
import Downloadable from "./Downloadable";
import Recording from "./Recording";
import GetAppIcon from "@mui/icons-material/GetApp";
import MicIcon from "@mui/icons-material/Mic";

const tabs = [
  {
    label: "Recording",
    Component: <Recording />,
    icon: <MicIcon />,
  },
  {
    label: "Downloadable",
    Component: <Downloadable />,
    icon: <GetAppIcon />,
  },
];

const LibraryDetail = () => {
  return (
    <Box component="section">
      <CustomTab tabs={tabs} />
    </Box>
  );
};

export default LibraryDetail;
