import  express, { Router }  from "express";
import path from 'path';





interface Options{
    port: number,
    routes: Router,
};



export class Server {

    app = express();
    port: number;
    routes: Router;

    constructor(options: Options) {
        const { port, routes } = options;
        this.port = port;
        this.routes = routes;
    };


    

    async start() {
        console.log('server running')

        // Routes

        this.app.use( this.routes );


        this.app.get('*', (req, res) => {
            console.log(req.url)
            res.send('Ruta comodin')
        });


        this.app.listen(3000, () => {
            console.log(`Server running on port ${ 3000 }`);

        });
    };

};