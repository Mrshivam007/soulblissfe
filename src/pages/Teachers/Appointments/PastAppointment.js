import React from "react";
import { Box, Dialog, DialogContent } from "@mui/material";
import AppointmentTable, { PaymentTable } from "./AppointmentTable";
import UnderlinedTab from "../../../components/UnderlinedTab";
import { StudentDetails } from "./CurrentAppointment";

const PaymentDetails = () => {
  return (
    <Box>
      <PaymentTable />
    </Box>
  );
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
];

const ViewAppointment = (props) => {
  const { onClose, open, ...other } = props;

  const handleCancel = () => {
    onClose();
  };

  return (
    <Dialog
      sx={{
        "& .MuiDialog-paper": {
          width: {
            xs: "95%",
            md: "80%",
          },
          maxWidth: 650,
          minHeight: 400,
          marginX: 2,
        },
      }}
      maxWidth="xs"
      open={open}
      onClose={handleCancel}
      {...other}
    >
      <DialogContent
        sx={{
          padding: "1rem 0",
        }}
      >
        <UnderlinedTab tabs={tabs} addStyle={{ ml: 3 }} />
      </DialogContent>
    </Dialog>
  );
};

const PastAppointment = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = (newValue) => {
    setOpen(false);
  };
  return (
    <Box>
      <ViewAppointment
        id="view-appointment"
        open={open}
        onClose={handleClose}
      />
      <AppointmentTable actionType="view" setOpen={setOpen} />
    </Box>
  );
};

export default PastAppointment;
