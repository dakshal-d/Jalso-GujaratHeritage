const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());
app.use(express.json());

mongoose.connect(`mongodb+srv://dd:rNZ2Za3nDM7qez@clusterjalso.trfmw9e.mongodb.net/?retryWrites=true&w=majority`);

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const User = mongoose.model("User", userSchema);

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email: email }, (user) => {

        if (user) {
            if (password === user.password) {
                res.send({ message: "Login Successful", user: user });
                // toast.success('Login Successful');
            } else {
                res.send({ message: "Password didn't match" });
                // toast.error('Password did not match');
            }
        } else {
            res.send({ message: "User not registered" });
            // toast.error('User not registered');
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
            newUser.save().then(data => {
                res.status(201).json("New user created", data);
            }).catch(err => console.log(err))
        }
    });
});

app.listen(9002, () => {
    console.log("BE started at port 9002");
});