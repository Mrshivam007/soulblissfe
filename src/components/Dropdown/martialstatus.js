import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function MartialSelect() {
  const [Martial, setMartial] = React.useState("");

  const handleChange = (event) => {
    setMartial(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 20 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Martial</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Martial}
          label="Martial"
          onChange={handleChange}
        >
          <MenuItem value={10}>Betchlor</MenuItem>
          <MenuItem value={20}>Married</MenuItem>
          <MenuItem value={30}>Planning</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
