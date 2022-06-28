import {createSlice} from '@reduxjs/toolkit';
import '../../components/searchTab/getFlights'
import getFlights from '../../components/searchTab/getFlights';

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

export const {update} = flightSlice.actions;

export const selectFlightData = (state) => state.flightdata.value;

export default flightSlice.reducer;

export async function fetchFlights(dispatch, getState) {
    const response = await getFlights();
    dispatch(update(response));
}
