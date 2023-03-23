import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    todo: []
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        add: (state = initialState, action) => {
            state.todo = state.todo.length > 0 ? [...state.todo, action.payload] : [action.payload]
        },
        delete: (state, action) => {
            
        }
    }
})

export default todoSlice.reducer
export const { add } = todoSlice.actions