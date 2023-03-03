// import { Box, Grid, Typography } from "@mui/material";
// import React, { useState } from "react";
// import CourseAboutCard from "../../../components/CourseAboutCard";
// import VideoComment from "../../../components/VideoComment";
// import { PlayCircleIcon } from "../../../assets/icons/CourseIcons";
// // const commentData = [
// //   {
// //     user: "user 1",
// //     avatar: "",
// //     commentedAt: new Date().toLocaleString,
// //     content:
// //       "Akash is the Founder of Super-Conscious Tribe which provides healing, coaching, and spiritual guidance service. With a strong background in Energy Healing like Reiki, Pranic, and Angel Coaching ",
// //     replies: [
// //       {
// //         user: "user 2",
// //         avatar: "",
// //         commentedAt: new Date().toLocaleString,
// //         content:
// //           "Akash is the Founder of Super-Conscious Tribe which provides healing, coaching, and spiritual guidance service. With a strong background in Energy Healing like Reiki, Pranic, and Angel Coaching ",
// //         replies: [
// //           {
// //             user: "user 31",
// //             avatar: "",
// //             commentedAt: new Date().toLocaleString,
// //             content:
// //               "Akash is the Founder of Super-Conscious Tribe which provides healing, coaching, and spiritual guidance service. With a strong background in Energy Healing like Reiki, Pranic, and Angel Coaching ",
// //             replies: [],
// //           },
// //         ],
// //       },

// //       {
// //         user: "user 3",
// //         avatar: "",
// //         commentedAt: new Date().toLocaleString,
// //         content:
// //           "Akash is the Founder of Super-Conscious Tribe which provides healing, coaching, and spiritual guidance service. With a strong background in Energy Healing like Reiki, Pranic, and Angel Coaching ",
// //         replies: [],
// //       },
// //     ],
// //   },

// //   {
// //     user: "user no replies",
// //     avatar: "",
// //     commentedAt: new Date().toLocaleString,
// //     content:
// //       "Akash is the Founder of Super-Conscious Tribe which provides healing, coaching, and spiritual guidance service. With a strong background in Energy Healing like Reiki, Pranic, and Angel Coaching ",
// //     replies: [],
// //   },
// // ];
// const courseData = {
//   title: "Ohm's law",
//   imgLink: "https://picsum.photos/200",
//   details: {
//     duration: "90",
//     price: "500",
//     available_slot: {
//       date: "15 Nov",
//       day: "Tue",
//       time: "10:00am - 11:30am",
//     },
//   },
//   aboutImg: "https://picsum.photos/400",
//   about:
//     "Ohm's law states that the current through a conductor between two points is directly proportional to the voltage across the two points",

//   teacher: {
//     title: "Akash Singh",
//     aboutImg: "https://picsum.photos/300",
//     about:
//       "Akash is the Founder of Super-Conscious Tribe which provides healing, coaching, and spiritual guidance service. With a strong background in Energy Healing like Reiki, Pranic, and Angel Coaching ",
//   },
// };
// const videoSource =
//   "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4";

// const ViewRecording = () => {
//   const [videoPlaying, setVideoPlaying] = useState(videoSource);

//   return (
//     <Box
//       mt={11}
//       maxWidth={"100%"}
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         gap: 2,
//         pr: {
//           md: 3,
//           xs: 2,
//         },
//         pl: {
//           md: 0,
//           xs: 2,
//         },
//       }}
//     >
//       <Typography variant="h5" fontWeight={"bold"} gutterBottom>
//         {courseData.title}
//       </Typography>
//       <Box
//         sx={{
//           display: "flex",
//           borderRadius: 1,
//           overflow: "hidden",
//           width: '75%',
//         }}
//       >
//         <video
//           src={videoPlaying}
//           width="100%"
//           controls
//           style={{
//             aspectRatio: "16 / 9",
//           }}
//           // autoplay="true"
//         />
//       </Box>
     
//       {/* <Box>
//         <VideoComment commentData={commentData} />
//       </Box> */}
//       <Grid container mt={0} spacing={4}>
//         <Grid item xs={12} sm paddingBottom={4}>
//           <CourseAboutCard
//             title={courseData.title}
//             about={courseData.about}
//             aboutImg={courseData.aboutImg}
//           />
//         </Grid>
//         <Grid item xs={12} sm>
//           <CourseAboutCard {...courseData.teacher} type="user" />
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default ViewRecording;

import React from "react";
import {
  alpha,
  Box,
  Button,
  Card,
  Dialog,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useState } from "react";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import AlarmOnOutlinedIcon from "@mui/icons-material/AlarmOnOutlined";
import InsertInvitationOutlinedIcon from "@mui/icons-material/InsertInvitationOutlined";
import EditIcon from "@mui/icons-material/Edit";
import { PlayCircleIcon } from "../../../assets/icons/CourseIcons";
import CourseAboutCard from "../../../components/CourseAboutCard";
// import JoinModal from "./JoinModal";
import Payment from "../Payment";

const courseData = {
  title: "Ohm's law",
  imgLink: "https://picsum.photos/200",
  details: {
    duration: "90",
    price: "500",
    available_slot: {
      date: "15 Nov",
      day: "Tue",
      time: "10:00am - 11:30am",
    },
  },
  aboutImg: "https://picsum.photos/400",
  about:
    "Ohm's law states that the current through a conductor between two points is directly proportional to the voltage across the two points",

  teacher: {
    title: "Akash Singh",
    aboutImg: "https://picsum.photos/300",
    about:
      "Akash is the Founder of Super-Conscious Tribe which provides healing, coaching, and spiritual guidance service. With a strong background in Energy Healing like Reiki, Pranic, and Angel Coaching ",
  },
};

const containerStyle = {
  padding: "2rem",
  background: "linear-gradient(180deg, #9D78BD 0%, #8DA0D8 100%)",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  gap: 2.5,
  justifyContent: "center",
  boxShadow: "-1px 1px 8px rgba(0, 0, 0, 0.15)",
};

const itemStyle = {
  background: "#ffffff",
  width: "100%",
  padding: 1,
  paddingLeft: 2,
  borderRadius: "10px",
  gap: 2,
  alignItems: "center",
};
const centerIt = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const iconStyle = {
  color: "#9D78BD",
  fontSize: "1.4rem",
};
export const PRIMARY_COLOR = "#E8ECF7";
export const SECONDARY_COLOR = "#9D78BD";

// const CourseDetailCard = ({ details, handleOpen, handlePaymentOpen }) => {
//   return (
//     <Card sx={containerStyle}>
//       <Grid container sx={itemStyle}>
//         <Grid item sx={centerIt}>
//           <AlarmOnOutlinedIcon sx={iconStyle} />
//         </Grid>
//         <Grid item>
//           <Typography variant="body1" sx={{ lineHeight: "2" }}>
//             <b>{"Duration "}</b>
//             {details.duration} Minutes
//           </Typography>
//         </Grid>
//       </Grid>
//       <Grid container sx={itemStyle}>
//         <Grid item sx={centerIt}>
//           <SellOutlinedIcon sx={iconStyle} />
//         </Grid>
//         <Grid item>
//           <Typography variant="body1" sx={{ lineHeight: "2" }}>
//             <b>{"Price "}</b>
//             {details.price} Rupees
//           </Typography>
//         </Grid>
//       </Grid>
//       <Grid
//         container
//         sx={{
//           background: "#ffffff",
//           width: "100%",
//           padding: 1,
//           paddingLeft: 2,
//           borderRadius: "10px",
//           gap: 2,
//           alignItems: "center",
//           "&:hover": {
//             background: alpha("#ffffff", 0.9),
//           },
//           " &:focus-within": {
//             outline: `1px solid ${SECONDARY_COLOR}`,
//           },
//           transition: "background",
//         }}
//         component="button"
//         onClick={handleOpen}
//         style={{
//           border: "none",
//           boxShadow:
//             "-2px 2px 10px rgba(0, 0, 0, 0.15), 2px -2px 15px rgba(0, 0, 0, 0.25)",
//           cursor: "pointer",
//         }}
//       >
//         <Grid item sx={centerIt}>
//           <InsertInvitationOutlinedIcon sx={iconStyle} />
//         </Grid>
//         <Grid
//           item
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             gap: "2px",
//           }}
//         >
//           <Typography
//             variant="body1"
//             fontWeight={"bold"}
//             sx={{
//               border: "none",
//               background: "none",
//               padding: 0,
//             }}
//           >
//             Available Slots
//           </Typography>
//           <EditIcon
//             color="primary"
//             sx={{
//               height: "18px",
//               width: "18px",
//             }}
//           />
//         </Grid>
//         <Grid item>
//           <Typography style={{ lineHeight: "2" }}>
//             {details.available_slot.date} {"  "} {details.available_slot.day}
//             {"    "}
//             {details.available_slot.time}
//           </Typography>
//         </Grid>
//       </Grid>

//       <Button
//         sx={{
//           color: "#fff",
//           background: "hsl(225,49%,70%)",
//           padding: "8px ",
//           borderRadius: "5px",
//           marginTop: "2vh",
//           boxShadow:
//             "-2px 2px 10px rgba(0, 0, 0, 0.15), 2px -2px 15px rgba(0, 0, 0, 0.25)",
//           "&:hover": {
//             background: "hsl(225,49%,72%)",
//           },
//         }}
//         fullWidth
//         onClick={() => handlePaymentOpen()}
//       >
//         Join Now
//       </Button>
//     </Card>
//   );
// };

const ViewRecording = ({ pastClass = false }) => {
  const [open, setOpen] = useState(false);
  const [openPayment, setOpenPayment] = useState(false);
  const handlePaymentOpen = () => {
    setOpenPayment(true);
  };

  const handlePaymentClose = () => {
    setOpenPayment(false);
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <main>
      <Box
        sx={{
          marginLeft: "2vh",
          mt: 10,
          pr: 3,
          paddingLeft: {
            xs: 3,
            md: 0,
          },
        }}
      >
        <Typography variant="h5" fontWeight={"bold"} gutterBottom>
          {courseData.title}
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={pastClass ? 10 : 8} lg={8}>
            <Box
              minHeight={pastClass ? 350 : 336}
              sx={{
                width: "100%",
                position: "relative",
                borderRadius: "15px",
                backgroundImage: `url("https://picsum.photos/600/800")`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                marginLeft: "0vh",
                boxShadow: "-1px 1px 8px rgba(0, 0, 0, 0.15)",
              }}
              style={{
                height: "100%",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  cursor: "pointer",
                }}
              >
                <PlayCircleIcon />
              </Box>
            </Box>
          </Grid>
          {/* {!pastClass && (
            <Grid item xs={12} md={4} sx={{ marginLeft: "-2vh" }}>
              <CourseDetailCard
                details={courseData.details}
                handleOpen={handleOpen}
                handlePaymentOpen={handlePaymentOpen}
              />
            </Grid>
          )} */}
        </Grid>
        <Grid container mt={0} spacing={4}>
          <Grid item xs={12} sm>
            <CourseAboutCard
              title={courseData.title}
              about={courseData.about}
              aboutImg={courseData.aboutImg}
            />
          </Grid>
          <Grid item xs={12} sm>
            <CourseAboutCard {...courseData.teacher} type="user" />
          </Grid>
        </Grid>
      </Box>
      
      <Dialog open={openPayment} onClose={handlePaymentClose} fullScreen>
        <Payment handlePaymentClose={handlePaymentClose} />
      </Dialog>
    </main>
  );
};

export default ViewRecording;
