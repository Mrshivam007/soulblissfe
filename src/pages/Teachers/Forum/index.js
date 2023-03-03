import React from "react";
import { Box } from "@mui/material";
import CustomTab from "../../../components/common/CustomTab";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import ClassesChat from "../../../components/ChatComponent";
import { AppointmentIcon } from "../../../assets/icons/TabIcons";

const Forum = () => {
  // const tabs = [
  //   // {
  //   //   label: "Classes",
  //   //   Component: <ClassesChat />,
  //   //   icon: <LiveTvIcon />,
  //   // },
  //   {
  //     label: "Course",
  //     Component: <ClassesChat />,
  //     icon: <ImportContactsIcon />,
  //   },
  //   // {
  //   //   label: "Appointments",
  //   //   Component: <ClassesChat />,
  //   //   icon: <AppointmentIcon />,
  //   // },
  // ];

  return (
    <Box component={"section"}>
      <Box sx={{ mt: 2 }}>
        {/* <CustomTab tabs={tabs} /> */}
        <ClassesChat />
      </Box>
    </Box>
  );
};

export default Forum;
