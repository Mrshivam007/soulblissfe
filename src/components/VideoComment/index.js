import { Avatar, Box, Button, Grid, Input, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import React, { useState } from "react";

// const PRIMARY_COLOR = "#EDECEC";
const SECONDARY_COLOR = "#9D78BD";

const ReplyInput = ({ setShowReplyInput }) => {
  const [inputReply, setInputReply] = useState("");
  return (
    <Box>
      <Input
        id="reply"
        name="reply"
        placeholder="Add a reply"
        value={inputReply}
        onChange={(e) => {
          setInputReply(e.target.value);
        }}
        fullWidth
      />
      <Box display={"flex"} justifyContent="end">
        <Button
          color="secondary"
          sx={{ textTransform: "none" }}
          onClick={() => setShowReplyInput(false)}
        >
          Cancel
        </Button>
        <Button
          color="secondary"
          sx={{ textTransform: "none" }}
          disabled={!inputReply}
        >
          Reply
        </Button>
      </Box>
    </Box>
  );
};

const Comment = ({ item }) => {
  const [viewReplies, setViewReplies] = useState(false);
  const [showReplyInput, setShowReplyInput] = useState(false);
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: " 40px 1fr",
        columnGap: "1rem",
        paddingBlock: 1,
      }}
    >
      <Avatar src={item.avatar} alt={item.user} />
      <Box>
        <Typography variant="body1">{item.user}</Typography>
        <Typography variant="body2"> {item.content}</Typography>
        <Button
          size="small"
          color="secondary"
          sx={{
            textTransform: "none",
          }}
          onClick={() => setShowReplyInput(true)}
        >
          Reply
        </Button>
        {showReplyInput && <ReplyInput setShowReplyInput={setShowReplyInput} />}
        {Array.isArray(item?.replies) && item?.replies.length > 0 && (
          <Button
            size="small"
            color="secondary"
            onClick={() => setViewReplies((prev) => !prev)}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              textTransform: "none",
            }}
          >
            <ArrowDropDownIcon
              sx={{
                color: SECONDARY_COLOR,
                rotate: viewReplies ? "180deg" : "0",
                transition: "rotate 100ms ease-in",
              }}
            />
            {viewReplies ? "Hide replies" : "View replies"}
          </Button>
        )}
        {viewReplies && <Comments items={item?.replies} />}
      </Box>
    </Box>
  );
};

const Comments = ({ items }) => {
  return (
    <Box>
      {items.map((item, idx) => (
        <Comment key={idx} item={item} />
      ))}
    </Box>
  );
};

const VideoComment = ({ commentData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [showCommentButton, setShowCommentButton] = useState(false);
  const [commentInput, setCommentInput] = useState("");

  const handleCancel = () => {
    setShowCommentButton(false);
    setCommentInput("");
  };

  return (
    <Box>
      <Grid
        component={"form"}
        onSubmit={handleSubmit}
        container
        style={{
          paddingBlock: "20px",
          gap: "1rem",
        }}
      >
        <Avatar src={""} alt="user" />

        <Grid flexGrow={1}>
          <Box>
            <Input
              id="message"
              name="message"
              placeholder="Add a comment"
              onClick={() => setShowCommentButton(true)}
              value={commentInput}
              onChange={(e) => {
                setCommentInput(e.target.value);
              }}
              fullWidth
            />
          </Box>
          {showCommentButton && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
              }}
            >
              <Button
                color="secondary"
                onClick={handleCancel}
                aria-label="cancel"
                sx={{
                  height: "100%",
                }}
              >
                Cancel
              </Button>
              <Button
                color="secondary"
                type="submit"
                aria-label="add comment"
                sx={{
                  height: "100%",
                }}
                disabled={!commentInput}
              >
                Comment
              </Button>
            </Box>
          )}
        </Grid>
      </Grid>
      <Comments items={commentData} />
    </Box>
  );
};

export default VideoComment;
