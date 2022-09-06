import { Schema, model} from 'mongoose'

const videoSchema = new Schema({
    owner:{
        type:Schema.Types.ObjectId,
        ref:'user'
    },
    name:{
        type:String,
        required:[True, 'Upload video needs a video name']
    },
    videopath:{
        type:String,
        required:[True, 'Upload video needs a video path'],
        unique:[true, 'Video path already exist']
    },
    likes:{
        type:Number,
        default:0
    },
    dislikes:{
        type:Number,
        default:0
    },
    views:{
        type:Array,
        default:[]
    },
    comments:{
        type: Array,
        default:[]
    }

})
export const videoModel = model('video',videoSchema)