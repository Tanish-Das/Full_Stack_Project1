const express = require('express')
const app = express()
const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
app.get('/add/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1)
    const num2 = parseInt(req.params.num2)
    const sum = num1 + num2
    res.send(`Sum of ${num1} and ${num2} is ${sum}`)
})
app.get('/subtract/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1)
    const num2 = parseInt(req.params.num2)
    const difference = num1 - num2
    res.send(`Difference of ${num1} and ${num2} is ${difference}`)
})
app.get('/multiply/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1)
    const num2 = parseInt(req.params.num2)
    const product = num1 * num2
    res.send(`Product of ${num1} and ${num2} is ${product}`)
})
app.get('/divide/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1)
    const num2 = parseInt(req.params.num2)
    if (num2 === 0) {
        res.status(400).send('Division by zero is not allowed')
    } else {
        const quotient = num1 / num2;
        res.send(`Quotient of ${num1} and ${num2} is ${quotient}`)
    }
})
