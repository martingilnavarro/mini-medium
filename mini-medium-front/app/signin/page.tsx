import Link from 'next/link'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
 
export default function Page() {
  return (
  <>
  <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>

        <h1>Sign in with email</h1>
        <p>Enter the email and password of your account</p>
        
        <br/>
        <TextField
          required
          id="your-email-input"
          type="email"
          label="Your email"
          variant="standard"
        />
        <br/>
        <TextField
          required
          id="password-input"
          label="Password"
          variant="standard"
        />
        <br/> <br/>
    
       <Button variant="contained" href="./home">Sign in</Button>
      </div>
    </Box>
  
  </>
  )
}