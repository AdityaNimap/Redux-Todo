import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../redux-toolkit/features/todoSlice'

const TodoModal = ({ open, onclose }) => {

  const dispatch = useDispatch()
  let count = 1;
  const [todo, setTodo] = useState({
    id: count,
    todo: '',
    descrip: '',
    priority: '',
  })


  const handleAdd = () => {
    count++
    dispatch(add(todo))
    console.log(todo)

  }

  if (!open) return null


  return (
    <div>
      <div className="container position-relative">
        <button className='btn btn-outline-danger position-absolute top-0 end-0' onClick={onclose}>X</button>
        <div className='container mt-5'>

          <lable>Add Todo</lable>
          <input
            type='text'
            className='form-control'
            value={todo.todo}
            onChange={(e) => setTodo({ ...todo, todo: e.target.value })}
          ></input>

          <lable>Description</lable>
          <input
            type='text'
            className='form-control'
            value={todo.descrip}
            onChange={(e) => setTodo({ ...todo, descrip: e.target.value })}
          ></input>
          <select
            className='form-select'
            value={todo.priority}
            onChange={(e) => setTodo({ ...todo, priority: e.target.value })}
          >
            <option value="" disabled defaultValue>Select Priority</option>
            <option value='High'>High</option>
            <option value='Medium'>Medium</option>
            <option value='Low'>Low</option>
          </select>

          <button className='btn btn-primary mt-3' onClick={handleAdd}>Add Todo</button>

        </div>
      </div>
    </div>
  )
}

export default TodoModal;
