// const express = require("express");
// const { User } = require("../models/User");
// const userRouter = express.Router();
// userRouter.get("/", (req, res) => {
//     res.send("All the user");
//   });

// userRouter.post("/login", (req, res) => {
//     const { email, password } = req.body;
//     User.findOne({ email: email }, (user) => {

//         if (user) {
//             if (password === user.password) {
//                 res.send({ message: "Login Successful", user: user });
//                 // toast.success('Login Successful');
//             } else {
//                 res.send({ message: "Password didn't match" });
//                 // toast.error('Password did not match');
//             }
//         } else {
//             res.send({ message: "User not registered" });
//             // toast.error('User not registered');
//         }
//     });
// });

// userRouter.post("/signup", (req, res) => {
//     const { name, email, password } = req.body;
//     console.log(name, email, password)
//     User.findOne({ email: email }, (err, user) => {
//         if (user) {
//             res.send({ message: "User already registered" });
//         } else {
//             const newUser = new User({
//                 name,
//                 email,
//                 password
//             });
//             newUser.save().then(data => {
//                 res.send({ message: "New user created" });
//                 res.status(201).json("New user created", data);
//             }).catch(err => console.log(err))
//         }
//     });
// });

// module.exports={userRouter}