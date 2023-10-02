import express from "express";
import { createRoomController, readRoomController,readAllRoomController,updateRoomController,deleteRoomController } from "../controllers/controller.Room";
import { Schemas, ValidateSchema } from "../middleware/middleware.ValidateSchema";
import constant from '../utils/constant.routes.Room'

const router = express.Router();

router.post(constant.create, ValidateSchema(Schemas.Room.create), createRoomController);
router.get(constant.read, readRoomController );
router.get(constant.readAll, readAllRoomController);
router.put(constant.update, ValidateSchema(Schemas.Room.update), updateRoomController);
router.delete(constant.remove, deleteRoomController);

export default router;