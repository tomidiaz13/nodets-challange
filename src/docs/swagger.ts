import swaggerJSDoc, {OAS3Definition, OAS3Options} from "swagger-jsdoc";

const swaggerDefinition: OAS3Definition = {
    openapi: "3.0.0",
    info: {
        title: "CRUD Users API Documentation",
        version: "1.0.0",
    },
    servers: [
        {
            url: "http://localhost:3000",
        }
    ],
    components:{
        schemas:{
            user: {
                type: "object",
                required: ["name", "email", "age"],
                properties:{
                    name: {
                        type: "string",
                    },
                    email: {
                        type: "string",
                    },
                    age: {
                        type: "integer",
                    },
                },
            },
        },
    },
};

const swaggerOptions: OAS3Options = {
    swaggerDefinition,
    apis: ["./src/user/*.ts"],
};


export default swaggerJSDoc(swaggerOptions);