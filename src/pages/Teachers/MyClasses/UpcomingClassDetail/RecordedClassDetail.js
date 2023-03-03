import { Box, Button, Card, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import RecordedClasses from "../RecordedClasses";
import AddRecordedClass from "../AddRecordedClass";

// import attendance_icon from "../../../assets/images/attendance_icon.svg";
export const PreviousClassesData = [
  {
    id: "1",
    title: "ohms law",
    attendance: "(50+ Attendance)",
    date: "Nov 10 2022",
    time: "10:00am-1:00pm",
    imgUrl: "https://picsum.photos/200",
  },
  {
    id: "2",
    title: "ohms law",
    attendance: "(50+ Attendance)",
    date: "Nov 10 2022",
    time: "10:00am-1:00pm",
    imgUrl: "https://picsum.photos/300",
  },
  {
    id: "3",
    title: "ohms law",
    attendance: "(50+ Attendance)",
    date: "Nov 10 2022",
    time: "10:00am-1:00pm",
    imgUrl: "https://picsum.photos/200/300",
  },
  {
    id: "4",
    title: "ohms law",
    attendance: "(50+ Attendance)",
    date: "Nov 10 2022",
    time: "10:00am-1:00pm",
    imgUrl: "https://picsum.photos/400",
  },
  {
    id: "5",
    title: "ohms law",
    attendance: "(50+ Attendance)",
    date: "Nov 10 2022",
    time: "10:00am-1:00pm",
    imgUrl: "https://picsum.photos/400/400",
  },
];

const PreviousClassCard = ({ classDetail }) => {
  const navigate = useNavigate();

  const { id, title, attendance, date, time, imgUrl } = classDetail;
  return (
    <Card
      sx={{
        borderRadius: "15px 15px 0px 0px",
        boxShadow: "0px 2px 5px 1px rgba(0, 0, 0, 0.25)",
      }}
    >
      <CardMedia
        component="img"
        alt={title}
        sx={{
          height: { xs: 100, md: 120 },
        }}
        image={imgUrl}
      />
      <Box sx={{ pt: 1, paddingX: 2, pb: 2 }}>
        <Typography variant="h5" mb={0.5}>
          {title}
        </Typography>
        <Grid container spacing={1}>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* <img src={attendance_icon} alt="" width={30} /> */}
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: "12px" }}
            >
              {attendance}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Box>
                <AccessTimeFilledIcon />
              </Box>
              <Box
                sx={{
                  fontSize: "12px",
                }}
                color="text.secondary"
              >
                <div>{time}</div>
                <div>{date}</div>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Button
          variant="contained"
          sx={{
            mt: 1,
            textTransform: "capitalize",
            fontSize: "12px",
            padding: "3px 8px",
          }}
          onClick={() => navigate(`${id}`)}
        >
          View Details
        </Button>
      </Box>
    </Card>
  );
};

export default function RecordedClassDetail() {
  return (
    <>
    <Grid container rowSpacing={2} columnSpacing={4}>
      <AddRecordedClass />
      {PreviousClassesData.map((data, index) => {
        return (
          <Grid key={index} item xs={12} sm={6} md={4} lg={4} xl={3}>
            <PreviousClassCard classDetail={data} />
          </Grid>
          
          
        );
      })}
    </Grid>
    </>
  );
}
