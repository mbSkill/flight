import { useSelector, useDispatch } from 'react-redux';
import './flight.css';
import { fetchFlights } from '../../app/slice/flightSlice';
import { Button, Card, Col, Row, Progress } from 'antd';
import styled from "styled-components";
import UpdateFlightModal from '../Modal/UpdateFlightModal';
import deleteFlightById from '../searchTab/deleteFlight';


const CardGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export function FlightCard() { 
    let flights = useSelector(
        (state) => state.flightdata.value);
    
    const dispatch = useDispatch();
    
    if (!flights) return;
    let arriveISO;
    let departISO;
        
    const onDelete = (id) => {
        console.log(flights)
        deleteFlightById(id);
        fetchFlights(dispatch);
    }

    const calculateProgress = (cap, count) => { 
        return Math.round((count/cap)*100);
        
    }

    return (
           
        <div style={{
            overflow: "scroll",
            overflowX: "hidden",
            padding: "15px"
        }}
        > 
            <Row gutter={[32, 8]} >       
            {flights.map((flight,key) => (
                <Col key={key} xs={24} sm={24} md={12} lg={8} xl={6} >
                    <Card className='card'
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
                                <label for="dDate">Date:</label>
                                <p id='dDate'>{`${(departISO = new Date(flight.departDate)).toDateString()}`}</p>
                                <label for="dTime">Time:</label>
                                <p id='dTime'>{`${departISO.getHours()}: ${departISO.getMinutes()}`}</p>
                            </div>
                            <div className='ArrivingInfo'>
                            <h2>{`Arrival:`}</h2>
                                <h4>{`${flight.arriveAirport}`}</h4>
                                <label for="aDate">Date:</label>
                                <p id='aDate'>{`${(arriveISO = new Date(flight.arriveDate)).toDateString()}`}</p>
                                <label for="aTime">Time:</label>
                                <p id='aTime'>{`${arriveISO.getHours()}: ${arriveISO.getMinutes()}`}</p>
                            </div>
                        </CardGroup> 
                        <div className='occupant'>
                            <label for="occupantProgress">{`Seats Reserved: ${flight.occupantCount} of ${flight.occupantCapacity}`}</label>
                            <Progress
                             id='occupantProgress' 
                             percent={calculateProgress(flight.occupantCapacity,flight.occupantCount)} 
                             size="small" />
                        </div>
                        <div className='buttonGroup'>
                            <UpdateFlightModal flightId={`${flight._id}`}/>
                            <Button type='primary' onClick={() => onDelete(flight._id)} danger>Delete</Button>
                        </div>
                        
                    </Card>
                </Col>
            ))}
            </Row>
        </div>
        
    )
    
    
};


export default FlightCard;
export {CardGroup};