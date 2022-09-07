export class VideoController{
    upload(request, response){
        console.log('Filename:', request.filename)
        console.log('Video name:', request.body.name)
        console.log('Token:', request.token)
        return response.status(200).json({msg:'Authenticated'})
    }

}