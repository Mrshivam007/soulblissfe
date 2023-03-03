import {
  Grid,
  Card,
  CardContent,
  FormControl,
  TextField,
  Typography,
  Button
} from "@mui/material";

const Account = () => {
  return (
    <>
      <Card
        variant="outlined"
        sx={{ height: "100%", minHeight: "76vh", width: "100%" }}
      >
        <form>
          <CardContent
            sx={{
              p: 3,
              maxHeight: { md: "40vh" },
              textAlign: { xs: "center", md: "start" },
            }}
          >
            {/* <FormControl fullWidth> */}
              {/* <Grid
                container
                direction={{ xs: "column", md: "row" }}
                columnSpacing={5}
                rowSpacing={3}
              > */}
              <Typography variant="h2" paddingBottom={3}>
                Account Details
              </Typography>
              <Grid component="form">
                <Typography fontWeight={"bold"} paddingBottom={1}>
                  Mobile Number <br />
                </Typography>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Mobile Number"
                  variant="outlined"
                  sx={{ paddingBottom: "24px" }}
                />
              </Grid>
              <Grid component="form">
                <Typography fontWeight={"bold"} paddingBottom={1}>
                  Email Id <br />
                </Typography>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Email id"
                  variant="outlined"
                  sx={{ paddingBottom: "24px" }}
                />
              </Grid>
              <Grid component="form">
                <Typography fontWeight={"bold"} paddingBottom={1}>
                  Password <br />
                </Typography>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  sx={{ paddingBottom: "24px" }}
                />
              </Grid>
              {/* BUTTON */}
              <Grid
                container
                justifyContent={{ xs: "center", md: "flex-end" }}
                item
                xs={6}
              >
                <Button
                  sx={{ p: "1rem 2rem", my: 2, height: "3rem" }}
                  component="button"
                  size="large"
                  variant="contained"
                  color="secondary"
                //   onClick={changeButton}
                >
                  {/* {edit.isEdit === false ? "UPDATE" : "EDIT"} */}
                  Edit
                </Button>
              </Grid>
              {/* </Grid> */}
            {/* </FormControl> */}
          </CardContent>
        </form>
      </Card>
    </>
  );
};

export default Account;
