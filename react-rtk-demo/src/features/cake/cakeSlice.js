// const createSlice = require('@reduxjs/toolkit').createSlice
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    numOfCakes: 10
}
const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfCakes--
        },
        restocked: (state, action) => {
            state.numOfCakes += action.payload
        }
    }

})


// module.exports = cakeSlice.reducer
// module.exports.cakeActions = cakeSlice.actions
export default cakeSlice.reducer
export const { ordered, restocked } = cakeSlice.actions