import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, Modal, Typography } from "@mui/material";
import joinBefore from "../../assets/images/joinBefore_img.svg";

export default function JoinBefore({ openJoinBefore, closeJoinBefore }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "90%", md: "100%" },
    maxWidth: 800,
    boxShadow: 24,
    padding: "1rem ",
    background: "#fff",
  };
  return (
    <Modal
      open={openJoinBefore}
      onClose={closeJoinBefore}
      aria-labelledby="modal-registeration"
    >
      <Box sx={style}>
        <Box textAlign="center" paddingY={"1rem"}>
          <Button
            sx={{
              position: "absolute",
              right: "2%",
              top: "2%",
            }}
            onClick={closeJoinBefore}
          >
            <CloseIcon
              sx={{
                fontSize: "2rem",
                color: "#000",
              }}
            />
          </Button>
          <Box
            sx={{
              width: {
                xs: "275px",
                md: "450px",
              },
              height: {
                xs: "275px",
                md: "450px",
              },
              margin: "0 auto",
            }}
          >
            <img src={joinBefore} className="w-100" alt="" />
          </Box>
          <Typography sx={{ fontWeight: 700, fontSIze: "25px" }}>
            You have join before time so please wait or come back on the given
            time
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
}
