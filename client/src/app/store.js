import { configureStore} from '@reduxjs/toolkit';
import { flightSlice } from './slice/flightSlice';
import { singleFlightSlice } from './slice/singleFlightSlice';
import rootReducer from './slice/';

const store = configureStore({
    reducer: {
        flightdata: flightSlice.reducer,
        singleFlightData: singleFlightSlice.reducer
    }
  });

export default store;