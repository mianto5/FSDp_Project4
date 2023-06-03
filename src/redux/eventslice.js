import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
    events:[],
    status:'idle',
    error:''
}

export const fetchEvents = createAsyncThunk('fetch/Events', async()=>{
    let response = await fetch('http://localhost:3000/events')
    return response.json()
})

const eventslice = createSlice({
    name:'events',
    initialState,
    reducers:{
    },
    extraReducers(builder){
        builder.addCase(fetchEvents.fulfilled, (state, action)=>{
            state.status = 'success';
            state.events = state.events.concat(action.payload);
        })
        builder.addCase(fetchEvents.rejected, (state, action)=>{
            state.status = 'failure';
        })
    }
})

console.log(initialState.status);
export default eventslice.reducer;