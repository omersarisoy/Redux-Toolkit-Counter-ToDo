import { createSlice } from "@reduxjs/toolkit";

export const ToDoSlice = createSlice({
    name :"todo",
    initialState: {
        listBox: [],
        listItem: ""
    },
    reducers: {
        getValue:(state, action) => {
            state.listItem = action.payload
        }, 
        addItem: (state, action) => {
            state.listBox = [...state.listBox, action.payload];
        },
        deleteItem: (state, action) => {
            state.listBox.splice(action.payload, 1)
        } 
    }

})

export const {getValue, addItem, deleteItem} = ToDoSlice.actions
export default ToDoSlice.reducer