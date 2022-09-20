import { IncomingForm } from 'formidable';
import { genSalt, hash, compare } from 'bcrypt';
import {config} from 'dotenv';
import { verify, sign} from 'jsonwebtoken'; 
import { userModel} from '../Models/User.model'
config()

export class AuthController{
    //signup method
    signup(request,response){
        const form = new IncomingForm();

        form.parse(request, async (error, fields, files) =>{
            if (error){
                return response.status(500).json({msg:'Failed to create account, maybe try again later'})
            }

            const{username, email, password} = fields; 
            const salt = await genSalt(15);
            const hashedPassword = await hash(password, salt);
            const newAccount = new userModel({
                username,
                email,
                password:hashedPassword
            })
            // create an account successful or failed
            try{
                const savedAccount = await newAccount.save();
                return response.status(201).json({msg:'Account created successfully'})
            }catch(error){
                console.log(error)
                return response.status(500).json({msg:'Failed to create account'})
            }      

        })
    }
    
    // sign in
    signin(request, response){
        const form = new IncomingForm();

        form.parse(request,async (error, fields, files)=>{
            if(error){
                return response.status(500).json({msg:'Failed to signin'})
            }
            const{account, password} = fields;
            // email log in 
            const isAccountEmail = account.includes('@');
            if(isAccountEmail){
                const user = await userModel.findOne({email:account});
                
                if(!user){
                    return response.status(404).json({msg:'Email of this account does not exist'})
                }
                const isPasswordValid = await compare(password, user.password);  // hashed password
                if(!isPasswordValid){
                    return response.status(400).json({msg:'Invalid password'})
                }
                const token_payload = {
                    _id:user._id,
                    email: user.email,
                    username: user.username
                }
                const token  = sign(token_payload, process.env.cookie_secret, { expiresIn:'365d' })
                return response.status(200).json({token})

            }
            const user = await userModel.findOne({username:account});
                
            if(!user){
                return response.status(404).json({msg:'username of this account does not exist'})
            }
            const isPasswordValid = await compare(password, user.password);  // hashed password
            if(!isPasswordValid){
                return response.status(400).json({msg:'Invalid password'})
            }
            const token_payload = {
                _id:user._id,
                email: user.email,
                username: user.username
            }
            const token  = sign(token_payload, process.env.cookie_secret, { expiresIn:'365d' })
            return response.status(200).json({token})

        }) 
    }

    // forgot password and reset
    forgotPassword(request, response){
        const form = new IncomingForm();

        form.parse(request, async (error, fields, files)=>{
            if(error){
                return response.status(500).json({msg:'Failed to reset password'})
            }
            const{ email, password } = fields;

            if(!email || !password){
                return response.status(400).json({msg:'email and password are required to reset password'})
            }
            const salt = await genSalt(15);
            const hashedPassword = await hash(password, salt)

            try{
                /*const user = await userModel.findOne({email:email});
                if(!user){
                    return response.status(404).json({msg:'Account with this email does not exist'})
                }
                const updatedAccount = await userModel.findOneAndUpdate({email:email}, {$set:{password: hashedPassword}}, {new:true})
                return response.status(200).json({msg:'Password rest successful'}) */
                const updatedAccount = userModel.findOneAndUpdate({email:email}, { $set:{ password: hashedPassword }})
                return response.status(200).json({msg:'Password reset successful'})
            }catch(error){
                return response.status(500).json({msg:'Failed to reset password'})
            }
        })
    }
   /* // updat user info such as user name via email.
    update(request, response){
        const form = new IncomingForm();
        form.parse(request, async (error, fields, files)=>{
            if(error){
                return response.status(500).json({msg:'Failed to update'})
            }
            try{
                const updatedAccount = userModel.findOneAndUpdate({email:email}, { $set:{username:username}})
                return response.send(user)   
                //return response.status(200).json({msg:'update successful'})
            }catch(error){
                return response.status(500).json({msg:'Failed to update, maybe try again later'})
            }
        })
    } */


    //delete user account
    delete(request, response){
        const form = new IncomingForm();
         

        form.parse(request, async (error, fields, files) =>{
            if (error){
                return response.status(500).json({msg:'Failed to delete account, maybe try again later'})
            }
            const{ email} = fields;
            try {
                const user = await userModel.findOneAndDelete({email: email});
                return response.status(200).json({msg:'delete successful'})

            }catch(error){
                return response.status(500).json({msg:'Failed to delete'})
            }   
        })
    }

    // find all user
    findAllUser(request, response){
        const form = new IncomingForm();      

        form.parse(request, async (error, fields, files) =>{
            if (error){
                return response.status(500).json({msg:'Failed to delete account, maybe try again later'})
            }
            //const{ email} = fields;
            try {
                const user = await userModel.find() 
                return response.send(user)          
                //return response.status(200).json({msg:'return all users successful'})

            }catch(error){
                return response.status(500).json({msg:'Failed find all users'})
            }   
        })
    }


    // search for a user
    searchUser (request, response){
        const form = new IncomingForm();      
        form.parse(request, async (error, fields, files) =>{
            if (error){
                return response.status(404).json({msg:'No matching results'})
            }
            // to make sure search also works for lowercases
            let {username} = fields;
            username = username.toLowerCase();
            try {
                let user = await userModel.find({username:  {$regex: username }  })
                return response.send(user)     

            }catch(error){
                return response.status(500).json({msg:'No matching user'})
            }   
        })
    }
}