import React, { useState, useContext } from "react";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CustomInput from "./CustomInput";
// import { UserMain } from "./User";

const SettingsCard = () => {
  // const { user, setUser } = useContext(UserMain);

  // const handleUser = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setUser({ ...user, [event.target.name]: event.target.value });
  // };

  //FORM STATE
  const [edit, update] = useState({
    // Initially EDIT, so it's disabled at first
    disabled: true,
    isEdit: true, //isEdit refers to the Button
    showPassword: false,
  });

  //TAB STATE
  const [tabValue, setTabValue] = React.useState("one");

  // const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
  //   setTabValue(newValue);
  // };

  // BUTTON EDIT -> UPDATE + SUBMIT INFO
  const changeButton = (event: any ) => {
    event.preventDefault();
    edit.showPassword = false;
    edit.disabled = !edit.disabled;
    edit.isEdit = !edit.isEdit;
    update({ ...edit });
    console.log("user: ");
  };

  // GENDER SELECT
  const genderSelect = [
    {
      value: "male",
      label: "Male",
    },
    {
      value: "female",
      label: "Female",
    },
  ];

  // TOGGLE PASSWORD VISIBILITY
  // const handlePassword = () => {
  //   edit.showPassword = !edit.showPassword;
  //   setUser({ ...user });
  // };

  // --------------------------------------------

  return (
    <>
      <Card variant="outlined" sx={{ height: "100%", width: "78%" }}>
        {/* TABS */}
        <br></br>
        {/* <Tabs
          value={tabValue}
          onChange={handleTabChange}
          textColor="secondary"
          indicatorColor="secondary"
        >
          <Tab value="one" label="Account" />
          <Tab value="two" label="Tab 2" />
          <Tab value="three" label="Tab 3" />
        </Tabs>
        <Divider></Divider> */}

        {/* MAIN CONTENT CONTAINER */}
        <form>
          <CardContent
            sx={{
              p: 3,
              maxHeight: { md: "40vh" },
              textAlign: { xs: "center", md: "start" },
            }}
          >
            {/* FIELDS */}
            <FormControl fullWidth>
              <Grid
                container
                direction={{ xs: "column", md: "row" }}
                columnSpacing={5}
                rowSpacing={3}
              >
                {/* ROW 1: FIRST NAME */}
                <Grid component="form" item xs={6}>
                  <CustomInput
                    name="firstName"
                    value="Shiivm Soni"
                    title="First Name"
                    // onChange={handleUser}
                    dis={edit.disabled}
                  ></CustomInput>
                </Grid>

                {/* ROW 1: LAST NAME */}
                <Grid component="form" item xs={6}>
                  <CustomInput
                    name="lastName"
                    value="soni"
                    // onChange={handleUser}
                    title="Last Name"
                    dis={edit.disabled}
                  ></CustomInput>
                </Grid>

                {/* ROW 2: MIDDLE NAME */}
                <Grid item xs={6}>
                  <CustomInput
                    name="midName"
                    value="  "
                    // onChange={handleUser}
                    title="Middle Name"
                    dis={edit.disabled}
                  ></CustomInput>
                </Grid>

                {/* ROW 2: GENDER */}
                <Grid item xs={6}>
                  <CustomInput
                    select
                    name="gender"
                    value="male"
                    // onChange={handleUser}
                    title="Gender"
                    dis={edit.disabled}
                    //MAP THRU OPTIONS
                    content={genderSelect.map((option) => (
                      <MenuItem value={option.value}>{option.label}</MenuItem>
                    ))}
                  ></CustomInput>
                </Grid>

                {/* ROW 3: PHONE */}
                <Grid item xs={6}>
                  <CustomInput
                    name="phone"
                    value="494949949"
                    // onChange={handleUser}
                    title="Phone Number"
                    dis={edit.disabled}
                    //DIALING CODE (63+)
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">63+</InputAdornment>
                      ),
                    }}
                  ></CustomInput>
                </Grid>

                {/* ROW 3: EMAIL */}
                <Grid item xs={6}>
                  <CustomInput
                    name="email"
                    value="123@gmil.vom"
                    // onChange={handleUser}
                    title="Email Address"
                    dis={edit.disabled}
                  ></CustomInput>
                </Grid>

                {/* ROW 4: PASSWORD */}
                <Grid item xs={6}>
                  <CustomInput
                    name="pass"
                    value="pass"
                    // onChange={handleUser}
                    title="Password"
                    dis={edit.disabled}
                    type={edit.showPassword ? "text" : "password"}
                    // PASSWORD ICON
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            // onClick={handlePassword}
                            edge="end"
                            disabled={edit.disabled}
                          >
                            {edit.showPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  ></CustomInput>
                </Grid>

                {/* BUTTON */}
                <Grid
                  container
                  justifyContent={{ xs: "center", md: "flex-end" }}
                  item
                  xs={6}
                >
                  <Button
                    sx={{ p: "1rem 2rem", my: 2, height: "3rem" }}
                    component="button"
                    size="large"
                    variant="contained"
                    color="secondary"
                    onClick={changeButton}
                  >
                    {edit.isEdit === false ? "UPDATE" : "EDIT"}
                  </Button>
                </Grid>
              </Grid>
            </FormControl>
          </CardContent>
        </form>
      </Card>
    </>
  );
};

export default SettingsCard;
