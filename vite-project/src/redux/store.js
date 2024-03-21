import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './userSlice'
import todosReducer from './todoSlice'

export default configureStore({
    reducer: {
        users: usersReducer,
        todos: todosReducer,
    }
})