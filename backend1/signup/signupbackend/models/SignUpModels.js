//const mongoose = require('mongoose')
const mongoose = require('mongoose')
const signUpTemplate = new mongoose.Schema({
    fullName:{
        type:String,
        required : true
    },
    username:{
        type:String,
        reuqired: true
    },
    email: {
        type:String,
        required: true
    },
    password:{
        type:String,
        requried:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})
module.exports = mongoose.model('mytable', signUpTemplate)