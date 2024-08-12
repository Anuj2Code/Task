const express = require('express');
const router  = express.Router();
import { createTask ,AllTask,singleTask,updateTask,deleteTask} from "../controller/task";

router.post("/tasks",createTask);
router.get("/tasks",AllTask);
router.get("/tasks/:id",singleTask);
router.put("/tasks/:id",updateTask);
router.delete("/tasks/:id",deleteTask)

export default router;