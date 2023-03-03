import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";

//  Admin Routes
const Earning = React.lazy(() => import("../pages/Admin/Earning"));
const ExpenseManagement = React.lazy(() => import("../pages/Admin/ExpenseManagement"));
const Subscribers = React.lazy(() => import("../pages/Admin/Subscribers"));
const Platform = React.lazy(() => import("../pages/Admin/Platform"));
const ContentManagement = React.lazy(() =>
  import("../pages/Admin/ContentManagement")
);
const UserManagement = React.lazy(() =>
  import("../pages/Admin/UserManagement")
);

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<PageNotFound />} />
      <Route element={<Earning />} path="/earning/*" />
      <Route element={<Subscribers />} path="/subscribers" />
      <Route element={<Platform />} path="/platform" />
      <Route element={<UserManagement />} path="/users" />
      <Route element={<ContentManagement />} path="/contents/*" />
      <Route element={<ExpenseManagement />} path="/expenses" />
      <Route path="/" element={<Navigate to={"/earning"} />} />
    </Routes>
  );
};

export default AdminRoutes;
