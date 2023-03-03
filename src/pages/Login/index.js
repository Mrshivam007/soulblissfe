import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";
import { Button, Divider, styled, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import CustomButton from "../../components/common/CustomButton";
import google from "../../assets/images/google_icon.svg";
import login from "../../assets/images/login.svg";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../redux/authSlice";

const StyledInput = styled(TextField)(({ theme }) => ({
  // "label + &": {
  //   marginTop: theme.spacing(3),
  // },
  "& .MuiInputBase-input": {
    borderRadius: 10,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fffff" : "#2b2b2b",

    fontSize: 16,
    width: "100%",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),

    "&:focus": {
      borderColor: "#9D78BD",
    },
  },
}));

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const findRole = (role) => {
  const checkAdmin = new RegExp("admin", "i");
  const checkTeacher = new RegExp("teacher", "i");

  if (role.match(checkAdmin)) {
    return "admin";
  }
  if (role.match(checkTeacher)) {
    return "teacher";
  }
  return "student";
};

export default function LoginComponent() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(
        setCredentials({
          userType: findRole(values.email),
          token: true,
        })
      );
    },
  });
  const errorMargin = (field) => ({
    mb:
      formik.touched[field] && Boolean(formik.errors[field]) ? "7px" : "28.7px",
  });
  return (
    <>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Typography
              component="h1"
              variant="h4"
              sx={{
                fontWeight: "700",
                lineHeight: "48px",
              }}
            >
              Welcome Back !
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={formik.handleSubmit}
              sx={{
                width: "100%",
                maxWidth: 500,
                boxSizing: "border-box",
                padding: "20px",
                mt: 4,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <StyledInput
                sx={errorMargin("email")}
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <StyledInput
                id="password"
                name="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                fullWidth
                sx={errorMargin("password")}
              />

              <Box justifyContent="flex-end" display="flex" sx={{ mb: 1 }}>
                <Typography>
                  <Link
                    to={""}
                    style={{
                      color: "#000000",
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                  >
                    Forgot password?
                  </Link>
                </Typography>
              </Box>
              <CustomButton
                type="submit"
                fullWidth
                variant="contained"
                disabled={!(formik.isValid && formik.dirty)}
                sx={{
                  mt: 2,
                  mb: 2,
                  color: "#D9D9D9",
                  fontSize: "18px",
                }}
              >
                Login
              </CustomButton>
              <Divider
                sx={{
                  color: "#D9D9D9",
                  "&::before, &::after": {
                    borderColor: "#9D78BD",
                  },
                }}
              >
                Or
              </Divider>
              <Button
                type="submit"
                fullWidth
                sx={{
                  mt: 3,
                  mb: 2,
                  color: "#9D78BD",
                  border: "1px solid #9D78BD",
                  textTransform: "capitalize",
                  position: "relative",
                }}
              >
                <div>
                  <img
                    src={google}
                    alt=""
                    style={{
                      width: "20px",
                      position: "absolute",
                      left: "45px",
                      top: "12px",
                    }}
                  />
                </div>
                <div style={{ fontSize: "18px" }}>Login with Google</div>
              </Button>
              <Typography
                sx={{
                  typography: { sm: "body1", xs: "body2", md: "h6" },
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Don’t have an account?&nbsp;
                <Link
                  to="/signup"
                  style={{ color: "#9D78BD", textDecoration: "none" }}
                >
                  Sign Up
                </Link>
                &nbsp;here
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={6}
          md={6}
          sx={{
            placeContent: "center",
            backgroundColor: "#E6F2FF",
            backgroundSize: "contain",
            backgroundPosition: "center",
            display: {
              xs: "none",
              sm: "grid",
            },
          }}
        >
          <img src={login} alt="" style={{ width: "100%" }} draggable={false} />
        </Grid>
      </Grid>
    </>
  );
}
