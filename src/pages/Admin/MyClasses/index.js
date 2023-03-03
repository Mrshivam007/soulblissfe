import React from "react";

import LiveClasses from "./LiveClasses";
import UpcomingClasses from "./UpcomingClasses";
import LastPageIcon from "@mui/icons-material/LastPage";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import PreviousClasses from "./PreviousClasses";
import { Route, Routes } from "react-router-dom";
import UpcomingClassDetail from "./UpcomingClassDetail";
import PreviousClassDetail from "./PreviousClassDetail";
import FolderIcon from "@mui/icons-material/Folder";
import PageNotFound from "../../PageNotFound";
import RouterTab from "../../../components/RouterTab";
import RecordedClasses from "./RecordedClasses";
import RecordedClassDetail from "./UpcomingClassDetail/RecordedClassDetail";
import AddRecordedClass from "./AddRecordedClass";
import Library from "./Library";

const tabs = [
  {
    label: "Live Classes",
    href: "",
    Component: <LiveClasses />,
    icon: <LiveTvIcon />,
  },
  {
    label: "Upcoming Classes",
    href: "upcoming",
    matchparent: true,
    Component: <UpcomingClasses />,
    icon: <LastPageIcon />,
  },
  {
    label: "Previous Classes",
    href: "previous",
    matchparent: true,
    Component: <PreviousClasses />,
    icon: <FirstPageIcon />,
  },
  {
    label: "Classes Recording",
    href: "recorded",
    matchparent: true,
    Component: <RecordedClasses />,
    icon: <FolderIcon />,
  },
  {
    label: "Library",
    href: "library",
    matchparent: true,
    Component: <Library />,
    icon: <FolderIcon />,
  },
];

const TeacherMyClasses = () => {
  // return <Box >
  //   <CustomTab tabs={tabs} />
  // </Box>;
  return (
    <Routes>
      <Route path="/" element={<RouterTab tabs={tabs} />}>
        <Route index element={<LiveClasses />} />
        <Route path="upcoming" element={<UpcomingClasses />} />
        <Route path="recorded" element={<RecordedClassDetail />} />
        <Route path="upcoming/add" element={<UpcomingClassDetail />} />
        <Route path="recorded/add" element={<AddRecordedClass />} />
        <Route path="previous" element={<PreviousClasses />} />
        <Route path="library" element={<Library />} />
        {/* <Route path="library/add" element={<Library />} /> */}
        <Route path="previous" element={<PreviousClasses />} />
        <Route path="previous/:id" element={<PreviousClassDetail />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default TeacherMyClasses;
