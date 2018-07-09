const express = require('express');
const app = express();
const logger = require('morgan');

app.use(logger('dev'));



// root route
app.get('/', (req,res) => {
  res.send('Welcome Future Julius To Your API')
})

// catch all 
app.get('*', (req,res) => {
  res.status(404).send('Page not found invalid api url')
})

const port = process.env.PORT || 5000
app.listen(port,() => {
  console.log(`Running on port ${port}`)
})