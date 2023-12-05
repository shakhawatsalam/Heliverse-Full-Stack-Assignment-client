import React, { useState } from "react";
import { Drawer } from "antd";
import { useSelector } from "react-redux";
import UserCard from "./UserCard";
import { Button, Checkbox, Form, Input } from "antd";
import { useCreateTeamMutation } from "../redux/team/teamApi";
const DrawerOpen = ({ onClose, open }) => {
  const teams = useSelector((state) => state.team.team);
  const [createTeam] = useCreateTeamMutation();

  const onFinish = (values) => {
    console.log("Success:", values);
    const { teamName } = values;
    createTeam({teamName, teams});
  };
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
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}>
            <Button type='primary' className='bg-blue-500' htmlType='submit'>
              Submit
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
