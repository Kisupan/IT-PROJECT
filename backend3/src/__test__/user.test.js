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

