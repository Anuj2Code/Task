import express, { Request, Response } from "express";
import { config } from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import task from "./Routes/task"
import connectToDatabase from "./config/db";
const app = express();
connectToDatabase();
config();
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb" }))
app.use(
    cors({
        origin: "*",
        credentials: true,
    })
);

app.get("/", (req: Request, res: Response) => {
    res.send('hi hello kaise ho');
})

app.use("/api/v1",task)

app.listen(8800,() => {
    console.log("connect to backend");
  })