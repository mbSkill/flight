import { Button, Form, Input,
         Modal, DatePicker,
         InputNumber } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchFlights } from '../../app/slice/flightSlice';
import moment from 'moment';
const postFlight =  require('../../http/PostFlight');




// .collection-create-form_last-form-item {
//   margin-bottom: 0;
// }

const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
  
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Create a new Flight"
      okText="Create"
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
        initialValues={{
          modifier: 'public',
        }}
      >
        <Form.Item
         name="flightNumber"
         label="Flight Number"
         rules={[
          {
          required: true,
          message: 'Please input a flight number'
          }
         ]}>
          <Input />

        </Form.Item>


        <Form.Item
          name="departAirport"
          label="Departing Airport"
          rules={[
            {
              required: true,
              message: 'Please input the Departing Airport IATA abbreviation',
            },
            {
              len: 3,
              message: 'IATA must be 3 characters'
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="arriveAirport"
          label="Arriving Airport"
          rules={[
            {
              required: true,
              message: 'Please input the Arriving Airport IATA abbreviation',
            },
            {
              len: 3,
              message: 'IATA must be 3 characters'
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item 
        name="departDate"
         label="Departing Date"
         rules={[
          {
            required: true,
            message: 'Please input the Date and Time of departure',
          },]}>
          <DatePicker showTime />
        </Form.Item>

        <Form.Item 
        name="arriveDate"
        label="Arriving Date"
        rules={[
          {
            required: true,
            message: 'Please input the Date and Time of arrival',
          },

          ({ getFieldValue }) => ({
            validator: (_, value ) => 
            (moment(value).isAfter(Date.now()-30000)) ?
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
          })]}
          >
          <DatePicker showTime />
        </Form.Item>

        <Form.Item 
        name="occupantCapacity" 
        label="Occupant Capacity"
        rules={[
          {
            required: true,
            message: 'Please input the passenger capacity for flight',
          }]}>
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
            
          }),
            ({
              required: true,
              message: 'Please input the number of passengers on flight',
            })]}>
        <InputNumber min={1} max={200}/>
        </Form.Item>

        <Form.Item name="modifier" className="collection-create-form_last-form-item">
         
        </Form.Item>
      </Form>
    </Modal>
  );
};

const ModalForm = () => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const onCreate =  async (values) => {
    values.arriveDate = values.arriveDate._d;
    values.departDate = values.departDate._d;
    delete values.modifier;
    postFlight.default(values);
    await fetchFlights(dispatch);
    setVisible(false);
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        New Flight
      </Button>
      <CollectionCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default ModalForm;
