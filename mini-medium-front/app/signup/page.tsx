
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React from 'react';



 
export default function Page() {
  return (
  <>

        <h1>Sign up</h1>
        <p>Enter your data to create an account</p>

       
        
        
        <form id="signUpForm" action="http://localhost:3001/user" method="post" >
        <TextField
          required
          id="first-name-input"
          label="First Name"
          name="firstName"
          variant="standard"
        />
        <br/>
        <TextField
          required
          id="last-name-input"
          label="Last Name"
          name="lastName"
          variant="standard"
        />
        <br/>
        <TextField
          required
          id="email-input"
          type="email"
          label="Email"
          name="email"
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
        <br/>
        <TextField
          required
          id="password-confirmation-input"
          label="Password Confirmation"
          
          type="password"
          variant="standard"
        />
        <br/><br/>
       <Button variant="contained" type="submit" >Sign up</Button>
       </form>

  
  </>
  )
}