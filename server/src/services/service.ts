import express, { Application } from "express";
import dontenv from "dotenv";

dontenv.config();

export class App{

    private app: Application;

    constructor(){
        this.app = express();
        this.settings();
    }
    settings(){
        const SERVER_PORT = process.env.SERVER_PORT
            ? Number(process.env.SERVER_PORT)
            : 3030;
        this.app.set(`port`, SERVER_PORT);
    }
    routes(){}
    middleware(){

    }
    async listen(){
        await this.app.listen(this.app.get("port"));
        console.log("Server on port: ", this.app.get("port"));
    }
}