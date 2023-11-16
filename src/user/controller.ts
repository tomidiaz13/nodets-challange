import { Request, Response } from "express";

var users = [
    {id: 1, name: 'Tomas Diaz', email: "tdiaz@gmail.com", age: 24, cuty: 'Córdoba'},
    {id: 2, name: 'Alejandro Diaz', email: "adiaz@gmail.com", age: 52, city: 'Córdoba'},
    {id: 3, name: 'Karina Piñero', email: "kpinero@gmail.com", age: 51, city: 'Córdoba'},
];

export class UserControllers {
    
    constructor(){};

    public getUsers = (req: Request, res: Response) => {
    
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

    public createUser = (req: Request, res: Response) =>{

        // Create new user
    
        try {
        
            const {name, email, age } = req.body;
            var city = req.body.city
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
            
            if (! req.body.ciudad) {
                city = null;
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
                city: city
            }
            users.push(new_user);


            return res.status(201).json({
                user: {
                    name,
                    email,
                    age,
                    city
                }
            });;
            
            
        }
    
        catch (error) {

            return res.status(500).json({ error: `Internal Server Error` });

        };
    
    };

    
    public updateUser = (req: Request, res: Response) =>{

        // Update info details by id
    
        try {
    
            const id = +req.params.id;
            const new_user = req.body;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            console.log(new_user.email);

            if ( isNaN( id ) ) {
                return res.status(400).json({error: `ID must be a number`});
            }
    
            // Verify that the body came with all required arguments
            if ( ! req.body.name || ! req.body.email || ! req.body.age ) {
                return res.status(400).json({ error: `Name, email and age are required` });
            };
    
            // Verify if the age or the id are not a number 
            if ( isNaN(id) || isNaN(req.body.age) ) {
                return res.status(400).json({ error: `Id argument or age must be a number` });
            };
    
            // Verify if the user exists
            if (! users.find( user => user.id === id ) ) {
                return res.status(404).json({ error: `User ${ id } not found` })
            }
    
            // Verify if the mail is valid
            if (!emailRegex.test(req.body.email)){
                return res.status(400).json({ error: `Email ${ req.body.email } is not valid` });
            };
    
            // Verify if the mail is already in use
            if ( users.find(user => user.email === req.body.email )) {
                return res.status(400).json({ error: `Email ${ req.body.email } already exists for another user` })
            };


            ( req.body.ciudad )
                ? new_user.city = req.body.city
                : new_user.city = null;


            // UPDATE

            users.forEach( (user, index) => {
                if (user.id === id){

                    users[index].id = id;
                    users[index].name = new_user.name;
                    users[index].email = new_user.email;
                    users[index].age = new_user.age;
                    users[index].city = new_user.city;
                    
                };
            });

            return res.status(200).json({ new_user });
        }
    
        catch (error) {

            return res.status(500).json({ error: `Internal Server Error` });

        };
    
    };
    
    

    public deleteUser = async(req: Request, res: Response) =>{

        // Delete user info from the database by id

        try {

            const id = parseInt(req.params.id);

            // Validate id is a number 
            if ( isNaN( id ) ) {
                return res.status(400).json({error: `ID must be a number`});
            }

            const user = users.find( user => user.id === id )

            // Verify if the user exists
            if (! user ) {
                return res.status(404).json({ error: `User ${ id } not found` })
            }

            // Delete user
            users.splice( users.indexOf(user), 1 );

            return res.status(200).json({ user })

        }

        catch (error) {

            return res.status(500).json({ error: `Internal Server Error` });

        };
        
    };

};  
