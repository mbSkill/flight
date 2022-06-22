import { Layout } from 'antd';
import CompanyHead from '../components/CompanyHead';
import SiderMenu from '../components/siderMenu/SiderMenu';
import React, {useEffect, useState} from 'react'
import FlightCard from '../components/DisplayFlight/DisplayFlight';
import getFlights from '../components/searchTab/CardContainer';
const { Header, Footer, Content } = Layout;


const StructuredLayout = () => {

    const [content, setContent] = useState('search');
    const [data, setData] = useState('');

    function handleClick(e) {
        setContent(e.key);
    }

    const getFlightData = async (d) => {
        const getData = await d().then((e) => e);
        setData(getData);
        console.log(data)
    }

    useEffect(() =>{
        }, [content,data]);

    return(
        <><Layout style={{height: '100vh'}}>
            <Header className="header" style={{height: '8vh',}}>
                <CompanyHead/>
            </Header>
            <Layout hasSider>
                <button onClick={() => getFlightData(getFlights)}></button>

                <SiderMenu handleClick={[handleClick]}/>
                <Layout>
                    
                    <Content className="site-layout-background">

                        {content === 'search'?<div><FlightCard flightNumber="1" arrivalAirport="DEN" departAirport="MIA"/><p>{data}</p></div>:<><p>Search</p></> }
                        
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