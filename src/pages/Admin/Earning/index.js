import React from "react";
import Classes from "./Classes";
import { Navigate, Route, Routes } from "react-router-dom";
import RouterTab from "../../../components/RouterTab";
import PageNotFound from "../../PageNotFound";
import Details from "./Details";
import {
  AppointmentIcon,
  ClassesIcon,
  CourseIcon,
} from "../../../assets/icons/TabIcons";

const linkedTabs = [
  {
    label: "Classes",
    href: "classes",
    icon: <ClassesIcon />,
    matchparent: true,
  },
  {
    label: "Course",
    href: "course",
    icon: <CourseIcon />,
    matchparent: true,
  },
  {
    label: "Appointments",
    href: "appointments",
    icon: <AppointmentIcon />,
    matchparent: true,
  },
];

export default function MyClasses() {
  return (
    <Routes>
      <Route path="/" element={<RouterTab tabs={linkedTabs} />}>
        <Route path="classes" element={<Classes />} />
        <Route path="classes/:id" element={<Details />} />
        <Route path="course" element={<Classes />} />
        <Route path="course/:id" element={<Details />} />
        <Route path="appointments" element={<Classes />} />
        <Route path="appointments/:id" element={<Details />} />
        <Route path="/" element={<Navigate to="/earning/classes" />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
