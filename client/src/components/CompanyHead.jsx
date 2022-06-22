import  './companyHead.css'
import { PageHeader } from 'antd';


const CompanyHead = () => (

    <PageHeader
        className="site-page-header"
        ghost='true'
        // onBack={() => null}
        title="Inception Flights"
        subTitle="Management Portal"
        color="white"
    />

 );

 export default CompanyHead;
