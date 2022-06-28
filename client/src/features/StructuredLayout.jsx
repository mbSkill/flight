import { Layout } from 'antd';
import CompanyHead from '../components/CompanyHead';
import SiderMenu from '../components/siderMenu/SiderMenu';
import React, {useEffect, useState} from 'react'
import FlightCard from '../components/DisplayFlight/DisplayFlight';
import SearchForm from '../components/Modal/searchForm';
const { Header, Footer, Content } = Layout;



const StructuredLayout = () => {

    const [content, setContent] = useState('search');
    const [filter, setFilter] = useState(false);

    //Click to select sideMenu option
    function handleClick(e) {
        if(e.key === 'search') setFilter(!filter);
    }

    useEffect(() =>{

        },[content, filter]);

    return(
        <><Layout style={{height: '100vh'}}>
            <Header className="header" style={{height: '6em',}}>
                <CompanyHead/>
            </Header>
            <Layout hasSider>

                <SiderMenu handleClick={handleClick}/>
                <Layout>

                    <Content className="site-layout-background"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        {filter && <SearchForm/>}
                        <FlightCard />
                    </Content>

                    <Footer 
                    style={{ height: '4vh',
                    textAlign: 'center'}}>
                        Footer
                    </Footer>

                    </Layout>
                </Layout>
                
            </Layout>
        </>
            
    );

}
export default StructuredLayout;