import Link from 'next/link'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
 
export default function Page() {
  return (
  <>


        <h1>Your Post</h1>
        <p>Write your post</p>
        
        <form id="postForm" action="http://localhost:3001/post" method="post" >
        <br/>

        <br/>
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
          multiline= {true}
        />
        <br/> <br/>
    
        <Button variant="contained" type="submit" >Publish</Button>
        </form>

  
  </>
  )
}