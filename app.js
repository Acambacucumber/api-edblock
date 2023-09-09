import {getClassInfo, createClass, getClassStudents} from './controllers/class.js'
import {createPost} from './controllers/posts.js'
import {createUser, studentAddClass, listClasses, authUser} from './controllers/user.js'
import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Users
app.post('/users/authUser', async (req, res) => {
  console.log("in express:")
  console.log(req)
  const payload = await authUser(req)
  console.log(payload)
  res.json(payload)
})

app.post('/users/listClasses', async (req, res) => {
  const payload = await listClasses(req)
  console.log(payload)
  res.json(payload)
})
app.post('/users/studentAddClass', async (req, res) => {
  const payload = await studentAddClass(req)
  console.log(payload)
  res.json(payload)
})
app.post('/users/createUser', async (req, res) => {
  const payload = await createUser(req)
  console.log(payload)
  res.json(payload)
})

// Classes
app.get('/class/getClassInfo', async (req, res) => {
  const payload = await getClassInfo(req)
  console.log(payload)
  res.json(payload)
})
app.get('/class/getClassStudents', async (req, res) => {
  const payload = await getClassStudents(req)
  console.log(payload)
  res.json(payload)
})
app.post('/class/createClass', async (req, res) => {
  const payload = await createClass(req)
  console.log(payload)
  res.json(payload)
})

//Posts
app.get('/post/createPost', async (req, res) => {
  const payload = await createPost(req)
  console.log(payload)
  res.json(payload)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

