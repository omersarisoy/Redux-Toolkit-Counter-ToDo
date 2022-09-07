import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './CounterSlice'
import todoReducer from './ToDoSlice'

export default configureStore({
  reducer: {
      counter: counterReducer,
      todo: todoReducer,
  },
})
