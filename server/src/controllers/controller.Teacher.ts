import { Response, Request } from "express";
import Teacher from "../models/model.Teacher";
import mongoose from "mongoose";

export async function createTeacherController(req: Request, res: Response){
  try {
    const { name, hours, days, prefferdCourses } = req.body;
    const prefferdCoursesObjects = prefferdCourses.map((prefferdCourse: any) => {
      const { code, description, units } = prefferdCourses.courseDetails;
      return {
        code, 
        description, 
        units
      };
    });

    const teacher = new Teacher({
      _id: new mongoose.Types.ObjectId(),
      name,
      hours,
      days,
      prefferdCourses: prefferdCoursesObjects,
    });

    const savedTeacher = await teacher.save();

    res.status(201).json({ teacher: savedTeacher });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export async function readTeacherController(req: Request, res: Response){
  try {
    const teacherID = req.params.teacherID;
    const teacher = await Teacher.findById(teacherID);

    teacher 
      ? res.status(200).json({ teacher }) 
      : res.status(404).json({ message: "Not found" });
      
  } catch (error) {
    res.status(500).json({ error });
  }
};

export async function readAllTeacherController(req: Request, res: Response) {
  try {
    const teachers = await Teacher.find(); 

    res.status(200).json({ teachers }); 
  } catch (error) {
    res.status(500).json({ error }); 
  }
};

export async function updateTeacherController(req: Request, res: Response) {
  try {
    const teacherID = req.params.teacherID;
    const teacher = await Teacher.findById(teacherID);

    if (teacher) {
      teacher.set(req.body);
      const updatedTeacher = await teacher.save();
      return res.status(200).json({ teacher: updatedTeacher });
    } else {
      return res.status(404).json({ message: "Not found" });
    }
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export async function deleteTeacherController(req: Request, res: Response){
  try{
    const teacherID = req.params.teacherID; 
      return await Teacher.findByIdAndDelete(teacherID) 
          ? res.status(201).send()
          : res.status(404).json({ message: " Not found" })
  }catch(error){ res.status(500).json({ error })};
};
