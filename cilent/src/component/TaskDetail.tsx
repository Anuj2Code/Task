import { MdDelete } from "react-icons/md";
import { deleteTask } from "../redux/task/taskSlice";
import { useDispatch } from 'react-redux';
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { useState } from "react";

interface TaskState {
    _id: string;
    taskName: string;
    taskContent: string;
    status: string;
}

interface SomeComponentProps {
    task: TaskState;
    pass:Date
}



const TaskDetail: React.FC<SomeComponentProps> = ({ task, pass }) => {
    const [selected, setSelected] = useState<Date | undefined>(undefined);
    const dispatch = useDispatch();
    const onsubmit = (id: string) => {
        console.log(id);
        dispatch(deleteTask(id))
    }

  

    const openModal = () => {
        const modal = document.getElementById('my_modal_3') as HTMLDialogElement;
        if (modal) {
            modal.showModal();
        }
    };
    return (
        <div className="bg-white h-[200px] w-[350px] m-[25px] rounded-2xl shadow-slate-400 shadow-md">
            <div className="pt-[30px] pl-[20px]">
                <div className="w-[100%] flex justify-between">
                    <button className={task.status === "Done" ? 'text-green-500 border rounded-md bg-green-200  h-[30px] w-[60px] ' : 'text-red-500  h-[30px] w-[60px] bg-red-200 rounded-md'}>
                        {task.status}
                    </button>
                    <MdDelete className="mr-[25px] h-[25px] w-[20px] cursor-pointer " onClick={() => onsubmit(task._id)} />
                </div>
                <h1 className="text-xl font-bold pt-[10px]">{task.taskName}</h1>
                <h1 className="text-[15px] text-gray-400 leading-snug">{task.taskContent}</h1>
                <div className="flex gap-3 pt-[20px]">
                    <h1 className="font-medium cursor-pointer" onClick={openModal} >Deadline :</h1>
                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box flex justify-center items-center">
                            <form method="dialog">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <DayPicker
                                mode="single"
                                selected={selected}
                                onSelect={setSelected}
                            />
                        </div>
                    </dialog>
                    <h1 className="font-normal">{pass ?pass.toLocaleDateString(): "12/9/24"}</h1>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default TaskDetail
