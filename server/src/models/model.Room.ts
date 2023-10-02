import mongoose, { Document, Schema } from 'mongoose';

/** document */
export interface IRoom extends Document {
    name: string,
    availability:{
        day: string,
        time: string
    }[];//[], indicate as array so the courses can be multiple
  };

 /** schema */
const RoomSchema = new Schema<IRoom>({
    name: { type: String, required: true },
    availability: [
      {
        day: { type: String, required: true },
        time: { type: String, required: true }
      },
    ],
  });
  
export default mongoose.model<IRoom>('Room', RoomSchema);