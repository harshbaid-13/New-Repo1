const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello Guys! Wassup?')
})
app.get('/harsh', function (req, res) {
  res.send('Hello Guys! Harsh this side!')
})

app.listen(4000, ()=>{
    console.log("Started server");
}
)
