import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
 
export default function Page() {
  return (
  <>
  <Grid container direction='column' alignItems='center' style={{ minHeight: '100vh', backgroundColor: '#FAFFFF' }}>

    

      <Typography variant="h4">Welcome to Mini Medium!</Typography>
      <br/><br/>
      <Typography>If you're new in this platform, create a user by clicking on "Sign up".</Typography>
      <br/>
      <Typography>If you already have an account, click on "Sign in"</Typography>
      <br/><br/>
       <Stack direction="row" spacing={2}>
       <Button variant="contained" href="/signup">Sign up</Button>
       <br/><br/>
       <Button variant="contained" href="/signin">Sign in</Button>
       </Stack>
 
    </Grid>
  </>
  )
}