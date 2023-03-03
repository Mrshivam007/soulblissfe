import { Box, Grid } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomCard from "../common/CustomCard";
import { useNavigate } from "react-router-dom";

const CarouselItems = [
  {
    id: 1,
    img_url: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    img_url: "https://picsum.photos/300/300",
  },
  {
    id: 3,
    img_url: "https://picsum.photos/400/300",
  },
  {
    id: 4,
    img_url: "https://picsum.photos/200/400",
  },
  {
    id: 5,
    img_url: "https://picsum.photos/300/400",
  },
  {
    id: 6,
    img_url: "https://picsum.photos/400/400",
  },
];

export const trendingCardData = [
  {
    img: "Ohm's Law",
    head: "What IS Ohm's Law?",
    attendance: "(50+ Attendance)",
    date: "Nov 10 2022",
    time: "10: 00 am-1:00 pm",
    taughtBy: "Akash Singh",
    btntext: "Attend Now",
  },
  {
    img: "Ohm's Law",
    head: "What IS Ohm's Law?",
    attendance: "(50+ Attendance)",
    date: "Nov 10 2022",
    time: "10: 00 am-1:00 pm",
    taughtBy: "Akash Singh",
    btntext: "Attend Now",
  },
  {
    img: "Ohm's Law",
    head: "What IS Ohm's Law?",
    attendance: "(50+ Attendance)",
    date: "Nov 10 2022",
    time: "10: 00 am-1:00 pm",
    taughtBy: "Akash Singh",
    btntext: "Attend Now",
  },
  {
    img: "Ohm's Law",
    head: "What IS Ohm's Law?",
    attendance: "(50+ Attendance)",
    date: "Nov 10 2022",
    time: "10: 00 am-1:00 pm",
    taughtBy: "Akash Singh",
    btntext: "Attend Now",
  },
  {
    img: "Ohm's Law",
    head: "What IS Ohm's Law?",
    attendance: "(50+ Attendance)",
    date: "Nov 10 2022",
    time: "10: 00 am-1:00 pm",
    taughtBy: "Akash Singh",
    btntext: "Attend Now",
  },
  {
    img: "Ohm's Law",
    head: "What IS Ohm's Law?",
    attendance: "(50+ Attendance)",
    date: "Nov 10 2022",
    time: "10: 00 am-1:00 pm",
    taughtBy: "Akash Singh",
    btntext: "Attend Now",
  },
  {
    img: "Ohm's Law",
    head: "What IS Ohm's Law?",
    attendance: "(50+ Attendance)",
    date: "Nov 10 2022",
    time: "10: 00 am-1:00 pm",
    taughtBy: "Akash Singh",
    btntext: "Attend Now",
  },
  {
    img: "Ohm's Law",
    head: "What IS Ohm's Law?",
    attendance: "(50+ Attendance)",
    date: "Nov 10 2022",
    time: "10: 00 am-1:00 pm",
    taughtBy: "Akash Singh",
    btntext: "Attend Now",
  },
];

export default function CourseCarousel(props) {
    let navigate = useNavigate();

  return (
    <Box
      sx={{
        paddingBottom: "30px",
        position: "relative",
        marginBottom: "10px",
        paddingLeft: {
          xs: "10px",
          md: 0,
        },
      }}
    >
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlaySpeed={5000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass="carousel-dots"
        draggable
        focusOnSelect={false}
        infinite
        autoPlay
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside
        partialVisible
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 2,
            partialVisibilityGutter: 180,
          },
          mobile: {
            breakpoint: {
              max: 600,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 600,
            },
            items: 2,
            partialVisibilityGutter: 90,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        sliderClass=""
        slidesToSlide={1}
      >
        {trendingCardData.map((trend, index) => {
          const clickHandler = () => {
            navigate("/trending/class/1");
          };
          return (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
              <Box sx={{ marginRight: "2%", width: "48vh", height: "40vh" }}>
                <CustomCard onClick={clickHandler} {...trend} status="live" />
              </Box>
            </Grid>
          );
        })}
      </Carousel>
    </Box>
  );
}
