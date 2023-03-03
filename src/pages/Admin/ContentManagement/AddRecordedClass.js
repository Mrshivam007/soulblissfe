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

export default function AddRecordedClass() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box ml={"2%"} width={"23%"}>
        <Card
          sx={{
            maxWidth: '100%',
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
            Add Class
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
      <Dialog open={open} onClose={handleClose}>

        <Box width={"42vh"} margin={"2vh"}>
        {/* <DialogTitle>Add Class</DialogTitle> */}
        <Typography variant="h5" fontWeight={"bold"}>
          Add Class
        </Typography>
          <Typography variant="h6" fontWeight={"bold"} marginY={2}>
            Select class
            {/* <PrevClass /> */}
            <SelectClass />
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
      </>
  );
}
