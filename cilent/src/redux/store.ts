import { configureStore } from '@reduxjs/toolkit'
import taskSlice from './task/taskSlice'

export const store = configureStore({
  reducer: {
    tsk:taskSlice
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch