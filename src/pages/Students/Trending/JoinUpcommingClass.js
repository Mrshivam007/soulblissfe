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
import JoinModal from "./JoinModal";
import Payment from "../Payment";
import DialogActions from "@mui/material/DialogActions";
import CloseIcon from "@mui/icons-material/Close";
import EventIcon from "@mui/icons-material/Event";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";

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

const CourseDetailCard = ({ details, handleOpen, handlePaymentOpen }) => {
  const [open, setOpen] = React.useState(false);
  const [continueOpen, setContinueOpen] = React.useState(false);
  const [DoneOpen, setDoneOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const ChoosehandleClickOpen = () => {
    setContinueOpen(true);
  };
  const DonehandleClickOpen = () => {
    setDoneOpen(true);
  };

  const ChoosehandleClose = () => {
    setContinueOpen(false);
  };
  const DonehandleClose = () => {
    setDoneOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Card sx={containerStyle}>
        <Grid container sx={itemStyle}>
          <Grid item sx={centerIt}>
            <AlarmOnOutlinedIcon sx={iconStyle} />
          </Grid>
          <Grid item>
            <Typography variant="body1" sx={{ lineHeight: "2" }}>
              <b>{"Duration "}</b>
              {details.duration} Minutes
            </Typography>
          </Grid>
        </Grid>
        <Grid container sx={itemStyle}>
          <Grid item sx={centerIt}>
            <SellOutlinedIcon sx={iconStyle} />
          </Grid>
          <Grid item>
            <Typography variant="body1" sx={{ lineHeight: "2" }}>
              <b>{"Price "}</b>
              {details.price} Rupees
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            background: "#ffffff",
            width: "100%",
            padding: 1,
            paddingLeft: 2,
            borderRadius: "10px",
            gap: 2,
            alignItems: "center",
            "&:hover": {
              background: alpha("#ffffff", 0.9),
            },
            " &:focus-within": {
              outline: `1px solid ${SECONDARY_COLOR}`,
            },
            transition: "background",
          }}
          component="button"
          onClick={handleOpen}
          style={{
            border: "none",
            boxShadow:
              "-2px 2px 10px rgba(0, 0, 0, 0.15), 2px -2px 15px rgba(0, 0, 0, 0.25)",
            cursor: "pointer",
          }}
        >
          <Grid item sx={centerIt}>
            <InsertInvitationOutlinedIcon sx={iconStyle} />
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "2px",
            }}
          >
            <Typography
              variant="body1"
              fontWeight={"bold"}
              sx={{
                border: "none",
                background: "none",
                padding: 0,
              }}
            >
              Available Slots
            </Typography>
            <EditIcon
              color="primary"
              sx={{
                height: "18px",
                width: "18px",
              }}
            />
          </Grid>
          <Grid item>
            <Typography style={{ lineHeight: "2" }}>
              {details.available_slot.date} {"  "} {details.available_slot.day}
              {"    "}
              {details.available_slot.time}
            </Typography>
          </Grid>
        </Grid>

        <Button
          sx={{
            color: "#fff",
            background: "hsl(225,49%,70%)",
            padding: "8px ",
            borderRadius: "5px",
            marginTop: "2vh",
            boxShadow:
              "-2px 2px 10px rgba(0, 0, 0, 0.15), 2px -2px 15px rgba(0, 0, 0, 0.25)",
            "&:hover": {
              background: "hsl(225,49%,72%)",
            },
          }}
          fullWidth
          onClick={() => handleClickOpen()}
        >
          Join Now
        </Button>
      </Card>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            margin: "16px",
            borderRadius: "16px",
          },
        }}
      >
        <div style={{ backgroundColor: "#9D78BD" }}>
          <Box
            width={"50ch"}
            maxWidth={"90%"}
            height={"18ch"}
            margin={"2vh"}
            backgroundColor={"#9D78BD"}
          >
            {/* <DialogTitle>Add Class</DialogTitle> */}
            <Typography
              variant="h6"
              fontWeight={"bold"}
              textAlign={"center"}
              color={"white"}
              padding={"2px 6px 2px 6px"}
            >
              Registration Details
              <span onClick={handleClose} style={{ float: "right" }}>
                <CloseIcon />
              </span>
            </Typography>
            <Typography
              variant="h6"
              fontWeight={"bold"}
              marginY={2}
              backgroundColor={"#D5E2FA"}
              height={"8vh"}
              textAlign={"center"}
              paddingTop={"2vh"}
              width={"75%"}
              marginLeft={"12%"}
              borderRadius={"10px"}
            >
              Select Your Preferred Slot
            </Typography>
          </Box>
          <Box height={"26ch"} padding={"2px 10px 2px 10px"}>
            <Typography
              color={"white"}
              borderBottom={"inset"}
              fontWeight={"600"}
              padding={"2px 2px 4px 2px"}
            >
              <div>
                <span style={{ paddingRight: "4%" }}>
                  <EventIcon />
                </span>
                <span style={{ paddingRight: "12%" }}>16 Nov</span>
                <span style={{ paddingRight: "4%" }}>
                  <AlarmOnIcon />
                </span>
                <span style={{ paddingRight: "4%" }}>
                  WED: 10:30am - 11:30am
                </span>
                <span>
                  <CheckCircleIcon />
                </span>
              </div>
            </Typography>
            <Typography
              color={"white"}
              borderBottom={"inset"}
              fontWeight={"600"}
              padding={"24px 2px 2px 2px"}
            >
              <span style={{ paddingRight: "4%" }}>
                <EventIcon />
              </span>
              <span style={{ paddingRight: "12%" }}>16 Nov</span>
              <span style={{ paddingRight: "4%" }}>
                <AlarmOnIcon />
              </span>
              <span style={{ paddingRight: "4%" }}>WED: 10:30am - 11:30am</span>
              <span>
                <CheckCircleIcon />
              </span>
            </Typography>
            <Typography
              color={"white"}
              borderBottom={"inset"}
              fontWeight={"600"}
              padding={"24px 2px 2px 2px"}
            >
              <span style={{ paddingRight: "4%" }}>
                <EventIcon />
              </span>
              <span style={{ paddingRight: "12%" }}>16 Nov</span>
              <span style={{ paddingRight: "4%" }}>
                <AlarmOnIcon />
              </span>
              <span style={{ paddingRight: "4%" }}>WED: 10:30am - 11:30am</span>
              <span>
                <CheckCircleIcon />
              </span>
            </Typography>
          </Box>
          <Typography
            variant="h6"
            fontWeight={"bold"}
            marginY={2}
            backgroundColor={"#D5E2FA"}
            height={"8vh"}
            textAlign={"center"}
            paddingTop={"2vh"}
            width={"80%"}
            marginLeft={"10%"}
            borderRadius={"10px"}
            onClick={() => {
              ChoosehandleClickOpen();
              handleClose();
            }}
          >
            Choose & Continue
          </Typography>
        </div>
      </Dialog>
      <Dialog
        open={continueOpen}
        onClose={ChoosehandleClose}
        PaperProps={{
          style: {
            margin: "16px",
          },
        }}
        // fullScreen={fullScreen}
        // sx={{ backgroundColor: "#9D78BD" }}
      >
        <div style={{ backgroundColor: "#9D78BD" }}>
          <Box
            width={"50ch"}
            maxWidth={"90%"}
            height={"18ch"}
            margin={"2vh"}
            backgroundColor={"#9D78BD"}
          >
            {/* <DialogTitle>Add Class</DialogTitle> */}
            <Typography
              variant="h6"
              fontWeight={"bold"}
              textAlign={"center"}
              color={"white"}
              padding={"2px 6px 2px 6px"}
            >
              Congratulations !
              <span onClick={ChoosehandleClose} style={{ float: "right" }}>
                <CloseIcon />
              </span>
            </Typography>
            <Typography
              variant="h6"
              fontWeight={"bold"}
              marginY={2}
              backgroundColor={"#D5E2FA"}
              height={"10vh"}
              textAlign={"center"}
              paddingTop={"1vh"}
              width={"75%"}
              marginLeft={"12%"}
              borderRadius={"10px"}
            >
              You have successfully registered
            </Typography>
          </Box>
          <Box height={"24ch"} padding={"1vh"} marginTop={"-6vh"}>
            <Typography
              color={"white"}
              fontWeight={"600"}
              paddingBottom={"4vh"}
              paddingTop={"4vh"}
            >
              Your class timings
            </Typography>
            <Typography
              color={"white"}
              borderBottom={"inset"}
              fontWeight={"600"}
              padding={"2px 2px 4px 2px"}
            >
              <span style={{ paddingRight: "4%" }}>
                <EventIcon />
              </span>
              <span style={{ paddingRight: "12%" }}>16 Nov</span>
              <span style={{ paddingRight: "4%" }}>
                <AlarmOnIcon />
              </span>
              <span style={{ paddingRight: "4%" }}>WED: 10:30am - 11:30am</span>
              <span>
                <CheckCircleIcon />
              </span>
            </Typography>
          </Box>
          <Typography
            variant="h6"
            fontWeight={"bold"}
            marginY={2}
            backgroundColor={"#D5E2FA"}
            height={"8vh"}
            textAlign={"center"}
            paddingTop={"2vh"}
            width={"80%"}
            marginLeft={"10%"}
            borderRadius={"10px"}
            onClick={() => {
              DonehandleClickOpen();
              ChoosehandleClose();
            }}
          >
            Done
          </Typography>
        </div>
      </Dialog>
      <Dialog
        open={DoneOpen}
        onClose={DonehandleClose}
        PaperProps={{
          style: {
            margin: "16px",
          },
        }}
      >
        <div style={{ backgroundColor: "#9D78BD" }}>
          <Box
            width={"50ch"}
            maxWidth={"90%"}
            height={"18ch"}
            margin={"2vh"}
            backgroundColor={"#9D78BD"}
          >
            {/* <DialogTitle>Add Class</DialogTitle> */}
            <Typography
              variant="h6"
              fontWeight={"bold"}
              textAlign={"center"}
              color={"white"}
              padding={"2px 6px 2px 6px"}
            >
              Recipt
              <span onClick={DonehandleClose} style={{ float: "right" }}>
                <CloseIcon />
              </span>
            </Typography>
            <Typography
              variant="h6"
              fontWeight={"bold"}
              marginY={2}
              // backgroundColor={"#D5E2FA"}
              color={"white"}
              height={"8vh"}
              textAlign={"center"}
              paddingTop={"2vh"}
              width={"80%"}
              marginLeft={"10%"}
              borderRadius={"10px"}
            >
              Please find your receipt below <br />
              It will be share on your email also
            </Typography>
          </Box>
          <Typography
            variant="h6"
            fontWeight={"bold"}
            marginBottom={"20%"}
            backgroundColor={"#D5E2FA"}
            height={"20vh"}
            padding={"16px"}
            // textAlign={"center"}
            paddingTop={"2vh"}
            width={"66%"}
            marginLeft={"16%"}
            borderRadius={"10px"}
            onClick={() => DonehandleClickOpen()}
          >
            <Typography fontWeight={"bold"}>
              <span style={{ paddingRight: "10%" }}>
                <EventIcon />
              </span>
              <span style={{ paddingRight: "20%" }}>Date</span>
              <span>16 November</span>
            </Typography>
            <br />
            <Typography fontWeight={"bold"}>
              <span style={{ paddingRight: "10%" }}>
                <EventIcon />
              </span>
              <span style={{ paddingRight: "20%" }}>Time</span>
              <span>WED: 10:30am </span>
              <br />
              <span style={{ marginLeft: "18vh" }}> to 11:30am</span>
            </Typography>
          </Typography>
        </div>
      </Dialog>
    </>
  );
};

const JoinUpcommingClass = ({ pastClass = false }) => {
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
              minHeight={pastClass ? 350 : 300}
              sx={{
                width: "94%",
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
          {!pastClass && (
            <Grid item xs={12} md={4} sx={{ marginLeft: "-2vh" }}>
              <CourseDetailCard
                details={courseData.details}
                handleOpen={handleOpen}
                handlePaymentOpen={handlePaymentOpen}
              />
            </Grid>
          )}
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
      <JoinModal open={open} handleClose={handleClose} />
      <Dialog open={openPayment} onClose={handlePaymentClose} fullScreen>
        <Payment handlePaymentClose={handlePaymentClose} />
      </Dialog>
    </main>
  );
};

export default JoinUpcommingClass;
