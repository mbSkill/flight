import { configureStore} from '@reduxjs/toolkit';
import flightReducer from '../components/DisplayFlight/flightSlice';



export default configureStore({
    reducer: {
        flightData: flightReducer,
    },
   
})