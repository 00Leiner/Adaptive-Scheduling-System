import express from "express";
import { createScheduleController,readScheduleController,readAllScheduleController,updateScheduleController,deleteScheduleController } from "../controllers/controller.Schedule";
import { Schemas, ValidateSchema } from "../middleware/middleware.ValidateSchema";
import constant from '../utils/constant.route.Schedule';

const router = express.Router();

/**Schedule CRUD */
router.post(constant.create, ValidateSchema(Schemas.Schedule.create), createScheduleController);//create data inside db
router.get(constant.read, readScheduleController );// read or view the schedule from database using id
router.get(constant.readAll, readAllScheduleController);// read or view all data inside db
router.put(constant.update, ValidateSchema(Schemas.Schedule.update), updateScheduleController);// update schedule
router.delete(constant.remove, deleteScheduleController);// delete schedule

export default router;