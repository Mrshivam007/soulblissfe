import { Grid } from "@mui/material";
import React from "react";
import CustomCard from "../../../components/common/CustomCard";
import AddUpcomingClasses from "./AddUpcommingClasses";

export const UpcommingClasses = [
  {
    img: "Ohm's Law",
    head: "What IS Ohm's Law?",
    attendance: "(50+ Attendance)",
    date: "Nov 10 2022",
    time: "10: 00 am-1:00 pm",
    taughtBy: "Akash Singh",
    btntext: "Go Live",
  },
  {
    img: "Ohm's Law",
    head: "What IS Ohm's Law?",
    attendance: "(50+ Attendance)",
    date: "Nov 10 2022",
    time: "10: 00 am-1:00 pm",
    taughtBy: "Akash Singh",
    btntext: "Go Live",
  },
  {
    img: "Ohm's Law",
    head: "What IS Ohm's Law?",
    attendance: "(50+ Attendance)",
    date: "Nov 10 2022",
    time: "10: 00 am-1:00 pm",
    taughtBy: "Akash Singh",
    btntext: "Go Live",
  },
  {
    img: "Ohm's Law",
    head: "What IS Ohm's Law?",
    attendance: "(50+ Attendance)",
    date: "Nov 10 2022",
    time: "10: 00 am-1:00 pm",
    taughtBy: "Akash Singh",
    btntext: "Go Live",
  },
  {
    img: "Ohm's Law",
    head: "What IS Ohm's Law?",
    attendance: "(50+ Attendance)",
    date: "Nov 10 2022",
    time: "10: 00 am-1:00 pm",
    taughtBy: "Akash Singh",
    btntext: "Go Live",
  },
  {
    img: "Ohm's Law",
    head: "What IS Ohm's Law?",
    attendance: "(50+ Attendance)",
    date: "Nov 10 2022",
    time: "10: 00 am-1:00 pm",
    taughtBy: "Akash Singh",
    btntext: "Go Live",
  },
  {
    img: "Ohm's Law",
    head: "What IS Ohm's Law?",
    attendance: "(50+ Attendance)",
    date: "Nov 10 2022",
    time: "10: 00 am-1:00 pm",
    taughtBy: "Akash Singh",
    btntext: "Go Live",
  },
  {
    img: "Ohm's Law",
    head: "What IS Ohm's Law?",
    attendance: "(50+ Attendance)",
    date: "Nov 10 2022",
    time: "10: 00 am-1:00 pm",
    taughtBy: "Akash Singh",
    btntext: "Go Live",
  },
];

export default function UpcomingClasses() {
  return (
    <>
      <Grid container rowSpacing={4} columnSpacing={4}>
        <AddUpcomingClasses />
        {UpcommingClasses.map((trend, index) => {
          return (
            <Grid key={index} item xs={12} sm={6} md={4} lg={4} xl={3}>
              <CustomCard {...trend} status="live" />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
