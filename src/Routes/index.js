import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Grid, CircularProgress } from "@mui/material";
import Sidebar from "../components/Sidebar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import TeacherRoutes from "./TeacherRoutes";
import StudentRoutes from "./StudentRoutes";
import AdminRoutes from "./AdminRoutes";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../redux/authSlice";
import PageNotFound from "../pages/PageNotFound";

function Routers() {
  const { userType, token } = useSelector(selectCurrentUser);
  // console.log(userType, token);

  return (
    <>
      {token ? (
        <>
          <Router>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Sidebar>
                <Suspense
                  fallback={
                    <div
                      style={{
                        minWidth: "100%",
                        minHeight: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <CircularProgress color="primary" />
                    </div>
                  }
                >
                  <Grid
                    item
                    md={12}
                    xs={12}
                    sx={{
                      pl: { xs: 0, sm: 0, md: 3 },
                      mt: { xs: "76px", sm: "88px" },
                    }}
                  >
                    {userType === "admin" ? (
                      <AdminRoutes />
                    ) : userType === "teacher" ? (
                      <TeacherRoutes />
                    ) : userType === "student" ? (
                      <StudentRoutes />
                    ) : null}
                  </Grid>
                </Suspense>
              </Sidebar>
            </LocalizationProvider>
          </Router>
        </>
      ) : (
        <Router>
          <Routes>
            <Route path="*" element={<PageNotFound />} />
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      )}
    </>
  );
}
export default React.memo(Routers);
