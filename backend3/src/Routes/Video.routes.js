import {response, Router } from 'express';
import { Authenticate } from '../Middlewares/Authenticate.middleware';
import {videoUpload} from '../Middlewares/Video.middleware';
import {json} from 'body-parser'
import{ VideoController } from '../Controller/Video.controller'

const router = Router();
const Controller = new VideoController();
//after upload work, next step is save to mongo db
router.post('/api/video', json(), Authenticate, videoUpload.single('video'), (request, response)=>{
    Controller.upload(request,response)
})

router.get('/api/video-like/:id',(request, response)=>{
    Controller.like(request, response)
})

router.get('/api/video-dislike/:id',(request, response)=>{
    Controller.dislike(request, response)
})

export default router;