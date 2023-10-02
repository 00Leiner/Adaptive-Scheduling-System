import mongoose, { Document, Schema } from 'mongoose';

/** document */
export interface IUser extends Document {
    username: string,
    email: string,
    password: string
  };

 /** schema */
const UserSchema = new Schema<IUser>({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
  });
  
export default mongoose.model<IUser>('User', UserSchema);