import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../Userthunk";

export const Usersslice = createSlice({
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
                state.data = action.payload
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'Eror'
            })
    }
})

export default Usersslice.reducer