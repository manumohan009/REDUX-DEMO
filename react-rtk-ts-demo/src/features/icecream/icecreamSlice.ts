
import {ordered as cakeOrdered} from '../cake/cakeSlice'

import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type InitialState = {
    numOfIceCreams: number
}

const initialState: InitialState = {
    numOfIceCreams: 20
}

const iceCreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: (state)=>{
            state.numOfIceCreams--
        },
        restocked: (state, action: PayloadAction<number>)=>{
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

console.log('manu',iceCreamSlice)

export default iceCreamSlice.reducer
export const { ordered, restocked} = iceCreamSlice.actions