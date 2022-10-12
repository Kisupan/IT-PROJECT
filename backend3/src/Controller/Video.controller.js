import { videoModel } from '../Models/Video.model'
import fs from 'fs'

export class VideoController{
    async upload(request, response){

        const newVideo = new videoModel({
            owner:request.token._id,
            username:request.body.username,
            category:request.body.category,
            name:request.body.name,
            videopath:request.filename
        })

        try {
            const saveVideo = await newVideo.save()
            return response.status(201).json({msg:'Video uploaded successfully'})
        }catch (error){
            return response.status(500).json({msg:'Video upload failed'})
        }
    }
    

    like (request, response){
        const video_id = request.params.id;
        videoModel.findOneAndUpdate({_id:video_id}, {$inc:{likes:1}},
            {new:true}, (error,doc)=>{
                if (error){
                    return response.status(500).json({msg:'Network Error: Failed to like video'})
                }
                return response.status(200).json({msg:'Video liked'})
            })
    }

    dislike (request, response){
        const video_id = request.params.id;
        videoModel.findOneAndUpdate({_id:video_id}, {$inc:{dislikes:1}},
            {new:true}, (error,doc)=>{
                if (error){
                    return response.status(500).json({msg:'Network Error: Failed to like video'})
                }
                return response.status(200).json({msg:'Video disliked'})
            })
    }

    async searchVideo (request, response){
        const name = request.query.key;
            try {
                let video = await videoModel.find({name:  {$regex: name.toLowerCase() }  })
                return response.send(video)     

            }catch(error){
                return response.status(700).json({msg:'No matching video'})
            }   
    }

    // search all videos and display
    async findAllVideo(request, response) {

       try {
            let video = await videoModel.find()
            return response.send(video)     

        }catch(error){
            return response.status(700).json({msg:'No videos'})
        }
    }
    // // search video by owner id
    // async searchVideo (request, response){
    //     const name = request.query.key;
    //         try {
    //             let video = await videoModel.find({name:  {$regex: name.toLowerCase() }  })
    //             return response.send(video)     

    //         }catch(error){
    //             return response.status(700).json({msg:'No matching video'})
    //         }   
    // }

    // stream video 
    stream(request, response){
        const range = request.hearders.range
        if(!range){
            return response.status(400).json({msg:'Range header is required to start'})
        }
        const videopath = `videos/${request.params.filename}`;
        const videosize = fs.statSync(videopath).size;  // get video size

        const start = Number(range.replace(/\D/g, ""));  //get start point 
        const chunk_size = 10**6 // 1 mb , chunck size
        const end = Math.min(start + chunk_size, videosize - 1);   //end position

        const contenLength = end - start + 1  // how many  size sending
        const hearders = {
            'Content-Length' : contenLength,
            'Accept-Range': 'bytes',
            'Content-Type': 'video/mp40',
            'Content-Range': `bytes ${start} -${end}/${videosize}`   //decise how far video gone

        }
        response.writeHead(206, hearders);   
        const videostream = fs.createReadStream(videopath, {start, end}); // create video stream
        videostream.pipe(response)   
    }
     
    delete(request, response){
        
        const video_id = request.params.video_id;
        const video_path = request.params.video_path;

        const videopath = `videos/${video_path}`;   
        if(fs.existsSync(videopath)){
            fs.unlink(videopath, (error)=>{
                if(error){
                    return response.status(500).json({msg:'Network Error: Failed to delete video'})
                }
                videoModel.findOneAndDelete({_id:video_id}, (error)=>{
                    if (error){
                        return response.status(500).json({msg:'Network Error: Failed to delete video'})
                    }
                    return response.status(200).json({msg:' video delete'})
                })                
            })
        }
    }

    /*delete(request, response){
        
        const video_id = request.params.video_id;
        const video_path = request.params.video_path;

        const videopath = `videos/${video_path}`;   
        if(fs.existsSync(videopath)){
            fs.unlink(videopath, (error)=>{
                if(error){
                    return response.status(500).json({msg:'Network Error: Failed to delete video'})
                }
                videoModel.findOneAndDelete({_id:video_id}, (error)=>{
                    if (error){
                        return response.status(500).json({msg:'Network Error: Failed to delete video'})
                    }
                    return response.status(200).json({msg:' video delete'})
                })                
            })
        }
    } */

     
}