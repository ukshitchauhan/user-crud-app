const express = require('express')
const app = express()
const cors = require('cors')    
const dotenv = require('dotenv')
dotenv.config()
const connectDB = require('./config/db')
const router = require('./routes/crud.routes')

connectDB()

app.use(cors())
app.use(express.json())

app.use('/',router)

app.listen(process.env.PORT,()=>{
    console.log(`Server Running at ${process.env.PORT}`);
})