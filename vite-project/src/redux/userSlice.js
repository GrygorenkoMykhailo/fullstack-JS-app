import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: {
        Email: '',
        Username: '',
        Id: 0,
        Todos: [],
    },
    state: 'idle',
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    },
    extraReducers(builder){
        builder
        .addCase(fetchUsers.pending, (state,action) => {
            state.state = 'pending';
        })
        .addCase(fetchUsers.fulfilled, (state,action) => {
            state.state = 'fulfilled';
            state.user = {
                Email: action.payload.Email,
                Username: action.payload.Username,
                Id: action.payload.Id,
                Todos: action.payload.Todos,
            }
        })
        .addCase(fetchUsers.rejected, (state,action) => {
            state.status = 'rejected';
        })
    }
})

export const fetchUsers = createAsyncThunk('users/fetchUsers',async ({id}) => {
    const response = await fetch('/api/profile/getUserData/' + id, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    return await response.json();
})

export default usersSlice.reducer