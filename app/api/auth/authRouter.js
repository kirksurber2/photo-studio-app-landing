const express = require('express')
const authRouter = express.Router()
const User = require('../Models/Users.js')
const Company = require('../Models/Company.js')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')




//Signup
authRouter.post('/signup', async (req, res, next) => {
    const { email, password, companyName, phone, firstName, lastName } = req.body 

    try {
        const findUser = await User.findOne({email: req.body.email.toLowerCase()})
        if(findUser) {
            res.status(403).send("That email already exists")
        } 
        else {
            const newCompany = new Company({companyName})
            const saveCompany = await newCompany.save()
            const hash = await bcrypt.hash(req.body.password, 13)
            
            const newUser = new User({
                email, 
                password: hash, 
                phone, 
                company_id: newCompany.id, 
                firstName, 
                lastName, 
                isAdmin: true,
                userType: "Owner"

            })
                
            const saveUser = await newUser.save()
            console.log(saveUser)
            const findCompany = await Company.findByIdAndUpdate(newCompany.id, { $push: {users: newUser.id}} 
                )
                
            const token = jwt.sign(saveUser.toObject(), process.env.SECRET)
            
            res.status(201).send({token, user: saveUser, message: "Your account has been created"})
        }
    }
    catch(err) {
        res.status(500).send({error: err.message})
    }

   
})

//Login 
authRouter.post('/login', async (req, res, next) => {

    const {email, password } = req.body
    
    try{
        const user = await User.findOne({email: req.body.email.toLowerCase()} )
        console.log(email.toLowerCase())
        if(!user) {
            res.status(403)
            return next(new Error("Incorrect email or password"))
        }
        const isValid = await bcrypt.compare(password, user.password)
        if(!isValid) {
            res.status(401)
            return next(new Error("That email or password is incorrect"))
        }
        const token = jwt.sign(user.toObject(), process.env.SECRET)
        res.status(200).send({token, user, message: 'Logging in'})
       // jwt.sign()
    }
    catch(err) {
        res.status(500)
        return next (err)
    }
})






module.exports = authRouter
