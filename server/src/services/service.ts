import express, { Application } from "express";
import { config } from "../config/config.nosql.mongodb";
import http from 'http';
import routeProgramBlock from '../routes/route.ProgramBlock';
import routeSchedule from '../routes/route.Schedule';
import routeRoom from '../routes/route.Room';
import routeTeacher from '../routes/route.Teacher';
import routeCourses from '../routes/route.Courses';
import routeUser from '../routes/route.User'

export class App{

    private app: Application;

    constructor(){
        this.app = express();
        this.settings();
        this.routes()
    }
    
    async settings() {
        const server = http.createServer(this.app);
        await new Promise<void>((resolve, reject) => {
            server.listen(config.Server.port, () => {
                console.info(`Server is running on port ${config.Server.port}.`);
                resolve();
            });
        });
    }
    routes(){
        this.app.use('/ProgramBlock', routeProgramBlock);
        this.app.use('/Schedule', routeSchedule);
        this.app.use('/Room', routeRoom);
        this.app.use('/Teacher', routeTeacher);
        this.app.use('/Courses', routeCourses);
        this.app.use('/User', routeUser);
    }
}