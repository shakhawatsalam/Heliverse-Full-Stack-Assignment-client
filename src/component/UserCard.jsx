import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
const { Meta } = Card;
const UserCard = ({ user }) => {
  console.log(user.available)
  return (
    <Card
      style={{
        width: 300,
      }}
      actions={[
        <SettingOutlined key='setting' />,
        <EditOutlined key='edit' />,
        <EllipsisOutlined key='ellipsis' />,
      ]}>
      <Meta
        avatar={<Avatar src={user.avatar} />}
        title={user.first_name + " " + user.last_name}
        description={user.email}
      />
      <div className='mt-2'>
        <h1>domain: {user.domain}</h1>
        <h1>Gender: {user.gender}</h1>
        <h1>Availability: {user.available === true ? 'Available' : 'Not Available'}</h1>
      </div>
    </Card>
  );
};
export default UserCard;
