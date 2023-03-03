import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import { Box, Card, CardActionArea, Grid, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import PrevClass from "./../../../components/PrevClassList";
import { UploadContent } from "./../../../components/UploadContent";
import SelectClass from "../../../components/Dropdown/class";
import TitleDetail from "./Title";
import EndTime from "../../../components/TimePicker/End";
import TimeSlot from "../../../components/TimePicker/TimeSlot";

export default function NewAppointment() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box ml={"2%"} width={"40vh"}>
        <Card
          sx={{
            maxWidth: "100%",
            height: 242,
            borderRadius: "2rem 2rem 0 0",
            marginLeft: "2%",
            marginTop: "2vh",
          }}
        >
          <Typography
            variant="h5"
            fontWeight={"bold"}
            textAlign={"center"}
            marginY={2}
          >
            Add Slot
          </Typography>
          <CardActionArea
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "75%",
              width: "100%",
            }}
            onClick={() => handleClickOpen()}
          >
            <AddIcon color="primary" fontSize="large" />
          </CardActionArea>
        </Card>
      </Box>
      <Dialog open={open} onClose={handleClose}
      PaperProps={{
        style: {
           margin: 2
        },
      }}
      >
        <Box width={"47vh"} margin={"2vh"}>
          {/* <DialogTitle>Add Class</DialogTitle> */}
          <Typography variant="h5" fontWeight={"bold"}>
            Add Topic
          </Typography>
          <Typography variant="h6" fontWeight={"bold"} marginY={2}>
            Write Topic
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch", ml: 0 },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Title of the class"
                variant="outlined"
              />
            </Box>
            Time Slot 
                        <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch", ml: 0 },
              }}
              noValidate
              autoComplete="off"
            >
            <TimeSlot />
            </Box>
            <TitleDetail />
          </Typography>
          {/* <Typography variant="h6" fontWeight={"bold"} marginY={2}>
            Topics:
          </Typography> */}

        </Box>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
