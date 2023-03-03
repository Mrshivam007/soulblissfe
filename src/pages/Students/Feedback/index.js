import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import CustomButton from "../../../components/common/CustomButton";
import feedbackImg from "../../../assets/images/feedbackBanner.svg";
import CertificateModal from "./CertificateModal";

const FeedbackRemarks = [
  { score: 0, remark: "Not at all satisfied" },
  { score: 1, remark: "Not very satisfied" },
  { score: 10, remark: "Fully satisfied" },
];

const RATING_SCALE = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const CustomFeedbackRating = () => {
  return (
    <Box
      sx={{
        marginBlock: "1.2rem",
      }}
    >
      <RadioGroup row>
        {RATING_SCALE.map((curr) => (
          <FormControlLabel
            value={curr}
            sx={{
              margin: 0,
              color: "#928C8C",
            }}
            control={
              <Radio
                size="small"
                sx={{
                  padding: "4px",
                  color: "#D9D9D9",
                  "&.Mui-checked": {
                    color: "#9D78BD",
                  },
                }}
              />
            }
            label={curr}
            labelPlacement="bottom"
            key={curr}
          />
        ))}
      </RadioGroup>
    </Box>
  );
};

const FeedbackForm = ({ handlePaymentClose }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    handlePaymentClose();
  };
  return (
    <main>
      <Box
        sx={{
          background:
            "linear-gradient(180deg, #9D78BD 0%, rgba(141, 160, 216, 0.6) 100%)",
          display: "grid",
          placeContent: "center",
          height: "auto",
          padding: "20px",
          minHeight: { xs: "100vh", lg: "100vh" },
        }}
        // minHeight="100vh"
      >
        <Box
          sx={{
            background: "#ffffff",
            borderRadius: "20px",
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr",
              md: "1fr 1fr",
            },
          }}
        >
          <Box
            pt={"2rem"}
            pb="2rem"
            sx={{
              background: "#E7E0E0",
              boxSizing: "border-box",
              paddingInline: "2rem 1rem",
              borderRadius: { xs: "20px 20px 0 0", md: "20px" },
            }}
          >
            <Typography variant="h4" gutterBottom>
              Feedback Form
            </Typography>
            <Typography variant="h6" maxWidth={"25rem"}>
              You can submit your feedback here for the class that you have
              attend{" "}
            </Typography>
            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "block",
                },
              }}
            >
              <img
                src={feedbackImg}
                alt="feedbackImage"
                style={{
                  width: "100%",
                  maxWidth: "25rem",
                  marginBlock: "4rem",
                }}
                draggable={false}
              />
            </Box>
          </Box>
          <Box pt={"2rem"} paddingX="2rem">
            <Typography variant="h6" maxWidth={"25rem"} marginBottom={3}>
              How are you overall satisfied with our teaching?
            </Typography>
            <Box gap="1rem" display={"flex"} flexDirection="column">
              {FeedbackRemarks.map((curr) => (
                <Grid container alignItems={"center"} key={curr.score}>
                  <Grid item xs={2}>
                    <Typography variant="h6" color={"#928C8C"}>
                      {curr.score}
                    </Typography>
                  </Grid>
                  <Grid item xs={10}>
                    <Typography variant="body1">-{curr.remark}</Typography>
                  </Grid>
                </Grid>
              ))}
            </Box>

            <CustomFeedbackRating />

            <Typography variant="h6" gutterBottom>
              Please tell us the reason for this score
            </Typography>
            <TextField id="feedbackReason" multiline rows={3} fullWidth />
            <CustomButton
              fullWidth
              variant="contained"
              type="button"
              sx={{ mt: 3, mb: 2, color: "#D9D9D9", fontSize: "18px" }}
              onClick={handleOpen}
            >
              Submit
            </CustomButton>
          </Box>
        </Box>
        <CertificateModal open={open} handleClose={handleClose} />
      </Box>
    </main>
  );
};

export default FeedbackForm;
