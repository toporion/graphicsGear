const express = require('express')
const app = express()
const cors=require('cors')
require('dotenv').config()
const UserRoute=require('./routes/UserRoute')
require('./db/db')
const port = process.env.PORT || 8080

app.use(cors())
app.use(express.json())
app.use('/api',UserRoute)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})