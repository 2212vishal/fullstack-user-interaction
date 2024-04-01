import React, { useState, useContext } from 'react';
import UserState from '../Context/Users/UserContext';

function Editform({ userData, setShowEditForm }) {
  const { userUpdate,getUser } = useContext(UserState);
  const { id, first_name, last_name, email, gender, domain, available, avatar } = userData;
  const [updateUser, setUpdateUser] = useState({
    _id: userData._id,
    eid: id,
    efirst_name: first_name,
    elast_name: last_name,
    eemail: email,
    egender: gender,
    eavatar: avatar,
    edomain: domain,
    eavailable: available
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateUser({ ...updateUser, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    await userUpdate(updateUser);
    setShowEditForm(false);
    await getUser(); 
  };
  

  return (
    <div className="flex flex-col gap-2 bg-slate-400 border rounded p-2">
      <h3 className='text-center'>Edit User</h3>
      <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
        <div className='flex'>
          <label htmlFor="first_name">First Name:</label>
          <input
            type="text"
            id="first_name"
            name="efirst_name"
            value={updateUser.efirst_name}
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
            name="elast_name"
            value={updateUser.elast_name}
            onChange={handleChange}
            required
            className='border rounded'
          />
        </div>

        <div className='flex'>
          <label htmlFor="avatar">Image URL:</label>
          <input
            type="text"
            id="avatar"
            name="eavatar"
            value={updateUser.eavatar}
            onChange={handleChange}
            required
            className='border rounded'
          />
        </div>

        <div className='flex'>
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="egender"
            value={updateUser.egender}
            onChange={handleChange}
            required
            className='border rounded'
          >
            <option value="Agender">Agender</option>
            <option value="Bigender">Bigender</option>
            <option value="Female">Female</option>
            <option value="Genderfluid">Genderfluid</option>
            <option value="Genderqueer">Genderqueer</option>
            <option value="Male">Male</option>
            <option value="Non-binary">Non-binary</option>
            <option value="Polygender">Polygender</option>
          </select>
        </div>

        <div className='flex'>
          <label htmlFor="domain">Domain:</label>
          <select
            id="domain"
            name="edomain"
            value={updateUser.edomain}
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

        <div className='flex'>
          <label htmlFor="available">Available:</label>
          <select
            id="available"
            name="eavailable"
            value={updateUser.eavailable}
            onChange={handleChange}
            required
            className='border rounded'
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>

        <button className='bg-blue-500 p-2 border rounded' type="submit">Edit User</button>
        <button className='bg-blue-500 p-2 border rounded' type="button" onClick={() => setShowEditForm(false)}>Cancel Edit</button>
      </form>
    </div>
  )
}

export default Editform;
