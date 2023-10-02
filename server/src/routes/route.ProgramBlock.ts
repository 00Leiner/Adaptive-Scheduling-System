import express from "express";
import { createProgramBlockController, readProgramBlockController,readAllProgramBlockController,updateProgramBlockController,deleteProgramBlockController } from "../controllers/controller.ProgramBlock";
import { Schemas, ValidateSchema } from "../middleware/middleware.ValidateSchema";
import constant from '../utils/constant.routes.Programblock'

const router = express.Router();

/** Program Block CRUD */
router.post(constant.create, ValidateSchema(Schemas.ProgramBlock.create), createProgramBlockController);//create data inside db
router.get(constant.read,readProgramBlockController );// read or view the program block from database using id
router.get(constant.readAll,readAllProgramBlockController);// read or view all data inside db
router.put(constant.update, ValidateSchema(Schemas.ProgramBlock.update), updateProgramBlockController);// update program block
router.delete(constant.remove, deleteProgramBlockController);// delete program block

export default router;