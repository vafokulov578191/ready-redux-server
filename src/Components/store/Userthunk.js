import {
    createAsyncThunk
} from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        const { data } = await axios.get('http://localhost:3001/users')
        return data
    }
)


export const removeUser = createAsyncThunk(
    'user/removeUser',
    async ({id}) => {
        console.log(id);
        const { data } = await axios.delete(`http://localhost:3001/users/${id}`)
        return data
    }
)

export const addUser = createAsyncThunk(
    'user/addUser',
    async (db) => {
        const {data} = await axios.post(`http://localhost:3001/users`, db)
        return data
    }
)