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
  RecepientCell,
  StatusCell,
} from "../../../../components/TableComponent";

export default function StudentDetails() {
  const tableFontSize = "1rem";
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
    {
      id: "2",
      appointmentDate: "1/12/2022",
      recepient: {
        name: "teacher",
        avatarUrl: "",
      },
      amount: "2000",
      type: "online",
      location: "Lagos",
      status: "completed",
    },
    {
      id: "3",
      appointmentDate: "10/12/2022",
      recepient: {
        name: "teacher",
        avatarUrl: "",
      },
      amount: "2000",
      type: "online",
      location: "Lagos",
      status: "pending",
    },
    {
      id: "4",
      appointmentDate: "12/11/2022",
      recepient: {
        name: "teacher",
        avatarUrl: "",
      },
      amount: "2000",
      type: "online",
      location: "Lagos",
      status: "canceled",
    },
  ];

  const paymentTableHeading = [
    { id: "appointmentDate", label: "Date", minWidth: 120 },
    { id: "recepient", label: "Recepient", minWidth: 150 },
    { id: "amount", label: "Amount", minWidth: 50 },
    { id: "type", label: "Type", minWidth: 50 },
    { id: "location", label: "Location", minWidth: 50 },
    { id: "status", label: "Status", minWidth: 50, align: "center" },
  ];
  return (
    <>
      <TableContainer>
        <Table stickyHeader aria-label="payment table">
          <CommonTableHead tableHeading={paymentTableHeading} />

          <TableBody>
            {paymentList.map((row, idx) => {
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
                    <Typography variant="body1">
                      {`Rs ${row.amount}`}
                    </Typography>
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
    </>
  );
}
