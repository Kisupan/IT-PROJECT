import file from "@babel/core/lib/transformation/file/file";
import { request } from "express";
import multer from "multer";
import { v4 as uuidv4 } from 'uuid'; 

// video storage
const videoStorage = multer.diskStorage({
    destination:"videos",
    filename: (request, file, cb)=>{
        const id = uuidv4();
        const token = request.token;
        const filename = `${token._id.toString()}-${id}`;
        request.filename = filename;
        cb(null, filename)

    }

})

//video upload
export const videoUpload = multer({
    storage:videoStorage,
    limits:{
        fieldSize: 90000000*5 //10 MB   
    },
    fileFilter:(request, file, cb)=>{
        if(!file.originalname.match(/\.(mp4|MPEG-4|mkv)$/)){
            return cb(new Error('Video fomat nor supported'))
        }
        cb(undefined, true)
    }
})