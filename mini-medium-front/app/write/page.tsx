import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
 
export default function Page() {
  return (
  
<Grid container direction='column' alignItems='center' 
  style={{ minHeight: '100vh' }}>

  <Typography variant="h4">Your Post</Typography>
  <br/>
  <Typography>Write your post</Typography>
  <br/>

  <form id="postForm" action="http://localhost:3001/post" method="post" >
    <br/><br/>
    <TextField
      required
      id="author-input"
      label="Author ID"
      name="authorId"
      variant="standard"
    />
    <br/>
    <TextField
      required
      id="title-input"
      label="Title"
      name="title"
      variant="standard"
    />
    <br/>
    <TextField
      required
      id="content-input"
      label="Tell your story"
      name="content"
      variant="standard"
      type="textArea"
      rows={4}
      multiline= {true}
    />
    <br/> <br/>
    
    <Button variant="contained" type="submit" >Publish</Button>
  </form>

</Grid>
  
  )
}