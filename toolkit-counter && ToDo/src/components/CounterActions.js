import React from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../stores/CounterSlice'
import { decrement } from '../stores/CounterSlice'
import { incrementByAmount } from '../stores/CounterSlice'
import { decrementByAmount } from '../stores/CounterSlice'

function CounterActions() {
  const dispatch = useDispatch()
  return (
    <div>
        <button onClick={() => dispatch(decrement())}>Azalt(-)</button>
        <button onClick={() => dispatch(increment())}>Arttır(+)</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>5 Arttır(+)</button>
        <button onClick={() => dispatch(decrementByAmount(5))}>5 Azalt(-)</button>
    </div>
  )
}

export default CounterActions