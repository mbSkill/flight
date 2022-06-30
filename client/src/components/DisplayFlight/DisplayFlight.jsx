import React from 'react';
import { useSelector } from 'react-redux';
import { selectFlightData } from '../../app/slice/flightSlice';
import { Card, Space } from 'antd';
import styled from "styled-components";
import UpdateFlightModal from '../Modal/UpdateFlightModal';


const CardGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export function FlightCard() { 
    const flights = useSelector(selectFlightData);
    if (!flights) return;
    let arriveISO;
    let departISO;

    return (
            <Space wrap align='center'
                style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    padding: '3px',
                    overflow: 'scroll',
                    scrollbarWidth: 'none'}}
                >
                   

                {flights.map((flight,key) => (
                <Card key={key}
                title={`Flight Number: ${flight.flightNumber}`}
                style={{
                    maxWidth: '40em',
                    height: '25em',
                    overflow: 'hidden',
                }}
                >
                    <CardGroup>
                        <div className='departInfo'>
                            <h2>{`Departing:`}</h2>
                            <h4>{`${flight.departAirport}`}</h4>
                            <p>{`Date: ${(departISO = new Date(flight.departDate)).toDateString()}`}</p>
                            <p>{`Time: ${departISO.getHours()}: ${departISO.getMinutes()}`}</p>
                        </div>
                        <div className='ArrivingInfo'>
                        <h2>{`Arrival:`}</h2>
                            <h4>{`${flight.arriveAirport}`}</h4>
                            <p>{`Date: ${(arriveISO = new Date(flight.arriveDate)).toDateString()}`}</p>
                            <p>{`Time: ${arriveISO.getHours()}: ${arriveISO.getMinutes()}`}</p>
                
                        </div>
                    </CardGroup>
                    
                     <UpdateFlightModal flightId={`${flight._id}`}/>
                </Card>
                ))}
            </Space>
        
    )
    
    
};


export default FlightCard;
export {CardGroup};