import { useEffect, useState } from "react";
import Card from "./Card"
import TaskDetail from "./TaskDetail"
import {  getProduct ,getTasks} from "../redux/task/taskSlice";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../redux/store";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ex from "../assets/Frame 1171275857.png"
import ex1 from "../assets/Frame 1171275856.png"
import ex2 from "../assets/Frame 1171275859.png"

const Home = () => {
  const [selected, setSelected] = useState<Date | undefined>(undefined);
  const dispatch = useDispatch();
  const {allTask} = useSelector((state:RootState)=>state.tsk);
  const Done = allTask.Tasks.filter((i)=>i.status==="Done" )
  const Done1 = allTask.Tasks.filter((i)=>i.status==="Active" )
  const Done2 = allTask.Tasks.filter((i)=>i.status==="Expired" )
  
  const [task,setTask] = useState({
    taskName:"",
    taskContent:"",
    status:"",
    _id:""
  })
  
  useEffect(()=>{
    dispatch(getTasks())
  },[dispatch,allTask])

   const onsubmit=()=>{
     dispatch(getProduct(task))
     if(allTask){
      toast.success("Task Added")
     }
   }
  const openModal = () => {
    const modal = document.getElementById('my_modal_5') as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };
  const openModal1 = () => {
    const modal = document.getElementById('my_modal_3') as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };
  return (
    <>
    <ToastContainer />
      <div className="min-h-[105vh] flex gap-[50px]">
        <div className="mt-[20px]">
          <div className="mt-[19px] ml-[22px]"><Card im={ex} total={Done2.length} name="Expired Task"/></div>
          <div className="mt-[19px] ml-[22px]"><Card im={ex1} name="Active Task" total={Done1.length}/></div>
          <div className="mt-[19px] ml-[22px]"><Card im={ex2} name="Total Task" total={allTask.Tasks.length}/></div>
          <button className=" btn w-[280px] h-[50px] hover:bg-black hover:text-white bg-black text-white rounded-2xl flex gap-3 items-center justify-center ml-[20px] mt-[17px]" onClick={openModal}>
            <p>+</p>
            <p>Add Task</p>
          </button>
          <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box h-[550px]">
              <div className="flex gap-2 justify-center items-center">
                <h1 className="bg-yellow-500 h-3 w-3 rounded-full"></h1>
                <h3 className="font-bold text-[25px] text-center">ADD TASK</h3>
              </div>
              <hr className="h-[2px] w-[90%] bg-blue-600 ml-[20px]" />
              <div className="p-[20px]">
                <input type="text" placeholder="Title" className="outline-none bg-white pl-[10px]" value={task.taskName} onChange={(e)=>setTask({...task,taskName:e.target.value})} />
                <hr className="h-[3px] w-[98%] bg-black " />
              </div>
              <textarea className="textarea textarea-bordered ml-[20px] border-2 border-double" cols={57} rows={10} placeholder="Detail ..." value={task.taskContent} onChange={(e)=>setTask({...task,taskContent:e.target.value})}></textarea>
              <div className="modal-action w-[100%] flex justify-between">
              <div className="flex gap-3 pt-[20px]">
                    <h1 className="font-medium cursor-pointer" onClick={openModal1} >Deadline :</h1>
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
                    <h1 className="font-normal">{selected ? selected.toLocaleDateString() : 'No deadline set'}</h1>
                </div>
                <form method="dialog">
                  <button className="btn bg-white text-lg border-0 mt-[5px] hover:bg-white" onClick={onsubmit}>Assigned to</button>
                </form>
                <form method="dialog">
                  <button className="btn bg-white text-lg border-0 hover:bg-white mt-[5px]">close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
        <div className="h-[96%] flex justify-center items-center mt-[60px]">
          <div className="bg-[#ECEDEE] w-[400px] min-h-[98%] rounded-2xl shadow-slate-400 shadow-md">
            <div className="w-[100%] text-center flex justify-center items-center gap-2 mt-[20px]">
              <h1 className="bg-blue-800 h-3 w-3 rounded-full mb-[15px]"></h1>
              <h1 className="text-[19px] font-medium pb-[15px]">TO DO</h1>
              <h1 className="bg-slate-300 h-5 w-5 rounded-full mb-[15px] text-center text-[13px] font-medium mt-[5px]">{Done.length}</h1>
            </div>
            <hr className="h-[5px] w-[90%] bg-blue-600 ml-[20px]" />
            <div>
            {Done2 && Done2.map((task, i) => (
            <div key={i}>
              <TaskDetail task={task} pass={selected!}/>
            </div>
          ))}
            </div>
          </div>
        </div>
        <div className="h-[96%] flex justify-center items-center mt-[60px]">
          <div className="bg-[#ECEDEE] w-[400px] min-h-[98%] rounded-2xl shadow-slate-400 shadow-md">
            <div className="w-[100%] text-center flex justify-center items-center gap-2 mt-[20px]">
              <h1 className="bg-yellow-500 h-3 w-3 rounded-full mb-[15px]"></h1>
              <h1 className="text-[19px] font-medium pb-[15px]">On Progress</h1>
              <h1 className="bg-slate-300 h-5 w-5 rounded-full mb-[15px] text-center text-[13px] font-medium mt-[5px]">{Done1.length}</h1>
            </div>
            <hr className="h-[5px] w-[90%] bg-yellow-500 ml-[20px]" />
            <div>
            {Done1 && Done1.map((task, i) => (
            <div key={i}>
              <TaskDetail task={task} pass={selected!}/>
            </div>
          ))}
            </div>
          </div>
        </div>
        <div className="h-[96%] flex justify-center items-center mt-[60px]">
          <div className="bg-[#ECEDEE] w-[400px] min-h-[98%] rounded-2xl shadow-slate-400 shadow-md">
            <div className="w-[100%] text-center flex justify-center items-center gap-2 mt-[20px]">
              <h1 className="bg-green-400 h-3 w-3 rounded-full mb-[15px]"></h1>
              <h1 className="text-[19px] font-medium pb-[15px]">Done</h1>
              <h1 className="bg-slate-300 h-5 w-5 rounded-full mb-[15px] text-center text-[13px] font-medium mt-[5px]">{Done2.length}</h1>
            </div>
            <hr className="h-[5px] w-[90%] bg-green-400 ml-[20px]" />
            <div>
            {Done && Done.map((task, i) => (
            <div key={i}>
              <TaskDetail task={task} pass={selected!}/>
            </div>
          ))}
            </div>
          </div>
        </div>
        <div>

        </div>
      </div>
    </>
  )
}

export default Home
