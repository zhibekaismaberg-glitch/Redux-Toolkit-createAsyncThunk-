import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
    name: 'todo',
    initialState: {
        data: []
    },
    reducers: {
        addTodo: (state, action) => {
            state.data.push({
                id: crypto.randomUUID(),
                text: action.payload.text,
                done: false
            })
        },
        removeTodo: (state, action) => {
            state.data = state.data.filter((item) => item.id !== action.payload.id )
        },
        toggleTodo: (state, action) => {
            state.data = state.data.map((item) => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        done: !item.done
                    }
                }
                return item
            })
        }
    }
})

export const { actions: todoActions, reducer: todoReducer } = slice