import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { ordered, restocked } from './icecreamSlice';

export const IcecreamView = () => {
    const [value, setValue] = useState(1)
    const numOfIceCreams = useAppSelector((state)=>state.icecream.numOfIceCreams)
    const dispatch = useAppDispatch()
    return (
        <div>
            <h2>Number of ice creams - {numOfIceCreams} </h2>
            <button onClick={()=>dispatch(ordered())}>Order ice creams </button>
            <input type='number' value={value} onChange={(e)=> setValue(parseInt(e.target.value))}/>
            <button onClick={()=> dispatch(restocked(value))}>Restock ice creams </button>
        </div>
    );
}

export default IcecreamView;