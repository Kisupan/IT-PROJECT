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

}