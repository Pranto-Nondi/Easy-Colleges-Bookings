


import React from 'react';
import useEasyColleges from '../../../hooks/useEasyColleges';
import { Link } from 'react-router-dom';

const CollegesCards = () => {
  const [colleges] = useEasyColleges();


  
  return (
    <div className="container mx-auto my-10 px-2 ">
      <h2 className="text-3xl font-bold mb-6 text-center">Featured Colleges</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {colleges.slice(0, 3).map((college) => (
          <div
            key={college._id}
            className="w-96 bg-base-100 shadow-xl rounded-lg p-6 overflow-hidden transition-transform duration-300 transform-gpu hover:scale-105"
          >
            <figure>
              <img
                src={college?.image}
                alt="college img"
                className="w-full h-48 object-cover rounded-md"
              />
            </figure>
            <div className="mt-4">
              <h2 className="text-lg font-bold">{college.name}</h2>
              <p className="text-lg">Admission Date: {college.admissionDate}</p>
              <p className="text-md">Our Events:</p>
              <ul className="text-md list-disc ml-6">
                <li>{college.events[0].name}</li>
                <li>{college.events[1].name}</li>
              </ul>
              <p className="text-md">Our Research Items: {college.researchCount}</p>
              <p className="text-md">Our Sports:</p>
              <ul className="text-md list-disc ml-6">
                <li>{college.sports[0].name}</li>
                <li>{college.sports[1].name}</li>
              </ul>
              <div className="flex justify-start mt-4">
               
                <Link to={`/collegeDetails/${college._id}`} className="bg-emerald-500 text-white px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-emerald-600">Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollegesCards;
