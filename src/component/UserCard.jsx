import React from "react";
import {
  EditOutlined,
  UsergroupAddOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import { Link } from "react-router-dom";
import { useDeleteSingleUserMutation } from "../redux/user/userApi";

const { Meta } = Card;
const UserCard = ({ user }) => {
  const [deleteSingleUser] = useDeleteSingleUserMutation();
  return (
    <Card
      style={{
        width: 300,
      }}>
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
        <DeleteOutlined
          style={{ fontSize: "20px" }}
          onClick={() => deleteSingleUser(user._id)}
        />
        <Link to={`/update/${user._id}`}>
          <EditOutlined key='edit' style={{ fontSize: "20px" }} />
        </Link>
        <UsergroupAddOutlined style={{ fontSize: "20px" }} />
      </div>
    </Card>
  );
};
export default UserCard;
