import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledCard } from "./style";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import card from "../../../assets/images/card_img.svg";
import attendance_icon from "../../../assets/images/attendance_icon.svg";

export default function CustomCard(props) {
  const { head, attendance, date, time, taughtBy, btntext, onClick, status } =
    props || {};
  const getUserType = localStorage.getItem("userType");
    let navigate = useNavigate();
  const clickHandler = () => {
    navigate("/trending/UpcommingClass/1");
  };
  return (
    <>
      <StyledCard btntext={btntext}>
        <Card
          className="cardcontainer"
          sx={{
            backgroundColor: "#fffff",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            position: "relative",
          }}
        >
          <div>
            <img src={card} width="100%" alt="card" />
            {status === "free" && <Button className="livebtn">Free</Button>}
            <CardContent
              sx={{
                pt: 1,
                paddingBottom: "16px !important",
              }}
            >
              <Typography gutterBottom fontSize={"14px"} component="div">
                {head}
              </Typography>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <img src={attendance_icon} alt="" width={30} />
                  <Typography variant="caption" sx={{ ml: 1 }}>
                    {attendance}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <AccessTimeFilledIcon />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start",
                    }}
                  >
                    <Typography variant="caption" sx={{ ml: 1 }}>
                      {time}
                    </Typography>
                    <Typography variant="caption" sx={{ ml: 1 }}>
                      {date}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              {getUserType === "student" ? (
                <>
                  <Typography variant="body2">Taught By</Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mt: 1,
                      alignItems: "center",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      {/* <Avatar
                        sx={{ width: "28px", height: "28px" }}
                        alt="Test User"
                        src="https://material-ui.com/static/images/avatar/7.jpg"
                      /> */}
                      {/* <Typography variant="body2" sx={{ ml: 2 }}>
                        {taughtBy}
                      </Typography> */}
                      <Button
                        // className="commonbtn"
                        variant="contained"
                        size="small"
                        sx={{
                          fontSize: "10px",
                          textTransform: "capitalize",
                          boxShadow: "none",
                        }}
                        onClick={onClick}
                      >
                        {taughtBy}
                      </Button>
                    </Box>

                    <Button
                      // className="commonbtn"
                      variant="contained"
                      size="small"
                      sx={{
                        fontSize: "10px",
                        textTransform: "capitalize",
                        boxShadow: "none",
                      }}
                      onClick={clickHandler}
                    >
                      {btntext}
                    </Button>
                  </Box>
                </>
              ) : (
                <Button className="commonbtn" onClick={onClick}>
                  {btntext}
                </Button>
              )}
            </CardContent>
          </div>
        </Card>
      </StyledCard>
    </>
  );
}
