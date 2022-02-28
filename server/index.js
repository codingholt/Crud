const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 3001

const mysql = require('mysql2')

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({ //Create connection to the MySQL database
    user: 'root',
    host: 'localhost',
    password: 'MySql0510',
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

app.get('/employees', (req, res) => {
    db.query('SELECT * FROM employees', (err, result) => {
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server running on https://localhost:${PORT}`)
})