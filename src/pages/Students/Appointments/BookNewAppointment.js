import {
  alpha,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputBase,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import PlaceIcon from "@mui/icons-material/Place";
import EventIcon from "@mui/icons-material/Event";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import React from "react";
import { Link } from "react-router-dom";

const filterCategories = [
  { value: "date", label: "Available dates" },
  { value: "slot", label: "Select a slot" },
  { value: "specialization", label: "specialization" },
  { value: "language", label: "Language" },
];

const selectOptions = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
  { value: "3", label: "Option 3" },
];

const appointmentList = [
  {
    id: 1,
    name: "Teacher 1",
    subject: "Subject 1",
    specialization:
      "Anxiety, Stress, Depression, Relationship Issues, Grief , Trauma,Couple Counseling, Suicidal Ideation",
    location: "Location 1",
    event: {
      startTime: "2021-09-01T10:00:00.000Z",
      endTime: "2021-09-01T11:00:00.000Z",
    },
    image: "https://picsum.photos/300",
  },
  {
    id: 2,
    name: "Teacher 2",
    subject: "Subject 2",
    specialization:
      "Anxiety, Stress, Depression, Relationship Issues, Grief , Trauma,Couple Counseling, Suicidal Ideation",
    location: "Location 2",
    event: {
      startTime: "2021-09-01T10:00:00.000Z",
      endTime: "2021-09-01T11:00:00.000Z",
    },
    image: "https://picsum.photos/200/200",
  },
  {
    id: 3,
    name: "Teacher 3",
    subject: "Subject 3",
    specialization:
      "Anxiety, Stress, Depression, Relationship Issues, Grief , Trauma,Couple Counseling, Suicidal Ideation",
    location: "Location 3",
    event: {
      startTime: "2021-09-01T13:00:00.000Z",
      endTime: "2021-09-01T16:00:00.000Z",
    },
    image: "https://picsum.photos/200/200",
  },
  {
    id: 4,
    name: "Teacher 4",
    subject: "Subject 4",
    specialization:
      "Anxiety, Stress, Depression, Relationship Issues, Grief , Trauma,Couple Counseling, Suicidal Ideation",
    location: "Location 4",
    event: {
      startTime: "2021-09-01T10:00:00.000Z",
      endTime: "2021-09-01T11:00:00.000Z",
    },
    image: "https://picsum.photos/300/300",
  },
  {
    id: 5,
    name: "Teacher 5",
    subject: "Subject 5",
    specialization:
      "Anxiety, Stress, Depression, Relationship Issues, Grief , Trauma,Couple Counseling, Suicidal Ideation",
    location: "Location 5",
    event: {
      startTime: "2021-09-01T09:00:00.000Z",
      endTime: "2021-09-01T11:00:00.000Z",
    },
    image: "https://picsum.photos/200/400",
  },
];

const eventDetailStyle = {
  container: {
    display: "flex",
    gap: 1,
    alignItems: "center",
    marginTop: 1,
  },
};
const bgColor = "#D5E2FA";
export const PRIMARY_COLOR = "#E8ECF7";
export const SECONDARY_COLOR = "#9D78BD";

const AppointmentCard = ({ appointment }) => {
  const { id, name, subject, specialization, location, event, image } =
    appointment;
  return (
    <Card
      sx={{
        padding: 2,
        background: "linear-gradient(180deg, #9D78BD 0%, #8DA0D8 100%)",
        color: "#ffffff",
        // maxWidth: 370,
        borderRadius: "30px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Box
        mt={1}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            borderRadius: "15px 15px 15px 0",
            background: bgColor,
            color: "#000000",
            pr: 1,
            paddingY: 1.5,
            gap: 2,
            pl: 0,
            width: "100%",
            maxWidth: {
              xs: "80%",
              // md: 220,
            },
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: 30,
              height: 30,
              "&:before": {
                content: '""',
                position: "absolute",
                width: 60,
                height: 60,
                top: "50%",
                right: "-100%",
                transform: "translate(-50%, -50%)",
                borderRadius: "50%",
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              },
            }}
          ></Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                p: 0,
                gap: "4px",
              }}
            >
              <PlaceIcon
                // fontSize="small"
                color="primary"
                sx={{
                  width: 10,
                  height: 10,
                }}
              />
              <Typography variant="caption" component="p" color={"GrayText"}>
                {location}
              </Typography>
            </Box>
            <Typography
              variant="body2"
              component="p"
              fontWeight="bold"
              pl={"3px"}
            >
              {name}
            </Typography>
            <Typography variant="caption" component="p" pl={"3px"}>
              {subject}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
              justifyContent: "end",
            }}
          >
            {/* <IconButton> */}
            <ChevronRightIcon />
            {/* </IconButton> */}
          </Box>
        </Box>
      </Box>

      <CardContent
        sx={{
          padding: 0,
          display: "flex",
          flexDirection: "column",
          gap: 1,
          paddingX: 2,
        }}
      >
        <Typography variant="body2" component="p" mt={2} fontWeight="600">
          Specialization
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: 10,
          }}
          component="p"
        >
          {specialization}
        </Typography>
        <Box sx={eventDetailStyle.container}>
          <EventIcon fontSize="small" />
          <Typography variant="body2" component="p">
            {"DD MMM YYYY"}
          </Typography>
        </Box>
        <Box sx={eventDetailStyle.container}>
          <AlarmOnIcon fontSize="small" />
          <Typography
            variant="body1"
            sx={{
              fontSize: 12,
            }}
            component="p"
          >
            {/* {(event.startTime).format("ddd") +
              " " +
              (event.startTime).format("hh:mm A") +
              " - " +
              (event.endTime).format("hh:mm A")} */}
            {"hh:mm A - hh:mm A"}
          </Typography>
        </Box>
        <Box sx={eventDetailStyle.container}>
          <HourglassBottomIcon fontSize="small" />
          <Typography
            variant="body1"
            sx={{
              fontSize: 12,
            }}
            component="p"
          >
            {"60 minutes"}
          </Typography>
        </Box>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: 0,
          pt: 2,
        }}
      >
        <Link
          to={`/appointments/teachercalendar/${id}`}
          style={{
            textDecoration: "none",
            width: "50%",
          }}
          draggable={false}
        >
          <Button
            fullWidth
            sx={{
              background: bgColor,
              color: "#000000",
              textTransform: "none",
              fontSize: 10,
              "&:hover": {
                background: alpha(bgColor, 0.6),
              },
            }}
          >
            Book Session
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

const SearchInput = styled(InputBase)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  boxSizing: "border-box",
  height: 39,
  backgroundColor: PRIMARY_COLOR,
  fontSize: 12,
  maxWidth: 300,
  width: "100%",
  ".MuiInputBase-input": {
    paddingInline: 14,
  },
  ".MuiInputBase-input::placeholder": {
    color: "#000",
    opacity: 1,
  },
  "&:hover": {
    backgroundColor: alpha(PRIMARY_COLOR, 0.8),
  },
  " &:focus-within": {
    outline: `1px solid ${SECONDARY_COLOR}`,
  },
}));

export default function BookNewAppointment() {
  return (
    <div>
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        Filters
      </Typography>
      <Grid container flexDirection="column" mt={2}>
        <Grid item container justifyContent={"space-between"} gap={2}>
          <Box
            sx={{
              display: "flex",
              gap: 3,
              flexWrap: "wrap",
            }}
          >
            {filterCategories.map((item) => (
              <Box key={item.value}>
                <FormControl sx={{ minWidth: 150 }}>
                  <Select
                    value={""}
                    displayEmpty
                    inputProps={{
                      "aria-label": item.value,
                      sx: {
                        paddingY: 1,
                        backgroundColor: PRIMARY_COLOR,
                        fontSize: 12,
                      },
                    }}
                    sx={{
                      ".MuiOutlinedInput-notchedOutline": { border: 0 },
                      fontWeight: 800,
                    }}
                  >
                    <MenuItem value="">{item.label}</MenuItem>
                    {selectOptions.map((item) => (
                      <MenuItem key={item.value} value={item.value}>
                        {item.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            ))}
          </Box>
          <Box style={{ width: "22%", marginRight: "2%" }}>
            <SearchInput
              id="search-input"
              placeholder="Search"
              endAdornment={
                <InputAdornment position="start" style={{ fontWeight: "bold" }}>
                  <SearchIcon
                    sx={{ color: SECONDARY_COLOR, paddingLeft: 1 }}
                    fontSize="large"
                  />
                </InputAdornment>
              }
            />
          </Box>
        </Grid>

        <Grid
          container
          // mt={2}
          py={{
            xs: 3,
            md: 5,
          }}
          spacing={{
            xs: 3,
            md: 5,
            lg: 7,
          }}
          style={{ width: "92%" }}
        >
          {appointmentList.map((appointment) => {
            return (
              <Grid item key={appointment.id} sm={12} md={6} lg={4}>
                <AppointmentCard appointment={appointment} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
}
