import { Layout, Card, Button } from 'antd';
import CompanyHead from '../components/CompanyHead';
import SiderMenu from '../components/siderMenu/SiderMenu';
import React, {useEffect, useState} from 'react'
import FlightCard from '../components/DisplayFlight/DisplayFlight';
import getFlights from '../components/searchTab/getFlights';
const { Header, Footer, Content } = Layout;



const StructuredLayout = () => {

    const [content, setContent] = useState('search');
    const [data, setData] = useState('');

    //Click to select sideMenu option
    function handleClick(e) {
        setContent(e.key);
    }

    const getFlightData = async (d) => {
        const getData = await d().then((e) => e);
        setData(() => getData);
    }

    const display = () => {
        console.log(content);
    }

    useEffect(() =>{
        getFlightData(getFlights);
        display();

        },[content]);

    return(
        <><Layout style={{height: '100vh'}}>
            <Header className="header" style={{height: '8vh',}}>
                <CompanyHead/>
            </Header>
            <Layout hasSider>

                <SiderMenu handleClick={handleClick}/>
                <Layout>
                    <Content className="site-layout-background">
                        <FlightCard />
                        
                            {/* {Object.entries(data).map((d,key)=>{
                                //Map over flight data
                                //TODO: Create structure for a card container
                                //
                                let fData = d[1];
                                return(
                                    <Card id='key'
                                        title={`Flight Number: ${fData.flightNumber}`}
                                        style={{
                                            width: 300,
                                        }}
                                    >
                                            <div className='departInfo'>
                                                <h2>{`Departing: ${fData.departAirport}`}</h2>
                                                <p>{`Date: ${fData.departDate}`}</p>
                                            </div>
                                            <div className='ArrivingInfo'>
                                            <h2>{`Arrival: ${fData.arriveAirport}`}</h2>
                                                <p>{`Date: ${fData.arriveDate}`}</p>
                                            </div>
                                            <Button type="primary">Modify Flight</Button>
                                    </Card>
                                )
                            })} */}
                        <p>content</p>

                        </Content>
                        <Footer style={{ height: '2vh',
                        textAlign: 'center'}}>Footer</Footer>
                    </Layout>
                </Layout>
                
            </Layout>
        </>
            
    );

}
export default StructuredLayout;