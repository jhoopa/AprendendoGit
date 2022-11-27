const express = require('express')
const app = express()
const port = 25565;

app.get('/', (req, res) => {
    res.send(`
    <body style="background: black;">
        <h1 style="color: white; font-family: monospaced;">Hello World!</h1>
    </body>
    `)
})

app.listen(port, () => {
    console.log(`server listening on *:${port}`)
})

