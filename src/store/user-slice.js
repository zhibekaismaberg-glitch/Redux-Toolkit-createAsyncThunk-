import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"


export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async () => {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        )
        return await response.json()
    }
)

const userSlice = createSlice({

    name: "users",
    initialState: {
        users: [],
        status: null
    },
    reducers: {},

    extraReducers: (builder) => {
        builder
        .addCase(fetchUsers.pending, (state) => {
            state.status = "loading"
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.status = null
            state.users = action.payload
        })
        .addCase(fetchUsers.rejected, (state) => {
            state.status = "error"
        })
    }
})


export const userReducer = userSlice.reducer