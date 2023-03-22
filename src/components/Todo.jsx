import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import TodoModal from "../modal/TodoModal"


const Todo = () => {
    const [openModal,setOpenModal] = useState(false)
    const data = useSelector((state)=>state.todo)
    console.log(data)
  return (
    <div className='container'>
        <h1 className='mx-auto'>TODO LIST</h1>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Sr. No</th>
                    <th>Task</th>
                    <th>Description</th>
                    <th>Priority</th>
                    <th colSpan='2'>Action</th>
                    <th></th>
                </tr>
            </thead>
            <tbody className='table-group-divider'>
                <tr>
                    <td>{data.id}</td>
                    <td>{data.todo}</td>
                    <td>{data.descrip}</td>
                    <td>{data.priority}</td>
                    <td>update</td>
                    <td>delete</td>
                </tr>
            </tbody>
        </table>
        <button 
        className='btn btn-outline-warning'
        onClick={()=>setOpenModal(true)}>Add Todo</button>
        <TodoModal open={openModal} onclose={()=>setOpenModal(false)}/>
    </div>
  )
}

export default Todo;
