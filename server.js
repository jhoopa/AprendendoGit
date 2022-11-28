require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.static('./public/'))

app.get('/', (req, res) => {
    res.sendFile('./index.html')
})

app.listen(process.env.SERVER_PORT, () => {
    console.log(`server listening on *:${process.env.SERVER_PORT}`)
})

