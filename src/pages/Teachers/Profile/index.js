import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ProfileCard from "./ProfileCard";
import SettingsCard from "./SettingsCard";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: "1rem",
  },
  card: {
    width: "300px",
  },
});

const TeacherProfile = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item md={4} width={"100%"}>
          <Card>
            <ProfileCard />
          </Card>
        </Grid>
        <Grid item md={7} width={"100%"}>
          <Card>
            <SettingsCard />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default TeacherProfile;
