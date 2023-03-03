import {
  Box,
  Button,
  Checkbox,
  Divider,
  Grid,
  Modal,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import AlarmOnOutlinedIcon from "@mui/icons-material/AlarmOnOutlined";
import InsertInvitationOutlinedIcon from "@mui/icons-material/InsertInvitationOutlined";
import React, { useState } from "react";

const options = [
  {
    date: "16 Nov",
    time: "WED:10:30am - 11:10am",
  },
  {
    date: "16 Nov",
    time: "WED:10:30am - 11:10am",
  },
  {
    date: "16 Nov",
    time: "WED:10:30am - 11:10am",
  },
];

const AvailavleSlotOption = ({ item }) => {
  return (
    <>
      <Grid container color="#fff" spacing={1} alignItems={"center"} mb={1}>
        <Grid
          item
          xs={12}
          sm={3}
          sx={{
            display: "flex",
            gap: 1,
          }}
        >
          <InsertInvitationOutlinedIcon />
          <Typography noWrap>{item.date}</Typography>
        </Grid>
        <Grid
          item
          sm={7}
          xs={9}
          sx={{
            display: "flex",
            gap: 1,
          }}
        >
          <AlarmOnOutlinedIcon />
          <Typography noWrap>{item.time}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Checkbox
            sx={{
              color: "#fff",
              "&.Mui-checked": {
                color: "#fff",
              },
            }}
          />
        </Grid>
      </Grid>
      <Divider
        sx={{
          borderColor: "#D9D9D9",
          borderBottomWidth: 5,
          marginBottom: 1,
        }}
      />
    </>
  );
};

const DoneComponent = () => {
  return (
    <>
      <Typography
        id="modal-title"
        variant="h5"
        component="h2"
        color={"#fff"}
        mb={2}
      >
        Receipt
      </Typography>
      <Typography variant="h6" color={"#fff"} mb={2} paddingX={3} sx={{fontWeight: 'bold'}}>
        Please find your receipt below it will be share on your email also
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            padding: "2rem",
            background: "#D5E2FA",
            borderRadius: "18px 18px 18px 0px",
            margin: 2,
            flexDirection: "column",
            width: "auto",
          }}
        >
          <Grid item container spacing={1}>
            <Grid item xs={1}>
              <InsertInvitationOutlinedIcon />
            </Grid>
            <Grid item xs={2}>
              <Typography>{"Date"}</Typography>
            </Grid>
            <Grid item xs>
              <Typography>{"Date 16 November"}</Typography>
            </Grid>
          </Grid>
          <Grid item container spacing={1}>
            <Grid item xs={1}>
              <AlarmOnOutlinedIcon />
            </Grid>
            <Grid item xs={2}>
              <Typography noWrap>{"Time"}</Typography>
            </Grid>
            <Grid item xs>
              <Typography>{"WED: 10:30 am to 11:30 am"}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

const RegisterationComponent = () => {
  return (
    <>
      <Typography
        id="modal-modal-title"
        variant="h5"
        component="h2"
        color={"#fff"}
        mb={2}
      >
        {"Registrations Details"}
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            padding: "1rem 3rem",
            background: "#D5E2FA",
            borderRadius: "18px 18px 18px 0px",
            marginBlock: 2,
          }}
        >
          {"Select Your Preferred Slot"}
        </Typography>
      </Box>
      <Box width={"80%"} marginX="auto">
        {options.map((item, idx) => {
          return <AvailavleSlotOption key={idx} item={item} />;
        })}
      </Box>
      <Box width={"80%"} marginX="auto">
        {/* <Link to="/payment" style={{ textDecoration: "none" }}> */}
        <Button
          sx={{
            mt: 3,
            color: "#000",
            background: "#D5E2FA",
            paddingBlock: "1rem",
            borderRadius: "10px",
            "&:hover": {
              background: "#D5E2FA",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
            },
          }}
          fullWidth
        >
          {"Choose & Continue"}
        </Button>
        {/* </Link> */}
      </Box>
    </>
  );
};
const SuccessComponent = () => {
  const [isDone, setIsDone] = useState(false);

  return (
    <>
      {isDone ? (
        <DoneComponent />
      ) : (
        <>
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            color={"#fff"}
            mb={2}
          >
            {"Congratulations !"}
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                padding: "1rem 3rem",
                background: "#D5E2FA",
                borderRadius: "18px 18px 18px 0px",
                marginBlock: 2,
              }}
            >
              {"You have successfully registered"}
            </Typography>
          </Box>
          <Box width={"80%"} marginX="auto">
            <Typography
              variant="h6"
              textAlign={"left"}
              color="#fff"
              gutterBottom
            >
              Your class timings
            </Typography>
            <AvailavleSlotOption item={options[0]} />;
          </Box>
          <Box width={"80%"} marginX="auto">
            <Button
              sx={{
                mt: 3,
                color: "#000",
                background: "#D5E2FA",
                paddingBlock: "1rem",
                borderRadius: "10px",
                "&:hover": {
                  background: "#D5E2FA",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                },
              }}
              fullWidth
              onClick={() => setIsDone((prev) => !prev)}
            >
              {"Done"}
            </Button>
          </Box>
        </>
      )}
    </>
  );
};
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "95%",
  maxWidth: 500,
  boxShadow: 24,
  padding: "1rem ",
  background: "linear-gradient(180deg, #9D78BD 0%, #8DA0D8 100%)",
  borderRadius: "15px",
};

const CustomModal = ({ handleClose, open }) => {
  const paymentSuccessful = false;
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-registeration"
    >
      <Box sx={style}>
        <Box textAlign="center" paddingY={"1rem"}>
          <Button
            sx={{
              position: "absolute",
              right: "5%",
              top: "5%",
            }}
            onClick={handleClose}
          >
            <CloseIcon
              sx={{
                fontSize: "2rem",
                color: "#fff",
              }}
            />
          </Button>
          {paymentSuccessful ? (
            <SuccessComponent />
          ) : (
            <RegisterationComponent />
          )}
        </Box>
      </Box>
    </Modal>
  );
};

export default CustomModal;
