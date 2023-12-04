import React, { useState } from "react";
import { Button, Drawer } from "antd";
const DrawerOpen = ({ onClose, open }) => {
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
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
export default DrawerOpen;
