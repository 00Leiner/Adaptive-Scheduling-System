import mongoose, { Document, Schema } from 'mongoose';

/** document */
export interface ITeacher extends Document {
    name: string,
    hours: string,
    days: string,
    prefferdCourses:{
        code: string,
        description: string,
        units: string 
    }[];//[], indicate as array so the courses can be multiple
  };

 /** schema */
const TeacherSchema = new Schema<ITeacher>({
    name: { type: String, required: true },
    hours: { type: String, required: true },
    days: { type: String, required: true },
    prefferdCourses: [
      {
        code: { type: String, required: true },
        description: { type: String, required: true },
        units: { type: String, required: true }
      },
    ],
  });
  
export default mongoose.model<ITeacher>('Teacher', TeacherSchema);