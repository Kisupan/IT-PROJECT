import { videoModel } from '../Models/Video.model'
import fs from 'fs'
import { NONAME } from 'dns'

export class VideoController {
    async upload(request, response) {

        const newVideo = new videoModel({
            owner: request.token._id,
            username: request.body.username,
            category: request.body.category,
            name: request.body.name,
            videopath: request.filename,
            description: request.body.description
        })

        try {
            const saveVideo = await newVideo.save()
            return response.status(201).json({ msg: 'Video uploaded successfully' })
        } catch (error) {
            return response.status(500).json({ msg: 'Video upload failed' })
        }
    }


    like(request, response) {
        const video_id = request.query.id;
        const operation = request.query.operation
        if (operation === 'false') {
            videoModel.findOneAndUpdate({ _id: video_id }, { $inc: { likes: -1 } },
                { new: true }, (error, doc) => {
                    if (error) {
                        return response.status(500).json({ msg: 'Network Error: Failed to cancel like video' })
                    }
                    return response.status(200).json({ msg: 'Video like cancelled' })
                })

        } else {
            videoModel.findOneAndUpdate({ _id: video_id }, { $inc: { likes: 1 } },
                { new: true }, (error, doc) => {
                    if (error) {
                        return response.status(500).json({ msg: 'Network Error: Failed to like video' })
                    }
                    return response.status(200).json({ msg: 'Video liked' })
                })
        }
    }

    dislike(request, response) {
        const video_id = request.query.id;
        const operation = request.query.operation
        if (operation === 'false') {
            videoModel.findOneAndUpdate({ _id: video_id }, { $inc: { dislikes: -1 } },
                { new: true }, (error, doc) => {
                    if (error) {
                        return response.status(500).json({ msg: 'Network Error: Failed to cancel dislike video' })
                    }
                    return response.status(200).json({ msg: 'Video dislike cancelled' })
                })

        } else {
            videoModel.findOneAndUpdate({ _id: video_id }, { $inc: { dislikes: 1 } },
                { new: true }, (error, doc) => {
                    if (error) {
                        return response.status(500).json({ msg: 'Network Error: Failed to dislike video' })
                    }
                    return response.status(200).json({ msg: 'Video disliked' })
                })
        }
    }

    async searchVideo(request, response) {
        const name = request.query.key.toLowerCase();
        try {
            let video = await videoModel.find({ name: { $regex: name } })
            return response.send(video)

        } catch (error) {
            return response.status(700).json({ msg: 'No matching video' })
        }
    }

    // search all videos and display
    async findAllVideo(request, response) {

        try {
            let video = await videoModel.find()
            return response.send(video)

        } catch (error) {
            return response.status(700).json({ msg: 'No videos' })
        }
    }
    // search video by username
    async searchUVideo(request, response) {
        const name = request.query.key;
        try {
            let video = await videoModel.find({ username: name })
            return response.send(video)

        } catch (error) {
            return response.status(700).json({ msg: 'No matching video' })
        }
    }

    // search video by category
    async searchCat(request, response) {
        const cat = request.query.key;
        try {
            let video = await videoModel.find({ category: { $regex: cat } })
            return response.send(video)

        } catch (error) {
            return response.status(700).json({ msg: 'No matching video' })
        }
    }

    // stream video 
    stream(request, response) {
        const range = request.headers.range
        if (!range) {
            return response.status(400).json({ msg: 'Range header is required to start' })
        }
        const videopath = `videos/${request.params.filename}`;
        const videosize = fs.statSync(videopath).size;  // get video size

        const start = Number(range.replace(/\D/g, ""));  //get start point 
        const chunk_size = 10 ** 6 // 1 mb , chunck size
        const end = Math.min(start + chunk_size, videosize - 1);   //end position

        const contenLength = end - start + 1  // how many  size sending
        const hearders = {
            'Content-Length': contenLength,
            'Accept-Range': 'bytes',
            'Content-Type': 'video/mp40',
            'Content-Range': `bytes ${start} -${end}/${videosize}`   //decise how far video gone

        }
        response.writeHead(206, hearders);
        const videostream = fs.createReadStream(videopath, { start, end }); // create video stream
        videostream.pipe(response)
    }

    delete(request, response) {

        const video_id = request.query.video_id;
        const video_path = request.query.video_path;
        const videopath = `videos/${video_path}`;
        if (fs.existsSync(videopath)) {
            fs.unlink(videopath, (error) => {
                if (error) {
                    return response.status(500).json({ msg: 'Network Error: Failed to delete video' })
                }
                videoModel.findOneAndDelete({ _id: video_id }, (error) => {
                    if (error) {
                        return response.status(500).json({ msg: 'Network Error: Failed to delete video' })
                    }
                    return response.status(200).json({ msg: ' video delete' })
                })
            })
        }
    }

    async delete_user_all_videos(request, response) {
        const delete_username = request.query.username;
        const user_video_list = request.query.video_list;
        if (user_video_list !== undefined) {
            for (let i = 0; i < user_video_list.length; i++) {
                var videopath = `videos/${user_video_list[i]}`;
                if (fs.existsSync(videopath)) {
                    fs.unlink(videopath, (error) => {
                        if (error) {
                            return response.status(500).json({ msg: 'Network Error: Failed to delete video' })
                        }
                    })
                }
            }

            await videoModel.deleteMany({ username: delete_username });
        }
    }
}