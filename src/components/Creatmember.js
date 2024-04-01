import React, { useState, useContext } from 'react';
import UserState from '../Context/Users/UserContext';

function Createmember({ setShowCreateForm }) {
    const { createTeam } = useContext(UserState);
    const [memberUser, setMemberUser] = useState({
      id: "",
      first_name: "",
      last_name: "",
      domain: "",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setMemberUser({ ...memberUser, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      await createTeam(memberUser);
      setShowCreateForm(false);
      e.preventDefault();
    };
  
    return (
      <div className="flex flex-col gap-2 bg-slate-400 border rounded p-2">
        <h3 className='text-center'>Edit User</h3>
        <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
          <div className='flex'>
            <label htmlFor="id">ID:</label>
            <input
              type="number"
              id="id"
              name="id"
              value={memberUser.id}
              onChange={handleChange}
              required
              className='border rounded'
            />
          </div>
          <div className='flex'>
            <label htmlFor="first_name">First Name:</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              value={memberUser.first_name}
              onChange={handleChange}
              required
              className='border rounded'
            />
          </div>
  
          <div className='flex'>
            <label htmlFor="last_name">Last Name:</label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              value={memberUser.last_name}
              onChange={handleChange}
              required
              className='border rounded'
            />
          </div>
  
          <div className='flex'>
            <label htmlFor="domain">Domain:</label>
            <select
              id="domain"
              name="domain"
              value={memberUser.domain}
              onChange={handleChange}
              required
              className='border rounded'
            >
              <option value="Business Development">Business Development</option>
              <option value="Finance">Finance</option>
              <option value="IT">IT</option>
              <option value="Management">Management</option>
              <option value="Sales">Sales</option>
              <option value="UI Designing">UI Designing</option>
            </select>
          </div>
          <button className='bg-blue-500 p-2 border rounded' type="submit">Add</button>
        </form>
      </div>
    )
  }
  
  export default Createmember;
  