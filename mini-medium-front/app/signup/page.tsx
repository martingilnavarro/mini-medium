"use client"
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, {useState} from 'react';
import Typography from '@mui/material/Typography';

export default function Page() {
 
  const [firstName, setFirstName] = useState('') // useState to store First Name
  const [lastName, setLastName] = useState('') // useState to store Last Name
  const [email, setEmail] = useState('') // useState to store Email address of the user
  const [password, setPassword] = useState('') // useState to store Password
  const [passwordConfirmation, setPasswordConfirmation] = useState('') // useState to store Password
  
  return (
  
  <Grid container direction='column' alignItems='center' 
  style={{ minHeight: '100vh' }}>

    <Typography variant="h4">Sign up</Typography>
    <br/>
    <Typography>Enter your data to create an account.</Typography>
    <br/>
   
    <form id="signUpForm" action="http://localhost:3001/user" method="post" >
      <TextField 
        required
        id="first-name-input"
        label="First Name"
        name="firstName"
        value={firstName}
        variant="standard"

        onChange={(e) => setFirstName(e.target.value)}
      />
      <br/>
      <TextField
        required
        id="last-name-input"
        label="Last Name"
        name="lastName"
        value={lastName}
        variant="standard"
        onChange={(e) => setLastName(e.target.value)}
      />
      <br/>
      <TextField
       required
       id="email-input"
       type="email"
       label="Email"
       name="email"
       value={email}
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
      <br/>
      <TextField
        required
        id="password-confirmation-input"
        label="Password Confirmation" 
        type="password"
        value={passwordConfirmation}
        variant="standard"
        onChange={(e) => setPasswordConfirmation(e.target.value)}
      />
      <br/><br/>
      <Button variant="contained" type="submit" fullWidth >Sign up</Button>
    </form>

  </Grid>
  
  )
}