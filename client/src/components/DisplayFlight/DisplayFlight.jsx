import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFlightData, update } from './flightSlice';

import { Button, Card } from 'antd';
import styled from "styled-components";

const CardGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export function FlightCard() {
    const flights = useSelector(selectFlightData);
    const dispatch = useDispatch();
    if (!flights) return;
    return (
        <>
            {flights.map((flight,key) => (
             <Card key={key}
            title={`Flight Number: ${flight.flightNumber}`}
            style={{
                width: 300,
            }}
            >
                <CardGroup>
                    <div className='departInfo'>
                        <h2>{`Departing:`}</h2>
                        <h4>{`${flight.departAirport}`}</h4>
                        <p>{`Date: `}</p>
                        <p>{`${flight.departDate}`}</p>
                        <p>{`Time: `}</p>
                    </div>
                    <div className='ArrivingInfo'>
                    <h2>{`Arrival:`}</h2>
                        <h4>{`${flight.arriveAirport}`}</h4>
                        <p>{`Date: ${flight.arriveDate}`}</p>
                        <p>{`Time: `}</p>
                    </div>
                </CardGroup>
                
                <Button type="primary">Modify Flight</Button>
            </Card>
            ))}
        </>
    )
    
    
};


export default FlightCard;