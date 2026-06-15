import { configureStore } from "@reduxjs/toolkit"
import { todoReducer } from "./todo-slice"
import { postReducer } from "./post-slice"
import { userReducer } from "./user-slice"


export const store = configureStore({
    reducer: {
        todo: todoReducer,
        post: postReducer,
        users: userReducer
    }
})