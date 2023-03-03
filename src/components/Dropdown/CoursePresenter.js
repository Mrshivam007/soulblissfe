import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function CoursePresenter() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ width: "25ch"}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Presenter</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Admin</MenuItem>
          <MenuItem value={20}>Teacher</MenuItem>
          <MenuItem value={30}>Student</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
