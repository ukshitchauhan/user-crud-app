const express = require('express')
const { createUser, getUser, updateUser, deleteUser } = require('../controllers/Crud.controllers')
const router = express.Router()

router.post('/addUser',createUser)
router.get('/allUser',getUser)
router.put('/updateUser',updateUser)
router.delete('/deleteUser/:id', deleteUser)

module.exports = router