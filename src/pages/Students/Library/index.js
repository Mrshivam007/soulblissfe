import { Box, Grid } from "@mui/material";
import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import { Link } from "react-router-dom";

const CourseList = [
  {
    id: 1,
    title: "Course 1",
    content:
      "Ohm's law, description of the relationship between current, voltage, and resistance. The amount of steady current through a large number of materials is directly proportional to the potential difference, or voltage, across the materials.",
    imgUrl: "https://picsum.photos/200",
  },
  {
    id: 2,
    title: "Course 2",
    content:
      "Ohm's law, description of the relationship between current, voltage, and resistance. The amount of steady current through a large number of materials is directly proportional to the potential difference, or voltage, across the materials.",
    imgUrl: "https://picsum.photos/400/300",
  },
  {
    id: 3,
    title: "Course 3",
    content:
      "Ohm's law, description of the relationship between current, voltage, and resistance. The amount of steady current through a large number of materials is directly proportional to the potential difference, or voltage, across the materials.",
    imgUrl: "https://picsum.photos/400",
  },
  {
    id: 4,
    title: "Course 4",
    content:
      "Ohm's law, description of the relationship between current, voltage, and resistance.",
    imgUrl: "https://picsum.photos/500/500",
  },

  {
    id: 5,
    title: "Course 5",
    content:
      "Ohm's law, description of the relationship between current, voltage, and resistance. The amount of steady current through a large number of materials is directly proportional to the potential difference, or voltage, across the materials.",
    imgUrl: "https://picsum.photos/500/400",
  },
  {
    id: 6,
    title: "Course 6",
    content:
      "Ohm's law, description of the relationship between current, voltage, and resistance. The amount of steady current through a large number of materials is directly proportional to the potential difference, or voltage, across the materials.",
    imgUrl: "https://picsum.photos/400/400",
  },
  {
    id: 7,
    title: "Course 7",
    content:
      "Ohm's law, description of the relationship between current, voltage, and resistance. The amount of steady current through a large number of materials is directly proportional to the potential difference, or voltage, across the materials.",
    imgUrl: "https://picsum.photos/300/300",
  },
];


const CourseCard = ({ course }) => {
  const { id, title, content, imgUrl } = course;
  return (
    <Card
      sx={{
        borderRadius: "20px 20px 0px 0px",
        boxShadow: "0px 2px 5px 1px rgba(0, 0, 0, 0.25)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia component="img" alt={title} height="140" image={imgUrl} />
      <CardContent sx={{ paddingInline: 2, paddingBottom: 0.5 }}>
        <Typography variant="h6" mb={0.5}>
          {title}
        </Typography>
        <Typography
          variant="body2"
          component={"p"}
          textAlign="justify"
          sx={{
            display: "-webkit-box",
            overflow: "hidden",
            textOverflow: "ellipsis",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical",
          }}
        >
          {content}
        </Typography>
      </CardContent>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <CardActions>
          <Link
            to={`/library/${id}`}
            style={{
              textDecoration: "none",
            }}
          >
            <Button
              size="small"
              color="primary"
              sx={{
                textTransform: "none",
                display: "flex",
                alignItems: "center",
                gap: 0.5,
              }}
            >
              <EastRoundedIcon />
              <Typography fontWeight={"bold"}>View Details</Typography>
            </Button>
          </Link>
        </CardActions>
      </Box>
    </Card>
  );
};

const Library = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
        },
        paddingRight: { xs: 3, lg: 3 },
        paddingLeft: {
          xs: 3,
          md: 0,
        },
        gap: 5,
        pb: 3,
      }}
    >
      {CourseList.map((course) => (
        <Grid key={course.id}>
          <CourseCard key={course.id} course={course} />
        </Grid>
      ))}
    </Box>
  );
};

export default Library;
