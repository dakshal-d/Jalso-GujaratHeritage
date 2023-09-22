const jwt = require("jsonwebtoken")
const fetchuser = require('../Middleware/fetchUser')
const JWT_SECRET = 'dd$oy';
const express = require('express');
const { body, validationResult } = require('express-validator');

const { User } = require("../models/User");
const userRouter = express.Router();

userRouter.post("/login", async (req, res) => {
    let success = false;
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {

        const { email, password } = req.body;
        // console.log(email, password)
        User.findOne({ email: email }, (err, Saveduser) => {

            if (Saveduser) {
                if (password === Saveduser.password) {
                    const data = {
                        User: {
                          id: User.id
                        }
                      }
                      const authtoken = jwt.sign(data, JWT_SECRET);
                      success = true;
                    res.send({ message: "Login Successful", user: Saveduser,success, authtoken });
                } else {
                    success=false,
                    res.send({ message: "Password didn't match" });
                }
            } else {
                success=false,
                res.send({ message: "User not registered" });
            }
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }

});
userRouter.post("/signup", async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {

        const { name, email, password } = req.body;
        // console.log(name, email, password)
        User.findOne({ email: email }, (err, user) => {
            if (user) {
                res.send({ message: "User already registered" });
            }
            const newUser = new User({
                name,
                email,
                password
            });
            const data = {
                newUser: {
                    id: newUser.id
                }
            }
            const authtoken = jwt.sign(data, JWT_SECRET);

            newUser.save().then(savedUser => {
                res.status(201).json({ message: 'New user created', user: savedUser, authtoken });
            }).catch(err => console.log(err))


        });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

// ROUTE 3: Get loggedin User Details using: POST "/api/auth/getuser". Login required
// userRouter.post('/getuser', fetchuser,  async (req, res) => {

//     try {
//       userId = req.user.id;
//       const user = await User.findById(userId).select("-password")
//       res.send(user)
//     } catch (error) {
//       console.error(error.message);
//       res.status(500).send("Internal Server Error");
//     }
//   })
module.exports = { userRouter }