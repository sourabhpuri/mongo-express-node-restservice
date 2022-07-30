import { Document, Model, model, Schema } from "mongoose";

/**
 * Interface to model the User Schema for TypeScript.
 * @param email:string
 * @param password:string
 * @param avatar:string
 */
export interface IStudent extends Document {
  name: string;
  age: number;
}

const StudentSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true
  }
});

const Student: Model<IStudent> = model("Student", StudentSchema);

export default Student;
