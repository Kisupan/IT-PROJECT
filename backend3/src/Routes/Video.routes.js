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

// video stream
router.get('/api/video/:filename', (request, response)=> {
    Controller.stream(request, response)
})

// like a video
router.get('/api/video-like/:id',(request, response)=>{
    Controller.like(request, response)
})


// dislike a video
router.get('/api/video-dislike/:id',(request, response)=>{
    Controller.dislike(request, response)
})

// search for a video
router.get('/api/video-search/',(request,response)=>{
    Controller.searchVideo (request, response)
})

// delete a video
router.delete('/api/video/:video_id/:video_path', (request, response)=>{
    Controller.delete(request, response)
})

// search for video under certain user
router.get('/api/user-video-search/',(request,response)=>{
    Controller.searchUVideo (request, response)
})

// search for video under certain category
router.get('/api/cat-search/',(request,response)=>{
    Controller.searchCat (request, response)
})

//find all videos and return 
router.get('/api/findallV',(request, response)=>{
    Controller.findAllVideo (request, response)
})

export default router;