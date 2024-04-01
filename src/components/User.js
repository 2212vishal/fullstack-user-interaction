import React, { useState } from 'react';
import UserItem from './UserItem';

function User({ users }) {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 20;
  const usersPerRow = 5;

  const startIndex = (currentPage - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const currentUsers = users.slice(startIndex, endIndex);

  const handlePageChange = (direction) => {
    if (direction === 'next') {
      setCurrentPage(currentPage + 1);
    } else if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='flex flex-col justify-center m-2 border rounded border-gray-900'>
      <div className='flex flex-wrap gap-1 m-2'>
        {currentUsers.map((user, index) => (
          <UserItem key={user.id} userData={user} />
        ))}
      </div>
      <div className='flex gap-4 justify-center m-2'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => handlePageChange('prev')}>
          Prev
        </button>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => handlePageChange('next')}>
          Next
        </button>
      </div>
    </div>
  );
}

export default User;
