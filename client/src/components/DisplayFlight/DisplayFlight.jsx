import { Button, Card } from 'antd';
import styled from "styled-components";

const CardGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const FlightCard = (params) => (
    <>
        <Card
        title={`Flight Number: ${params.flightNumber}`}
        style={{
            width: 300,
        }}
        >
        <CardGroup>
            <div className='departInfo'>
                <h2>{`Departing:`}</h2>
                <h4>{`${params.departAirport}`}</h4>
                <p>{`Date: `}</p>
                <p>{`Time: `}</p>
            </div>
            <div className='ArrivingInfo'>
            <h2>{`Arrival:`}</h2>
                <h4>{`${params.arrivalAirport}`}</h4>
                <p>{`Date: `}</p>
                <p>{`Time: `}</p>
            </div>
            </CardGroup>
            
            <Button type="primary">Modify Flight</Button>
        
        </Card>
    </>

);

export default FlightCard;