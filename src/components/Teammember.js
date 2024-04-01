import React from 'react'

function Teammember({user}) {
    const {id,first_name,last_name,domain}=user;
    return (
        <div className="grid grid-cols-4 ">
            <div className="bg-gray-200 p-4">Id: {id}</div>
            <div className="bg-gray-200 p-4">FirstName: {first_name}</div>
            <div className="bg-gray-200 p-4">LastName: {last_name}</div>
            <div className="bg-gray-200 p-4">Domain: {domain}</div>
        </div>

  )
}

export default Teammember
