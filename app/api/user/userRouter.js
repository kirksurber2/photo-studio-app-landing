
const express = require('express')
const userRouter = express.Router()
const Users = require('../Models/users.js')
const uuid = require('uuid').v4

const users = [
    {companyId: "12345", firstName: "Kirk", lastName: "Surber", userId: uuid()},
    {companyId: "12345", firstName: "Chuck", lastName: "Norris", userId: uuid()},
    {companyId: "12346", firstName: "Mike", lastName: "Tyson", userId: uuid()}
]


//GET All Users

userRouter.get('/', (req, res, next) => {
  res.send(users)
})

//GET:  One User
userRouter.get('/:userId', (req, res, next) => {
  const userId = req.params.userId
  Users.find(user, req.params.userId)
})
//POST:  Add One New User

userRouter.post('/',  (req, res, next) => {
  const newUser = req.body
  newUser._id = uuid()
  users.push(newUser)
  res.send(newUser)
})

//DELETE:  Delete one User

userRouter.delete('/:userId', (req, res, next) => {
  const delUser = req.params.delUser
  Users.find(user, req.params.delUser)
  res.send("User has been deleted")
})

// Get All Users by Company ID

// userRouter.get('/:companyId/users', async (req, res, next) => {
//     try{
//         const companyById = await users.findById({companyId: {req.params.companyId}})
//     }
// })

// userRouter.get('/:userId', async(req, res, next) => {
//     try {
//         const oneUser = await users.findById( req.params.userId)
//         if(!oneUser) {
//             res.status(404).send("User not Found")
//         }else
//         return res.status(200).send(oneUser)
//     }catch (err) {
//         res.status(500)
//         return next(err)
//     }

// })







module.exports = userRouter
