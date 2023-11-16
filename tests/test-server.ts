import { envs } from "../src/config/envs";
import { AppRoutes } from "../src/routes";
import { Server } from "../src/server";


export const testServer = new Server({
    port: envs.PORT,
    routes: AppRoutes.routes,
})