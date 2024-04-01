import React from 'react'
import Teammember from './Teammember';

function Teamcard({team }) {
    const {_id,teamName , description, member }=team;
  return (
    <div className='flex flex-col gap-2 border rounded p-1'>
       <div>
            <b className='text-2xl'>Team Name: {teamName}</b>
       </div> 
       <div>
            <p>Description: {description}</p>
       </div>
       <div className='flex flex-col'>
        <p>Team Members:-</p>
        {member.map((user, index) => (
            <Teammember key={user._id} user={user} />
            ))}
        </div>
    </div>
  )
}

export default Teamcard
