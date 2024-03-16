import React, { useState } from 'react';
import { Form, Input, DatePicker, Select, Button } from 'antd';

const { Option } = Select;

const RecordForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values:', values);
    // You can handle form submission here, such as sending data to a backend server
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
       className='mx-5 lg:mx-36 bg-[white] shadow border p-5'
    >
      <Form.Item
        label="Date of Visit"
        name="dateOfVisit"
        rules={[{ required: true, message: 'Please select date of visit' }]}
      >
        <DatePicker style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        label="Diagnosis"
        name="diagnosis"
        rules={[{ required: true, message: 'Please enter diagnosis' }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        label="Treatment"
        name="treatment"
        rules={[{ required: true, message: 'Please enter treatment' }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        label="Medication"
        name="medication"
        rules={[{ required: true, message: 'Please enter medication' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Other Information"
        name="otherInfo"
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item>
        <Button type="primary" className='bg-[blue]' htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RecordForm;
