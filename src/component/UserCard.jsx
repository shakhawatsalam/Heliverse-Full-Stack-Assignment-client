import React from "react";
import {
  EditOutlined,
  UsergroupAddOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;
const UserCard = ({ user }) => {
  return (
    <Card
      style={{
        width: 300,
      }}
      // actions={[
      //   <>
      //     <SettingOutlined key='setting' />,
      //     <Link>
      //       <EditOutlined key='edit' />,
      //     </Link>
      //     <EllipsisOutlined key='ellipsis' />,
      //   </>,
      // ]}
    >
      <Meta
        avatar={<Avatar src={user?.avatar} />}
        title={user?.first_name + " " + user?.last_name}
        description={user?.email}
      />
      <div className='mt-2'>
        <h1>domain: {user?.domain}</h1>
        <h1>Gender: {user?.gender}</h1>
        <h1>
          Availability:{" "}
          {user?.available === true ? "Available" : "Not Available"}
        </h1>
      </div>

      <div className='w-full flex justify-around mt-11 cursor-pointer'>
        <DeleteOutlined />
        <Link to={`/update/${user._id}`}>
          <EditOutlined key='edit' />
        </Link>
        <UsergroupAddOutlined />
      </div>
    </Card>
  );
};
export default UserCard;
