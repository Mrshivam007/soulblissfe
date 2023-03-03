import { Box, Dialog, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import VideocamIcon from "@mui/icons-material/Videocam";
import MicIcon from "@mui/icons-material/Mic";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import CustomButton from "../../../components/common/CustomButton";
import SearchIcon from "../../../assets/icons/Search.svg";
import FeedbackForm from "../Feedback";

const fontColor = "#8DA0D8";
const secondaryColor = "#9D78BD";
const IconSize = "2.5rem";
const Payment = ({ handlePaymentClose }) => {
  const [openFeedback, setOpenFeedback] = useState(false);
  const buyNowHandler = () => {
    setOpenFeedback(true);
  };

  const handleFeedbackClose = () => {
    setOpenFeedback(false);
  };
  return (
    <>
      <Box
        sx={{
          background:
            "linear-gradient(180deg, #9D78BD 0%, rgba(141, 160, 216, 0.6) 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 3,
          width: "100%",
          height: "auto",
          padding: "20px",
          minHeight: { xs: "120vh", lg: "100vh" },
        }}
        color={"#fff"}
      >
        <Typography
          sx={{
            marginTop: {
              md: 0,
            },
            textAlign: "center",
            fontWeight: 'bold',
          }}
          variant="h4"
        >
          Find A Plan That's Right For You
        </Typography>
        <Typography variant="h6" maxWidth={"24rem"} textAlign="center">
          Cancel anytime. Same day full refund. Change your therapist anytime.
          No questions asked.
        </Typography>
        <Box
          sx={{
            disply: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "#fff",
            color: "#000",
            boxShadow: "0px 1px 10px #91C3F4",
            borderRadius: "20px",
            padding: 3,
            textAlign: "center",
          }}
        >
          <img src={SearchIcon} alt="find" height={40} draggable={false} />
          <Typography variant="h5" color={fontColor} fontWeight="bold">
            Payment for per class
          </Typography>
          <Typography variant="h6" sx={{fontWeight: ''}}>1 Session</Typography>
          <Grid container justifyContent={"center"}>
            <Grid item xs>
              <VideocamIcon
                sx={{
                  color: fontColor,
                  fontSize: IconSize,
                }}
              />
            </Grid>
            <Grid item xs>
              <MicIcon
                sx={{
                  color: secondaryColor,
                  fontSize: IconSize,
                }}
              />
            </Grid>
            <Grid item xs>
              <QuestionAnswerIcon
                sx={{
                  color: fontColor,
                  fontSize: IconSize,
                }}
              />
            </Grid>
          </Grid>
          <Typography variant="body1" mt={1} gutterBottom>
            ( 1 week of chat access )
          </Typography>
          <Typography variant="h6" color={fontColor} gutterBottom>
            {" "}
            What to Expect ?{" "}
          </Typography>
          <Typography variant="body1" maxWidth={400}>
            Vent out, discuss your issues & create a plan with your talk
            therapist
          </Typography>
          <Typography variant="h6" color={fontColor}>
            INR 999
          </Typography>
          <Typography variant="body1">( Price per session INR 999 )</Typography>
          <CustomButton
            type="submit"
            variant="contained"
            sx={{ mt: 2, color: "#fff", fontSize: "18px" }}
            onClick={buyNowHandler}
          >
            Buy Now
          </CustomButton>
        </Box>
      </Box>
      <Dialog open={openFeedback} onClose={handleFeedbackClose} fullScreen>
        <FeedbackForm handlePaymentClose={handlePaymentClose} />
      </Dialog>
    </>
  );
};

export default Payment;
