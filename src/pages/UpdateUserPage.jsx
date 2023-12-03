import React from "react";
import NavBar from "../component/NavBar";
import { useForm } from "react-hook-form";
import UpdateFrom from "../component/UpdateFrom";

const UpdateUserPage = () => {
  return (
    <>
      <div className='container mx-auto'>
        <NavBar />
        <div className="h-[100vh] flex justify-center items-center flex-col gap-3">
        <div className="text-center text-2xl">Update User</div>
          <UpdateFrom />
        </div>
      </div>
    </>
  );
};

export default UpdateUserPage;
