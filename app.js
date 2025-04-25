const express = require('express')
const app = express()
const port = 3000

// iomprot route files 
const apiRouter = require('./routes/api.js')

app.use("/api", apiRouter); 

app.get('/', (req, res) => {
  res.send('Server is up')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})