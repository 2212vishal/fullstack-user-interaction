import React, { useContext } from 'react';
import UserState from '../Context/Users/UserContext';

function Deleteform({ _id, setShowDeleteForm }) {
  const { deleteUser } = useContext(UserState);

  const handleConfirmDelete = async () => {
    try {
      await deleteUser(_id);
      setShowDeleteForm(false);
      alert('User Deleted Successfully');
    } catch (error) {
      alert('Error deleting user');
      console.error(error);
    }
  };

  const handleCancelDelete = () => {
    setShowDeleteForm(false);
  };

  return (
    <div className='flex flex-col gap-2 border bg-slate-400 rounded items-center p-3'>
      <b className='bg-slate-100 p-4 w-full'>DELETE TASK</b>
      <p>Do you wish to delete Card:</p>
      <div className='flex items-center space-x-4 gap-3'>
        <div className='flex gap-2 m-2'>
          <button onClick={handleConfirmDelete} className='p-2 bg-blue-700 border-black rounded'>
            Yes
          </button>
          <button onClick={handleCancelDelete} className='p-2 bg-blue-700 border-black rounded'>
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default Deleteform;
