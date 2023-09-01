import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
 
export default function Page() {
  return (
  <>
  <Grid container direction='column' alignItems='center' 
  style={{ minHeight: '100vh', backgroundColor: '#FAFFFF' }}>
 
 <Typography variant="h4">Sign in with email</Typography>
  <br/>
  <Typography>Enter the email and password of your account</Typography>
  <br/>

  <form id="signInForm">
        <TextField
          required
          id="your-email-input"
          type="email"
          name="email"
          label="Your email"
          variant="standard"
        />
        <br/>
        <TextField
          required
          id="password-input"
          label="Password"
          name="password"
          type="password"
          variant="standard"
        />
        <br/> <br/>
    
       <Button variant="contained" href="./home">Sign in</Button>
      </form>
    </Grid>
  </>
  )
}