import { videoModel } from '../Models/Video.model'

export class VideoController{
    async upload(request, response){

        const newVideo = new videoModel({
            owner:request.token._id,
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
    
}