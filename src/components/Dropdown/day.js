import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function DaySelect() {
  const [Day, setDay] = React.useState("");

  const handleChange = (event) => {
    setDay(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 20 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Day</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Day}
          label="Day"
          onChange={handleChange}
        >
          <MenuItem value={10}>Monday</MenuItem>
          <MenuItem value={20}>Tuesday</MenuItem>
          <MenuItem value={30}>Wednesday</MenuItem>
          <MenuItem value={40}>Thusday</MenuItem>
          <MenuItem value={50}>Friday</MenuItem>
          <MenuItem value={60}>Saturday</MenuItem>
          <MenuItem value={70}>Sunday</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
