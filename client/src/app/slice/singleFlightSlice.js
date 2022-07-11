import {createSlice} from '@reduxjs/toolkit';
import { getOneFlightById } from '../../http/getOneFlight';


export const singleFlightSlice = createSlice({
    name: 'singleFlightData',
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
        setSingle: ( state, action) =>{
            state.value = action.payload
        },
    }
})

export const {setSingle} = singleFlightSlice.actions;
export const selectSingleFlightData = (state) => state.singleFlightData;

export default singleFlightSlice.reducer;

export async function fetchSingle(dispatch, id) {
    const response = await getOneFlightById(id);
    console.log(response);
    // dispatch(setSingle(response));
}