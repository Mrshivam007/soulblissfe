import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";
import {
  Checkbox,
  Divider,
  FormControlLabel,
  styled,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import SignupImg from "../../assets/images/signup.svg";
import googleLogo from "../../assets/images/google_icon.svg";
import { CheckIcon, UnCheckedIcon } from "../../assets/icons/checkIcon";
import CustomButton from "../../components/common/CustomButton";

const StyledInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    borderRadius: 10,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fffff" : "#2b2b2b",
    // border: "4px solid #D9D9D9",
    fontSize: 16,
    width: "100%",
    // padding: "12px 24px",
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
  fullName: yup.string().min(2, "Too Short!").required("Full name is Required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
  phoneNumber: yup
    .string()
    .min(8, "Phone number is not valid")
    .required("Phone number is required"),
  terms: yup
    .bool()
    .oneOf([true], "Terms and Conditions must be accepted")
    .required("Terms and Conditions must be accepted"),
});

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      fullName: "",
      confirmPassword: "",
      phoneNumber: "",
      terms: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const errorMargin = (field) => ({
    mb:
      formik.touched[field] && Boolean(formik.errors[field]) ? "7px" : "28.7px",
  });
  return (
    <Grid
      container
      component="main"
      sx={{
        height: "100vh",
      }}
    >
      <Grid
        item
        sm={6}
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
        <img
          src={SignupImg}
          alt="signup"
          style={{ width: "100%" }}
          draggable={false}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            px: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            component="h1"
            variant="h4"
            sx={{
              fontWeight: "700",
            }}
          >
            Get Started now !
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={formik.handleSubmit}
            sx={{ mt: 4 }}
          >
            <StyledInput
              id="email"
              name="email"
              label="Email"
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
              sx={errorMargin("email")}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <StyledInput
              id="fullName"
              name="fullName"
              label="Full Name"
              fullWidth
              value={formik.values.fullName}
              onChange={formik.handleChange}
              sx={errorMargin("fullName")}
              error={formik.touched.fullName && Boolean(formik.errors.fullName)}
              helperText={formik.touched.fullName && formik.errors.fullName}
            />
            <StyledInput
              id="new-password"
              name="password"
              label="Password"
              type="password"
              autoComplete="new-password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              fullWidth
              sx={errorMargin("password")}
            />
            <StyledInput
              id="confirm-new-password"
              name="confirmPassword"
              label="Confirm Password"
              autoComplete="new-password"
              fullWidth
              type="password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              error={
                formik.touched.confirmPassword &&
                Boolean(formik.errors.confirmPassword)
              }
              helperText={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
              sx={errorMargin("confirmPassword")}
            />
            <StyledInput
              label="Phone Number"
              id="phoneNumber"
              name="phoneNumber"
              fullWidth
              type="text"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              error={
                formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
              }
              helperText={
                formik.touched.phoneNumber && formik.errors.phoneNumber
              }
              sx={errorMargin("phoneNumber")}
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={formik.values.terms}
                  sx={{
                    paddingBlock: 0,
                    "&.Mui-checked": {
                      color: "#91C3F4",
                    },
                  }}
                  icon={<UnCheckedIcon />}
                  checkedIcon={<CheckIcon />}
                />
              }
              name="terms"
              id="terms"
              onChange={formik.handleChange}
              label={
                <Typography variant="body2" sx={{ padding: 0 }}>
                  {"I agree to the website "}
                  <Link to="" style={{ color: "#9D78BD" }}>
                    Privay Policy & Terms and Conditions
                  </Link>
                </Typography>
              }
            />
            <CustomButton
              type="submit"
              fullWidth
              variant="contained"
              disabled={Boolean(formik.errors.terms) || formik.dirty === false}
              sx={{ mt: 3, mb: 2, color: "#D9D9D9", fontSize: "18px" }}
            >
              Sign Up
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
              type="button"
              fullWidth
              sx={{
                mt: 2,
                mb: 2,
                color: "#9D78BD",
                border: "1px solid #9D78BD",
                textTransform: "capitalize",
                position: "relative",
                borderRadius: "10px",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "grid",
                  gridTemplateColumns: "1fr 2fr 1fr",
                  alignItems: "center",
                  placeItems: "center",
                }}
              >
                <img
                  src={googleLogo}
                  alt="googlelogo"
                  style={{
                    width: "20px",
                  }}
                />
                <span style={{ fontSize: "18px", whiteSpace: "nowrap" }}>
                  Signup with Google
                </span>
              </Box>
            </Button>
          </Box>
          <Typography
            sx={{
              typography: { sm: "body1", xs: "body2", md: "h6" },
              display: "flex",
              justifyContent: "center",
            }}
          >
            Already have an account?&nbsp;
            <Link to="/" style={{ color: "#9D78BD", textDecoration: "none" }}>
              Sign In
            </Link>
            &nbsp;here
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Signup;
