import express from "express";
import { createTeacherController, readTeacherController,readAllTeacherController,updateTeacherController,deleteTeacherController } from "../controllers/controller.Teacher";
import { Schemas, ValidateSchema } from "../middleware/middleware.ValidateSchema";
import constant from '../utils/constant.routes.Teacher'

const router = express.Router();

router.post(constant.create, ValidateSchema(Schemas.Teacher.create), createTeacherController);
router.get(constant.read, readTeacherController );
router.get(constant.readAll, readAllTeacherController);
router.put(constant.update, ValidateSchema(Schemas.Teacher.update), updateTeacherController);
router.delete(constant.remove, deleteTeacherController);

export default router;