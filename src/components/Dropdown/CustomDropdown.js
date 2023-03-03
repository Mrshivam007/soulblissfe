import React, { useState } from "react";
import {
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Box
} from "@mui/material";

const CustomDropdown = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
        <Box sx={{ width: '25ch', m: 1}}>

    <FormControl fullWidth>
      <InputLabel id="custom-dropdown-label">Payment Option</InputLabel>
      <Select
        labelId="custom-dropdown-label"
        id="custom-dropdown"
        value={selectedValue}
        onChange={handleChange}
        input={<Input />}
      >
        <MenuItem value="option1">Free</MenuItem>
        <MenuItem value="option2">Demo</MenuItem>
        <MenuItem value="custom">Paid</MenuItem>
      </Select>
      {selectedValue === "custom" && <Input sx={{marginTop: '2vh'}} placeholder="Price in Rupee" />}
    </FormControl>
    </Box>
  );
};

export default CustomDropdown;
