import { Response, Request } from "express";
import Room from "../models/model.Room";
import mongoose from "mongoose";

export async function createRoomController(req: Request, res: Response){
  try {
    const { name, availability } = req.body;
    const available = availability.map((availability: any) => {
      const { day, time } = availability.courseDetails;
      return {
        day,
        time
      };
    });

    const room = new Room({
      _id: new mongoose.Types.ObjectId(),
      name,
      availabilities: available,
    });

    const savedRoom = await room.save();

    res.status(201).json({ room: savedRoom });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export async function readRoomController(req: Request, res: Response){
  try {
    const roomID = req.params.roomID;
    const room = await Room.findById(roomID);

    room 
      ? res.status(200).json({ room }) 
      : res.status(404).json({ message: "Not found" });
      
  } catch (error) {
    res.status(500).json({ error });
  }
};

export async function readAllRoomController(req: Request, res: Response) {
  try {
    const rooms = await Room.find(); 

    res.status(200).json({ rooms }); 
  } catch (error) {
    res.status(500).json({ error }); 
  }
};

export async function updateRoomController(req: Request, res: Response) {
  try {
    const roomID = req.params.roomID;
    const room = await Room.findById(roomID);

    if (room) {
      room.set(req.body);
      const updatedRoom = await room.save();
      return res.status(200).json({ room: updatedRoom });
    } else {
      return res.status(404).json({ message: "Not found" });
    }
  } catch (error) {
    return res.status(500).json({ error });
  }
};

/** delete program block */
export async function deleteRoomController(req: Request, res: Response){
  try{
    const roomID = req.params.roomID; 
      return await Room.findByIdAndDelete(roomID) 
          ? res.status(201).send()
          : res.status(404).json({ message: " Not found" })
  }catch(error){ res.status(500).json({ error })};
};
