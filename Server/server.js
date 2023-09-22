const express = require('express')
const cors = require("cors")
const { connection } = require("./db")
const {userRouter}= require("./routes/user.routes")
require("dotenv").config();
const app = express()

app.use(cors());
app.use(express.json());
app.use("/user",userRouter)

app.get("/",(req,res) => {
    res.send({
        message:"api is working"
    })
})

app.listen(9002,async()=>{

    try {
        await connection
        console.log("database is connected")
    } catch (error) {
        console.log(error)
    }
    console.log("Server is running on port number",9002)
})