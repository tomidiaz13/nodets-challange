import { Server } from "./server";
import { envs } from "./config/envs";
import { AppRoutes } from "./routes";


(async()=>{
    main();
})();


function main() {

    const server = new Server({
        port: envs.PORT,
        routes: AppRoutes.routes,
    });

    server.start();
    
};