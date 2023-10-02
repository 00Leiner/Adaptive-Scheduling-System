import { Response, Request } from "express";
import Schedule from "../models/model.Schedule";
import mongoose from "mongoose";

/** create new schedule */
export async function createScheduleController(req: Request, res: Response){
  try {const { program, block, courses } = req.body; //destructing program, block, and courses 
  const courseObjects = courses.map((course: any) => { // transforming the courses into and array of course objects using map function
    const { classCode,
        courseCode,
        courseDescription,
        courseUnit,
        day,
        time, 
        room,
        instructor } = course.courseDetails;// here where you can see the details or information of the course such as code, description, and unit  and etc
    return {
        classCode,
        courseCode,
        courseDescription,
        courseUnit,
        day,
        time, 
        room,
        instructor
    };
  });

  const schedule = new Schedule ({ // creating new schedule
    _id: new mongoose.Types.ObjectId(),
    program,
    block,
    courses: courseObjects,
  });
  const savedschedule = await schedule.save(); // Wait for the save operation to complete

  res.status(201).json({ schedule: savedschedule });
  }catch(error){
    res.status(500).json({ error }); //error
  };
};

/** read specific schedule */
export async function readScheduleController(req: Request, res: Response){
   try{ 
    const scheduleID = req.params.scheduleID; 
    const schedule = await Schedule.findById(scheduleID);// find by schedule ID
    
    schedule 
      ? res.status(200).json({ schedule }) // show output
      : res.status(404).json({ message: " Not found" }) // show error or not found if ID not exist 
  
    }catch(error){
      res.status(500).json({ error });
    }; // show error
};

/** read all schedule that exist */
export async function readAllScheduleController(req: Request, res: Response){
   try{
    const schedule = await Schedule.find(); // show all 
    
    res.status(200).json({ schedule });// show output
  } catch(error){
    res.status(500).json({ error });// hold and show error
  }; 
};

/** update schedule details */
export async function updateScheduleController(req: Request, res: Response){
  try{ const scheduleID = req.params.scheduleID; 
    const schedule = await Schedule.findById(scheduleID)
        if (schedule) {
          schedule.set(req.body);
          return schedule
            .save()
            .then((schedule) => res.status(200).json({ schedule })) // output
            .catch((error) => res.status(500).json({ error })); // error
        }else {
          return res.status(404).json({ message: "Not found" })// not exist
        };
  }catch(error) {
    res.status(500).json({ error })// error
  }; 
};

/** delete schedule */
export async function deleteScheduleController(req: Request, res: Response){
  try{
    const scheduleID = req.params.scheduleID; 
    const schedule = await Schedule.findByIdAndDelete(scheduleID);
      schedule
        ? res.status(201).send()
        : res.status(404).json({ message: " Not found" })
    }catch(error){
      res.status(500).json({ error });
    };
};
