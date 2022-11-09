import { Router } from 'express';
<<<<<<< Updated upstream:backend3/src/Routes/Auth.routes.js
import { AuthController } from '../Controller/Auth.controller.js';
=======
import { AuthController } from '../Controller/Auth_controller.js';
>>>>>>> Stashed changes:backend3/src/Routes/Auth_routes.js


const router = Router();
const Controller = new AuthController();

//router.post('/app/signup')
router.post('/api/signup', (request, response) => {
    Controller.signup(request, response)
})

router.post('/api/signin', (request, response) => {
    Controller.signin(request, response)
})

// reset password
router.post('/api/password-reset', (request, response) => {
    Controller.forgotPassword(request, response)
})


// delet a user from mongo DB
router.post('/api/delete', (request, response) => {
    Controller.delete(request, response)
})

//find all user and return 
router.get('/api/findall', (request, response) => {
    Controller.findAllUser(request, response)
})

// update user information
router.put('/api/update/:email', (request, response) => {
    Controller.update(request, response)
})


// search for a user
router.get('/api/user-search/', (request, response) => {
    Controller.searchUser(request, response)
})

// Update user info including  email, password, username, age and gender
router.post('/api/update', (request, response) => {
    Controller.update(request, response)
})






export default router;
//module.exports = router;