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
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";

import React from "react";

const courseNameData = ["course1", "course2", "course3"];
const certificateData = [
  {
    certificateName: "certificate1",
    certificateDescription:
      "Ohm's law, description of the of steady current through a large number of materials is directly proportional to the potential difference, or voltage, across the materials.",
    thumb: "https://picsum.photos/200",
  },
  {
    certificateName: "certificate2",
    certificateDescription:
      "Ohm's law, description of the relationship between current, voltage, and resistance. The amount of steady current through a large number of materials is directly proportional to the potential difference, or voltage, across the materials.",
    thumb: "https://picsum.photos/200/400",
  },
  {
    certificateName: "certificate long name",
    certificateDescription:
      "Ohm's law, description of the relationship between current, voltage, and resistance. The amount of steady current through a large number of materials is directly proportional to the potential difference, or voltage, across the materials.",
    thumb: "https://picsum.photos/400/400",
  },
  {
    certificateName: "certificate4 long long long name",
    certificateDescription:
      "Ohm's law, description of the relationship between current, voltage, and resistance. The amount of steady current through a large number of materials is directly proportional to the potential difference, or voltage, across the materials.Ohm's law, description of the relationship between current, voltage, and resistance. The amount of steady current through a large number of materials is directly proportional to the potential difference, or voltage, across the materials",
    thumb: "https://picsum.photos/300",
  },
];

const CertificateCard = ({ certificate }) => {
  const { certificateName, certificateDescription, thumb } = certificate;
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: 3,
        marginBlock: 3,
        maxWidth: 700,
        paddingX: {
          xs: 2,
          sm: 3,
        },
        paddingY: {
          xs: 2,
          sm: 3,
        },
        borderRadius: "20px",
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
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
          alt={certificateName}
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

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflow: "hidden",
        }}
      >
        <CardContent
          sx={{
            padding: 0,
          }}
        >
          <Typography
            variant="h5"
            fontWeight={"500"}
            component="div"
            gutterBottom
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {certificateName}
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
            {certificateDescription}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            padding: 0,
          }}
        >
          <Button
            size="medium"
            color="primary"
            sx={{
              textTransform: "none",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <DownloadForOfflineIcon />
            Download
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
};

const Certificate = () => {
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
        Certificates
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
          {certificateData.map((certificate, idx) => (
            <CertificateCard key={idx} certificate={certificate} />
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

export default Certificate;
