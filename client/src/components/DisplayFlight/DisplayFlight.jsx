import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFlightData, update } from './flightSlice';

import { Button, Card } from 'antd';
import styled from "styled-components";
import getFlights from '../searchTab/getFlights';

const CardGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;


export function FlightCard() {
    const flights = useSelector(selectFlightData);
    const dispatch = useDispatch();
    
    return (
        <>
            <Button onClick={() =>dispatch(update(getFlights))}>click for updates</Button>
            <p>{flights}</p>
        </>
            // <Card key={key}
            // title={`Flight Number: ${data.flightNumber}`}
            // style={{
            //     width: 300,
            // }}
            // >
            //     <CardGroup>
            //         <div className='departInfo'>
            //             <h2>{`Departing:`}</h2>
            //             <h4>{`${data.departAirport}`}</h4>
            //             <p>{`Date: `}</p>
            //             <p>{`${data.departDate}`}</p>
            //             <p>{`Time: `}</p>
            //         </div>
            //         <div className='ArrivingInfo'>
            //         <h2>{`Arrival:`}</h2>
            //             <h4>{`${data.arrivalAirport}`}</h4>
            //             <p>{`Date: ${data.arriveDate}`}</p>
            //             <p>{`Time: `}</p>
            //         </div>
            //     </CardGroup>
                
            //     <Button type="primary">Modify Flight</Button>
            // </Card>
        )
 
    
};


export default FlightCard;