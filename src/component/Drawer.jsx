import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { useSelector } from "react-redux";
import UserCard from "./UserCard";
const DrawerOpen = ({ onClose, open }) => {
  const team = useSelector((state) => state.team.team);
 
  return (
    <>
      {/* <Button type='primary' onClick={showDrawer}>
        Open
      </Button> */}
      <Drawer
        title='Basic Drawer'
        placement='right'
        onClose={onClose}
        open={open}>
        <div>
          {team?.map((user, index) => (
            <UserCard key={index} user={user} />
          ))}
        </div>
      </Drawer>
    </>
  );
};
export default DrawerOpen;
