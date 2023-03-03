import React, { useState } from "react";
import Box from "@mui/material/Box";
import {InputLabel, Input} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";


export default function PriceSelect() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Box sx={{ width: "25ch", m: 1 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Price</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedValue}
          label="selectedValue"
          onChange={handleChange}
          input={<Input />}
        >
          <MenuItem value="option1">Free</MenuItem>
          <MenuItem value="option2">Demo</MenuItem>
          <MenuItem value="custom">Paid</MenuItem>
        </Select>
        {selectedValue === "custom" && <Input placeholder="Price in Rupee" />}
      </FormControl>
    </Box>
  );
}
