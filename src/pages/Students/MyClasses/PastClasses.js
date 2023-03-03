import { Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import CustomCard from "../../../components/common/CustomCard3";
export const trendingCardData = [
  {
    img: "Ohm's Law",
    head: "What IS Ohm's Law?",
    attendance: "(50+ Attendance)",
    date: "Nov 10 2022",
    time: "10: 00 am-1:00 pm",
    taughtBy: "Join Now",
    btntext: "Study Material",
  },
  {
    img: "Ohm's Law",
    head: "What IS Ohm's Law?",
    attendance: "(50+ Attendance)",
    date: "Nov 10 2022",
    time: "10: 00 am-1:00 pm",
    taughtBy: "Join Now",
    btntext: "Study Material",
  },
  {
    img: "Ohm's Law",
    head: "What IS Ohm's Law?",
    attendance: "(50+ Attendance)",
    date: "Nov 10 2022",
    time: "10: 00 am-1:00 pm",
    taughtBy: "Join Now",
    btntext: "Study Material",
  },
  {
    img: "Ohm's Law",
    head: "What IS Ohm's Law?",
    attendance: "(50+ Attendance)",
    date: "Nov 10 2022",
    time: "10: 00 am-1:00 pm",
    taughtBy: "Join Now",
    btntext: "Study Material",
  },
  {
    img: "Ohm's Law",
    head: "What IS Ohm's Law?",
    attendance: "(50+ Attendance)",
    date: "Nov 10 2022",
    time: "10: 00 am-1:00 pm",
    taughtBy: "Join Now",
    btntext: "Study Material",
  },
  {
    img: "Ohm's Law",
    head: "What IS Ohm's Law?",
    attendance: "(50+ Attendance)",
    date: "Nov 10 2022",
    time: "10: 00 am-1:00 pm",
    taughtBy: "Join Now",
    btntext: "Study Material",
  },
  {
    img: "Ohm's Law",
    head: "What IS Ohm's Law?",
    attendance: "(50+ Attendance)",
    date: "Nov 10 2022",
    time: "10: 00 am-1:00 pm",
    taughtBy: "Join Now",
    btntext: "Study Material",
  },
  {
    img: "Ohm's Law",
    head: "What IS Ohm's Law?",
    attendance: "(50+ Attendance)",
    date: "Nov 10 2022",
    time: "10: 00 am-1:00 pm",
    taughtBy: "Join Now",
    btntext: "Study Material",
  },
];
export default function PastClasses() {
  let navigate = useNavigate();
  const clickHandler = () => {
    navigate("/myclasses/pastclass/1");
  };
  return (
    <>
      <Grid container rowSpacing={4} columnSpacing={4}>
        {trendingCardData.map((trend, index) => {
          return (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
              <CustomCard onClick={clickHandler} {...trend} status="free" />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
