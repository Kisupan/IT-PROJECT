import {Router} from 'express';
import {AuthController} from '../Controller/Auth.controller';
 

const router = Router();
const Controller = new AuthController();

//router.post('/app/signup')
router.post('/api/signup',(request,response)=>{
    Controller.signup(request, response)
})

router.post('/api/signin',(request,response)=>{
    Controller.signin(request, response)
})

router.post('/api/password-reset',(request,response)=>{
    Controller.forgotPassword(request, response)
})

export default router;
//module.exports = router;