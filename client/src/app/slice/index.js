import { combineReducers } from "@reduxjs/toolkit";
import singleFlightSlice from "./singleFlightSlice";
import  flightSlice  from "./flightSlice";

const rootReducer = combineReducers({ 
    singleFlightData: singleFlightSlice,
    flightdata: flightSlice,});

export default rootReducer; 