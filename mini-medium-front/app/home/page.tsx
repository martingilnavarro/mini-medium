import Button from '@mui/material/Button';
import Postlist from './postlist';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
 
export default async function Page() {
 
 
  return (
  <>
  <Stack direction="row" spacing={2}>
    <Button variant="text" href="/write">Write</Button>    
    <Button variant="text" href="/">Log Out</Button>
  </Stack>

  <Grid container direction='column' alignItems='center' 
  style={{ minHeight: '100vh' }}>
    < Postlist />
  </Grid> 
  </>                         
                            )
  
}
