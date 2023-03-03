import styled from "styled-components/macro";
import Button from "@mui/material/Button";

const StyledButton = styled(Button)({
  height: "40px",
  // padding: '0 16px',
  textTransform: "capitalize !important",
  fontWeight: "500",
  whiteSpace: "nowrap",
  background: "#9D78BD !important",
  "&:disabled": {
    backgroundColor: "#D2D5D6 !important",
    color: "white",
    
  },
});

export { StyledButton };
