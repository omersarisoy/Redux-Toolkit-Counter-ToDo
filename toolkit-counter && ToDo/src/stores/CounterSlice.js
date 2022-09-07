import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 2
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        decrementByAmount: (state, action) => {
            state.value -= action.payload 
        }
    }
})

export const { increment, decrement, incrementByAmount, decrementByAmount } = CounterSlice.actions

export default CounterSlice.reducer