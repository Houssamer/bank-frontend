import {createSlice} from '@reduxjs/toolkit';

export const slice = createSlice({
    name: "slice",
    initialState: {
        
    },
    reducers: {
        
    };
});

export const {} = slice.actions;

export const selectSlice = (state) => state.slice;

export default slice.reducers;