import React, { useState, useContext, useEffect } from 'react';
import UserState from '../Context/Users/UserContext';
import Teamcard from './Teamcard';


function AllTeam() {
  const { getAllTeam,allTeam } = useContext(UserState);

  useEffect(() => {
    getAllTeam();
  }, []);

  return (
    <div className='flex flex-col gap-4 p-3'>
      {allTeam.map((team, index) => (
          <Teamcard key={team._id} team={team} />
        ))}
    </div>
  )
}

export default AllTeam
