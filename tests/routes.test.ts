import request from "supertest";
import { testServer } from './test-server';


describe('Users routes testing', () => {

    

    describe('GET /users', () => {

        // Verify status code 200
        test('should respond with a 200 status code', async() => {
            const response = await request(testServer.app)
            .get('/api/users/')
            expect(200);
        
        });
        

        // Verify if the response is an object
        test('should respond an object', async() => {
            const response = await request(testServer.app)
                .get('/api/users')
                .send();

            expect( response.body ).toBeInstanceOf( Object )
        });
    });

    describe('GET /users/:id', () => {
        
        // Verify status code 200
        test('should respond with a 200 status code', async() => {
            const response = await request(testServer.app)
                .get('/api/users').send();
            
            expect(200);
            
        });

        // Verify if the response is an object
        test('should respond an object', async() => {
            const response = await request(testServer.app)
                .get('/api/users')
                .send();

            expect( response.body ).toBeInstanceOf( Object )
        });

        // Verify if the status code is 400 with a wrong id
        test('should respond status code 400', async() => {
            const wrong_id = "asd"
            const response = await request(testServer.app)
                .get('/api/users/' + wrong_id)
                .send();
            
            expect(400);
        });
    });

});