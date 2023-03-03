import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  Button,
  Grid,
  CardContent,
  CardMedia,
  Skeleton,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import { useNavigate } from "react-router-dom";

const CourseList = [
  {
    id: 1,
    title: "Course 1",
    content:
      "Ohm's law, description of the relationship between current, voltage, and resistance. The amount of steady current through a large number of materials is directly proportional to the potential difference, or voltage, across the materials. Ohm's law, description of the relationship between current, voltage, and resistance. The amount of steady current through a large number of materials is directly proportional to the potential difference, or voltage, across the materials.",
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
];
const AddNewCard = () => {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        borderRadius: "15px 15px 0px 0px",
        boxShadow: "0px 2px 5px 1px rgba(0, 0, 0, 0.25)",
        background: "rgba(0, 0, 0, 0.4)",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          background: "#fff",
          width: "50px",
          height: "50px",
        }}
      >
        <AddIcon
          color="primary"
          sx={{
            width: "50px",
            height: "50px",
          }}
        />
      </Box>
      <CardActionArea
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "start",
        }}
        onClick={() => navigate("/library/create")}
      >
        <Skeleton
          sx={{ height: { xs: 120, md: 140 }, width: "100%" }}
          variant="rectangular"
          animation={false}
        />
        <Box
          sx={{
            pt: 1,
            paddingX: 2,
            paddingBottom: 2,
            width: "100%",
          }}
        >
          <Skeleton
            animation={false}
            width="40%"
            height={20}
            style={{ marginBlock: 6 }}
          />
          <Skeleton
            animation={false}
            height={16}
            width="100%"
            style={{ marginBlock: 6 }}
          />
          <Skeleton
            animation={false}
            height={16}
            width="100%"
            style={{ marginBlock: 6 }}
          />
          <Skeleton
            animation={false}
            height={16}
            width="100%"
            style={{ marginBlock: 6 }}
          />
          <Skeleton animation={false} height={16} width="100%" />
        </Box>
      </CardActionArea>
    </Card>
  );
};

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

const TeacherLibrary = () => {
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
       <AddNewCard />
      {CourseList.map((course) => (
        <Grid key={course.id}>
          <CourseCard key={course.id} course={course} />
        </Grid>
      ))}
    </Box>
  );
};

export default TeacherLibrary;
