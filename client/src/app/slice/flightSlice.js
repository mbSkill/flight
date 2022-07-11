import {createSlice} from '@reduxjs/toolkit';
import '../../http/getFlights'
import getFlights from '../../http/getFlights';

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
            state.value = Array.from( action.payload)
        
        },
    },
})

export const {update} = flightSlice.actions;

export const selectFlightData = (state) => state.flightdata.value;

export default flightSlice.reducer;

export async function fetchFlights(dispatch) {
    const response = await getFlights();
    dispatch(update(response));

} 
