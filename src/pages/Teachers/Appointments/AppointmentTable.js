import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { format } from "date-fns";
import React from "react";
import {
  ActionCell,
  CommonTableHead,
  RecepientCell,
  StatusCell,
} from "../../../components/TableComponent";

const appointmentList = [
  {
    id: "1",
    appointmentDate: "12/12/2022",
    recepient: {
      name: "teacher",
      avatarUrl: "",
    },
   
    topic: 'Science',
    type: "online",
    location: "Lagos",
  },
  {
    id: "2",
    appointmentDate: "1/12/2022",
    recepient: {
      name: "teacher",
      avatarUrl: "",
    },
   
    topic: 'Science',
    type: "online",
    location: "Lagos",
  },
  {
    id: "3",
    appointmentDate: "10/12/2022",
    recepient: {
      name: "teacher",
      avatarUrl: "",
    },
   
    topic: 'Science',
    type: "online",
    location: "Lagos",
  },
  {
    id: "4",
    appointmentDate: "12/11/2022",
    recepient: {
      name: "teacher",
      avatarUrl: "",
    },
   
    topic: 'Science',
    type: "online",
    location: "Lagos",
  },
];

const AppointmentTable = ({ setOpen, actionType = "edit" }) => {
  const tableFontSize = "1rem";
  const appointmentTableHeading = [
    { id: "appointmentDate", label: "Date", minWidth: 120 },
    { id: "recepient", label: "Student Name", minWidth: 150 },
    { id: "topic", label: "Topic", minWidth: 150 },
    // { id: "amount", label: "Amount", minWidth: 50 },
    { id: "type", label: "Type", minWidth: 50 },
    // { id: "location", label: "Location", minWidth: 50 },
    { id: "action", label: "Action", minWidth: 50, align: "center" },
  ];

  const handleView = () => {
    setOpen(true);
  };
  const handleEdit = () => {
    setOpen(true);
  };
  return (
    <TableContainer>
      <Table stickyHeader aria-label="appointment table">
        <CommonTableHead tableHeading={appointmentTableHeading} />
        <TableBody>
          {appointmentList.map((row, idx) => {
            return (
              <TableRow hover tabIndex={-1} key={idx}>
                <TableCell>
                  <Typography variant="body1">
                    {format(new Date(row.appointmentDate), "PP")}
                  </Typography>
                </TableCell>
                <RecepientCell
                  recepient={row.recepient}
                  tableFontSize={tableFontSize}
                />
                {/* <TableCell>
                  <Typography variant="body1">{`Rs ${row.amount}`}</Typography>
                </TableCell> */}
                <TableCell>
                  <Typography variant="body1">{row.topic}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1">{row.type}</Typography>
                </TableCell>
                {/* <TableCell>
                  <Typography variant="body1">{row.location}</Typography>
                </TableCell> */}
                <ActionCell
                  handleView={handleView}
                  handleEdit={handleEdit}
                  actionType={actionType}
                />
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const fakePaymentList = [
  {
    id: "1",
    appointmentDate: "12/12/2022",
    recepient: {
      name: "teacher",
      avatarUrl: "",
    },
   
    topic: 'Science',
    type: "online",
    location: "Lagos",
    status: "pending",
  },
  {
    id: "2",
    appointmentDate: "1/12/2022",
    recepient: {
      name: "teacher",
      avatarUrl: "",
    },
   
    topic: 'Science',
    type: "online",
    location: "Lagos",
    status: "completed",
  },
  {
    id: "4",
    appointmentDate: "12/11/2022",
    recepient: {
      name: "teacher",
      avatarUrl: "",
    },
   
    topic: 'Science',
    type: "online",
    location: "Lagos",
    status: "canceled",
  },
];

export const PaymentTable = ({ paymentList = fakePaymentList }) => {
  const tableFontSize = "0.8rem";
  const tableData = paymentList;
  const paymentTableHeading = [
    { id: "appointmentDate", label: "Date", minWidth: 120 },
    { id: "recepient", label: "Recepient", minWidth: 150 },
    { id: "amount", label: "Amount", minWidth: 50 },
    { id: "type", label: "Type", minWidth: 50 },
    { id: "location", label: "Location", minWidth: 50 },
    { id: "status", label: "Status", minWidth: 50 },
  ];
  return (
    <TableContainer>
      <Table stickyHeader aria-label="payment table">
        <CommonTableHead tableHeading={paymentTableHeading} />

        <TableBody>
          {tableData.map((row, idx) => {
            return (
              <TableRow hover tabIndex={-1} key={idx}>
                <TableCell>
                  <Typography variant="body1">
                    {format(new Date(row.appointmentDate), "PP")}
                  </Typography>
                </TableCell>

                <RecepientCell
                  recepient={row.recepient}
                  tableFontSize={tableFontSize}
                />
                <TableCell>
                  <Typography variant="body1">{`Rs ${row.amount}`}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1">{row.type}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1">{row.location}</Typography>
                </TableCell>
                <StatusCell status={row.status} />
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AppointmentTable;
