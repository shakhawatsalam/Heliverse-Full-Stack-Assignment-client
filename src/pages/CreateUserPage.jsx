import React from 'react';
import NavBar from '../component/NavBar';
import UpdateFrom from '../component/UpdateFrom';
import CreateUser from '../component/CreateUser';

const CreateUserPage = () => {
    return (
      <>
        <div className='container mx-auto'>
          <NavBar />
          <div className='h-[100vh] flex justify-center items-center flex-col gap-3'>
            <div className='text-center text-2xl'>Create User</div>
            <CreateUser/>
          </div>
        </div>
      </>
    );
};

export default CreateUserPage;