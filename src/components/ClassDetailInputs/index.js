import {
  Box,
  Button,
  Grid,
  InputBase,
  InputLabel,
  Typography,
} from "@mui/material";
import { DayPicker } from "@mui/x-date-pickers/CalendarPicker/DayPicker";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import React from "react";
import BasicDatePicker from "../DatePicker";
import DaySelect from "../Dropdown/day";
import RichText from "../RichTextEditor";
import TextEditor from "../RichTextEditor/second";
import FormControl from "@mui/material/FormControl";

import BasicTimePicker from "../TimePicker/start";
import { UploadContent } from "../UploadContent1";
import TextField from "@mui/material/TextField";
import StartTime from "../TimePicker/start";
import EndTime from "../TimePicker/End";
import PriceSelect from "../Dropdown/price";
import PresenterName from "../Dropdown/Presenter";
import CustomDropdown from "../Dropdown/CustomDropdown";
import { Link } from "react-router-dom";
import ClassMaterial from "../../pages/Teachers/MyClasses/UpcomingClassDetail/ClassMaterial";

const InputField = ({ label, minRows, value }) => {
  return (
    <Grid container marginY={2} paddingX={3} sx={{ paddingLeft: "0" }}>
      {/* <Grid item xs={12} md={3}>
        <InputLabel htmlFor={label}>{label}</InputLabel>
      </Grid> */}
      <Grid item xs={12} md={8}>
        <InputBase
          id={label}
          defaultValue={value}
          required
          multiline
          minRows={minRows}
          sx={{
            border: "4px solid #D9D9D9",
            borderRadius: "0.5rem",
            width: "50%",
            padding: "0.4rem 0.8rem",
          }}
        />
      </Grid>
    </Grid>
  );
};
const ClassDetailInputs = ({ edit = false }) => {
  const inputFields = [
    {
      label: "Thumbmail(image (jpg, png))",
      value: "Thumbmail(image (jpg, png))",
    },
    {
      label: "What You will learn",
      value: "What You will learn",
      minRows: 2,
    },
    {
      label: "What benefit you will get",
      value: "What benefit you will get",
      minRows: 2,
    },
    {
      label: "Duration",
      value: "Duration",
      minRows: 1,
    },
    {
      label: "Price",
      value: "Price",
      minRows: 1,
    },
    {
      label: "Timings",
      value: "Timings",
      minRows: 1,
    },
  ];

  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" paddingBottom={2}>
        Class Detail
      </Typography>
      <Typography variant="h6" textAlign={"left"} fontWeight="bold">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              // md: "repeat(3, 1fr)",
            },
            paddingRight: { xs: 3, lg: 3 },
            gap: 5,
            pb: 3,
          }}
        >
          <div>
            Thumbnail(Image (jpg, png))
            <UploadContent />
          </div>
          {/* </div> */}
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "30ch" },
            }}
            noValidate
            autoComplete="off"
          >
            Title of Course <br />
            <TextField
              id="outlined-basic"
              label="Title of the class"
              variant="outlined"
              required
            />
            <br />
            Date : <br />
            <BasicDatePicker />
          </Box>
        </Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          Time : <br />
          <StartTime />
          <EndTime />
        </Box>
        <Box
          component="form"
          sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
          noValidateautoComplete="off"
        >
          <FormControl sx={{ minWidth: 120 }}>
            Tag -
            <CustomDropdown />
          </FormControl>
          <FormControl sx={{ minWidth: 120 }}>
            Presenter Name -
            <PresenterName />
          </FormControl>
        </Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "30ch" },
          }}
          noValidate
          autoComplete="off"
        >
          Telegram Link <br />
          <TextField
            id="outlined-basic"
            // label="Title of the class"
            variant="outlined"
            defaultValue="https://telegram.com/chat"
          />
        </Box>
        About This class -
        <TextEditor />
        What Student will learn? -
        <TextEditor />
        {/* What benefits student will get? -
        <TextEditor /> */}
      </Typography>
      <Grid container paddingX={18} sx={{ paddingTop: "2%" }}>
        <Grid item xs={12} md={3}></Grid>
        <Grid item xs={12} md={8}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              textTransform: "none",
            }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ClassDetailInputs;
