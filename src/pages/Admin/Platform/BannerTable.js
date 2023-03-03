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
} from "../../../components/TableComponent";

const UploadList = [
  {
    id: "1",
    UploadDate: "12/12/2022",
    fileName: "Banner 1",
    owner: "Akash Singh",
    size: "2.5 mb",
    location: "Lagos",
  },
  {
    id: "2",
    UploadDate: "1/12/2022",
    fileName: "Banner 1",
    owner: "Akash Singh",
    size: "2.5 mb",
    location: "Lagos",
  },
  {
    id: "3",
    UploadDate: "10/12/2022",
    fileName: "Banner 1",
    owner: "Akash Singh",
    size: "2.5 mb",
    location: "Lagos",
  },
  {
    id: "4",
    UploadDate: "12/11/2022",
    fileName: "Banner 1",
    owner: "Akash Singh",
    size: "2.5 mb",
    location: "Lagos",
  },
];

const BannerTable = ({ actionType = "edit" }) => {
  const tableFontSize = "1rem";
  const UploadTableHeading = [
    { id: "UploadDate", label: "Date", minWidth: 120 },
    { id: "fileName", label: "Name", minWidth: 150 },
    { id: "owner", label: "Owner", minWidth: 50 },
    { id: "size", label: "Size", minWidth: 50 },
    { id: "location", label: "Location", minWidth: 50 },
    { id: "action", label: "Action", minWidth: 50, align: "center" },
  ];

  const handleView = () => {};
  const handleEdit = () => {};
  return (
    <TableContainer>
      <Table stickyHeader aria-label="Upload table">
        <CommonTableHead tableHeading={UploadTableHeading} />
        <TableBody>
          {UploadList.map((row, idx) => {
            return (
              <TableRow hover tabIndex={-1} key={idx}>
                <TableCell>
                  <Typography variant="body1">
                    {format(new Date(row.UploadDate), "PP")}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1">{row.fileName}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1">{row.owner}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1">{row.size}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1">{row.location}</Typography>
                </TableCell>
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

export default BannerTable;
