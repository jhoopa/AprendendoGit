const express = require('express')
const app = express()
const port = 25565;

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html')
})

app.listen(port, () => {
    console.log(`server listening on *:${port}`)
})

