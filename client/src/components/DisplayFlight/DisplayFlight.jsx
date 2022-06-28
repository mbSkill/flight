import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFlightData, update } from '../../app/slice/flightSlice';
import { fetchSingle, selectSingleFlightData, setSingle } from '../../app/slice/singleFlightSlice';
import { Button, Card, Space } from 'antd';
import styled from "styled-components";
import { getOneFlightById } from  '../searchTab/getOneFlight';


const CardGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export function FlightCard() { 
    const dispatch = useDispatch();
   
    // dispatch(fetchSingle());
    const flights = useSelector(selectFlightData);
    const singleFlight = useSelector(selectSingleFlightData);
    console.log(singleFlight);
    const single = getOneFlightById("62acce810a734f66e7f735e2")
    console.log(single);
    if (!flights) return;
    let arriveISO;
    let departISO;

    const handleClick = async (e) =>{
        // console.log(singleFlight)
        // console.log(singleFlight)
        dispatch(setSingle(singleFlight)) 
        
        
        console.log(singleFlight)
    }
    return (
            <Space wrap align='center'
                style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    padding: '3px',
                    overflow: 'scroll',
                    scrollbarWidth: 'none'}}>

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
                            <p>{`Date: ${(departISO = new Date(flight.departAirport)).toDateString()}`}</p>
                            <p>{`Time: ${departISO.getDate()}: ${departISO.getHours()}`}</p>
                        </div>
                        <div className='ArrivingInfo'>
                        <h2>{`Arrival:`}</h2>
                            <h4>{`${flight.arriveAirport}`}</h4>
                            <p>{`Date: ${ (arriveISO = new Date(flight.arriveDate)).toDateString()}`}</p>
                            <p>{`Time: ${arriveISO.getHours()}: ${arriveISO.getMinutes()}`}</p>
                
                        </div>
                    </CardGroup>
                    
                    <Button type="primary" onClick={()=>handleClick(flight._id)}>Modify Flight</Button>
                </Card>
                ))}
            </Space>
        
    )
    
    
};


export default FlightCard;