import { Response, Request } from "express";
import ProgramBlock from "../models/model.ProgramBlock";
import mongoose from "mongoose";

/** create new Program Block */
export async function createProgramBlockController(req: Request, res: Response){
  try {
    const { program, block, courses } = req.body;
    const courseObjects = courses.map((course: any) => {
      const { code, description, unit } = course.courseDetails;
      return {
        code,
        description,
        unit,
      };
    });

    const programBlock = new ProgramBlock({
      _id: new mongoose.Types.ObjectId(),
      program,
      block,
      courses: courseObjects,
    });

    const savedProgramBlock = await programBlock.save(); // Wait for the save operation to complete

    res.status(201).json({ programBlock: savedProgramBlock });
  } catch (error) {
    res.status(500).json({ error });
  }
}

/** read specific program block */
export async function readProgramBlockController(req: Request, res: Response){
  try {
    const programBlockID = req.params.programBlockID;
    const programBlock = await ProgramBlock.findById(programBlockID);

    programBlock 
      ? res.status(200).json({ programBlock }) 
      : res.status(404).json({ message: "Not found" });
      
  } catch (error) {
    res.status(500).json({ error });
  }
}

/** read all program block that exist */
export async function readAllProgramBlockController(req: Request, res: Response) {
  try {
    const programBlocks = await ProgramBlock.find(); // Retrieve all program blocks

    res.status(200).json({ programBlocks }); // Send the program blocks in the response
  } catch (error) {
    res.status(500).json({ error }); // Handle errors and send an error response
  }
}

/** update program block details */
export async function updateProgramBlockController(req: Request, res: Response){
  try {
    const programBlockID = req.params.programBlockID;
    const programBlock = await ProgramBlock.findById(programBlockID);
     
        if (programBlock) {
          programBlock.set(req.body);
          return programBlock
            .save()
            .then((programBlock) => res.status(200).json({ programBlock })) // output
            .catch((error) => res.status(500).json({ error })); // error
        }else {
          return res.status(404).json({ message: "Not found" })// not exist
        }
      }catch (error) {
        res.status(500).json({ error });
      }
};

/** delete program block */
export async function deleteProgramBlockController(req: Request, res: Response){
  try{
    const programBlockID = req.params.programBlockID; 
      return await ProgramBlock.findByIdAndDelete(programBlockID) 
          ? res.status(201).send()
          : res.status(404).json({ message: " Not found" })
  }catch(error){ res.status(500).json({ error })};
};
