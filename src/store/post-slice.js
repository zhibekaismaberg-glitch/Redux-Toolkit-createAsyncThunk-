import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
    'fetch/posts',
    async () => {
        const responce =  await fetch('https://jsonplaceholder.typicode.com/posts')
        return await responce.json()
    }
)

const slice = createSlice({
    name: 'posts',
    initialState: {
        data: [],
        status: null // "loading"  | 'error'
    },
    reducers: {},
    extraReducers: (builder) => 
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = null
                state.data = action.payload
            })
            .addCase(fetchPosts.rejected, (state) => {
                state.status = 'error'
            })
}) 

export const postReducer = slice.reducer