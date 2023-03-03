import React from "react";
import TeacherDayAppointment from "../../../components/TeacherDayAppointment";
import {
  Box,
  Button,
  Typography,
  Dialog,
  DialogContent,
  DialogActions,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import EventIcon from "@mui/icons-material/Event";

import AppointmentTable, { PaymentTable } from "./AppointmentTable";
import UnderlinedTab from "../../../components/UnderlinedTab";

export const StudentDetails = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: {
          xs: 2,
        },
        width: "100%",
        flexDirection: {
          xs: "column",
        },
        p: 3,
        py: 1,
      }}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography variant="body1">
            <b>Student Name</b>
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography variant="body1">Abcd efght</Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography variant="body1" sx={{ mt: 1 }}>
            <b>Appointment Scheduled</b>
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            mt: 1,
          }}
        >
          <EventIcon fontSize="small" />
          <Typography variant="body1">12/12/2022</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

const PaymentDetails = () => {
  const paymentList = [
    {
      id: "1",
      appointmentDate: "12/12/2022",
      recepient: {
        name: "teacher",
        avatarUrl: "",
      },
      amount: "2000",
      type: "online",
      location: "Lagos",
      status: "pending",
    },
  ];
  return (
    <Box>
      <PaymentTable paymentList={paymentList} />
    </Box>
  );
};

const ReasonCard = () => {
  return (
    <Card
      sx={{
        maxWidth: 500,
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "5px",
      }}
    >
      <CardContent>
        <Typography variant="body1" fontWeight={"bold"}>
          Consultation
        </Typography>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          quod, voluptatum, quia, voluptas quas voluptates quibusdam Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Quisquam quod,
          voluptatum, quia, voluptas quas voluptates quibusdam
        </Typography>
      </CardContent>
    </Card>
  );
};

const ReasonForAppointment = () => {
  return (
    <Box
      sx={{
        mt: 1,
        display: "flex",
        flexDirection: "column",
        paddingX: 3,
        gap: 2,
      }}
    >
      {new Array(20).fill(0).map((_, i) => (
        <ReasonCard key={i} />
      ))}
    </Box>
  );
};

const EditAppointment = (props) => {
  const { onClose, open, ...other } = props;

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    onClose();
  };
  const tabs = [
    {
      label: "Student Details",
      component: <StudentDetails />,
    },
    {
      label: "Payment Details",
      component: <PaymentDetails />,
    },
    {
      label: "Reason for Appointment",
      component: <ReasonForAppointment />,
    },
  ];

  return (
    <Dialog
      sx={{
        "& .MuiDialog-paper": {
          width: {
            xs: "95%",
            md: "80%",
          },
          maxWidth: 650,
          minHeight: 450,
          maxHeight: 500,
          marginX: 2,
        },
      }}
      open={open}
      {...other}
    >
      <DialogContent
        sx={{
          padding: "1rem 0",
        }}
      >
        <UnderlinedTab tabs={tabs} addStyle={{ ml: 3 }} />
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel}>
          Cancel
        </Button>
        <Button onClick={handleOk}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
};

const AppointmentScheduledView = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = (newValue) => {
    setOpen(false);
  };
  return (
    <Box>
      <EditAppointment
        id="edit-appointment"
        keepMounted
        open={open}
        onClose={handleClose}
      />
      <AppointmentTable setOpen={setOpen} />
    </Box>
  );
};

const CurrentAppointment = () => {
  const tabs = [
    {
      label: "Calendar",
      component: <TeacherDayAppointment />,
    },
    {
      label: "Appointment Scheduled",
      component: <AppointmentScheduledView />,
    },
  ];
  return (
    <Box sx={{ width: "100%" }}>
      <UnderlinedTab tabs={tabs} />
    </Box>
  );
};

export default CurrentAppointment;
