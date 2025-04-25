const express = require('express')
const app = express()
const port = 3000

// iomprot route files 
const testRouter = require('./routes/test.js')

app.use("/test", testRouter); 

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})