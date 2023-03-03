import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { format } from "date-fns";

import { ActionCell, CommonTableHead, RecepientCell } from "../TableComponent";

const fakefileList = [
  {
    id: "1",
    date: "12/12/2022",
    name: {
      name: "teacher",
      avatarUrl: "",
    },
    course: "science",
    candidatenumber: "12",
    // location: "Team Portfolio",
  },
  {
    id: "2",
    date: "09/12/2022",
    name: {
      name: "teacher",
      avatarUrl: "",
    },
    course: "maths",
    candidatenumber: "16",
    // location: "Team Portfolio",
  },
  {
    id: "3",
    date: "11/12/2022",
    name: {
      name: "teacher",
      avatarUrl: "",
    },
    course: "Biology",
    candidatenumber: "8",
    // location: "Team Portfolio",
  },
  {
    id: "4",
    date: "10/12/2022",
    name: {
      name: "teacher",
      avatarUrl: "",
    },
    course: "English",
    candidatenumber: "23",
    // location: "Team Portfolio",
  },
];
const FileTable = ({ fileList }) => {
  const tableFontcandidatenumber = "1rem";
  const fileTableHeading = [
    { id: "date", label: "Date", minWidth: 120 },
    { id: "name", label: "Student Name", minWidth: 150 },
    { id: "course", label: "Course Name", minWidth: 150 },
    { id: "candidatenumber", label: "Number of Candidate Enrolled", minWidth: 150 },
    // { id: "course", label: "course", minWidth: 50 },
    // { id: "candidatenumber", label: "candidatenumber", minWidth: 50 },
    // { id: "location", label: "Location", minWidth: 50 },
    { id: "action", label: "Action", minWidth: 50, align: "center" },
  ];
  const tableData = fileList || fakefileList;
  const handleEdit = () => {};
  return (
    <TableContainer>
      <Table stickyHeader aria-label="file table">
        <CommonTableHead tableHeading={fileTableHeading} />
        <TableBody>
          {tableData.map((row, idx) => {
            return (
              <TableRow hover tabIndex={-1} key={idx}>
                <TableCell>
                  <Typography variant="body1">
                    {format(new Date(row.date), "PP")}
                  </Typography>
                </TableCell>
                <RecepientCell
                  recepient={row.name}
                  tableFontcandidatenumber={tableFontcandidatenumber}
                />
                <TableCell>
                  <Typography variant="body1">{row.course}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1">{row.candidatenumber}</Typography>
                </TableCell>
                {/* <TableCell>
                  <Typography variant="body1">{row.location}</Typography>
                </TableCell> */}
                <ActionCell handleEdit={handleEdit} actionType={"edit"} />
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FileTable;
