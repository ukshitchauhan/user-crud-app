const crudModel = require('../models/crud.model')

exports.createUser = async(req,res)=>{
    try{
        const {fullname,role,bio,image} = req.body

        await crudModel.create({
            fullname,role,bio,image
        })

        res.status(201).json({
            message:'User Added'
        })
    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}

exports.getUser = async(req,res)=>{
    try{
        const user = await crudModel.find()

        res.status(201).json({
            user
        })
    }
    catch(err){
        res.status(500).json({
            message:'Something Went Wrong!'
        })
    }
}

exports.updateUser = async(req,res)=>{
    try{
        const {id,fullname,role,bio,image} = req.body

        const user = await crudModel.findByIdAndUpdate(id,{fullname,role,bio,image})

        if(!user){
            return res.status(500).json({ message: 'User not found' })
        }

        res.status(201).json({
           message:'User Updated'
        })
    }
    catch(err){
        res.status(500).json({
            message:'Something Went Wrong!'
        })
    }
}

exports.deleteUser = async(req,res)=>{
    try{
        const { id }= req.params
        const user = await crudModel.findByIdAndDelete(id)

        res.status(201).json({
            message:'User Deleted'
        })
    }
    catch(err){
        res.status(500).json({
            message:'Something Went Wrong!'
        })
    }
}


