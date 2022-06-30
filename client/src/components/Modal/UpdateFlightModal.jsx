import React from 'react';
import { Button, Modal, Form, Input, DatePicker,InputNumber} from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOneFlightById } from  '../searchTab/getOneFlight';
import { selectSingleFlightData, setSingle } from '../../app/slice/singleFlightSlice';

/**
 * Holds the value of a card selected on the Displayflight Component
 * input fields of form will be used to update the flights details. 
 * 
 */

const UpdateFlightCard = ({flight, visible, onCreate, onCancel }) =>{
  //ISO will be for splitting Date
  //let departISO, arriveISO;
  const [form] = Form.useForm();
  return(
    <Modal
      visible={visible}
      title="Update Flight"
      okText="Update"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >

    <Form
    form={form}
    layout="vertical"
    name="form_in_modal"
    >
  
      <Form.Item
        name="departAirport"
        label="Departing Airport"
      >
        <Input placeholder={`${flight.departAirport}`}/>
      </Form.Item>

      <Form.Item
        name="arriveAirport"
        label="Arriving Airport"
      >
        <Input placeholder={`${flight.arriveAirport}`}/>
      </Form.Item>

      <Form.Item 
      name="departDate"
      label="Departing Date"
      >
        <DatePicker showTime placeholder={`${new Date(flight.departAirport)}`}/>
      </Form.Item>

      <Form.Item 
      name="arriveDate"
      label="Arriving Date"
        >
        <DatePicker showTime placeholder={`new Date(flight.arriveAirport))`}/>
      </Form.Item>

      <Form.Item 
      name="occupantCapacity" 
      label="Occupant Capacity"
      >
      <InputNumber min={1} max={200} placeholder={`${flight.occupantCapacity}`}/>
      </Form.Item>

      <Form.Item 
      name="occupantCount" 
      label="Occupant Count"
      >
      <InputNumber min={1} max={200} placeholder={`${flight.occupantCount}`}/>
      </Form.Item>

      <Form.Item name="modifier" className="collection-create-form_last-form-item">
      
      </Form.Item>
    </Form>
  </Modal>
  )
}

//Handling state control
// modal visibility/ updating flight/ accepting input
const UpdateFlightModal = ({flightId}) => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  // const [modalText, setModalText] = useState('Content of the modal');
  const flight = useSelector(selectSingleFlightData);
  const dispatch = useDispatch();


  //When modify button is clicked we retrieve/set singleFlight data for flight selected
  // then open modal
  const showModal = async () => {
    let f = await getOneFlightById(flightId)
    dispatch(setSingle(f));
    setVisible(true);
  };

  // CURRENTLY DOES NADA
  // TODO: submit updated flight information/ confirm update/ close modal/ 
  const handleOk = () => {
    // setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);

  };

  return (
    <>
      <Button type="primary" onClick={() => showModal()}>
        Modify Flight
      </Button>
          {visible && <UpdateFlightCard 
            flight={flight.value}
            visible={visible}
            onOk={() => handleOk()}
            confirmLoading={confirmLoading}
            onCancel={() => {
              setVisible(false);
            }}
            />
          }
    </>
  );
};

export default UpdateFlightModal;