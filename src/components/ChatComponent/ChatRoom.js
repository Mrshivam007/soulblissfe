import React from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  List,
  TextField,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Message from "./Message";
import { memo, useEffect, useLayoutEffect, useRef, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const RoomsChats = {
  1: [
    {
      senderId: "1",
      id: "1",
      sendAt: "08:30",
      content: "Hey man, What's up ?",
    },
    {
      senderId: "1",
      id: "2",
      sendAt: "03:30",
      content: "Still up?",
    },
    {
      senderId: "2",
      id: "3",
      sendAt: "05:30",
      content: "Yes, its cool here, wbu",
    },
    {
      senderId: "1",
      id: "4",
      sendAt: "04:30",
      content: "Heard there is new frontend framework!",
    },
    {
      senderId: "2",
      id: "5",
      sendAt: "12:30",
      content: "Yeah man, its in hype!!",
    },
    {
      senderId: "1",
      id: "11",
      sendAt: "08:30",
      content: "Hey man, What's up ?",
    },
    {
      senderId: "1",
      id: "12",
      sendAt: "03:30",
      content: "Still up?",
    },
    {
      senderId: "2",
      id: "13",
      sendAt: "05:30",
      content: "Yes, its cool here, wbu",
    },
    {
      senderId: "1",
      id: "14",
      sendAt: "04:30",
      content: "Heard there is new frontend framework!",
    },
    {
      senderId: "2",
      id: "15",
      sendAt: "12:30",
      content: "Yeah man, its in hype!!",
    },
    {
      senderId: "1",
      id: "21",
      sendAt: "08:30",
      content: "Hey man, What's up ?",
    },
    {
      senderId: "1",
      id: "22",
      sendAt: "03:30",
      content: "Still up?",
    },
    {
      senderId: "2",
      id: "23",
      sendAt: "05:30",
      content: "Yes, its cool here, wbu",
    },
    {
      senderId: "1",
      id: "24",
      sendAt: "04:30",
      content: "Heard there is new frontend framework!",
    },
    {
      senderId: "2",
      id: "25",
      sendAt: "12:30",
      content: "Yeah man, its in hype!!",
    },
  ],
  4: [
    {
      senderId: "4",
      id: "6",
      sendAt: "06:30",
      content: "Hey man, What's up ?",
    },
    {
      senderId: "4",
      id: "7",
      sendAt: "08:30",
      content: "Still up?",
    },
    {
      senderId: "2",
      id: "8",
      sendAt: "01:30",
      content: "Yes, its cool here, wbu",
    },
    {
      senderId: "4",
      id: "9",
      sendAt: "08:30",
      content: "Heard there is new frontend framework!",
    },
    {
      senderId: "2",
      id: "10",
      sendAt: "08:30",
      content: "Yeah man, its in hype!!",
    },
  ],
  2: [
    {
      senderId: "1",
      id: "11",
      sendAt: "08:30",
      content: "whatchya doin",
    },
    {
      senderId: "2",
      id: "12",
      sendAt: "04:30",
      content: "just chilling bro",
    },
    {
      senderId: "1",
      id: "13",
      sendAt: "08:30",
      content: "How about going out for a run",
    },
    {
      senderId: "2",
      id: "14",
      sendAt: "08:30",
      content: "Sounds cool meet me near park",
    },
  ],
  3: [
    {
      senderId: "1",
      id: "15",
      sendAt: "08:30",
      content: "whatchya doin",
    },
    {
      senderId: "3",
      id: "16",
      sendAt: "08:30",
      content: "just chilling bro",
    },
    {
      senderId: "1",
      id: "17",
      sendAt: "08:30",
      content: "How about going out for a run",
    },
    {
      senderId: "3",
      id: "18",
      sendAt: "08:30",
      content: "Sounds cool meet me near park",
    },
  ],
};

const PRIMARY_COLOR = "#E8ECF7";
const SECONDARY_COLOR = "#9D78BD";

const ChatRoom = ({ currentRoom, getBack }) => {
  const { id, avatar, userName } = currentRoom;
  const messages = RoomsChats[id];
  const [chatMessages, setChatMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const bottomRef = useRef(null);
  useEffect(() => {
    setChatMessages(messages || []);
  }, [messages, id]);

  useLayoutEffect(() => {
    bottomRef.current?.scrollIntoView();
  }, [chatMessages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputMessage.length === 0) return;
    const today = new Date();
    const currentTime = today.getHours() + ":" + today.getMinutes();
    setChatMessages((prev) => [
      ...prev,
      {
        senderId: id,
        content: inputMessage,
        sendAt: currentTime,
        id: today.toJSON(),
      },
    ]);
    setInputMessage("");
  };

  return (
    <>
      <Box
        sx={{
          background: PRIMARY_COLOR,
          display: "flex",
          padding: "0.7rem 2rem",
          paddingLeft: {
            xs: "0.5rem",
            md: "2rem",
          },
          alignItems: "center",
          gap: {
            xs: 1,
            md: 3,
          },
        }}
      >
        <IconButton
          onClick={getBack}
          sx={{
            display: {
              xs: "flex",
              md: "none",
            },
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ArrowBackIcon />
        </IconButton>
        <Avatar alt={userName} src={avatar} />
        <Typography variant="h6" component={"div"}>
          {userName}
        </Typography>
      </Box>
      <List
        sx={{
          height: "65vh",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: "5px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "lightgrey",
          },
        }}
      >
        {Array.isArray(chatMessages) &&
          chatMessages.map((message) => (
            <Message
              key={message.id}
              currentUser={message.senderId === id}
              message={message}
            />
          ))}
        <div ref={bottomRef} />
      </List>
      <Divider />
      <Grid
        component={"form"}
        onSubmit={handleSubmit}
        container
        style={{
          padding: "20px",
          background: PRIMARY_COLOR,
        }}
      >
        <Grid item xs={11}>
          <TextField
            id="message"
            name="message"
            label="Type a message"
            value={inputMessage}
            onChange={(e) => {
              setInputMessage(e.target.value);
            }}
            fullWidth
            sx={{
              backgroundColor: "#fff",
            }}
          />
        </Grid>
        <Grid item xs={1} align="right">
          <Button
            type="submit"
            aria-label="add"
            sx={{
              height: "100%",
            }}
          >
            <SendIcon sx={{ color: SECONDARY_COLOR }} />
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default memo(ChatRoom);
