import { PrismaClient } from '@prisma/client'
import express from 'express'
const cors = require('cors')

const prisma = new PrismaClient()
const app = express()

app.use(express.json())
app.use(express.urlencoded())

//Get all the posts
app.use(cors())
app.get('/post', async (req, res) => {
  const posts = await prisma.post.findMany({
    orderBy: {createdAt: 'desc'}
  })
  res.json(posts)
})

//Sign up a User
app.post(`/user`, async (req, res) => {
  const user = await prisma.user.create({
    data: { ...req.body },
  })
 
  res.redirect("http://localhost:3000/home")
})

//Sign in
app.post(`/signin`, async (req, res) => {
 const email = req.body.email   
 const password = req.body.password
 const user = await prisma.user.findFirst(
  {
    where: {
      AND: [
        {
          email
        },
        {
          password
        }
        
      ]
    }
  }
 )
 if (!user) {res.redirect("http://localhost:3000/resignin")}
  else {res.redirect("http://localhost:3000/home")}
})


//Create a post
app.post(`/post`, async (req, res) => {
  const post = await prisma.post.create({
    data: { ...req.body },
  })
  res.redirect("http://localhost:3000/home")
  
})

app.listen(3001, () =>
  console.log('REST API server ready at: http://localhost:3001'),
)