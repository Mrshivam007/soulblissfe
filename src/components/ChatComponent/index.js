import React from "react";
import {
  Avatar,
  Box,
  Grid,
  InputAdornment,
  InputBase,
  List,
} from "@mui/material";
import { styled, alpha } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import ChatRoomHandle from "./ChatRoomHandle";
import ChatRoom from "./ChatRoom";
export const PRIMARY_COLOR = "#E8ECF7";
export const SECONDARY_COLOR = "#9D78BD";

const ChatRoomsList = [
  {
    userName: "Test User",
    unseenCount: 3,
    id: "1",
    avatar: "https://material-ui.com/static/images/avatar/1.jpg",
  },
  {
    userName: "Test User 2",
    unseenCount: 3,
    id: "2",
    avatar: "https://material-ui.com/static/images/avatar/2.jpg",
  },
  {
    userName: "Test User 3",
    unseenCount: 3,
    id: "3",
    avatar: "https://material-ui.com/static/images/avatar/3.jpg",
  },
  {
    userName: "Test User 4",
    unseenCount: 3,
    id: "4",
    avatar: "https://material-ui.com/static/images/avatar/4.jpg",
  },
  {
    userName: "Test User 5",
    unseenCount: 3,
    id: "5",
    avatar: "https://material-ui.com/static/images/avatar/5.jpg",
  },
  {
    userName: "Test User",
    unseenCount: 3,
    id: "11",
    avatar: "https://material-ui.com/static/images/avatar/1.jpg",
  },
  {
    userName: "Test User 2",
    unseenCount: 3,
    id: "12",
    avatar: "https://material-ui.com/static/images/avatar/2.jpg",
  },
  {
    userName: "Test User 3",
    unseenCount: 3,
    id: "13",
    avatar: "https://material-ui.com/static/images/avatar/3.jpg",
  },
  {
    userName: "Test User 4",
    unseenCount: 3,
    id: "14",
    avatar: "https://material-ui.com/static/images/avatar/4.jpg",
  },
  {
    userName: "Test User 5",
    unseenCount: 3,
    id: "15",
    avatar: "https://material-ui.com/static/images/avatar/5.jpg",
  },
];

const SearchInput = styled(InputBase)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  paddingBlock: 2,
  marginBlock: 10,
  backgroundColor: PRIMARY_COLOR,
  "&:hover": {
    backgroundColor: alpha(PRIMARY_COLOR, 0.55),
  },
  " &:focus-within": {
    outline: `1px solid ${SECONDARY_COLOR}`,
  },
  width: "100%",
}));

const ClassesChat = () => {
  const [currentRoom, setCurrentRoom] = useState({});
  const [activeRoom, setActiveRoom] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const handleRoomChange = (room) => {
    setCurrentRoom(room);
    setActiveRoom(room.id);
  };
  const getBack = () => {
    setActiveRoom("");
  };
  const filter = new RegExp(searchInput, "i");
  const filteredChatHandles = ChatRoomsList.filter((room) =>
    room.userName.match(filter)
  );
  return (
    <Grid container width="100%">
      <Grid
        item
        xs={12}
        md={4}
        sx={{
          background: "#fff",
          borderRight: `1px solid ${PRIMARY_COLOR}`,
          display: {
            xs: activeRoom ? "none" : "block",
            md: "block",
          },
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            padding: "0.7rem 1rem",
            background: PRIMARY_COLOR,
            borderRight: `1px solid #fff`,
          }}
        >
          <Avatar
            alt="Test User"
            src="https://material-ui.com/static/images/avatar/7.jpg"
          />
        </Grid>
        <Box
          sx={{
            paddingInline: 2,
            borderBottom: `1px solid ${PRIMARY_COLOR}`,
          }}
        >
          <SearchInput
            id="search-input"
            placeholder="Search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon sx={{ color: SECONDARY_COLOR, paddingLeft: 1 }} />
              </InputAdornment>
            }
          />
        </Box>
        <List
          sx={{
            height: "70vh",
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              width: "5px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "lightgrey",
            },
          }}
        >
          {filteredChatHandles.map((room) => (
            <ChatRoomHandle
              key={room.id}
              userName={room.userName}
              id={room.id}
              avatar={room.avatar}
              unseenCount={room.unseenCount}
              handleRoomChange={handleRoomChange}
              activeRoom={activeRoom}
            />
          ))}
        </List>
      </Grid>
      <Grid
        item
        xs={12}
        md={8}
        sx={{
          display: {
            xs: !activeRoom ? "none" : "block",
            md: "block",
          },
          flexGrow: {
            xs: 1,
            md: 0,
          },
        }}
      >
        {currentRoom?.id && (
          <ChatRoom currentRoom={currentRoom} getBack={getBack} />
        )}
      </Grid>
    </Grid>
  );
};

export default ClassesChat;
