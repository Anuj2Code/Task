import taskModel from "../models/work.model";
import { Request, Response } from "express";

export const createTask = async (req: Request, res: Response) => {
    try {
        const { taskName, taskContent } = req.body;
        if (!taskName || !taskContent) {
            return res.send({
                "success": false,
                "message": "All field is required"
            })
        }
        const task = new taskModel({
            taskName: taskName,
            taskContent: taskContent,
        })
        await task.save();
        return res.send({
            "success": true,
            "message": "All Task has been created"
        })
    } catch (error: any) {
        throw new Error(error);
    }
}

export const AllTask = async (req: Request, res: Response) => {
    try {
        const allData = await taskModel.find();
        return res.send({
            "success": true,
            "Tasks": allData
        })
    } catch (error: any) {
        throw new Error(error);
    }
}

export const singleTask = async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
        const taskSingle = await taskModel.findById(id);
        if (!taskSingle) {
            return res.send({
                "success": false,
                "message": "No such task has been created"
            })
        }
        return res.send({
            "success": true,
            "Task": taskSingle
        })
    } catch (error: any) {
        throw new Error(error);
    }
}

export const updateTask = async (req: Request, res: Response) => {
    try {
        const { taskName, taskContent } = req.body;
        const id: string = req.params.id;
        const update = {
            taskName: taskName,
            taskContent: taskContent
        }
        const taskSingle = await taskModel.findByIdAndUpdate(id, update, { new: true });
        return res.send({
            "success": true,
            "Task": taskSingle
        })
    } catch (error: any) {
        throw new Error(error);
    }
}

export const deleteTask = async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
        await taskModel.findByIdAndDelete(id);
        return res.send({
            "success": true,
            "message": " Task has been deleted"
        })
    } catch (error: any) {
        throw new Error(error);
    }
}
