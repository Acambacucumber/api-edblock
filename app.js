import {getClassInfo, createClass, getClassStudents} from './controllers/class.js'
import {createPost} from './controllers/posts.js'
import {createUser, studentAddClass, listClasses, authUser} from './controllers/user.js'
import express from 'express'
import cors from 'cors'

const app = express()
const port = 3000
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Users
app.post('/users/authUser', async (req, res) => {
  console.log("in express:")
  console.log(req.body)
  const payload = await authUser(req.body)
  console.log(payload)
  res.json(payload)
})

app.post('/users/listClasses', async (req, res) => {
  const payload = await listClasses(req.body)
  console.log(payload)
  res.json(payload)
})
app.post('/users/studentAddClass', async (req, res) => {
  const payload = await studentAddClass(req.body)
  console.log(payload)
  res.json(payload)
})
app.post('/users/createUser', async (req, res) => {
  const payload = await createUser(req.body)
  console.log(payload)
  res.json(payload)
})

// Classes
app.post('/class/getClassInfo', async (req, res) => {
  const payload = await getClassInfo(req.body)
  console.log(payload)
  res.json(payload)
})
app.post('/class/getClassStudents', async (req, res) => {
  const payload = await getClassStudents(req.body)
  console.log(payload)
  res.json(payload)
})
app.post('/class/createClass', async (req, res) => {
  const payload = await createClass(req.body)
  console.log(payload)
  res.json(payload)
})

//Posts
app.post('/post/createPost', async (req, res) => {
  const payload = await createPost(req.body)
  console.log(payload)
  res.json(payload)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

