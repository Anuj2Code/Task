import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export interface TaskState {
  taskName: string;
  taskContent: string;
  status: string;
  _id:string
}

const initialState = {
  obj: {},
  message:"",
  allTask: {
    Tasks: new Array<TaskState>
  }
};

const taskSlice = createSlice({
  name: 'Task',
  initialState,
  reducers: {
    fetchtask: (state, action) => {
      state.obj = action.payload
    },
    getTask: (state, action) => {
      state.allTask = action.payload
    },
    deleteTsk: (state, action) => {
      state.message = action.payload
    }
  }
})
export const { fetchtask, getTask , deleteTsk} = taskSlice.actions;
export default taskSlice.reducer;

export function getProduct(data: TaskState) {

  return async function getprodThunk(dispatch: any) {
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    const res = await axios.post(`http://localhost:8800/api/v1/tasks/`, data , config);
    console.log(res);
    dispatch(fetchtask(res.data))
  }
}

export function getTasks() {
  return async function gettaskThunk(dispatch: any) {
    const res = await axios.get('http://localhost:8800/api/v1/tasks');
    dispatch(getTask(res.data))
  }
}

export function deleteTask(id:string) {
  return async function deltaskThunk(dispatch: any) {
    const res = await axios.delete(`http://localhost:8800/api/v1/tasks/${id}`);
    dispatch(deleteTsk(res))
  }
}


