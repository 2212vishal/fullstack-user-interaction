import React, { useState, useContext, useEffect } from 'react';
import UserState from '../Context/Users/UserContext';
import { Link } from 'react-router-dom';
import User from './User';
import Creatcard from './Creatcard';

const Header = () => {
  const { user, getUser, addUser, searchByName, queries ,getFilterData,filterData } = useContext(UserState);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterdata, setFilterdata] = useState({
    gender: "",
    domain: "",
    available: ""
  });

  

  useEffect(() => {
    getUser();
  }, []);

  const handleDomainChange = (e) => {
  setFilterdata({ ...filterdata, domain: e.target.value });
  };

  const handleGenderChange = (e) => {
    setFilterdata({ ...filterdata, gender: e.target.value });
  };

  const handleAvailableChange = (e) => {
    const value = e.target.value === 'true'; // Convert string 'true' or 'false' to boolean
    setFilterdata({ ...filterdata, available: value });
  };

  const handleFilterSubmit = async (e) => {
    e.preventDefault();
    await getFilterData(filterdata);
    console.log(filterData);
  };

  const handleCreateClick = () => {
    setShowCreateForm(true);
  };

  const handleSearchChange = async (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
      if (e.target.value === '') {
        getUser(); // Reset the user list if the search query is empty
      } else {
        await searchByName(e.target.value);
        console.log(queries)
        // Perform search
      }
  };

  return (
    <div className='flex flex-col'>
      <div className='flex gap-2 justify-between w-full p-2'>
        <div className='flex gap-2'>
          <Link to="/">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Home
            </button>
          </Link>
          <button onClick={handleCreateClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Create User
          </button>
          <Link to="/CreateTeam" target="_blank">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Create Team
            </button>
          </Link>
          <Link to="/AllTeam" target="_blank">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Teams
            </button>
          </Link>
        </div>


        <div className='flex items-center'>
          <div>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="border-black rounded"
            />
          </div>
          <div className='ml-2'>
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
        </div>
      </div>
      <div
        className='flex p-2 gap-1'
      >
        <button className='bg-blue-500 p-1 border rounded' onClick={handleFilterSubmit}>Filter</button>
        <div className='flex'>
            <select
              id="domain"
              name="domain"
              placeholder="Domain"
              value={filterdata.domain}
              onChange={handleDomainChange}
              className='border rounded'
            >
              <option value="">Select Domain</option>
              <option value="Business Development">Business Development</option>
              <option value="Finance">Finance</option>
              <option value="IT">IT</option>
              <option value="Management">Management</option>
              <option value="Sales">Sales</option>
              <option value="UI Designing">UI Designing</option>
            </select>
        </div>
        <div className='flex'>
          <select
            id="gender"
            name="gender"
            value={filterdata.gender}
            onChange={handleGenderChange}
            className='border rounded'
            placeholder="Gender"
          >
            <option value="">Select Gender</option>
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
          <select
            id="available"
            name="available"
            value={filterdata.available}
            onChange={handleAvailableChange}
            className='border rounded'
            placeholder="Available"
          >
            <option value="">Select available</option>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>

      </div>

      {showCreateForm && (
        <div className='fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-25 flex justify-center items-center z-50'>
          <Creatcard addUser={addUser} setShowCreateForm={setShowCreateForm} />
        </div>
      )}

      <div className='flex'>
          <User users={user} />
      </div>
    </div>
  );
};

export default Header;
