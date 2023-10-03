import { Response, Request } from "express";
import Courses from "../models/model.Courses";
import mongoose from "mongoose";

export async function createCoursesController(req: Request, res: Response){
  try {
    const { code, description, units } = req.body;
    
    const courses = new Courses({
      _id: new mongoose.Types.ObjectId(),
      code, 
      description, 
      units
    });

    const savedCourses = await courses.save();

    res.status(201).json({ courses: savedCourses });
  } catch (error) {
    res.status(500).json({ error });
    res.render('error', { error: error });
  }
};

export async function readCoursesController(req: Request, res: Response){
  try {
    const coursesID = req.params.coursesID;
    const courses = await Courses.findById(coursesID);

    courses 
      ? res.status(200).json({ courses }) 
      : res.status(404).json({ message: "Not found" });
      
  } catch (error) {
    res.status(500).json({ error });
    res.render('error', { error: error });
  }
};

export async function readAllCoursesController(req: Request, res: Response) {
  try {
    const coursess = await Courses.find(); 

    res.status(200).json({ coursess }); 
  } catch (error) {
    res.status(500).json({ error }); 
    res.render('error', { error: error });
  }
};

export async function updateCoursesController(req: Request, res: Response) {
  try {
    const coursesID = req.params.coursesID;
    const courses = await Courses.findById(coursesID);

    if (courses) {
      courses.set(req.body);
      const updatedCourses = await courses.save();
      return res.status(200).json({ courses: updatedCourses });
    } else {
      return res.status(404).json({ message: "Not found" });
    }
  } catch (error) {
    res.status(500).json({ error });
    res.render('error', { error: error });
  }
};

export async function deleteCoursesController(req: Request, res: Response){
  try{
    const coursesID = req.params.coursesID; 
      return await Courses.findByIdAndDelete(coursesID) 
          ? res.status(201).send()
          : res.status(404).json({ message: " Not found" })
  }catch(error){ 
    res.status(500).json({ error });
  res.render('error', { error: error });
};
};
