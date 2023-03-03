import {
  Avatar,
  Box,
  IconButton,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";

const TABLE_HEADER_BACKGROUND = "#F1F0F0";
export const CommonTableHead = ({ tableHeading }) => {
  return (
    <TableHead
      sx={{
        backgroundColor: TABLE_HEADER_BACKGROUND,
      }}
    >
      <TableRow>
        {tableHeading.map((column) => (
          <TableCell
            key={column.id}
            style={{
              textAlign: column.align ?? "left",
              minWidth: column.minWidth ?? 100,
              backgroundColor: "inherit",
            }}
          >
            <Typography variant="body1" sx={{fontWeight: 'bold'}} >{column.label}</Typography>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export const RecepientCell = ({ recepient, tableFontSize = "1rem" }) => {
  return (
    <TableCell sx={{ fontSize: tableFontSize }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Avatar src={recepient.avatarUrl} alt={recepient.name} />
        <Typography variant="body1" sx={{ ml: 1 }}>
          {recepient.name}
        </Typography>
      </Box>
    </TableCell>
  );
};

export const TeacherCell = ({ teacher }) => {
  return (
    <TableCell>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Avatar sizes="" src={teacher.avatarUrl} alt={teacher.name} />
        <Typography variant="body1" sx={{ ml: 1 }}>
          {teacher.name}
        </Typography>
      </Box>
    </TableCell>
  );
};

export const StudentCell = ({ student }) => {
  return (
    <TableCell>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Avatar src={student.avatarUrl} alt={student.name} />
        <Typography variant="body1" sx={{ ml: 1 }}>
          {student.name}
        </Typography>
      </Box>
    </TableCell>
  );
};

export const StatusCell = ({ status }) => {
  return (
    <TableCell>
      {
        <Box
          sx={{
            backgroundColor:
              status === "completed"
                ? "#71E249"
                : status === "pending"
                ? "#FF9A30"
                : "#D62828",
            padding: "0.2rem 1rem",
            width: "100%",
            minWidth: "7rem",
            textAlign: "center",
            textTransform: "capitalize",
            color: "white",
          }}
        >
          <Typography variant="body1">{status}</Typography>
        </Box>
      }
    </TableCell>
  );
};

const doNothing = () => {};

export const ActionCell = ({
  handleView = doNothing,
  handleEdit = doNothing,
  handleDelete = doNothing,
  actionType = "edit",
}) => {
  return (
    <TableCell sx={{ textAlign: "center" }}>
      {actionType === "view" ? (
        <IconButton onClick={handleView}>
          <VisibilityIcon color="primary" />
        </IconButton>
      ) : (
        <>
          <IconButton onClick={handleEdit}>
            <EditIcon color="primary" />
          </IconButton>
          <IconButton onClick={handleDelete}>
            <DeleteIcon color="primary" />
          </IconButton>
        </>
      )}
    </TableCell>
  );
};
