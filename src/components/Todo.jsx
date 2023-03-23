import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import TodoModal from "../modal/TodoModal"


const Todo = () => {
    const [openModal,setOpenModal] = useState(false)
    const data = useSelector((state)=>state.todo.todo)
    const dispatch = useDispatch()
    console.log("Store-->",data)

    const handleDelete = ()=>{
        dispatch()
    }

  return (
    <div className='container'>
        <h1 className='mx-auto'>TODO LIST</h1>
        <table className='table'  style={{textAlign:'center'}}>
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
                {
                    data.map((item,i)=>(
                        <tr key={i}>
                            <td>{i+1}</td>
                            <td>{item.todo}</td>
                            <td>{item.descrip}</td>
                            <td>{item.priority}</td>
                            <td><span className='btn btn-primary'>Edit</span></td>
                            <td><span className='btn btn-primary' onClick={handleDelete}>Delete</span></td>
                        </tr>
                    ))
                }
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
