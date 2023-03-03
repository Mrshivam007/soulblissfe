import {
  Box,
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  Grid,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import { CalendarPicker } from "@mui/x-date-pickers/CalendarPicker";
import CircleIcon from "@mui/icons-material/Circle";
import React from "react";
import { DatePicker } from "@mui/x-date-pickers";

const courseNameData = ["course1", "course2", "course3"];
const courseData = [
  {
    courseName: "course1",
    courseDescription:
      "Ohm's law, description of the relationship between current, voltage, and resistance. The amount of steady current through a large number of materials is directly proportional to the potential difference, or voltage, across the materials.",
    teacherName: "teacher1",
    rating: 4,
  },
  {
    courseName: "course2",
    courseDescription:
      "Ohm's law, description of the relationship between current, voltage, and resistance. The amount of steady current through a large number of materials is directly proportional to the potential difference, or voltage, across the materials.",
    teacherName: "teacher1",
    rating: 4,
  },
  {
    courseName: "course3",
    courseDescription:
      "Ohm's law, description of the relationship between current, voltage, and resistance. The amount of steady current through a large number of materials is directly proportional to the potential difference, or voltage, across the materials.the relationship between current, voltage, and resistance. The amount of steady current through a large number of materials is directly proportional to the potential difference, or voltage, across",
    teacherName: "teacher1",
    rating: 4,
  },
  {
    courseName: "course4",
    courseDescription:
      "Ohm's law, description . The amount of steady current through a large number of materials is directly proportional to the potential difference, or voltage, across the materials.",
    teacherName: "teacher1",
    rating: 4,
  },
];

const RATING_SCALE = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const CustomRating = ({ ratingValue }) => {
  return (
    <Box
      sx={{
        marginTop: ".5rem",
        marginBottom: ".5rem",
      }}
    >
      <RadioGroup row>
        {RATING_SCALE.map((curr) => (
          <FormControlLabel
            value={curr}
            sx={{
              margin: 0,
              color: "grey.400",
              fontSize: "0.5rem",
              paddingRight: "5px",
            }}
            slotProps={{
              typography: {
                fontSize: "0.8rem",
              },
            }}
            control={
              <Radio
                size="small"
                checkedIcon={<CircleIcon sx={{ paddingBlock: "1px" }} />}
                icon={<CircleIcon sx={{ paddingBlock: "1px" }} />}
                sx={{
                  color: "#D9D9D9",
                  padding: 0,
                  "&.Mui-disabled": {
                    color: "#D9D9D9",
                  },
                  "&.Mui-checked": {
                    color: "#9D78BD",
                  },
                }}
              />
            }
            label={curr}
            labelPlacement="bottom"
            key={curr}
          />
        ))}
      </RadioGroup>
    </Box>
  );
};

const SuggestionCard = ({ course }) => {
  const { courseName, courseDescription, teacherName, rating } = course;
  return (
    <Card
      sx={{
        marginBlock: 3,
        maxWidth: {
          md: 600,
        },
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.15)",
        paddingY: {
          xs: 0,
        },
        borderRadius: "20px",
      }}
    >
      <>
        <CardContent
          sx={{
            padding: 0,
            paddingY: 2,
            paddingX: {
              xs: 2,
              sm: 3,
            },
          }}
        >
          <Typography variant="h5" fontWeight={"600"} component="h2" mb={1.5}>
            {courseName}
          </Typography>
          <Typography
            variant="body2"
            component="p"
            lineHeight={"17px"}
            color={"grey.600"}
            mb={1}
            sx={{
              display: "-webkit-box",
              overflow: "hidden",
              textOverflow: "ellipsis",
              WebkitLineClamp: 4,
              WebkitBoxOrient: "vertical",
            }}
          >
            {courseDescription}
          </Typography>
          <Typography variant="h6" fontWeight={"500"} component="h3" mb={1}>
            {teacherName}
          </Typography>
          <Typography variant="body2">Rating</Typography>
          <CustomRating ratingValue={rating} />
          <Typography variant="body2">Feedback</Typography>
          <TextField
            id="standard-basic"
            label="Feedback"
            variant="standard"
            fullWidth
          />
        </CardContent>
         <Box sx={{ marginBottom: '2%', marginLeft: '4%' }}>
         <Button size="large" variant="outlined">Submit</Button>
         </Box>
      </>
    </Card>
  );
};

const Suggestion = () => {
  const [courseName, setCourseName] = React.useState("");
  const [date, setDate] = React.useState(new Date());
  const handleChange = (event) => {
    setCourseName(event.target.value);
  };

  return (
    <Box
      sx={{
        paddingX: {
          xs: 2,
          md: 0,
        },
      }}
    >
      <Typography variant="h5" gutterBottom>
        Suggestions
      </Typography>
      <Grid container>
        <Grid item xs={12} lg={7}>
          <Grid container direction={"column"}>
            <Grid item>
              <FormControl sx={{ marginBlock: 1, minWidth: 150 }}>
                <Select
                  value={courseName}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{
                    "aria-label": "select course",
                    sx: {
                      paddingY: 1,
                      backgroundColor: "#E8ECF7",
                      fontSize: 12,
                    },
                  }}
                  sx={{
                    ".MuiOutlinedInput-notchedOutline": { border: 0 },
                  }}
                >
                  <MenuItem value="">Course Name</MenuItem>
                  {courseNameData.map((item, idx) => (
                    <MenuItem key={idx} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
              <Paper
                elevation={0}
                sx={{
                  marginBlock: 1,
                  padding: 0,
                  display: {
                    lg: "none",
                    xs: "flex",
                  },
                }}
              >
                <DatePicker
                  disableFuture
                  openTo="day"
                  views={["year", "month", "day"]}
                  value={date}
                  onChange={(newValue) => {
                    if (newValue) setDate(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      sx={{
                        backgroundColor: "#E8ECF7",
                        borderRadius: "5px",
                        ".MuiOutlinedInput-notchedOutline": {
                          border: 0,
                        },
                        ".MuiInputBase-root": {
                          maxWidth: "150px",
                        },
                        ".MuiInputBase-input": {
                          paddingY: 1,
                        },
                      }}
                    />
                  )}
                />
              </Paper>
            </Grid>
          </Grid>

          {courseData.map((course, idx) => (
            <SuggestionCard key={idx} course={course} />
          ))}
        </Grid>
        <Grid
          item
          xs={5}
          sx={{
            display: {
              lg: "flex",
              xs: "none",
            },
            pr: 3,
            justifyContent: "end",
            alignItems: "start",
          }}
        >
          <Paper
            elevation={1}
            sx={{
              marginBlock: 1,
              padding: 0,
              boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.15)",
              display: {
                md: "flex",
                xs: "none",
              },
              "& .PrivatePickersSlideTransition-root": {
                minHeight: "210px",
              },
            }}
          >
            <CalendarPicker
              date={date}
              onChange={(newDate) => {
                if (newDate) setDate(newDate);
              }}
            />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Suggestion;
