import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
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

                            <CardHeader 
                              title={post.title}    
                            />
                            <CardContent> 
                            <p> author: {post.authorId}</p>
                            <p> date: {post.createdAt}</p>
                            <p>{post.content}</p>
                            </CardContent>
                          </Card>
                            </>)
                          
                            )
  
}