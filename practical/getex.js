const express = require('express')
const app = express()
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
app.get("/heloget",(req,res) =>{
    res.send("Hello World!")
})
app.post("/heloget",(req,res) =>{
    res.send("Hello World!")
})