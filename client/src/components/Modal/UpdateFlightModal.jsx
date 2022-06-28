import { Button, Modal } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingle, selectSingleFlightData } from '../../app/slice/flightSlice';


const FlightCard = () =>{
    <Card
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
}


const UpdateFlightModal = () => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');
  const flight = useSelector(selectSingleFlightData);
  const dispatch = useDispatch();



  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal with async logic
      </Button>
      <Modal
        title="Title"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
    </>
  );
};

export default UpdateFlightModal;