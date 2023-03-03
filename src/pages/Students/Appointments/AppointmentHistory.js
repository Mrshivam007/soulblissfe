import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  FormControl,
  Grid,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { CalendarPicker } from "@mui/x-date-pickers/CalendarPicker";

import { DatePicker } from "@mui/x-date-pickers";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import React from "react";
import { Link } from "react-router-dom";
import { WeeklyCalendar } from "../../../components/common/CustomCalendar";
const filterCategories = [
  { value: "courseName", label: "Course Name" },
  { value: "language", label: "Language" },
];

const selectOptions = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
  { value: "3", label: "Option 3" },
];

const AppointmentHistoryData = [
  {
    id: "11",
    courseName: "AppointmentHistory1",
    describe:
      "Ohm's law, description of the of steady current through a large number of materials is directly proportional to the potential difference, or voltage, across the materials.",
    thumb: "https://picsum.photos/200",
    createdBy: "Teacher name",
  },
  {
    id: "22",
    courseName: "AppointmentHistory2",
    describe:
      "Ohm's law, description of the relationship between current, voltage, and resistance. The amount of steady current through a large number of materials is directly proportional to the potential difference, or voltage, across the materials.",
    thumb: "https://picsum.photos/200/400",
    createdBy: "Teacher name",
  },
  {
    id: "33",
    courseName: "AppointmentHistory3",
    describe:
      "Ohm's law, description of the relationship between current, voltage, and resistance. The amount of steady current through a large number of materials is directly proportional to the potential difference, or voltage, across the materials.",
    thumb: "https://picsum.photos/400/400",
    createdBy: "Teacher name",
  },
  {
    id: "44",
    courseName: "AppointmentHistory4",
    describe:
      "Ohm's law, description of the relationship between current, voltage, and resistance. The amount of steady current through a large number of materials is directly proportional to the potential difference, or voltage, across the materials.Ohm's law, description of the relationship between current, voltage, and resistance. The amount of steady current through a large number of materials is directly proportional to the potential difference, or voltage, across the materials",
    thumb: "https://picsum.photos/300",
    createdBy: "Teacher name",
  },
];

const AppointmentHistoryCard = ({ AppointmentHistory }) => {
  const { id, courseName, describe, thumb, createdBy } = AppointmentHistory;
  return (
    <Card
      sx={{
        // flexWrap: "wrap",
        marginBlock: 3,
        maxWidth: 700,
        paddingX: {
          xs: 3,
          md: 5,
        },
        paddingY: {
          xs: 3,
          md: 5,
        },
        borderRadius: "20px",
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.15)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: {
            xs: 2,
            sm: 3,
            md: 5,
          },
        }}
      >
        <Box
          sx={{
            aspectRatio: "1/1",
          }}
        >
          <CardMedia
            component="img"
            image={thumb}
            alt={courseName}
            sx={{
              width: {
                xs: 110,
                md: 150,
              },
              bgcolor: "grey.200",
            }}
            style={{
              borderRadius: "5px",
              aspectRatio: "1/1",
            }}
          ></CardMedia>
        </Box>

        <CardContent
          sx={{
            maxWidth: 400,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            overflow: "hidden",

            padding: 0,
            "&:last-child": {
              paddingBottom: 0,
            },
          }}
        >
          <Box>
            <Typography
              variant="h5"
              fontWeight={"500"}
              component="h2"
              gutterBottom
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {courseName}
            </Typography>
            <Typography
              variant="body2"
              component="p"
              lineHeight={"17px"}
              color={"grey.600"}
              gutterBottom
              sx={{
                display: "-webkit-box",
                overflow: "hidden",
                textOverflow: "ellipsis",
                WebkitLineClamp: 4,
                WebkitBoxOrient: "vertical",
              }}
            >
              {describe}
            </Typography>
          </Box>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "flex",
              },
            }}
            justifyContent={"space-between"}
            alignItems={"center"}
            flexWrap={"wrap"}
          >
            <Typography variant="body2" component="p" color={"grey.600"}>
              Created by: {createdBy}
            </Typography>
            <CardActions
              sx={{
                padding: 0,
              }}
            >
              <Link
                to={`/appointments/viewrecording/${id}`}
                style={{ textDecoration: "none" }}
              >
                <Button
                  size="small"
                  color="secondary"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <ArrowCircleRightIcon color="primary" style={{fontSize: '50px'}} />
                </Button>
              </Link>
            </CardActions>
          </Box>
        </CardContent>
      </Box>
      {/* mobile view */}
      <Box
        sx={{
          display: {
            sm: "none",
            xs: "flex",
          },
        }}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexWrap={"wrap"}
      >
        <Typography variant="body2" component="p" color={"grey.600"}>
          Created by: {createdBy}
        </Typography>
        <CardActions
          sx={{
            padding: 0,
          }}
        >
          <Link
            to={`/appointments/viewrecording/${id}`}
            style={{ textDecoration: "none" }}
          >
            <Button
              size="small"
              color="secondary"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <KeyboardDoubleArrowRightIcon color="primary" fontSize="large" />
            </Button>
          </Link>
        </CardActions>
      </Box>
    </Card>
  );
};

const SelectFilter = ({ item }) => {
  const [selectedOption, setSelectedOption] = React.useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <FormControl sx={{ minWidth: 150 }}>
      <Select
        value={selectedOption}
        onChange={handleChange}
        displayEmpty
        inputProps={{
          "aria-label": item.value,
          sx: { paddingY: 1, backgroundColor: "#E8ECF7", fontSize: 12 },
        }}
        sx={{
          ".MuiOutlinedInput-notchedOutline": { border: 0 },
        }}
      >
        <MenuItem
          sx={{
            fontSize: 12,
          }}
          value=""
        >
          {item.label}
        </MenuItem>
        {selectOptions.map((item) => (
          <MenuItem
            sx={{
              fontSize: 12,
            }}
            key={item.value}
            value={item.value}
          >
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

const AppointmentHistory = () => {
  const [date, setDate] = React.useState(new Date());

  return (
    <Box>
      <Grid container>
        <Grid item xs={12} lg={7}>
          <Grid container direction={"column"}>
            <Grid container item>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  flexWrap: "wrap",
                }}
              >
                {filterCategories.map((item) => (
                  <SelectFilter item={item} key={item.value} />
                ))}
              </Box>
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
                    if (newValue !== null) setDate(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      sx={{
                        backgroundColor: "#E8ECF7",
                        mt: 1,
                        borderRadius: "5px",
                        ".MuiOutlinedInput-notchedOutline": {
                          border: 0,
                        },
                        ".MuiInputBase-root": {
                          maxWidth: "150px",
                          fontSize: 12,
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
          {AppointmentHistoryData.map((AppointmentHistory, idx) => (
            <AppointmentHistoryCard
              key={idx}
              AppointmentHistory={AppointmentHistory}
            />
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

export default AppointmentHistory;
