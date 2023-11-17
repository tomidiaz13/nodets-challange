import { Request, Response, Router } from "express";
import { UserControllers } from "./controller";



export class UserRoutes {

    static get routes(): Router{

        const router = Router();
        const userController = new UserControllers();

        /**
         * Get track
         * @openapi
         * paths:
         *   /api/users:
         *      get:
         *       tags:
         *         - users
         *       summary: "Get all users"
         *       description: Executing this apis you are going to get the list of all users in the database
         *       responses:
         *         '200':
         *           description: Successful operation.
         *           content:
         *             application/json:
         *               schema:
         *                  type: array
         *                  items:
         *                      $ref: '#/components/schemas/user'
         *         '404':
         *           description: Not found
         *           content:
         *             application/json:
         *               schema:
         *                  {message: 'There is no users'}
         *         '500':
         *           description: Internal Server Error.
         *           content:
         *             application/json:
         *               schema:
         *                  {message: 'Internal server error'}
         *      security:
         */
        router.get('/', userController.getUsers);

        /**
         * Get track
         * @openapi
         * paths:
         *   /api/users/{id}:
         *      get:
         *       tags:
         *         - users
         *       summary: "Get user by id"
         *       description: Get a specific user by id
         *       parameters:
         *          - name: id
         *            in: path
         *            description: ID of user to return
         *            required: true
         *            schema:
         *            type: integer
         *            format: int64
         *       responses:
         *         '200':
         *           description: Successful operation.
         *           content:
         *             application/json:
         *               schema:
         *                  $ref: '#/components/schemas/user'
         *         '400':
         *           description: ID must be a number.
         *           content:
         *             application/json:
         *               schema:
         *                  {message: 'ID must be a number'}
         *         '404':
         *           description: Internal Server Error.
         *           content:
         *             application/json:
         *               schema:
         *                  {message: 'User not found'}
         *         '500':
         *           description: Internal Server Error.
         *           content:
         *             application/json:
         *               schema:
         *                  {message: 'Internal server error'}
         */
        router.get('/:id', userController.getUserById);

        /**
         * Post track
         * @openapi
         * /api/users:
         *    post:
         *      tags:
         *        - users
         *      summary: "Create new user"
         *      description: This endpoint is for the creating
         *      requestBody:
         *          content:
         *              application/json:
         *                  schema:
         *                      $ref: "#/components/schemas/user"
         *      required: true
         *      responses:
         *        '201':
         *           description: Successful operation.
         *           content:
         *             application/json:
         *               schema:
         *                  $ref: '#/components/schemas/user'
         *        '400':
         *          description: Get this response in the case that name, email, age are not in the body, age argument must be a number and email already exists for another user.
         *          content:
         *            application/json:
         *              schema:
         *                {error: 'Error message'}
         *        '500':
         *           description: Internal Server Error.
         *           content:
         *             application/json:
         *               schema:
         *                  {message: 'Internal server error'}
         */
        router.post('/', userController.createUser);
        
        /**
         * Post track
         * @openapi
         * /api/users/{id}:
         *    put:
         *      tags:
         *        - users
         *      summary: "Update a user by id"
         *      description: This endpoint is for update a user using his id
         *      parameters:
         *          - name: id
         *            in: path
         *            description: ID of user to update
         *            required: true
         *            schema:
         *            type: integer
         *            format: int64
         *      requestBody:
         *          content:
         *              application/json:
         *                  schema:
         *                      $ref: "#/components/schemas/user"
         *      required: true
         *      responses:
         *        '200':
         *          description: Successful operation.
         *          content:
         *             application/json:
         *               schema:
         *                  type: object
         *                  items:
         *                      $ref: '#/components/schemas/user'
         *        '400':
         *          description: Get this response in the case that name, email, age are not in the body, age argument must be a number and email already exists for another user.
         *          content:
         *            application/json:
         *              schema:
         *                {error: 'Error message'}
         *        '500':
         *           description: Internal Server Error.
         *           content:
         *             application/json:
         *               schema:
         *                  {message: 'Internal server error'}
         */
        router.put('/:id', userController.updateUser);

        /**
         * Post track
         * @openapi
         * /api/users/{id}:
         *    delete:
         *      tags:
         *        - users
         *      summary: "Delete user by id"
         *      description: This endpoint is for delete a specific user using his id
         *      parameters:
         *          - name: id
         *            in: path
         *            description: ID of user to delete
         *            required: true
         *            schema:
         *            type: integer
         *            format: int64
         *      required: true
         *      responses:
         *        '200':
         *          description: Successful operation.
         *          content:
         *             application/json:
         *               schema:
         *                  {message: 'User deleted successfully'}
         *        '400':
         *          description: Get this response in the case that the user whit that id doesn`t exist.
         *          content:
         *            application/json:
         *              schema:
         *                {error: 'Error message'}
         *        '500':
         *           description: Internal Server Error.
         *           content:
         *             application/json:
         *               schema:
         *                  {message: 'Internal server error'}
         */
        router.delete('/:id', userController.deleteUser);


        return router;
    };



};