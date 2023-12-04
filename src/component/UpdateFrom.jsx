import React from "react";
import { Button, Checkbox, Form, Input, Select } from "antd";
import {
  useGetSingleUserQuery,
  useUpdateSingleUserMutation,
} from "../redux/user/userApi";
import { useParams } from "react-router-dom";
const UpdateFrom = () => {
  const { id } = useParams();
  const { data } = useGetSingleUserQuery(id);
  const [updateSingleUser, { error }] = useUpdateSingleUserMutation();
  console.log(error);
  const userData = data?.data ? data.data : {};
  const onFinish = async (values) => {
    console.log(values.first_name);
    const EditedUser = {
      first_name: values.first_name ? values.first_name : userData.first_name,
      last_name: values.last_name ? values.last_name : userData.last_name,
      email: values.email ? values.email : userData.email,
      gender: values.gender ? values.gender : userData.gender,
      avatar: values.avatar ? values.avatar : userData.avatar,
      domain: values.domain ? values.domain : userData.domain,
      available: values.available ? values.available : userData.available,
    };
    await updateSingleUser({ id, data: EditedUser });
    console.log(EditedUser);
  };
  //   const onFinishFailed = (errorInfo) => {
  //     console.log("Failed:", errorInfo);
  //   };
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
        // onFinishFailed={onFinishFailed}
        autoComplete='off'>
        {/* <div className='flex border'> */}
        <Form.Item label='first_name' name='first_name'>
          <Input placeholder={userData.first_name} />
        </Form.Item>

        <Form.Item label='last_name' name='last_name'>
          <Input placeholder={userData.last_name} />
        </Form.Item>
        {/* </div> */}
        <Form.Item label='email' name='email' className=''>
          <Input placeholder={userData.email} />
        </Form.Item>
        <Form.Item label='gender' name='gender'>
          <Input placeholder={userData.gender} />
        </Form.Item>
        <Form.Item label='avatar' name='avatar'>
          <Input placeholder='img url' />
        </Form.Item>
        <Form.Item label='domain' name='domain'>
          <Input placeholder={userData.domain} />
        </Form.Item>
        <Form.Item label='available' name='available'>
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
export default UpdateFrom;
