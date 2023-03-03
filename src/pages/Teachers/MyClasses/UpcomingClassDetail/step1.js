import React from "react";
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
import BasicDatePicker from "../../../../components/DatePicker";
import DaySelect from "../../../../components/Dropdown/day";
import RichText from "../../../../components/RichTextEditor";
import TextEditor from "../../../../components/RichTextEditor/second";
import FormControl from "@mui/material/FormControl";
// import { UploadContent } from "../UploadContent1";
import { UploadContent } from "../../../../components/UploadContent";
import TextField from "@mui/material/TextField";
import StartTime from "../../../../components/TimePicker/start";
import EndTime from "../../../../components/TimePicker/End";
import PriceSelect from "../../../../components/Dropdown/price";
import PresenterName from "../../../../components/Dropdown/Presenter";
import CustomDropdown from "../../../../components/Dropdown/CustomDropdown";

const Step1 = (props) => {
  const { onNext } = props;
  const [formData, setFormData] = React.useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNextClick = () => {
    onNext(formData);
  };

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
            onClick={handleNextClick}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Step1;
