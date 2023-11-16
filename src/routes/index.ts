import { Request, Response, Router } from "express";



export class AppRoutes {

    static get routes(): Router{

        const router = Router();


        router.get('/api/users', (req: Request, res: Response) => {
            
            res.json([
                {id: 1, name: 'Tomas Diaz', age: 24, ciudad: 'Córdoba'},
                {id: 2, name: 'Alejandro Diaz', age: 52, ciudad: 'Córdoba'},
                {id: 3, name: 'Karina Piñero', age: 51, ciudad: 'Córdoba'},
            ]);

        }); 


        return router;
    };



};