import { Button, Form, Input,
  Modal, Radio, DatePicker,
  TimePicker,InputNumber } from 'antd';
import { useState } from 'react';
const postFlight =  require('../../http/PostFlight');



// .collection-create-form_last-form-item {
//   margin-bottom: 0;
// }

const CollectionCreateForm = () => {
const [form] = Form.useForm();
return (

<Form
 form={form}
 layout="inline"
 name="search_form"
 size='small'

 style={{
  padding: '3px'
 }}
>
 <Form.Item
  name="flightNumber"
  label="Flight Number"
  >
   <Input />

 </Form.Item>


 <Form.Item
   name="departAirport"
   label="Departing Airport">
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
  label="Departing Date">
   <DatePicker />
 </Form.Item>

 <Form.Item 
 name="arriveDate"
 label="Arriving Date"
   >
   <DatePicker />
 </Form.Item>

 <Form.Item 
 name="occupantCapacity" 
 label="Occupant Capacity">
 <InputNumber min={1} max={200} />
 </Form.Item>

 <Form.Item 
 name="occupantCount" 
 label="Occupant Count">
 <InputNumber min={1} max={200}/>
 </Form.Item>

 <Form.Item name="modifier" className="collection-create-form_last-form-item">
  
 </Form.Item>
</Form>
);
};

const SearchForm = () => {

  return (
    <div>
    <CollectionCreateForm
  
    />
    </div>
  );
}

export default SearchForm;