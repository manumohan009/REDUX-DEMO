const { cakeActions } = require('../cake/cakeSlice')

import {ordered as cakeOrdered} from '../cake/cakeSlice'

// const createSlice = require('@reduxjs/toolkit').createSlice
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    numOfIceCreams: 20
}

const iceCreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: (state)=>{
            state.numOfIceCreams--
        },
        restocked: (state, action)=>{
            state.numOfIceCreams += action.payload
        }
    },
    // extraReducers: {
    //     ['cake/ordered']: (state)=>{
    //         state.numOfIceCreams --
    //     }
    // }
    // to respond to other action types
    extraReducers: (builder)=>{
        builder.addCase(cakeOrdered, state =>{
            state.numOfIceCreams --
        })
    }
})

// module.exports = iceCreamSlice.reducer
// module.exports.iceCreamActions = iceCreamSlice.actions

export default iceCreamSlice.reducer
export const { ordered, restocked} = iceCreamSlice.actions