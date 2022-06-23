import {createSlice} from '@reduxjs/toolkit';

export const flightSlice = createSlice({
    name: 'flightdata',
    initialState: {
        flightNumber: 0,
        departDate: "",
        arriveDate: "",
        departAirport: "",
        arriveAirport: "",
        occupantCapacity: 0,
        occupantCount: 0
    },
    reducers:{
        update: (state, action) =>{
            state.value = action.payload
        },
    },
})

export const {update} = flightSlice.actions

export const selectFlightData = (state) => state.flightData.value

export default flightSlice.reducer