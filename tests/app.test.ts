import { envs } from '../src/config/envs';
import { Server } from '../src/server';

jest.mock('../src/server')


describe('should call the server with necessary arguments and start', () => {

    test('should work', async() => {

        await import('../src/app')

        expect( Server ).toHaveBeenCalledTimes(1);

        expect( Server ).toHaveBeenCalledWith({
            port: envs.PORT,
            routes: expect.any(Function)
        });

    }); 


});