import express from "express";
import { createCoursesController, readCoursesController,readAllCoursesController,updateCoursesController,deleteCoursesController } from "../controllers/controller.Courses";
import { Schemas, ValidateSchema } from "../middleware/middleware.ValidateSchema";
import constant from '../utils/constant.routes.Courses'

const router = express.Router();

router.post(constant.create, ValidateSchema(Schemas.Courses.create), createCoursesController);
router.get(constant.read, readCoursesController );
router.get(constant.readAll, readAllCoursesController);
router.put(constant.update, ValidateSchema(Schemas.Courses.update), updateCoursesController);
router.delete(constant.remove, deleteCoursesController);

export default router;