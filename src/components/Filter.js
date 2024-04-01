import React, { useState, useContext } from 'react'
import UserState from '../Context/Users/UserContext';

const Filter = (props) => {
    const showModal = props.isModal;
    const [filter, setFilter] = useState({ domain: "", gender: "", available: "" });
    const context = useContext(UserState);
    const { getFilterData } = context;

    const domainOptions = ['Business Development', 'Finance', 'IT', 'Management', 'Sales', 'UI Designing'];
    const genderOptions = ['Agender', 'Bigender', 'Female', 'Genderfluid', 'Genderqueer', 'Male', 'Non-binary', 'Polygender'];
    const availableOptions = ['true', 'false'];

    const handleSubmit = (event) => {
        event.preventDefault(); 
        getFilterData(filter);
        setFilter({ domain: "", gender: "", available: "" });
    }

    const handleFilterChange = (e) => {
        setFilter({ ...filter, [e.target.name]: e.target.value })
    }

    return (
        <>
            {showModal && (<div className="modal fade" id="filterModal" tabIndex="-1" aria-labelledby="filterModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="filterModalLabel">Filter</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="domain" className="form-label">Domain</label>
                                        <select className="form-select" id="domain" name="domain" value={filter.domain} onChange={handleFilterChange}>
                                            <option value="">Select Domain</option>
                                            {domainOptions.map(option => (
                                                <option key={option} value={option}>{option}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="gender" className="form-label">Gender</label>
                                        <select className="form-select" id="gender" name="gender" value={filter.gender} onChange={handleFilterChange}>
                                            <option value="">Select Gender</option>
                                            {genderOptions.map(option => (
                                                <option key={option} value={option}>{option}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="available" className="form-label">Available</label>
                                        <select className="form-select" id="available" name="available" value={filter.available} onChange={handleFilterChange}>
                                            <option value="">Select Availability</option>
                                            {availableOptions.map(option => (
                                                <option key={option} value={option}>{option}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Apply filter</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)}
            {!showModal && (
                <div className="container">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="domain" className="form-label">Domain</label>
                            <select className="form-select" id="domain" name="domain" value={filter.domain} onChange={handleFilterChange}>
                                <option value="">Select Domain</option>
                                {domainOptions.map(option => (
                                    <option key={option} value={option}>{option}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="gender" className="form-label">Gender</label>
                            <select className="form-select" id="gender" name="gender" value={filter.gender} onChange={handleFilterChange}>
                                <option value="">Select Gender</option>
                                {genderOptions.map(option => (
                                    <option key={option} value={option}>{option}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="available" className="form-label">Available</label>
                            <select className="form-select" id="available" name="available" value={filter.available} onChange={handleFilterChange}>
                                <option value="">Select Availability</option>
                                {availableOptions.map(option => (
                                    <option key={option} value={option}>{option}</option>
                                ))}
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Apply filter</button>
                    </form>
                </div>
            )}
        </>
    )
}

export default Filter;
