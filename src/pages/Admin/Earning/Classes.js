import React from "react";
import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import {
  ActionCell,
  CommonTableHead,
  RecepientCell,
} from "../../../components/TableComponent";
import { useNavigate } from "react-router-dom";

const classesList = [
  {
    id: "1",
    classes: "Class 1",
    recepient: {
      name: "Teacher",
      avatarUrl: "https://picsum.photos/200",
    },
    earning: "2000",
  },
  {
    id: "2",
    classes: "Class 2",
    recepient: {
      name: "Teacher",
      avatarUrl: "https://picsum.photos/200/200",
    },
    earning: "2000",
  },
  {
    id: "3",
    classes: "Class 3",
    recepient: {
      name: "Teacher",
      avatarUrl: "https://picsum.photos/400/400",
    },
    earning: "2000",
  },
  {
    id: "4",
    classes: "Class 4",
    recepient: {
      name: "Teacher",
      avatarUrl: "https://picsum.photos/300/300",
    },
    earning: "2000",
  },
];

export default function Classes() {
  const tableFontSize = "0.9rem";
  const subscribersTableHeading = [
    { id: "classes", label: "Classes", minWidth: 60 },
    { id: "recepient", label: "Recepient", minWidth: 150 },
    { id: "earning", label: "Earning", minWidth: 50 },
    { id: "action", label: "Action", minWidth: 50, align: "center" },
  ];
  const navigate = useNavigate();
  const handleView = (id) => {
    navigate(`${id}`);
  };
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            height: "100%",
            backgroundColor: "lightgrey",
            borderRadius: "10px",
          }}
        ></Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <TableContainer
          sx={{
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
            borderRadius: "0.5em",
          }}
        >
          <Table stickyHeader aria-label="subscribers table">
            <CommonTableHead tableHeading={subscribersTableHeading} />
            <TableBody>
              {classesList.map((row, idx) => {
                return (
                  <TableRow hover tabIndex={-1} key={idx}>
                    <TableCell>
                      <Typography variant="body1">{row.classes}</Typography>
                    </TableCell>
                    <RecepientCell
                      recepient={row.recepient}
                      tableFontSize={tableFontSize}
                    />
                    <TableCell>
                      <Typography variant="body1">
                        {`Rs ${row.earning}`}
                      </Typography>
                    </TableCell>
                    <ActionCell
                      handleView={() => handleView(row.id)}
                      actionType={"view"}
                    />
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
