import{ Schema, model} from 'mongoose';


const userSchema = new Schema({
    username:{ // username should be unique
        type:String,
        reuqired: [true, 'Username is required'],
        unique:[true, 'Usename exist']
    },
    email:{ // email should be be unique
        type:String,
        required: [true, 'Email is required to create an account'],
        unique:[true, 'Account with this email already exist']
    },
    password:{
        type:String,
        requried:[true, 'Password is required to create account'],
        //minlength: 4
        //minlength: 6
    },
    videos:[
        {
            type:Schema.Types.ObjectId,
            ref:'videos'
        }
    ]

     
})
export const userModel = model('user', userSchema)
