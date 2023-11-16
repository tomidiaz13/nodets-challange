import { Request, Response, Router } from "express";
import { UserRoutes } from "../user/routes";



export class AppRoutes {

    static get routes(): Router{

        const router = Router();

        // Moduls routes
        
        router.use('/api/users', UserRoutes.routes); 


        return router;
    };



};