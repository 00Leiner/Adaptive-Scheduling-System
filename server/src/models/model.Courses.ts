import mongoose, { Document, Schema } from 'mongoose';

/** document */
export interface ICourses extends Document {
    code: string,
    description: string,
    units: string
  };

 /** schema */
const CoursesSchema = new Schema<ICourses>({
    code: { type: String, required: true },
    description: { type: String, required: true },
    units: { type: String, required: true }
  });
  
export default mongoose.model<ICourses>('Courses', CoursesSchema);