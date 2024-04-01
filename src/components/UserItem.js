import React, { useState } from 'react';
import Editform from './Editform';
import Deleteform from './Deleteform';

function UserItem({ userData }) {
  const [showEditForm, setShowEditForm] = useState(false);
  const [showDeleteForm, setShowDeleteForm] = useState(false);

  const handleEditClick = () => {
    setShowEditForm(true);
  };

  const handleDeleteClick = () => {
    setShowDeleteForm(true);
  };

  return (
    <div className='flex flex-col justify-center bg-gray-400 p-1 border-black rounded'>
      <div className='flex justify-center bg-slate-400 border rounded p-1'>
        <img src={userData.avatar} alt="" />
      </div>

      <div className='flex flex-col justify-center'>
        <p className='text-center'>{`id: ${userData.id}`}</p>
        <p className='text-center'>{`${userData.first_name} ${userData.last_name}`}</p>
        <p className='text-center'>{`${userData.email}`}</p>
        <p className='text-center'>{`gender: ${userData.gender}`}</p>
        <p className='text-center'>{`domain: ${userData.domain}`}</p>
        <p className='text-center'>{`available: ${userData.available}`}</p>
      </div>

      <div className='flex flex-col gap-1'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded' onClick={handleEditClick}>
          Edit
        </button>
        {showEditForm && (
          <div className='fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-25 flex justify-center items-center z-50'>
            <Editform userData={userData} setShowEditForm={setShowEditForm} />
          </div>
        )}

        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded' onClick={handleDeleteClick}>
          Delete
        </button>
        {showDeleteForm && (
          <div className='fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-25 flex justify-center items-center z-50'>
            <Deleteform _id={userData._id} setShowDeleteForm={setShowDeleteForm} />
          </div>
        )}
      </div>
    </div>
  );
}

export default UserItem;
