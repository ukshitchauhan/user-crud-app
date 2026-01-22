const mongoose = require('mongoose')

const crudSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },

    role:{
        type:String,
        required:true
    },

    bio:{
        type:String,
        required:true
    },

    image:{
        type:String,
        required:true
    },
},{timestamps:true})

module.exports = mongoose.model('Crud',crudSchema)