import { Server } from "./server";
import { envs } from "./config/envs";


(async()=>{
    main();
})();


function main() {

    const server = new Server(
        {port: envs.PORT}
    );

    server.start();
    
};