"use client"
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import React, {useState} from 'react';

export default function Page() {

  const [email, setEmail] = useState('') // useState to store Email address of the user
  const [password, setPassword] = useState('') // useState to store Password

  return (
  
  <Grid container direction='column' alignItems='center' 
  style={{ minHeight: '100vh' }}>
 
    <Typography variant="h4">Sign in with email</Typography>
    <br/>
    <Typography>Enter the email and password of your account</Typography>
    <br/>

    <form id="signInForm" action="http://localhost:3001/signin" method='post'>
      <TextField
        required
        error
        id="email-input"
        type="email"
        label="Your email"
        defaultValue="notvalid"
        helperText="Please enter valid e-mail and password."
        name="email"     
        variant="standard"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br/>
      <TextField
        required
        id="password-input"
        label="Password"
        name="password"
        value={password}
        type="password"
        variant="standard"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br/><br/>
    
      <Button variant="contained" type="submit" fullWidth>Sign in</Button>
    </form>
  </Grid>

  )
}