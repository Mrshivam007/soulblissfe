import { Grid, Card, CardContent, FormControl, TextField, Typography } from "@mui/material";
import ProfileCard from "../Profile/ProfileCard";
import Account from "./Account";

const TeacherAccount = () => {
    return (
      <>
        <Grid container spacing={3}>
            <Grid item md={4} width={'100%'}>
                <ProfileCard />
            </Grid>
          <Grid item md={5} width={'100%'}>
          <Account />
          </Grid>
        </Grid>
      </>
    );
}
 
export default TeacherAccount;