import mongoose from "mongoose";

export interface WorkDocument extends mongoose.Document{
    taskName:string;
    taskContent:string;
    deadLine:Date;
    status:string;
    createdAt:Date;
    updatedAt:Date;
}

const taskSchemma = new mongoose.Schema<WorkDocument>({
    taskName:{
        required:true,
        type: String
    },
    taskContent:{
        required:true,
        type: String
    },
    deadLine:{
        type:Date
    },
    status:{
        type:String,
        default:"Active"
    }
},{
    timestamps:true
})

const taskModel = mongoose.model<WorkDocument>("task", taskSchemma);
export default taskModel;