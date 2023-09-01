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

        <h1>Welcome to Mini Medium!</h1>
        <p>If you're new in this platform, create a user by clicking on "Sign up".</p>
        <p>If you already have an account, click on "Sign in"</p>

       <Button variant="contained" href="/signup">Sign up</Button>
       <br/><br/>
       <Button variant="contained" href="/signin">Sign in</Button>
      </div>
    </Box>
  
  </>
  )
}