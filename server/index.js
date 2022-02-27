const express = require('express')
const app = express()
const PORT = 3001

const mysql = require('mysql')

const db = mysql.createConnection({ //Create connection to the MySQL database
    user: 'root',
    host: 'local',
    password: 'Mysql0510',
    database: 'employeeSystem'
})

app.post('/create', (req, res) => {
   const name = req.body.name;
   const age = req.body.age;
   const country = req.body.country;
   const position = req.body.position;
   const wage = req.body.wage;

   db.query('INSERT INTO employees (name, age, country, position, wage) VALUES (?,?,?,?,?)', 
   [name, age, country, position, wage],
    (err, result) =>{
        if(err){
            console.log(err)
        } else{
            res.send('Values Inserted')
        }
   }
   );
})


app.listen(PORT, () => {
    console.log(`Server running on https://localhost:${PORT}`)
})