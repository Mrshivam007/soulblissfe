import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectClass() {
  const [Class, setClass] = React.useState("");

  const handleChange = (event) => {
    setClass(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 20 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Class</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Class}
          label="Class"
          onChange={handleChange}
        >
          <MenuItem value={10}>Class1</MenuItem>
          <MenuItem value={20}>Class2</MenuItem>
          <MenuItem value={30}>Class3</MenuItem>
          <MenuItem value={40}>Class4</MenuItem>
          <MenuItem value={50}>Class5</MenuItem>
          <MenuItem value={60}>Class6</MenuItem>
          <MenuItem value={70}>Class7</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
