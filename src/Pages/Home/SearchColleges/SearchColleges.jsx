




import React, { useState } from 'react';
import axios from 'axios';

const SearchColleges = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/searchColleges?name=${searchTerm}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
      setSearchResults([]);
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1513077202514-c511b41bd4c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZWR1Y2F0aW9uJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80')" }}>
      <div className="w-full max-w-5xl  rounded-lg shadow-md px-4 py-6 md:flex ">
        {/* Left Side - Search Functionality */}
        <div className="md:w-1/2 md:mr-4 ">
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
          {searchResults.length > 0 ? (
            <div>
              <h2 className="text-lg font-semibold mb-2">Search Results:</h2>
              <div className="grid gap-4">
                {searchResults.map((college) => (
                  <div
                    key={college._id}
                    className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <h3 className="text-lg font-semibold">{college.name}</h3>
                    <p className="text-gray-600">{college.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            searchTerm !== '' && (
              <p className="mt-4 text-center text-gray-600">No results found for "{searchTerm}".</p>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchColleges;
