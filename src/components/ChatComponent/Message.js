import React from "react";
import { Grid, ListItem, ListItemText } from "@mui/material";
import { alpha } from "@mui/material";
import { PRIMARY_COLOR, SECONDARY_COLOR } from ".";

const Message = ({ message, currentUser }) => {
  return (
    <ListItem>
      <Grid container justifyContent={currentUser ? "flex-end" : "flex-start"}>
        <Grid
          item
          borderRadius={1}
          sx={{
            paddingInline: 1,
            display: "flex",
            maxWidth: {
              xs: "80%",
              md: "45%",
            },
            backgroundColor: currentUser
              ? alpha(SECONDARY_COLOR, 0.4)
              : alpha(PRIMARY_COLOR, 0.6),
          }}
        >
          <ListItemText
            sx={{
              wordBreak: "break-word",
            }}
            primary={message.content}
          ></ListItemText>
          <ListItemText
            secondary={message.sendAt || "09:30"}
            sx={{
              minWidth: "auto",
              paddingLeft: 1,
              alignSelf: "end",
            }}
            secondaryTypographyProps={{
              noWrap: true,
              fontSize: 12,
              lineHeight: "10px",
            }}
          ></ListItemText>
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default Message;
