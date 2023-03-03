import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// import StudentAccount from "../components/Account/Student";
import StudentDashboard from "../components/Dashboard/Student";
// import StudentProfile from "../components/Profile/Student";
import StudentAccount from "../pages/Students/Account";
import PageNotFound from "../pages/PageNotFound";
import StudentProfile from "../pages/Students/Profile";
import JoinUpcommingClass from "../pages/Students/Trending/JoinUpcommingClass";

// Routes present in sidebar
const Trending = React.lazy(() => import("../pages/Students/Trending"));
const JoinClass = React.lazy(() =>
  import("../pages/Students/Trending/JoinClass")
);
const Appointments = React.lazy(() => import("../pages/Students/Appointments"));
const Myclasses = React.lazy(() => import("../pages/Students/MyClasses"));
const PastClassDetail = React.lazy(() =>
  import("../pages/Students/MyClasses/PastClassDetail")
);
const Certificate = React.lazy(() => import("../pages/Students/Certificate"));
const Suggestion = React.lazy(() => import("../pages/Students/Suggestion"));
const Library = React.lazy(() => import("../pages/Students/Library"));
const LibraryDetail = React.lazy(() =>
  import("../pages/Students/Library/LibraryDetail")
);
const TeacherCalendar = React.lazy(() =>
  import("../pages/Students/Appointments/TeacherCalendar")
);
const ViewRecording = React.lazy(() =>
  import("../pages/Students/Appointments/ViewRecording")
);
const Forum = React.lazy(() => import("../pages/Students/Forum"));

const StudentRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<PageNotFound />} />

      <Route element={<Trending />} path="/trending" />
      <Route element={<Navigate to={"/trending"} />} path="/" />
      <Route element={<JoinClass />} path="/trending/class/:id" />
      <Route element={<JoinUpcommingClass />} path="/trending/UpcommingClass/:id" />

      <Route element={<Appointments />} path="/appointments" />
      <Route
        element={<TeacherCalendar />}
        path="/appointments/teachercalendar/:id"
      />
      <Route
        element={<ViewRecording />}
        path="/appointments/viewrecording/:id"
      />
      <Route element={<Suggestion />} path="/suggestion" />
      <Route element={<Certificate />} path="/certificate" />
      <Route element={<Library />} path="/library" />
      <Route element={<LibraryDetail />} path="/library/:id" />
      <Route element={<Forum />} path="/forum" />
      <Route element={<Myclasses />} path="/myclasses" />
      <Route element={<PastClassDetail />} path="/myclasses/pastclass/:id" />
      {/* <Route element={<StudentProfile />} path="/profile"/>
      <Route element={<StudentAccount/>} path="/account"/>
      <Route element={<StudentDashboard />} path="/dashboard"/> */}
      <Route element={<StudentProfile />} path="/profile" />
      <Route element={<StudentAccount />} path="/account" />
      
      
    </Routes> 
  );
};

export default StudentRoutes;
