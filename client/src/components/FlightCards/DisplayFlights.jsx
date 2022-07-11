import { useSelector, useDispatch } from 'react-redux';
import './flight.css';
import { fetchFlights } from '../../app/slice/flightSlice';
import { Card, Col, Row, Progress } from 'antd';
import styled from "styled-components";
import UpdateFlightModal from '../Modal/UpdateFlightModal';
import deleteFlightById from '../../http/deleteFlight';
import DeletePopCon from '../Modal/DeletePopCon';


const CardGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;



export function FlightCard() { 
    const dispatch = useDispatch();
    let flights = useSelector(
        (state) => state.flightdata.value);

  

    

    const  onDelete = async (id) => {
        deleteFlightById(id);
        await fetchFlights(dispatch);
        console.log(flights)
    }

    const calculateProgress = (cap, count) => { 
        return Math.round((count/cap)*100);
        
    }

    const Cards = () =>{
        let arriveISO;
        let departISO;

        if(!flights) {
            fetchFlights(dispatch);
            return(<></>);
        }  
        
        return (
            <div style={{
                overflow: "scroll",
                overflowX: "hidden",
                padding: "15px"
            }}
            > 
                 {console.log(flights)}
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
                                    <label htmlFor="dDate">Date:</label>
                                    <p id='dDate'>{`${(departISO = new Date(flight.departDate)).toDateString()}`}</p>
                                    <label htmlFor="dTime">Time:</label>
                                    <p id='dTime'>{`${departISO.getHours()}: ${departISO.getMinutes()}`}</p>
                                </div>
                                <div className='ArrivingInfo'>
                                <h2>{`Arrival:`}</h2>
                                    <h4>{`${flight.arriveAirport}`}</h4>
                                    <label htmlFor="aDate">Date:</label>
                                    <p id='aDate'>{`${(arriveISO = new Date(flight.arriveDate)).toDateString()}`}</p>
                                    <label htmlFor="aTime">Time:</label>
                                    <p id='aTime'>{`${arriveISO.getHours()}: ${arriveISO.getMinutes()}`}</p>
                                </div>
                            </CardGroup> 
                            <div className='occupant'>
                                <label htmlFor="occupantProgress">{`Seats Reserved: ${flight.occupantCount} of ${flight.occupantCapacity}`}</label>
                                <Progress
                                 id='occupantProgress' 
                                 percent={calculateProgress(flight.occupantCapacity,flight.occupantCount)} 
                                 size="small" />
                            </div>
                            <div className='buttonGroup'>
                                <UpdateFlightModal flightId={`${flight._id}`}/>
                                {/* <DeletePopCon flightId={flight._id} fetch={() => onDelete(flight._id)}/> */}
                                <DeletePopCon d={() => onDelete(flight._id)}/>
                            </div>
                            
                        </Card>
                    </Col>
                ))}
                </Row>
            </div>
            
        )
    }

    return (
    <>
            <Cards/>
    </>
        
        )
    //     <div style={{
    //         overflow: "scroll",
    //         overflowX: "hidden",
    //         padding: "15px"
    //     }}
    //     > 
    //     <Button onClick={() => console.log({flights})}>flights</Button>
    //          {console.log(flights2)}
    //         <Row gutter={[32, 8]} >       
    //         {flights.map((flight,key) => (
    //             <Col key={key} xs={24} sm={24} md={12} lg={8} xl={6} >
    //                 <Card className='card'
    //                 title={`Flight Number: ${flight.flightNumber}`}
    //                 style={{
    //                     maxWidth: '40em',
    //                     height: '25em',
    //                     overflow: 'hidden',
                        
    //                 }}
    //                 >
    //                     <CardGroup>
    //                         <div className='departInfo'>
    //                             <h2>{`Departing:`}</h2>
    //                             <h4>{`${flight.departAirport}`}</h4>
    //                             <label htmlFor="dDate">Date:</label>
    //                             <p id='dDate'>{`${(departISO = new Date(flight.departDate)).toDateString()}`}</p>
    //                             <label htmlFor="dTime">Time:</label>
    //                             <p id='dTime'>{`${departISO.getHours()}: ${departISO.getMinutes()}`}</p>
    //                         </div>
    //                         <div className='ArrivingInfo'>
    //                         <h2>{`Arrival:`}</h2>
    //                             <h4>{`${flight.arriveAirport}`}</h4>
    //                             <label htmlFor="aDate">Date:</label>
    //                             <p id='aDate'>{`${(arriveISO = new Date(flight.arriveDate)).toDateString()}`}</p>
    //                             <label htmlFor="aTime">Time:</label>
    //                             <p id='aTime'>{`${arriveISO.getHours()}: ${arriveISO.getMinutes()}`}</p>
    //                         </div>
    //                     </CardGroup> 
    //                     <div className='occupant'>
    //                         <label htmlFor="occupantProgress">{`Seats Reserved: ${flight.occupantCount} of ${flight.occupantCapacity}`}</label>
    //                         <Progress
    //                          id='occupantProgress' 
    //                          percent={calculateProgress(flight.occupantCapacity,flight.occupantCount)} 
    //                          size="small" />
    //                     </div>
    //                     <div className='buttonGroup'>
    //                         <UpdateFlightModal flightId={`${flight._id}`}/>
    //                         <DeletePopCon flightId={flight._id}/>
    //                     </div>
                        
    //                 </Card>
    //             </Col>
    //         ))}
    //         </Row>
    //     </div>
        
    // )
    
    
};

export default FlightCard;
export {CardGroup};