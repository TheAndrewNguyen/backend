const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

// cors
app.use(cors({
  origin: '*',           // allow all origins
  methods: '*',          // allow all HTTP methods
  allowedHeaders: '*'    // allow all headers
}));

// import route files 
const apiRouter = require('./routes/api.js')

app.use("/api", apiRouter); 

app.get('/', (req, res) => {
  res.send('Server is up')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})