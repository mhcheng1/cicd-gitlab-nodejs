const app = require('express')()


app.get('/', (req, res) => {
    res.json({message: "Test docker nodejs app"})
})



const port = process.env.port || 8080
app.listen(port, () => {console.log(`app listening on port ${port}`)})