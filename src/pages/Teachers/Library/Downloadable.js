import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import VideoFileIcon from "@mui/icons-material/VideoFile";
import { CommonTableHead } from "../../../components/TableComponent";

const downloadableList = [
  {
    name: "Ohm's law",
    dateUploaded: new Date().toLocaleDateString(),
    size: "10.1 mb",
    download: "https://www.random.com/download",
  },
  {
    name: "Ohm's law",
    dateUploaded: new Date().toLocaleDateString(),
    size: "10.1 mb",
    download: "https://www.random.com/download",
  },
  {
    name: "Ohm's law",
    dateUploaded: new Date().toLocaleDateString(),
    size: "10.1 mb",
    download: "https://www.random.com/download",
  },
  {
    name: "Ohm's law",
    dateUploaded: new Date().toLocaleDateString(),
    size: "10.1 mb",
    download: "https://www.random.com/download",
  },
  {
    name: "Ohm's law",
    dateUploaded: new Date().toLocaleDateString(),
    size: "10.1 mb",
    download: "https://www.random.com/download",
  },
  {
    name: "Ohm's law",
    dateUploaded: new Date().toLocaleDateString(),
    size: "10.1 mb",
    download: "https://www.random.com/download",
  },
  {
    name: "Ohm's law",
    dateUploaded: new Date().toLocaleDateString(),
    size: "10.1 mb",
    download: "https://www.random.com/download",
  },
  {
    name: "Ohm's law",
    dateUploaded: new Date().toLocaleDateString(),
    size: "10.1 mb",
    download: "https://www.random.com/download",
  },
  {
    name: "Ohm's law",
    dateUploaded: new Date().toLocaleDateString(),
    size: "10.1 mb",
    download: "https://www.random.com/download",
  },
  {
    name: "Ohm's law",
    dateUploaded: new Date().toLocaleDateString(),
    size: "10.1 mb",
    download: "https://www.random.com/download",
  },
  {
    name: "Ohm's law",
    dateUploaded: new Date().toLocaleDateString(),
    size: "10.1 mb",
    download: "https://www.random.com/download",
  },
  {
    name: "Ohm's law",
    dateUploaded: new Date().toLocaleDateString(),
    size: "10.1 mb",
    download: "https://www.random.com/download",
  },
  {
    name: "Ohm's law",
    dateUploaded: new Date().toLocaleDateString(),
    size: "10.1 mb",
    download: "https://www.random.com/download",
  },
];
// const PRIMARY_COLOR = "#EDECEC";
const SECONDARY_COLOR = "#9D78BD";
const tableFontSize = "1rem";
const Downloadable = () => {
  const downloadableTableHeading = [
    { id: "name", label: "Name", minWidth: 120 },
    { id: "dateUploaded", label: "Date upload", minWidth: 100 },
    { id: "size", label: "Size", minWidth: 50 },
    { id: "download", label: "Download", minWidth: 50 },
  ];
  return (
    <TableContainer>
      <Table stickyHeader aria-label="download video table">
        <CommonTableHead tableHeading={downloadableTableHeading} />
        <TableBody>
          {downloadableList.map((row, idx) => {
            return (
              <TableRow hover role="checkbox" tabIndex={-1} key={idx}>
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      fontSize: tableFontSize,
                    }}
                  >
                    <VideoFileIcon
                      sx={{
                        color: SECONDARY_COLOR,
                      }}
                    />
                    {row.name}
                  </Box>
                </TableCell>

                <TableCell>
                  <Typography variant="body1">{row.dateUploaded}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1">{row.size}</Typography>
                </TableCell>
                <TableCell>
                  <Button>
                    <DownloadForOfflineIcon />
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Downloadable;
