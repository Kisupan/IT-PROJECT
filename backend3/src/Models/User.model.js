import{ Schema, model} from 'mongoose';
const uservalidator = (s) =>
    /^[a-zA-Z0-9]{1,20}$/.test(s)

const emailvalidator = (s) =>
    /^[a-z0-9@.-_]{6,40}$/.test(s)

const userSchema = new Schema({
    username:{ // username should be unique and no longer than 20 characters
        type:String,
        reuqired: [true, 'Username is required'],
        unique:[true, 'Usename exist'],
        validate: [uservalidator, 'Please enter less than 20 numbers and alphabets only']
    },
    email:{ // email should be be unique
        type:String,
        required: [true, 'Email is required to create an account'],
        unique:[true, 'Account with this email already exist'],
        validate: [emailvalidator, 'Please enter numbers, alphabets, and @ . - _ only']
    },
    password:{ // password maximum length = 20
        type:String,
        requried:[true, 'Password is required to create account'],

    },
    age:{ // age should be within 0 - 150 range
        type:Number,
        requried:[true, 'Age is required to create an account'],

    },
    gender:{
        type: String,
        enum: ["Male", "Female", "Prefer not to say"],
        required: true
    },
    videos:[
        {
            type:Schema.Types.ObjectId,
            ref:'videos'
        }
    ],



     
})
export const userModel = model('user', userSchema)
