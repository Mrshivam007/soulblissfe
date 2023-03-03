import {
  alpha,
  Avatar,
  Badge,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { memo, useState } from "react";
import { PRIMARY_COLOR } from ".";

const ChatRoomHandle = ({
  userName,
  id,
  avatar,
  unseenCount = 0,
  handleRoomChange,
  activeRoom,
}) => {
  const [unseenMessageCount, setUnseenMessageCount] = useState(unseenCount);
  return (
    <ListItem
      button
      onClick={() => {
        setUnseenMessageCount(0);
        handleRoomChange({ id, avatar, userName });
      }}
      sx={{
        backgroundColor:
          activeRoom === id ? alpha(PRIMARY_COLOR, 0.75) : "#fff",
        paddingBlock: 2,
        borderBottom: `1px solid ${PRIMARY_COLOR}`,
      }}
    >
      <ListItemIcon>
        <Avatar alt={userName} src={avatar} />
      </ListItemIcon>
      <ListItemText primary={userName}></ListItemText>
      <ListItemText
        sx={{
          textAlign: "right",
        }}
        secondary={
          unseenMessageCount > 0 && (
            <Badge badgeContent={unseenMessageCount} color="error" />
          )
        }
      ></ListItemText>
    </ListItem>
  );
};

export default memo(ChatRoomHandle);
