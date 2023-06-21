const express = require('express')
const app = express()
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
// var routes = require('./route/routes');
const cors = require('cors');

// app.use(cors(
//   {
//     origin: "http://localhost:3000"
//   }

// ));

// app.listen(3000,function check(err)
// {
//     if(err)
//     console.log("error")
//     else
//     console.log("started")
// });

mongoose.connect("mongodb+srv://clusterjalso.trfmw9e.mongodb.net/jalso1",{useNewUrlParser: true,  useUnifiedTopology: true },
() => {
    console.log("DB connected")
})
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema)

//Routes
app.post("/LogIn", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 

app.post("/SignUp", (req, res)=> {
    const { name, email, password} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
}) 

// app.get("/", (req, res)=> {
//     res.send("hello")
// }) 
app.listen(9002,() => {
    console.log("BE started at port 9002")
})
// app.use(express.json());
// app.use(routes);