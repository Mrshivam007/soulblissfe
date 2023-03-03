import React from "react";
import { StyledButton } from "./style";

export default function CustomButton(props) {
  const {
    size,
    variant,
    color,
    type,
    startIcon,
    endIcon,
    disabled,
    onClick,
    sx,
    fullWidth,
    children,
    className,
  } = props;
  return (
    <StyledButton
      size={size}
      color={color}
      variant={variant}
      type={type}
      endIcon={endIcon}
      startIcon={startIcon}
      disabled={disabled}
      onClick={onClick}
      sx={sx}
      fullWidth={fullWidth}
      className={className}
    >
      {children}
    </StyledButton>
  );
}
