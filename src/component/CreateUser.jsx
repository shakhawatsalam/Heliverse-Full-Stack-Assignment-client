import React from "react";
import { Button, Checkbox, Form, Input, Select } from "antd";
import { useCreateUserMutation } from "../redux/user/userApi";

const CreateUser = () => {
  const [createUser] = useCreateUserMutation();
  const onFinish = async (values) => {
    console.log(values.first_name);
    const CreatedUser = {
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      gender: values.gender,
      avatar: values.avatar,
      domain: values.domain,
      available: values.available,
    };
    createUser(CreatedUser);
    console.log(CreatedUser);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className='w-[500px]'>
      <Form
        name='basic'
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'>
        {/* <div className='flex border'> */}
        <Form.Item
          label='first_name'
          name='first_name'
          rules={[
            {
              required: true,
              message: "Please input your first_name!",
            },
          ]}>
          <Input placeholder='first_name' />
        </Form.Item>

        <Form.Item
          label='last_name'
          name='last_name'
          rules={[
            {
              required: true,
              message: "Please input your last_name!",
            },
          ]}>
          <Input placeholder='last_name' />
        </Form.Item>
        {/* </div> */}
        <Form.Item
          label='email'
          name='email'
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}>
          <Input placeholder='email' />
        </Form.Item>
        <Form.Item
          label='gender'
          name='gender'
          rules={[
            {
              required: true,
              message: "Please input your gender!",
            },
          ]}>
          <Input placeholder='gender' />
        </Form.Item>
        <Form.Item
          label='avatar'
          name='avatar'
          rules={[
            {
              required: true,
              message: "Please input your avatar!",
            },
          ]}>
          <Input placeholder='img url' />
        </Form.Item>
        <Form.Item
          label='domain'
          name='domain'
          rules={[
            {
              required: true,
              message: "Please input your domain!",
            },
          ]}>
          <Input placeholder='domain' />
        </Form.Item>
        <Form.Item
          label='available'
          name='available'
          rules={[
            {
              required: true,
              message: "Please input your available!",
            },
          ]}>
          <Select
            options={[
              { value: true, label: "Available" },
              { value: false, label: "Not Available" },
            ]}
          />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}>
          <Button type='primary' className='bg-blue-500' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default CreateUser;
