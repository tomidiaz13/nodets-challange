import  express  from "express";
import path from 'path';





interface Options{
    port: number,
};



export class Server {

    app = express();
    port: number;

    constructor(options: Options) {
        const { port } = options;
        this.port = port;
    };


    

    async start() {
        console.log('server running')


        this.app.get('*', (req, res) => {
            console.log(req.url)
            res.send('Hola Mundo')
        });


        this.app.listen(3000, () => {
            console.log(`Server running on port ${ 3000 }`);

        });
    };

};