import { Request, Response } from "express";

var users = [
    {id: 1, name: 'Tomas Diaz', email: "tdiaz@gmail.com", age: 24, ciudad: 'Córdoba'},
    {id: 2, name: 'Alejandro Diaz', email: "adiaz@gmail.com", age: 52, ciudad: 'Córdoba'},
    {id: 3, name: 'Karina Piñero', email: "kpinero@gmail.com", age: 51, ciudad: 'Córdoba'},
];

export class UserControllers {
    
    constructor(){};

    public getUsers = async(req: Request, res: Response) => {
    
        // Get users list
    
        try {
    
            // Get all users in db
            const response = users;
    
    
            return  !response.length 
                ? res.status(404).json({ message: `There is no users` })
                : res.status(200).json(response);
            
        }
    
        catch(error) {
    
            return res.status(500).json({ error: `Internal Server Error` });
    
        }
    
    };

    public getUserById = ( req: Request, res: Response ) => {
        

        try {
            
            const id = +req.params.id;
            
            if ( isNaN( id ) ) {
                return res.status(400).json({error: `ID must be a number`});
            }
    
            const user = users.find( user => user.id === id);
    
            ( user )
                ? res.json({ user })
                : res.status(404).json({error: `User ${id} not found`});

        } 
        
        catch (error) {
            return res.status(500).json({ error: `Internal Server Error` });
        };

    };

    public createUser = async(req: Request, res: Response) =>{

        // Create new user
    
        try {
        
            const {name, email, age } = req.body;
            var ciudad = req.body
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
            
            if (! req.body.ciudad) {
                ciudad = null;
            }

            // Validate required fields
            if (!name || !email || !age) {
                return res.status(400).json({ error: `Name, email and age are required` });
            };
    
    
            // Verify if the mail is valid
            if (!emailRegex.test(email)){
                return res.status(400).json({ error: `Email ${ email } is not valid` });
            };
    
            // Verify if the mail is already in use
            if (users.find(user => user.email === email)) {
                return res.status(400).json({ error: `Email ${ email } already exists for another user` })
            };
    
            
            // Check if age is a number
            if ( isNaN(age) ) {
            
                return res.status(400).json({ error: `Age argument must be a number` });
            
            };
            
            const new_user = {
                id: users.length + 1,
                name: name,
                email: email,
                age: age,
                ciudad: ciudad
            }
            users.push(new_user);


            return res.status(201).json({
                user: {
                    name,
                    email,
                    age
                }
            });;
            
            
        }
    
        catch (error) {

            return res.status(500).json({ error: `Internal Server Error` });

        };
    
    };
    

};  