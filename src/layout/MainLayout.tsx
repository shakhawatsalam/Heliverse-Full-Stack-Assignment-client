import { Outlet } from "react-router-dom";
import NavBar from "../component/NavBar";
import React from "react";
import Home from "../pages/Home";

export default function MainLayout() {
  return (
    <div>
      <NavBar />
      <Home />
      <div className='pt-16'>
        <Outlet />
      </div>
    </div>
  );
}
