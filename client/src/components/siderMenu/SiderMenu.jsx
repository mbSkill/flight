/**
 * Using menu for { Search flights, InProgress flights, Future flights, Flight templates}https://ant.design/components/menu/
 */

 import {
    PlusCircleOutlined,
  } from '@ant-design/icons';
  import { Layout, Menu} from 'antd';
  import ModalForm from '../Modal/flightModalForm.jsx';
  const {Sider} = Layout;
  

  // Use getItem to fetch the list of menu items to be displayed. 
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  // mock data to store menu items. 
  // This will hold Search, Inprogress, Future, Templates
  const items = [
    // getItem(<Button type='primary'>Search</Button>, 'search', <PieChartOutlined />),
    getItem(<ModalForm>Add Flight</ModalForm>, 'add_Flight', <PlusCircleOutlined />),
  ];

  



 const SiderMenu = ( {handleClick} ) => {
    return (
          <Sider className="site-layout-background"
          
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
          }}
          onCollapse={(collapsed, type) => {
          }}>
            <Menu
              onClick={handleClick}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              theme="dark"
              items={items}
              height="100vh"
            />
        </Sider>
    );
}

export default SiderMenu;