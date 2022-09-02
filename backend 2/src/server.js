import express from 'express';
import{ connect } from 'mongoose';
import{ config } from 'dotenv';
import AuthRoutes from './Routes/Auth.routes'
import cors from 'cors'
config();

const server = express();
//==============MiddleWares===========================================
server.use(cors())
//==========mongo DB connection========================================
const mongoURI = process.env.mongoURI;
connect(mongoURI, (error)=>{
    if(error){
        return console.log(error);
    }
    console.log('connection to mongo DB successful!!!')
})

//==============================server endpoints=============================
server.use(AuthRoutes)

const PORT = process.env.PORT ?? 3000;


server.listen(PORT, ()=>{
    console.log('Server started on PORT 3000')
})