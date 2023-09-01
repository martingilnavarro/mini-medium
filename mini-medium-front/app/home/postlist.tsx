import Link from 'next/link'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

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
                            <h1>{post.title}</h1>
                            <p> author: {post.authorId}</p>
                            <p> date: {post.createdAt}</p>
                            <p>{post.content}</p>
                            </>)
                            
                            )
  
}