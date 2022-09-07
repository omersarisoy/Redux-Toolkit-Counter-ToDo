import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, getValue, deleteItem} from '../stores/ToDoSlice'

function ToDo() {
    const dispatch = useDispatch()
    const listItem = useSelector(state => state.todo.listItem)
    const listBox = useSelector(state => state.todo.listBox)
    
    // const [listItem, setListItem] = useState("")
    // const [listBox, setListBox] = useState([
    //     {
    //         name: "ömer",
    //     }
    // ])

    // const handleSave = () => {
    //     setListBox((prev) => [...prev, {name: listItem, active: false}])
    // }

    // const handleDelete = (listIndex) => {
    //    setListBox((prev) => prev.filter((element,index) => index !== listIndex))
    //    console.log('listBox', listBox)
    // }

  return (
    <div>
        <input name="title" value={listItem} onChange={(e) => dispatch(getValue(e.target.value))}/>
        <button onClick={() => dispatch(addItem(listItem)) }>Save</button>
        <div>
            <ul> 
                {listBox.map((item, listIndex) => (<div style={{display:"flex"}}><li>{item}</li> <button onClick={() => dispatch(deleteItem(listIndex))}>x</button></div>) )}
            </ul>
        </div>
    </div>
  )
}

export default ToDo