import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  styled,
  Button,
} from "@mui/material";
import React from "react";
import {
  ActionCell,
  CommonTableHead,
} from "../../../components/TableComponent";
// import { StyledButton } from "../UserManagement/UserTable";
import AddIcon from "@mui/icons-material/Add";
import SortByFilter from "../../../components/common/SortByFilter";
import { format } from "date-fns";

const fakeData = [
  {
    id: "1",
    title: "Maths",
    // referralBy: "John Doe",
    // referralTo: "Jane Doe",
    // discount: "499",
  },
  {
    id: "2",
    title: "Science",
    // referralBy: "John Doe",
    // referralTo: "Jane Doe",
    // discount: "499",
  },
  {
    id: "3",
    title: "English",
    // referralBy: "John Doe",
    // referralTo: "Jane Doe",
    // discount: "499",
  },
];

const StyledButton = styled(Button)({
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

const TitleDetail = () => {
  const tableFontSize = "1rem";
  const fileTableHeading = [
    { id: "title", label: "Title", minWidth: 120, fontWeight: 'bold' },
    // { id: "referralBy", label: "Referral By", minWidth: 100 },
    // { id: "referralTo", label: "Referral To", minWidth: 100 },
    // {
    //   id: "discount",
    //   label: "Discount Amount",
    //   minWidth: 120,
    //   align: "center",
    // },
    { id: "action", label: "Action", minWidth: 50, align: "center", fontWeight: 'bold' },
  ];
  const tableData = fakeData;
  const handleAdd = () => {};
  return (
    <Box>
      <Box
        mb={2}
        sx={{
          display: "flex",
          gap: 12.5,
          alignItems: "center",
          float: "right",
        }}
      >
        <StyledButton onClick={handleAdd} variant="outlined">
          <AddIcon fontSize="small" />
          Add
        </StyledButton>
        {/* <SortByFilter /> */}
      </Box>
      <TableContainer>
        <Table stickyHeader aria-label="file table">
          <CommonTableHead tableHeading={fileTableHeading} />
          <TableBody>
            {tableData.map((row, idx) => {
              return (
                <TableRow hover tabIndex={-1} key={idx}>
                  <TableCell>
                    <Typography>{row.title}</Typography>
                  </TableCell>
                  <ActionCell />
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TitleDetail;
