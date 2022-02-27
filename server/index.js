const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hi 👋')

})

app.listen(5555, () => {
    console.log('Server running on localhost:5555')
})