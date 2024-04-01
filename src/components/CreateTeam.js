import React, { useState,useContext } from 'react'
import UserState from '../Context/Users/UserContext';
import Creatmember from './Creatmember';


function CreateTeam() {
  const { selectedUsers, teamSubmit } = useContext(UserState);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [data, setData] = useState({
    teamName: "",
    description: "",
    member: []
  });

  const handleAddMember = () => {
    setShowCreateForm(true);
  };

  const handleTeamSubmit = async () => {
    data.member = selectedUsers;
    await teamSubmit(data);
    setShowCreateForm(false);
    setData(
       {
         teamName: "",
        description: "",
        member: []
        }
    )
  };

  return (
    <div className='flex flex-col gap-2 p-2 justify-center'>
      <b className='text-center'>CREATE TEAM</b>
      <div className='flex gap-1 justify-center'>
        <label htmlFor="teamname">Enter Team name</label>
        <input type="text"
          id='teamname'
          placeholder='enter team name...'
          value={data.teamName}
          onChange={(e) => setData({ ...data, teamName: e.target.value })}
        />
      </div>
      <div className='flex flex-col gap-1 items-center'>
        <label htmlFor="description">Team Description </label>
        <textarea name="description"
          id="description"
          cols="30"
          rows="4"
          className='border-black rounded'
          placeholder='enter description...'
          value={data.description}
          onChange={(e) => setData({ ...data, description: e.target.value })}
        ></textarea>
      </div>
      <div className='flex flex-col gap-1'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded'
          onClick={handleAddMember}>
          Add Member
        </button>
        {showCreateForm && (
          <div className='fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-25 flex justify-center items-center z-50'>
            <Creatmember setShowCreateForm={setShowCreateForm} />
          </div>
        )}

        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded' onClick={handleTeamSubmit}>
          Create Team
        </button>
      </div>
    </div>
  )
}

export default CreateTeam;
