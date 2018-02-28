const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000
var fs = require('fs');

app.use(express.static(path.join(__dirname, 'dist')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('dist/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


process.on('SIGINT', () => {
  console.log("Caught interrupt signal");
  process.exit();
});

app.get('/matpoints', function (req, res) {
  var response = {
    test: "asd",
  }
  res.status(200)
  res.json(response)
})
