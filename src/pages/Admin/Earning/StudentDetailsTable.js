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
  CommonTableHead,
  StudentCell,
  StatusCell,
} from "../../../components/TableComponent";

// const PRIMARY_COLOR = "#EDECEC";
// const SECONDARY_COLOR = "#9D78BD";

const studentDetailsList = [
  {
    id: "1",
    status: "completed",
    subscribersDate: "12/12/2022",
    student: {
      name: "Akash Singh",
      avatarUrl: "",
    },
    amount: "2000",
    type: "online",
    location: "Jabalpur",
  },
  {
    id: "2",
    status: "pending",
    subscribersDate: "1/12/2022",
    student: {
      name: "Akash Singh",
      avatarUrl: "",
    },
    amount: "2000",
    type: "online",
    location: "Jabalpur",
  },
  {
    id: "3",
    status: "Canceled",
    subscribersDate: "10/12/2022",
    student: {
      name: "Akash Singh",
      avatarUrl: "",
    },
    amount: "2000",
    type: "online",
    location: "Jabalpur",
  },
  {
    id: "4",
    status: "completed",
    subscribersDate: "12/11/2022",
    student: {
      name: "Akash Singh",
      avatarUrl: "",
    },
    amount: "2000",
    type: "online",
    location: "Jabalpur",
  },
];

const StudentDetailsTable = ({ setOpen, actionType = "edit" }) => {
  const tableFontSize = "1rem";
  const StudentDetailsTableHeading = [
    { id: "subscribersDate", label: "Date", minWidth: 120 },
    { id: "student", label: "Student", minWidth: 150 },
    { id: "amount", label: "Amount", minWidth: 50 },
    { id: "type", label: "Type", minWidth: 50 },
    { id: "location", label: "Location", minWidth: 50 },
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
      <Table stickyHeader aria-label="subscribers table">
        <CommonTableHead tableHeading={StudentDetailsTableHeading} />
        <TableBody>
          {studentDetailsList.map((row, idx) => {
            return (
              <TableRow hover tabIndex={-1} key={idx}>
                <TableCell>
                  <Typography variant="body1">
                    {format(new Date(row.subscribersDate), "PP")}
                  </Typography>
                </TableCell>
                <StudentCell student={row.student} />
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

export default StudentDetailsTable;
