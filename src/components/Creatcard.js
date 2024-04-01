import React, { useState } from 'react';

function Creatcard({ addUser, setShowCreateForm }) {
  const [newUser, setNewUser] = useState({
    id: "",
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    avatar: "",
    domain: "",
    available: false // Initialize as false for boolean field
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: name === 'available' ? (value === 'true') : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addUser(newUser);
      setShowCreateForm(false);
      alert('User Created Successfully');
    } catch (error) {
      alert('Error creating user');
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col gap-2 bg-slate-400 border rounded p-2">
      <h3 className='text-center'>Create User</h3>
      <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
        <div className='flex'>
          <label htmlFor="id">ID:</label>
          <input
            type="number"
            id="id"
            name="id"
            value={newUser.id}
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
            value={newUser.first_name}
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
            value={newUser.last_name}
            onChange={handleChange}
            required
            className='border rounded'
          />
        </div>
        <div className='flex'>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={newUser.email}
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
            name="avatar"
            value={newUser.avatar}
            onChange={handleChange}
            required
            className='border rounded'
          />
        </div>

        <div className='flex'>
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={newUser.gender}
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
            name="domain"
            value={newUser.domain}
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
            name="available"
            value={newUser.available.toString()} // Convert boolean to string for select value
            onChange={handleChange}
            required
            className='border rounded'
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>

        <button className='bg-blue-500 p-2 border rounded' type="submit">Create User</button>
        <button className='bg-blue-500 p-2 border rounded' type="button" onClick={() => setShowCreateForm(false)}>Cancel</button>
      </form>
    </div>
  );
}

export default Creatcard;
