import { Response, Request } from "express";
import User from "../models/model.User";
import mongoose from "mongoose";

export async function createUserController(req: Request, res: Response){
  try {
    const { username, email, password } = req.body;
    
    const user = new User({
      _id: new mongoose.Types.ObjectId(),
      username, 
      email, 
      password
    });

    const savedUser = await user.save();

    res.status(201).json({ user: savedUser });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export async function readUserController(req: Request, res: Response){
  try {
    const userID = req.params.userID;
    const user = await User.findById(userID);

    user 
      ? res.status(200).json({ user }) 
      : res.status(404).json({ message: "Not found" });
      
  } catch (error) {
    res.status(500).json({ error });
  }
};

export async function readAllUserController(req: Request, res: Response) {
  try {
    const users = await User.find(); 

    res.status(200).json({ users }); 
  } catch (error) {
    res.status(500).json({ error }); 
  }
};

export async function updateUserController(req: Request, res: Response) {
  try {
    const userID = req.params.userID;
    const user = await User.findById(userID);

    if (user) {
      user.set(req.body);
      const updatedUser = await user.save();
      return res.status(200).json({ user: updatedUser });
    } else {
      return res.status(404).json({ message: "Not found" });
    }
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export async function deleteUserController(req: Request, res: Response){
  try{
    const userID = req.params.userID; 
      return await User.findByIdAndDelete(userID) 
          ? res.status(201).send()
          : res.status(404).json({ message: " Not found" })
  }catch(error){ res.status(500).json({ error })};
};
