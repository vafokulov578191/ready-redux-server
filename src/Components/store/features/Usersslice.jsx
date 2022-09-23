import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../Userthunk";

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
        status: 'idle'
    },
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(fetchUsers.pending, (state, action) => {
            state.status = 'loading...'
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.status = 'success'
            console.log(action.payload);
        })
        .addCase(fetchUsers.rejected, (state, action) => {
            state.status = 'Eror'
        })
    }
})

export default usersSlice.reducer