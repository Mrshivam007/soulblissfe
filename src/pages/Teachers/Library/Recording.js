import {
  alpha,
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import React, { useState } from "react";
import VideoComment from "../../../components/VideoComment";
const videoList = [
  {
    id: "1",
    description:
      "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
    sources: [
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    ],
    thumb:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
    title: "Big Buck Bunny",
  },
  {
    id: "2",
    description: "The first Blender Open Movie from 2006",
    sources: [
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    ],
    thumb:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg",
    title: "Elephant Dream",
  },

  {
    id: "8",
    description:
      "Sintel is an independently produced short film, initiated by the Blender Foundation as a means to further improve and validate the free/open source 3D creation suite Blender. With initial funding provided by 1000s of donations via the internet community, it has again proven to be a viable development model for both open 3D technology as for independent animation film.\nThis 15 minute film has been realized in the studio of the Amsterdam Blender Institute, by an international team of artists and developers. In addition to that, several crucial technical and creative targets have been realized online, by developers and artists and teams all over the world.\nwww.sintel.org",
    sources: [
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    ],
    thumb:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg",
    title: "Sintel",
  },
  {
    id: "9",
    description:
      "Smoking Tire takes the all-new Subaru Outback to the highest point we can find in hopes our customer-appreciation Balloon Launch will get some free T-shirts into the hands of our viewers.",
    sources: [
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    ],
    thumb:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg",
    title: "Subaru Outback On Street And Dirt",
  },
  {
    id: "10",
    description:
      "Tears of Steel was realized with crowd-funding by users of the open source 3D creation tool Blender. Target was to improve and test a complete open and free pipeline for visual effects in film - and to make a compelling sci-fi film in Amsterdam, the Netherlands.  The film itself, and all raw material used for making it, have been released under the Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org website to find out more about this, or to purchase the 4-DVD box with a lot of extras.  (CC) Blender Foundation - http://www.tearsofsteel.org",
    sources: [
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    ],
    thumb:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg",
    title: "Tears of Steel",
  },
  {
    id: "11",
    description:
      "The Smoking Tire heads out to Adams Motorsports Park in Riverside, CA to test the most requested car of 2010, the Volkswagen GTI. Will it beat the Mazdaspeed3's standard-setting lap time? Watch and see...",
    sources: [
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    ],
    thumb:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/VolkswagenGTIReview.jpg",
    title: "Volkswagen GTI Review",
  },
  {
    id: "12",
    description:
      "The Smoking Tire is going on the 2010 Bullrun Live Rally in a 2011 Shelby GT500, and posting a video from the road every single day! The only place to watch them is by subscribing to The Smoking Tire or watching at BlackMagicShine.com",
    sources: [
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    ],
    thumb:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/WeAreGoingOnBullrun.jpg",
    title: "We Are Going On Bullrun",
  },
  {
    id: "13",
    description:
      "The Smoking Tire meets up with Chris and Jorge from CarsForAGrand.com to see just how far $1,000 can go when looking for a car.The Smoking Tire meets up with Chris and Jorge from CarsForAGrand.com to see just how far $1,000 can go when looking for a car.",
    sources: [
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
    ],
    thumb:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/WhatCarCanYouGetForAGrand.jpg",
    title: "What care can you get for a grand?",
  },
];
const commentData = [
  {
    user: "user 1",
    avatar: "",
    commentedAt: new Date().toLocaleString,
    content:
      "Akash is the Founder of Super-Conscious Tribe which provides healing, coaching, and spiritual guidance service. With a strong background in Energy Healing like Reiki, Pranic, and Angel Coaching ",
    replies: [
      {
        user: "user 2",
        avatar: "",
        commentedAt: new Date().toLocaleString,
        content:
          "Akash is the Founder of Super-Conscious Tribe which provides healing, coaching, and spiritual guidance service. With a strong background in Energy Healing like Reiki, Pranic, and Angel Coaching ",
        replies: [
          {
            user: "user 31",
            avatar: "",
            commentedAt: new Date().toLocaleString,
            content:
              "Akash is the Founder of Super-Conscious Tribe which provides healing, coaching, and spiritual guidance service. With a strong background in Energy Healing like Reiki, Pranic, and Angel Coaching ",
            replies: [
              {
                user: "user 41",
                avatar: "",
                commentedAt: new Date().toLocaleString,
                content:
                  "Akash is the Founder of Super-Conscious Tribe which provides healing, coaching, and spiritual guidance service. With a strong background in Energy Healing like Reiki, Pranic, and Angel Coaching ",
                replies: [
                  {
                    user: "user 51",
                    avatar: "",
                    commentedAt: new Date().toLocaleString,
                    content:
                      "Akash is the Founder of Super-Conscious Tribe which provides healing, coaching, and spiritual guidance service. With a strong background in Energy Healing like Reiki, Pranic, and Angel Coaching ",
                    replies: [
                      {
                        user: "user 61",
                        avatar: "",
                        commentedAt: new Date().toLocaleString,
                        content:
                          "Akash is the Founder of Super-Conscious Tribe which provides healing, coaching, and spiritual guidance service. With a strong background in Energy Healing like Reiki, Pranic, and Angel Coaching ",
                        replies: [
                          {
                            user: "user 71",
                            avatar: "",
                            commentedAt: new Date().toLocaleString,
                            content:
                              "Akash is the Founder of Super-Conscious Tribe which provides healing, coaching, and spiritual guidance service. With a strong background in Energy Healing like Reiki, Pranic, and Angel Coaching ",
                            replies: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },

      {
        user: "user 3",
        avatar: "",
        commentedAt: new Date().toLocaleString,
        content:
          "Akash is the Founder of Super-Conscious Tribe which provides healing, coaching, and spiritual guidance service. With a strong background in Energy Healing like Reiki, Pranic, and Angel Coaching ",
        replies: [],
      },
    ],
  },
  {
    user: "user 11",
    avatar: "",
    commentedAt: new Date().toLocaleString,
    content:
      "Akash is the Founder of Super-Conscious Tribe which provides healing, coaching, and spiritual guidance service. With a strong background in Energy Healing like Reiki, Pranic, and Angel Coaching ",
    replies: [
      {
        user: "user 12",
        avatar: "",
        commentedAt: new Date().toLocaleString,
        content:
          "Akash is the Founder of Super-Conscious Tribe which provides healing, coaching, and spiritual guidance service. With a strong background in Energy Healing like Reiki, Pranic, and Angel Coaching ",
        replies: [],
      },
    ],
  },
  {
    user: "user no replies",
    avatar: "",
    commentedAt: new Date().toLocaleString,
    content:
      "Akash is the Founder of Super-Conscious Tribe which provides healing, coaching, and spiritual guidance service. With a strong background in Energy Healing like Reiki, Pranic, and Angel Coaching ",
    replies: [],
  },
];
const PRIMARY_COLOR = "#EDECEC";
const SECONDARY_COLOR = "#9D78BD";
const VideoListItem = ({ videoItem, handleVideoChange, currentlyPlaying }) => {
  return (
    <ListItem
      disablePadding
      button
      onClick={() => {
        handleVideoChange(videoItem);
      }}
      sx={{
        backgroundColor:
          currentlyPlaying === videoItem.id
            ? alpha(PRIMARY_COLOR, 0.75)
            : "#fff",
        paddingBlock: 2,
      }}
    >
      <ListItemIcon
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "0.3rem",
          pr: 2,
        }}
      >
        <Box
          sx={{
            width: "24px",
            display: "grid",
            placeContent: "center",
          }}
        >
          {currentlyPlaying === videoItem.id && (
            <PlayArrowIcon
              sx={{
                padding: 0,
                margin: 0,
                color: SECONDARY_COLOR,
              }}
            />
          )}
        </Box>
        <img
          alt={videoItem.title}
          src={videoItem.thumb}
          style={{
            width: "100%",
            maxWidth: "80px",
            objectFit: "cover",
            aspectRatio: "16/9",
            borderRadius: "10px",
          }}
        />
      </ListItemIcon>
      <ListItemText
        primary={videoItem.title}
        secondary={
          <Typography
            component={"p"}
            sx={{
              fontSize: "12px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: "15rem",
            }}
          >
            {videoItem.description}
          </Typography>
        }
      ></ListItemText>
    </ListItem>
  );
};

const RecordingPlaylist = ({ setVideoPlaying }) => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState("0");

  const handleVideoChange = (item) => {
    if (!item?.id || item?.id === currentlyPlaying) return;
    setCurrentlyPlaying(item?.id);
    setVideoPlaying(item?.sources[0]);
  };

  return (
    <Box
      sx={{
        boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.25)",
        borderRadius: "5px",
        overflow: "hidden",
      }}
    >
      <Typography
        variant="h6"
        textAlign={"center"}
        paddingY={1}
        sx={{
          backgroundColor: "#E8ECF7",
        }}
      >
        Next Courses playlist
      </Typography>
      <List
        sx={{
          "&::-webkit-scrollbar": {
            width: "5px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "lightgrey",
          },
        }}
      >
        {Array.isArray(videoList) &&
          videoList.map((video) => (
            <VideoListItem
              key={video.id}
              handleVideoChange={handleVideoChange}
              videoItem={video}
              currentlyPlaying={currentlyPlaying}
            />
          ))}
      </List>
    </Box>
  );
};

const Recording = () => {
  const [videoPlaying, setVideoPlaying] = useState("");
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        md={8}
        sx={{
          pr: {
            md: 3,
            xs: 0,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <video
            src={videoPlaying}
            width="100%"
            controls={true}
            style={{
              aspectRatio: "16 / 9",
            }}
            // autoplay="true"
          />
        </Box>
        <Box>
          <VideoComment commentData={commentData} />
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <RecordingPlaylist setVideoPlaying={setVideoPlaying} />
      </Grid>
    </Grid>
  );
};

export default Recording;
