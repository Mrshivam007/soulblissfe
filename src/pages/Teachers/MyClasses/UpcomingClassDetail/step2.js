import React from "react";
import { Typography, Box, Button, Stack } from "@mui/material";
import FileTable from "../../../../components/FileTable";
import PrevClass from "../../../../components/PrevClassList";
import { UploadContent } from "../../../../components/UploadContent";

const Step2 = (props) => {
  const { onPrev, onSubmit } = props;
  const [formData, setFormData] = React.useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePrevClick = () => {
    onPrev(formData);
  };

  const handleSubmitClick = () => {
    onSubmit(formData);
  };

  return (
    // <div>
    //   <h1>Step 2</h1>
    //   <label htmlFor="address">Address:</label>
    //   <input
    //     type="text"
    //     id="address"
    //     name="address"
    //     onChange={handleInputChange}
    //   />
    //   <br />
    //   <label htmlFor="phone">Phone:</label>
    //   <input type="tel" id="phone" name="phone" onChange={handleInputChange} />
    //   <br />
    //   <button onClick={handlePrevClick}>Previous</button>
    //   <button onClick={handleSubmitClick}>Submit</button>
    // </div>
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            // md: "repeat(3, 1fr)",
          },
          paddingRight: { xs: 3, lg: 3 },
          gap: 1,
          pb: 3,
        }}
      >
        <Typography variant="h6" fontWeight={"bold"} marginY={2}>
          Upload file
          <UploadContent />
        </Typography>
        <Typography variant="h6" fontWeight={"bold"} marginY={2}>
          Select class
          <PrevClass />
        </Typography>
      </Box>

      <Typography variant="h6" fontWeight={"bold"} marginY={2}>
        Your Files
      </Typography>
      <FileTable />
      <Stack spacing={2} direction="row">
      <Button
        variant="contained"
        fullWidth
        sx={{
          textTransform: "none",
        }}
        onClick={handlePrevClick}
      >
        Previous
      </Button>
      <Button
        variant="contained"
        fullWidth
        sx={{
          textTransform: "none",
        }}
        onClick={handleSubmitClick}
      >
        Submit
      </Button>
      </Stack>
    </>
  );
};

export default Step2;
