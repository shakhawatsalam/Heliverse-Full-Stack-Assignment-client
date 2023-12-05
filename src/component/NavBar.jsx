import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import { Link } from "react-router-dom";
import Drawer from "./Drawer";
import DrawerOpen from "./Drawer";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const items = [
    {
      label: "",
      key: "Home",
      icon: (
        <>
          <Link to={`/`} key='Home'>
            {/* <MailOutlined /> */}
            Home
          </Link>
        </>
      ),
    },
    {
      label: "",
      key: "link",
      icon: (
        <>
          <Link to={`/create`} key='link'>
            {/* <MailOutlined /> */}
            Create User
          </Link>
        </>
      ),
    },
    {
      label: "",
      key: "allteam",
      icon: (
        <>
          <Link to={`/teams`} key='allteam'>
            {/* <MailOutlined /> */}
            All Teams
          </Link>
        </>
      ),
    },
    {
      label: "",
      key: "create",
      icon: (
        <>
          <Button
            type='primary'
            className='bg-blue-500'
            onClick={showDrawer}
            key='helo'>
            Create Team
          </Button>
        </>
      ),
    },
  ];

  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode='horizontal'
        items={items}
      />
      <DrawerOpen onClose={onClose} open={open} />
    </>
  );
};
export default NavBar;
