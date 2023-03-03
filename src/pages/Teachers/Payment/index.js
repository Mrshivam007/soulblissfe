import {
  Avatar,
  Box,
  Card,
  FormControl,
  Grid,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { formatDistance } from "date-fns";
import { CalendarPicker } from "@mui/x-date-pickers/CalendarPicker";
import { DatePicker } from "@mui/x-date-pickers";
import React from "react";
const courseNameData = ["course1", "course2", "course3"];
const paymentData = [
  {
    id: 1,
    status: "completed",
    time: "2022-12-13T18:30:00.000Z",
    paidTo: {
      name: "Teacher 1",
      imgUrl: "https://picsum.photos/200",
    },
    amount: 1000000,
  },
  {
    id: 2,
    status: "completed",
    time: "2022-12-12T18:30:00.000Z",
    paidTo: {
      name: "Teacher 2",
      imgUrl: "https://picsum.photos/300",
    },
    amount: 1000,
  },
  {
    id: 3,
    status: "pending",
    time: "2022-12-10T18:30:00.000Z",
    paidTo: {
      name: "Teacher long name",
      imgUrl: "https://picsum.photos/200/200",
    },
    amount: 1000,
  },
];

const PaymentCard = ({ payment }) => {
  const { status, time, paidTo, amount } = payment;
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        maxWidth: 700,
        padding: 2,
        px: 0,
        borderBottom: "1px solid #C5BFBF",
        borderRadius: 0,
        boxShadow: "none",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 0.5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            gap: {
              xs: 1,
              md: 3,
              lg: 5,
            },
          }}
        >
          <Box
            sx={{
              display: "flex",

              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                backgroundColor:
                  status === "completed"
                    ? "#71E249"
                    : status === "pending"
                    ? "#FF9A30"
                    : "##D62828",
                padding: "0.2rem 1rem",
                width: "100%",
                minWidth: "7rem",
                fontSize: "0.9rem",
                textAlign: "center",
                textTransform: "capitalize",
              }}
            >
              {status}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              gap: 2,
              alignItems: "center",
              flexWrap: "wrap",
              justifyContent: {
                xs: "space-between",
                sm: "flex-start",
              },
            }}
          >
            <Typography variant="body1">Paid to:</Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
              }}
            >
              <Avatar src={paidTo.imgUrl} alt={paidTo.name} />
              <Typography variant="body1" sx={{ marginInline: 1 }}>
                {paidTo.name}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              pr: 2,
            }}
          >
            <Typography variant="body1">{`Rs ${amount}`}</Typography>
          </Box>
        </Box>
        <Box>
          <Typography variant="body1" sx={{ fontSize: "0.9rem" }}>
            {formatDistance(new Date(time), new Date(), { addSuffix: true })}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

const TeacherPayment = () => {
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
        paddingRight: {
          md: 2,
          lg: 0,
        },
      }}
    >
      <Grid container>
        <Grid item xs={12} lg={7}>
          <Grid container direction={"column"}>
            <Grid item>
              <FormControl sx={{ mb: 1, minWidth: 150 }}>
                <Select
                  value={courseName}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{
                    "aria-label": "select course",
                    sx: { paddingY: 1, backgroundColor: "#E8ECF7" },
                  }}
                  sx={{
                    ".MuiOutlinedInput-notchedOutline": { border: 0 },
                  }}
                >
                  <MenuItem value="">Course Name</MenuItem>
                  {courseNameData.map((item) => (
                    <MenuItem key={item} value={item}>
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
          {paymentData.map((payment) => (
            <PaymentCard key={payment.id} payment={payment} />
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
              display: {
                md: "flex",
                xs: "none",
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

export default TeacherPayment;
