import express from "express";
import { createUserController, readUserController,readAllUserController,updateUserController,deleteUserController } from "../controllers/controller.User";
import { Schemas, ValidateSchema } from "../middleware/middleware.ValidateSchema";
import constant from '../utils/constant.routes.User'

const router = express.Router();

router.post(constant.create, ValidateSchema(Schemas.User.create), createUserController);
router.get(constant.read, readUserController );
router.get(constant.readAll, readAllUserController);
router.put(constant.update, ValidateSchema(Schemas.User.update), updateUserController);
router.delete(constant.remove, deleteUserController);

export default router;