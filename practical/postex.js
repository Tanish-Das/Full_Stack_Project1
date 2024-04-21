const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require("path")
const PORT = 3000
const views_path = path.join(__dirname, "../practical")
app.set("view engine", "hbs")
app.set("views", views_path)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
app.get('/form', (req, res) => {
    res.render("helo")
})
app.post('/submit', (req, res) => {
    const { name } = req.body;
    res.send(`Hello ${name}!`)
})
