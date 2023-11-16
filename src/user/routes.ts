import { Request, Response, Router } from "express";
import { UserControllers } from "./controller";



export class UserRoutes {

    static get routes(): Router{

        const router = Router();
        const userController = new UserControllers();


        router.get('/', userController.getUsers);
        
        router.get('/:id', userController.getUserById);

        router.post('/', userController.createUser);


        return router;
    };



};