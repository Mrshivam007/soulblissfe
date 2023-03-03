import React from "react";
import { FormControl, MenuItem, Select } from "@mui/material";

const SortByFilter = () => {
  const [selectedOption, setSelectedOption] = React.useState("newest");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <FormControl sx={{ minWidth: 150 }}>
      <Select
        value={selectedOption}
        onChange={handleChange}
        displayEmpty
        placeholder="Sort by"
        inputProps={{
          "aria-label": "sort by",
          sx: {
            paddingY: "6px",
            border: "1px solid #E5E3F5",
            borderRadius: "5px",
            fontSize: "12px",
          },
        }}
        sx={{
          ".MuiOutlinedInput-notchedOutline": { border: 0 },
        }}
        renderValue={(value) => {
          return (
            <>
              <span
                style={{
                  color: "#7E7E7E",
                }}
              >
                Sort by : &nbsp;
              </span>
              <span
                style={{
                  color: "#9D78BD",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                }}
              >
                {value || ""}
              </span>
            </>
          );
        }}
      >
        <MenuItem value={"newest"}>Newest</MenuItem>
        <MenuItem value={"oldest"}>Oldest</MenuItem>
      </Select>
    </FormControl>
  );
};
export default SortByFilter;
