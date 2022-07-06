import React from 'react';
import moment from 'moment';
import { Button, Modal, Form, Input, DatePicker,InputNumber} from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOneFlightById } from  '../../http/getOneFlight';
import { selectSingleFlightData, setSingle } from '../../app/slice/singleFlightSlice';
import updateFlight from '../../http/updateFlight';
import { selectFlightData } from '../../app/slice/flightSlice';

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
            values._id = flight._id;
            onCreate(values);
            form.resetFields();
            
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >

    <Form
    form={form}
    layout="vertical"


  //TODO: Make dates consistent as of now some dates break form. 
    initialValues = {{
      "departAirport": flight.departAirport,
      "arriveAirport": flight.arriveAirport,
      "departDate": moment(`${flight.departDate}`),
      "arriveDate":  moment(`${flight.arriveDate}`),
      "occupantCapacity": flight.occupantCapacity,
      "occupantCount": flight.occupantCount,
     }}
    >
  
      <Form.Item
        name="departAirport"
        label="Departing Airport"
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="arriveAirport"
        label="Arriving Airport"
      >
        <Input />
      </Form.Item>

      <Form.Item 
      name="departDate"
      label="Departing Date"
      >
        <DatePicker showTime />
      </Form.Item>

      <Form.Item 
      name="arriveDate"
      label="Arriving Date"
      hasFeedback
      dependencies={['departDate']}
      rules={[
        ({ getFieldValue }) => ({
          validator: (_, value ) => 
          (moment(value).isAfter(Date.now())) ?
            Promise.resolve() :
            Promise.reject(
              new Error('Arrival time may not be before current time/date')
            )
        }),

        ({ getFieldValue }) => ({
          validator: (_, value ) => 
          (moment(value).isAfter(getFieldValue('departDate'))) ?
            Promise.resolve() :
            Promise.reject(
              new Error('Arrival date/time must be after departure date/time')
            )
        })
      ]}
      >
        <DatePicker showTime />
      </Form.Item>

      <Form.Item 
      name="occupantCapacity" 
      label="Occupant Capacity"
      >
      <InputNumber min={1} max={200} />
      </Form.Item>

      <Form.Item 
      name="occupantCount" 
      label="Occupant Count"
      hasFeedback
      dependencies={['occupantCapacity']}
      rules={[
            ({ getFieldValue }) => ({
              validator: (_, value) =>
                (value <= getFieldValue('occupantCapacity')) ?
                    Promise.resolve() :
                    Promise.reject(
                      new Error('Occupant Count must be less than occupant Capacity'))
              
            })
        ]} 
      >
      <InputNumber min={1} max={200}/>
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
  const flight = useSelector(selectSingleFlightData);
  const dispatch = useDispatch();


  //When modify button is clicked we retrieve/set singleFlight data for flight selected
  // then open modal
  const showModal = async () => {
    let f = await getOneFlightById(flightId)
    dispatch(setSingle(f));
    setVisible(true);
  };

  const onCreate = (values) => {
    values.arriveDate = values.arriveDate._d.toISOString();
    values.departDate = values.departDate._d.toISOString();
    delete values.modifier;
    updateFlight(values);
    dispatch(selectFlightData);

    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={() => showModal()}>
        Modify Flight
      </Button>
          {visible && <UpdateFlightCard 
            flight={flight.value}
            visible={visible}
            onCreate={onCreate}
            onCancel={() => {
              setVisible(false);
            }}
            />
          }
    </>
  );
};

export default UpdateFlightModal;