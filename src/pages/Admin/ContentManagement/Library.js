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
import PresenterName from "../../../components/Dropdown/Presenter";
import CoursePresenter from "../../../components/Dropdown/CoursePresenter";

export default function Library() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{width: '25%'}}>
      <Box ml={"2%"} width={"40ch"}>
        <Card
          sx={{
            maxWidth: 288,
            height: 242,
            borderRadius: "2rem 2rem 0 0",
            marginLeft: "8%",
            marginTop: "2vh",
          }}
        >
          <Typography
            variant="h5"
            fontWeight={"bold"}
            textAlign={"center"}
            marginY={2}
          >
            Add Class
          </Typography>
          <CardActionArea
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "75%",
              width: "40ch",
            }}
            onClick={() => handleClickOpen()}
          >
            <AddIcon color="primary" fontSize="large" />
          </CardActionArea>
        </Card>
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <Box width={"42vh"} margin={"2vh"}>
          {/* <DialogTitle>Add Class</DialogTitle> */}
          <Typography variant="h5" fontWeight={"bold"}>
            Add Course
          </Typography>
          <Typography variant="h6" fontWeight={"bold"} marginY={2}>
            Course Title
            <br />
            <TextField
              id="outlined-basic"
              label="Title of the Course"
              variant="outlined"
              required
              sx={{ width: "25ch" }}
            />{" "}
            <br />
            Presenter Name
            <CoursePresenter />
            Duration <br />
            <TextField
              id="outlined-basic"
              label="Duration of this Course"
              variant="outlined"
              required
              sx={{ width: "25ch" }}
            />{" "}
            <br />
            About this Course <br />
            <TextField
              id="outlined-basic"
              label="Abour this Course"
              variant="outlined"
              required
              sx={{ width: "25ch" }}
            />
          </Typography>
          <Typography variant="h6" fontWeight={"bold"} marginY={2}>
            Upload file
            <UploadContent />
          </Typography>
        </Box>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add Class</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
