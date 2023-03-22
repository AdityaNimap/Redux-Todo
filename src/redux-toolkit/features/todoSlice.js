import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    todo: []
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        add: (state = initialState, action) => (
            state.length > 0 ? [...state, action.payload] : [action.payload]
        )
    }
})

export default todoSlice.reducer
export const { add } = todoSlice.actions