import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import StudentAccount from "../components/Account/Student";
import StudentDashboard from "../components/Dashboard/Student";
import PageNotFound from "../pages/PageNotFound";
import TeacherAccount from "../pages/Teachers/Account";
import TeacherDashboard from "../pages/Teachers/Account";
import LibraryDetail from "../pages/Teachers/Library/LibraryDetail";
import TeacherProfile from "../pages/Teachers/Profile";

// Teacher Routes
const TeacherAppointments = React.lazy(() =>
  import("../pages/Teachers/Appointments")
);
const TeacherForum = React.lazy(() => import("../pages/Teachers/Forum"));
const TeacherLibrary = React.lazy(() => import("../pages/Teachers/Library"));
const TeacherMyClasses = React.lazy(() =>
  import("../pages/Teachers/MyClasses")
);
const EditLibrary = React.lazy(() =>
  import("../pages/Teachers/Library/EditLibrary")
);

const TeacherPayment = React.lazy(() => import("../pages/Teachers/Payment"));
const CreateLibrary = React.lazy(() =>
  import("../pages/Teachers/Library/CreateLibrary")
);

const TeacherRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<PageNotFound />} />
      <Route element={<TeacherMyClasses />} path="/myclasses/*" />
      <Route element={<Navigate to="/myclasses" />} path="/" />
      <Route element={<TeacherAppointments />} path="/appointments" />
      <Route element={<TeacherLibrary />} path="/library" />
      <Route element={<LibraryDetail />} path="/library/:id" />
      <Route element={<CreateLibrary />} path="/library/create" />
      <Route element={<EditLibrary />} path="/library/edit/:id" />
      <Route element={<TeacherForum />} path="/forum" />
      <Route element={<TeacherPayment />} path="/payment" />
      <Route element={<TeacherProfile />} path="/profile" />
      {/* <Route element={<StudentAccount />} path="/account" /> */}
      {/* <Route element={<StudentDashboard />} path="/dashboard" /> */}
      <Route element={<TeacherAccount />} path="/account" />
    </Routes>
  );
};

export default TeacherRoutes;
