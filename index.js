// index.js
const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')



const app = express()

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


const { Pool, Client } = require('pg')
const connectionString = 'postgresql://postgres:root@localhost/node_hero'
const pool = new Pool({
  connectionString,
})


pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})
const client = new Client({
  connectionString,
})


app.post('/users', function (req, res, next) {

    console.log("reqx",req);
      const user = req.body
      console.log("userx",user);

client.connect()
client.query('INSERT INTO users (name, age) VALUES ($1, $2);', [user.name, user.age], (err, res) => {
  console.log(err, res)

  client.end()
})
}
)
// const { Client } = require('pg')
// const client = new Client()
// client.connect()

// client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
//     console.log(err ? err.stack : res.rows[0].message) // Hello World!
//     client.end()
//   })
// client.query('SELECT $1::varchar AS my_first_query', ['node hero'], (err, res) => {
//   console.log(err ? err.stack : res.rows[0].message) // Hello World!
//   client.end()
// })

// app.engine('.hbs', exphbs({
//   defaultLayout: 'main',
//   extname: '.hbs',
//   layoutsDir: path.join(__dirname, 'views/layouts')
// }))
// app.set('view engine', '.hbs')
// app.set('views', path.join(__dirname, 'views'))

// app.get('/', (request, response) => {
//     response.render('home', {
//       name: 'John'
//     })
//   })


  

  
app.listen(3000)