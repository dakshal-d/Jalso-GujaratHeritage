const express = require("express")
const cors = require("cors")
const { connection } = require("./db")

require("dotenv").config();
const app = express()
const mongoose = require("mongoose");
app.use(cors());
app.use(express.json());
// const connection=mongoose.connect("mongodb+srv://dd:rNZ2Za3nDM7qez@clusterjalso.trfmw9e.mongodb.net/?retryWrites=true&w=majority");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const User = mongoose.model("User", userSchema);

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    console.log(email, password)
    User.findOne({ email: email }, (err,Saveduser) => {

        if (Saveduser) {
            if (password === Saveduser.password) {
                res.send({ message: "Login Successful", user: Saveduser });
            } else {
                res.send({ message: "Password didn't match" });
            }
        } else {
            res.send({ message: "User not registered" });
        }
    });
});

app.post("/signup", (req, res) => {
    const { name, email, password } = req.body;
    console.log(name, email, password)
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            res.send({ message: "User already registered" });
        } else {
            const newUser = new User({
                name,
                email,
                password
            });
            newUser.save().then(savedUser => {
                res.status(201).json({ message: 'New user created', user: savedUser });
            }).catch(err => console.log(err))
        }
    });
});

app.listen(9002,async()=>{

    try {
        await connection
        console.log("database is connected")
    } catch (error) {
        console.log(error)
    }


    console.log("Server is running on port number",9002)

})