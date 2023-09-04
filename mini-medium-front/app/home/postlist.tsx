import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';

async function getData() {
  const posts = await fetch('http://localhost:3001/post', { cache: 'no-store' })

 
  if (!posts.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return posts.json()
}
 
export default async function Postlist() {
  const posts = await getData()
 
  return (

    
    posts.map(post => <>
                          <Card sx={{ maxWidth: 700}}> 


                            <CardContent> 
                              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                {post.authorId}  -  
                                {post.createdAt}
                              </Typography>
                              <Typography variant="h5" component="div">
                                {post.title}   
                              </Typography>
                              <Typography variant="body2">
                                {post.content}
                              </Typography>
                           
                            </CardContent>
                          </Card>
                            </>)
                          
                            )
  
}