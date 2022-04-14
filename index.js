const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const userRoute = require('./routes/user')

dotenv.config()

// app.get('/api/test', () => {
//   console.log('test is successfull')
// })

app.use('/api/users', userRoute)

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('DBConnection Successfull!'))
  .catch((err) => {
    console.log(err)
  })

app.listen(process.env.PORT || 5000, () => {
  console.log('Backend server is running')
})
