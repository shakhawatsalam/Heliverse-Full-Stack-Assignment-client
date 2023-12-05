import React, { useState } from "react";
import { Drawer } from "antd";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "./UserCard";
import { Button, Checkbox, Form, Input } from "antd";
import { useCreateTeamMutation } from "../redux/team/teamApi";
import { updateTeam } from "../redux/user/userSlice";
import { message } from "antd";
const DrawerOpen = ({ onClose, open }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const teams = useSelector((state) => state.team.team);
  const [createTeam, { isSuccess }] = useCreateTeamMutation();
  const dispatch = useDispatch();
  const onFinish = (values) => {
    console.log("Success:", values);
    const { teamName } = values;
    createTeam({ teamName, teams });

    form.resetFields();
    dispatch(updateTeam());
  };
  if (isSuccess) {
    messageApi.open({
      type: "success",
      content: "Team Created Successfully",
    });
  }
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Drawer
        title='Basic Drawer'
        placement='right'
        onClose={onClose}
        open={open}>
        {contextHolder}
        <Form
          name='basic'
          form={form}
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
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}>
            <Button type='primary' className='bg-blue-500' htmlType='submit'>
              Create Team
            </Button>
          </Form.Item>
          <Form.Item
            label='teamName'
            name='teamName'
            rules={[
              {
                required: true,
                message: "Please input your teamname",
              },
            ]}>
            <Input />
          </Form.Item>
        </Form>
        <div>
          {teams?.map((user, index) => (
            <UserCard key={index} user={user} />
          ))}
        </div>
      </Drawer>
    </>
  );
};
export default DrawerOpen;
