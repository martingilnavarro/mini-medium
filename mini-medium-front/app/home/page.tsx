import Link from 'next/link'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Postlist from './postlist';

 
export default async function Page() {
 
 
  return (
  <>
    <Button variant="contained" href="/write">Write</Button>
       <br/><br/>
    <Button variant="contained" href="/">Log Out</Button>
        <br/><br/>
    < Postlist />
    
  </>                         
                            )
  
}
