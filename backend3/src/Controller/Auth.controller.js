import { IncomingForm } from 'formidable';
import { genSalt, hash, compare } from 'bcrypt';
import { config } from 'dotenv';
import { verify, sign } from 'jsonwebtoken';
import { userModel } from '../Models/User.model'
import { videoModel } from '../Models/Video.model'
config()

export class AuthController {
    //signup method
    signup(request, response) {
        const form = new IncomingForm();

        form.parse(request, async (error, fields, files) => {
            if (error) {
                return response.status(500).json({ msg: 'Failed to create account, maybe try again later' })
            }

            const { username, email, password, age, gender } = fields;
            if (password.length > 20 || password.length < 6) {  // password minimum length = 6, maximum length = 20
                return response.status(503).json({ msg: 'Password length need to be 6-20 range' })

            }
            if (age > 150 || age < 0) {
                return response.status(502).json({ msg: 'Invalid age' })
            }
            const salt = await genSalt(15);
            const hashedPassword = await hash(password, salt);
            const newAccount = new userModel({
                username,
                email,
                password: hashedPassword,
                age,
                gender
            })
            // create an account successful or failed
            try {
                const savedAccount = await newAccount.save();
                return response.status(201).json({ msg: 'Account created successfully' })
            } catch (error) {
                console.log(error)
                return response.status(501).json({ msg: 'This account has been registered. Change email or username' })
            }

        })
    }

    // sign in
    signin(request, response) {
        const form = new IncomingForm();

        form.parse(request, async (error, fields, files) => {
            if (error) {
                return response.status(500).json({ msg: 'Failed to signin' })
            }
            const { account, password } = fields;
            // email log in 
            const isAccountEmail = account.includes('@');
            if (isAccountEmail) {
                const user = await userModel.findOne({ email: account });

                if (!user) {
                    return response.status(404).json({ msg: 'Email of this account does not exist' })
                }
                const isPasswordValid = await compare(password, user.password);  // hashed password
                if (!isPasswordValid) {
                    return response.status(400).json({ msg: 'Invalid password' })
                }
                const token_payload = {
                    _id: user._id,
                    email: user.email,
                    username: user.username
                }
                const token = sign(token_payload, process.env.cookie_secret, { expiresIn: '365d' })
                const username = token_payload.username;
                return response.status(200).json({ token, username })

            }
            const user = await userModel.findOne({ username: account });

            if (!user) {
                return response.status(404).json({ msg: 'username of this account does not exist' })
            }
            const isPasswordValid = await compare(password, user.password);  // hashed password
            if (!isPasswordValid) {
                return response.status(400).json({ msg: 'Invalid password' })
            }
            const token_payload = {
                _id: user._id,
                email: user.email,
                username: user.username
            }
            const token = sign(token_payload, process.env.cookie_secret, { expiresIn: '365d' })
            const username = token_payload.username;
            return response.status(200).json({ token, username })

        })
    }

    // forgot password and reset
    forgotPassword(request, response) {
        const form = new IncomingForm();

        form.parse(request, async (error, fields, files) => {
            if (error) {
                return response.status(500).json({ msg: 'Failed to rset password' })
            }
            const { email, password } = fields;

            if (!email || !password) {
                return response.status(400).json({ msg: 'email and password are required to reset password ' })
            }
            const salt = await genSalt(15);
            const hashedPassword = await hash(password, salt)

            try {
                const user = await userModel.findOne({ email: email });
                if (!user) {
                    return response.status(404).json({ msg: 'Account with this email does not exist' })
                }
                /* const updatedAccount = await userModel.findOneAndUpdate({email:email}, {$set:{password: hashedPassword}}, {new:true})
                 return response.status(200).json({msg:'Password rest successful'}) */
                const updatedAccount = await userModel.findOneAndUpdate({ email: email }, { $set: { password: hashedPassword } }, { new: true })
                return response.status(200).json({ msg: 'Password rest successful' })
            } catch (error) {
                return response.status(500).json({ msg: 'Failed to reset password' })
            }
        })
    }

    // updat user info such as username, password, age and gender via email.
    async update(request, response) {
        const form = new IncomingForm();
        form.parse(request, async (error, fields, files) => {
            if (error) {
                return response.status(500).json({ msg: 'Failed to update. Try again later' })
            }
            const { email, username, age, gender, old_username } = fields;
            const newUsername = username
            const newAge = age
            const newGender = gender

            try {
                const user = await userModel.findOne({ email: email });
                if (!user) {
                    return response.status(404).json({ msg: 'Account with this email does not exist' })
                }
                let updatedAccount = await userModel.findOneAndUpdate({ email: email }, { $set: { username: newUsername, age: newAge, gender: newGender } }, { new: true })
                let updatedVideo_username = await videoModel.updateMany({ username: old_username }, { $set: { username: newUsername } }, { new: true })
                return response.status(200).json({ msg: 'Edit successful' })
            } catch (error) {
                return response.status(500).json({ msg: 'Failed to update. Change email or username and try again' })
            }
        })
    }

    //delete user account
    delete(request, response) {
        const form = new IncomingForm();
        form.parse(request, async (error, fields, files) => {
            if (error) {
                return response.status(500).json({ msg: 'Failed to delete account, maybe try again later' })
            }
            const { email } = fields;
            try {
                const user = await userModel.findOneAndDelete({ email: email });
                return response.status(200).json({ msg: 'delete successful' })

            } catch (error) {
                return response.status(500).json({ msg: 'Failed to delete' })
            }
        })
    }

    // find all user
    findAllUser(request, response) {
        const form = new IncomingForm();

        form.parse(request, async (error, fields, files) => {
            if (error) {
                return response.status(500).json({ msg: 'Failed to delete account, maybe try again later' })
            }
            try {
                const user = await userModel.find()
                return response.send(user)
            } catch (error) {
                return response.status(500).json({ msg: 'Failed find all users' })
            }
        })
    }


    // search for a user by request 
    async searchUser(request, response) {
        const name = request.query.username;
        const isadmin = request.query.isadmin
        if (isadmin === 'false') {
            try {
                let user = await userModel.find({ username: name })
                return response.send(user)
            } catch (error) {
                return response.status(500).json({ msg: 'No matching user' })
            }
        } else {
            try {
                var user = await userModel.find({ username: { $regex: name } })
                if (user.length > 0) {
                    return response.send(user)
                } else {
                    var user = await userModel.find({ email: { $regex: name } })
                    return response.send(user)
                }
            } catch (error) {
                return response.status(500).json({ msg: 'No matching user' })
            }
        }
    }


}