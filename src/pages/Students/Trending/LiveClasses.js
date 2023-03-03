import { Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import CustomCard from "../../../components/common/CustomCard";

export const trendingCardData = [
  {
    img: "Ohm's Law",
    head: "What IS Ohm's Law?",
    attendance: "(50+ Attendance)",
    date: "Nov 10 2022",
    time: "10: 00 am-1:00 pm",
    taughtBy: "Akash Singh",
    btntext: "Attend Now",
  },
  {
    img: "Ohm's Law",
    head: "What IS Ohm's Law?",
    attendance: "(50+ Attendance)",
    date: "Nov 10 2022",
    time: "10: 00 am-1:00 pm",
    taughtBy: "Akash Singh",
    btntext: "Attend Now",
  },
  {
    img: "Ohm's Law",
    head: "What IS Ohm's Law?",
    attendance: "(50+ Attendance)",
    date: "Nov 10 2022",
    time: "10: 00 am-1:00 pm",
    taughtBy: "Akash Singh",
    btntext: "Attend Now",
  },
  {
    img: "Ohm's Law",
    head: "What IS Ohm's Law?",
    attendance: "(50+ Attendance)",
    date: "Nov 10 2022",
    time: "10: 00 am-1:00 pm",
    taughtBy: "Akash Singh",
    btntext: "Attend Now",
  },
  {
    img: "Ohm's Law",
    head: "What IS Ohm's Law?",
    attendance: "(50+ Attendance)",
    date: "Nov 10 2022",
    time: "10: 00 am-1:00 pm",
    taughtBy: "Akash Singh",
    btntext: "Attend Now",
  },
  {
    img: "Ohm's Law",
    head: "What IS Ohm's Law?",
    attendance: "(50+ Attendance)",
    date: "Nov 10 2022",
    time: "10: 00 am-1:00 pm",
    taughtBy: "Akash Singh",
    btntext: "Attend Now",
  },
  {
    img: "Ohm's Law",
    head: "What IS Ohm's Law?",
    attendance: "(50+ Attendance)",
    date: "Nov 10 2022",
    time: "10: 00 am-1:00 pm",
    taughtBy: "Akash Singh",
    btntext: "Attend Now",
  },
  {
    img: "Ohm's Law",
    head: "What IS Ohm's Law?",
    attendance: "(50+ Attendance)",
    date: "Nov 10 2022",
    time: "10: 00 am-1:00 pm",
    taughtBy: "Akash Singh",
    btntext: "Attend Now",
  },
];
export default function LiveClasses() {
  let navigate = useNavigate();
  const clickHandler = () => {
    navigate("/trending/class/1");
  };
  return (
    <>
      <Grid container rowSpacing={4} columnSpacing={4}>
        {trendingCardData.map((trend, index) => {
          return (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
              <Box sx={{marginRight: '2%'}}>
              <CustomCard onClick={clickHandler} {...trend} status="live" />
            </Box>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
