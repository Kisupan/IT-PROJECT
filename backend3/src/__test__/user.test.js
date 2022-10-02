import supertest from 'supertest'
//const request = require('supertest');
import {server} from '../server' ;
import {MongoMemoryServer} from 'mongodb-memory-server';
import  mongoose from 'mongoose';
 
// search user test
describe("user", () =>{
    beforeAll(async() =>{
        const mongoServer = await MongoMemoryServer.create();
        await mongoose.connect(mongoServer.getUri());

    });
    afterAll(async() =>{
        await mongoose.disconnect();
        await mongoose.connection.close();
    }); 

    describe("get user route", ()=>{
        describe("user does not exist", ()=>{
            it("should return a 404", async()=>{
                //expect(true).toBe(true);
                const username = 'usernot';
                await supertest(server).get(`/api/search/${username}`)
                .expect(404)
            });
        });
    });
});


 

//const userService = require('../Controller/Auth.controller')
//const request = require('supertest')
/*const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const server = require('../server')
const user = require('../Models/User.model')

describe('user service', ()=>{
    beforeEach( async () => {await User.deleteMany()})
    test('Should signup a new user', async () => {
        const response = await request(user).post('/api/signup')
        .send({
            username: 'Dhriti',
            email:"Dhriti@test.com",
            password:"1234567890"})
            //.expect(201)
            expect(res.statusCode).toEqual(201);

            //Assert that the database was changed correctly
            const user = await User.findById(response.body.user._id)
              expect(response.body).toMatchObject({
                user:{
                    username: 'Dhriti',
                    email:"dhriti@test.com"
                },
            }) 
           expect(user.password).not.toBe('1234567890')
        }) 

}) */

 
/**const request = require('supertest')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

const app = require('../src/app')
const User = require('../src/models/user')

beforeEach( async () => {await User.deleteMany()})
test('Should signup a new user', async () => {
    const response = await request(app).post('/user/signup')
    .send({
        name: 'Dhriti',
        email:"Dhriti@test.com",
        password:"1234567890"})
        .expect(201)
        //Assert that the database was changed correctly
        const user = await User.findById(response.body.user._id)
        expect(response.body).toMatchObject({
            user:{
                name: 'Dhriti',
                email:"dhriti@test.com"
            },
            token: user.tokens[0].token
        })
        expect(user.password).not.toBe('1234567890')}) **/

