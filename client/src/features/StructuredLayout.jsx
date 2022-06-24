import { Layout } from 'antd';
import CompanyHead from '../components/CompanyHead';
import SiderMenu from '../components/siderMenu/SiderMenu';
import React, {useEffect, useState} from 'react'
import FlightCard from '../components/DisplayFlight/DisplayFlight';
const { Header, Footer, Content } = Layout;



const StructuredLayout = () => {

    const [content, setContent] = useState('search');

    //Click to select sideMenu option
    function handleClick(e) {
        setContent(e.key);
    }

    useEffect(() =>{

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