import {
  Box,
  Button,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import BlockIcon from "@mui/icons-material/Block";
import {
  CommonTableHead,
  RecepientCell,
} from "../../../components/TableComponent";
import SortByFilter from "../../../components/common/SortByFilter";

export const StyledButton = styled(Button)({
  display: "flex",
  alignItems: "center",
  gap: 5,
  padding: "5px 10px",
  textTransform: "capitalize",
  color: "#9D78BD",
  background: "#E5E3F5",
  fontWeight: "bold",
  border: "1px solid #E5E3F5",
  borderRadius: "5px",
});

const doNothing = () => {};

const UserTable = ({
  data = [],
  handleAdd = doNothing,
  handleEdit = doNothing,
  handleDelete = doNothing,
  handleBlock = doNothing,
  handleDownload = doNothing,
}) => {
  const tableFontSize = "1rem";
  const fileTableHeading = [
    { id: "sno", label: "S.No", minWidth: 20 },
    { id: "name", label: "Name", minWidth: 120 },
    { id: "phone", label: "Phone", minWidth: 50 },
    { id: "email", label: "Email", minWidth: 100 },
    { id: "course", label: "course", minWidth: 100 },
    { id: "location", label: "Location", minWidth: 50 },
  ];
  const tableData = data;

  return (
    <Box>
      <Box
        mb={2}
        sx={{
          display: "flex",
          gap: 2,
          alignItems: {
            sm: "center",
            xs: "flex-start",
          },
          justifyContent: "space-between",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <StyledButton onClick={handleAdd} variant="outlined">
            <AddIcon fontSize="small" />
            Add
          </StyledButton>
          <StyledButton onClick={handleEdit} variant="outlined">
            <EditIcon fontSize="small" />
            Edit
          </StyledButton>
          <StyledButton onClick={handleDelete} variant="outlined">
            <DeleteOutlineIcon fontSize="small" />
            Delete
          </StyledButton>
          <StyledButton onClick={handleBlock} variant="outlined">
            <BlockIcon fontSize="small" />
            Block
          </StyledButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <SortByFilter />
          <Button
            sx={{
              textTransform: "capitalize",
              fontWeight: "bold",
            }}
            variant="outlined"
            onClick={handleDownload}
          >
            Download Excel
          </Button>
        </Box>
      </Box>
      <TableContainer>
        <Table stickyHeader aria-label="file table">
          <CommonTableHead
            tableHeading={fileTableHeading}
            tableFontSize={tableFontSize}
          />
          <TableBody>
            {tableData.map((row, idx) => {
              return (
                <TableRow hover tabIndex={-1} key={idx}>
                  <TableCell>
                    <Typography variant="body1">{idx + 1}</Typography>
                  </TableCell>
                  <RecepientCell
                    recepient={row.name}
                    tableFontSize={tableFontSize}
                  />
                  <TableCell>
                    <Typography variant="body1">{row.phone}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1">{row.email}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1">{row.course}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1">{row.location}</Typography>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UserTable;
