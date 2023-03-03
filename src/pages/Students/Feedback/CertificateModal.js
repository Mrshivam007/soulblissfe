import React, { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";
import { Box, Button, Modal, Typography } from "@mui/material";
import imgAsset from "../../../assets/images/Certificate.svg";
import CloseIcon from "@mui/icons-material/Close";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", md: "100%" },
  maxWidth: 500,
  boxShadow: 24,
  padding: "1rem ",
  background: "linear-gradient(180deg, #9D78BD 0%, #8DA0D8 100%)",
  borderRadius: "15px",
  display: "flex",
  justifyContent: "center",
};

const CertificateModal = ({ handleClose, open }) => {
  // ReactConfetti Start
  const [windowDimension, setDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [confettiBtn, setConfettiBtn] = useState(false);
  const detectSize = () => {
    setDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimension]);
  // ReactConfetti END
  return (
    <>
      <Box>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} color="#fff">
            <Box maxWidth={"25rem"} textAlign="center" paddingY={"1rem"}>
              <Button
                sx={{
                  position: "absolute",
                  right: { xs: "1%", md: "5%" },
                  top: { xs: "1%", md: "5%" } ,
                }}
                onClick={handleClose}
              >
                <CloseIcon
                  sx={{
                    fontSize: "2rem",
                    color: "#fff",
                  }}
                />
              </Button>
              <Typography
                id="modal-modal-title"
                variant="h5"
                component="h2"
                gutterBottom
              >
                Download certificate
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    padding: "2rem 5rem",
                    background: "#D5E2FA",
                    borderRadius: "18px 18px 18px 0px",
                  }}
                >
                  <img
                    src={imgAsset}
                    alt="img"
                    style={{
                      width: "100%",
                      maxWidth: "5rem",
                    }}
                  />
                </Box>
              </Box>

              <Typography
                id="modal-modal-description"
                variant="h6"
                component="h2"
                paddingY={"1rem"}
                textAlign="center"
              >
                Hello There !
                <br />
                You have successfully completed the class and also you have
                submitted the feedback please download you certificate from here
              </Typography>
              <Button
                sx={{
                  color: "#000",
                  background: "#D5E2FA",
                  paddingBlock: "1rem",
                  borderRadius: "10px",
                  "&:hover": {
                    background: "#D5E2FA",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                  },
                }}
                fullWidth
                onClick={() => setConfettiBtn(!confettiBtn)}
              >
                Download
              </Button>
            </Box>
          </Box>
        </Modal>
        {confettiBtn && (
          <ReactConfetti
            width={windowDimension.width}
            height={windowDimension.height}
            tweenDuration={1000}
          />
        )}
      </Box>
    </>
  );
};

export default CertificateModal;
