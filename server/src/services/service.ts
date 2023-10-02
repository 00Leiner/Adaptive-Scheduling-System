import express, { Application } from "express";
import { config } from "../config/config.nosql.mongodb";
import http from 'http';
import routeProgramBlock from '../routes/route.ProgramBlock';
import routeSchedule from '../routes/route.Schedule';

export class App{

    private app: Application;

    constructor(){
        this.app = express();
        this.settings();
        this.routes()
    }
    settings(){
        const serverPort = http.createServer(this.app).listen(config.Server.port, () =>
        console.info(`Server is running on port ${config.Server.port}.`)
        );
        this.app.set(`port`, serverPort);
    }
    routes(){
        this.app.use('/ProgramBlock', routeProgramBlock);
        this.app.use('/Schedule', routeSchedule);
    }
    middleware(){

    }
    async listen() {
        await this.app.listen(this.app.get("port"));
      }
}