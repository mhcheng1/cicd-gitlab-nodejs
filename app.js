const res = require('express/lib/response');

const app = require('express')()


app.get('/', (req, res) => {
    res.json({message: "Welcome to the Homepage!"})
})

app.get('/test', (req, res) => {
    res.json({message: "Test docker nodejs app"})
})


const port = process.env.PORT || 8080
const server = app.listen(port, () => {console.log(`app listening on port ${port}`)})

module.exports = server;