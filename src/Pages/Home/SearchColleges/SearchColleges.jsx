


import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SearchColleges = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://easy-college-bookings-server.vercel.app/searchColleges?name=${searchTerm}`);
      setSearchResults(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setSearchResults([]);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('https://i.ibb.co/KhhDVWZ/photo-1513077202514-c511b41bd4c7.jpg')" }}>
      
      <div className="w-full max-w-5xl rounded-lg shadow-md px-4 py-6 md:flex">
        {/* Left Side - Search Functionality */}
        <div className=" md:w-1/2 md:mr-4 ">
           <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Search for colleges..."
            className="w-[100] px-4 py-2 text-gray-800 border rounded-md focus:outline-none focus:border-blue-500"
          />
          <button
            type="button"
            onClick={handleSearch}
            className="  mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Search
          </button>
        </div>

        {/* Right Side - Search Result Cards */}
        <div className="md:w-1/2 mt-4 md:mt-0 md:ml-4">
          {loading ? (
            <div className="text-center text-gray-500">
              <p>Loading...</p>
            </div>
          ) : searchResults.length > 0 ? (
            <div>
              <h2 className="text-lg font-semibold mb-2">Search Results:</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {searchResults.map((college) => (
                  <div
                    key={college._id}
                    className="h-auto p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <img src={college?.image}alt="" className="w-full h-32 object-cover rounded-md" />
                    <p className="text-gray-700 font-semibold text-lg mt-2">{college.name}</p>
                    <p className="text-gray-600">{college.details}</p>
                    <Link to={`/collegeDetails/${college._id}`} className="mt-4 inline-block px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 focus:outline-none">
                      Details
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500">
              <p>No results found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchColleges;
