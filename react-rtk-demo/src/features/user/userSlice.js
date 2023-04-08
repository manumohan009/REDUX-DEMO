// const createSlice = require('@reduxjs/toolkit').createSlice
import { createSlice } from '@reduxjs/toolkit'
// const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk
import { createAsyncThunk } from '@reduxjs/toolkit'
// const axios = require('axios')
import axios from 'axios'

const initialState = {
    loading: false,
    users: [],
    error: ''
}

// Generated pending, fulfilled and rejected action types
export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
    return axios.get('https://jsonplaceholder.typicode.com/users').then(response => response.data.map((user) => user.id))
})


const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false,
                state.users = action.payload,
                state.error = ''
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false,
                state.users = [],
                state.error = action.error.message

        })
    }
})

// module.exports = userSlice.reducer
// module.exports.fetchUsers = fetchUsers

export default userSlice.reducer