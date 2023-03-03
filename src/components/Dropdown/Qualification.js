import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function QualificationSelect() {
  const [Qualification, setQualification] = React.useState("");

  const handleChange = (event) => {
    setQualification(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 20 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Qualification</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Qualification}
          label="Qualification"
          onChange={handleChange}
        >
          <MenuItem value={10}>Secondary</MenuItem>
          <MenuItem value={20}>Heigher Secondary</MenuItem>
          <MenuItem value={30}>Graduate</MenuItem>
          <MenuItem value={40}>Post Graduate</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
