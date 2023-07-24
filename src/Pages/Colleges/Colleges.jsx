

import React from 'react';
import { Link } from 'react-router-dom';
import useEasyColleges from '../../hooks/useEasyColleges';

const Colleges = () => {
    const [colleges] = useEasyColleges();

    return (
        <div className="container mx-auto my-10 px-2">
            <h2 className="text-3xl font-bold mb-6 text-center">All  Colleges</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                {colleges.map((college) => (
                    <div
                        key={college._id}
                        className="bg-white shadow-xl rounded-lg overflow-hidden hover:shadow-2xl transition-transform duration-300 transform-gpu hover:scale-105"
                    >
                        <figure>
                            <img
                                src={college?.image}
                                alt="college img"
                                className="w-full h-48 object-cover rounded-t-lg"
                            />
                        </figure>
                        <div className="p-6">
                            <h2 className="text-xl font-semibold">{college?.name}</h2>
                            <p className="text-sm text-gray-600">Admission Date: {college?.admissionDate}</p>
                            <p className="text-sm text-gray-600">Rating: {college?.rating}</p>
                        
                            <div className="mt-4">
                                <p className="text-sm font-semibold">Our Research Items:</p>
                                <p className="text-sm">{college.researchCount}</p>
                            </div>
                           
                            <div className="flex justify-start mt-6">
                                <Link
                                    to={`/collegeDetails/${college._id}`}
                                    className="bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-blue-700"
                                >
                                    Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Colleges;
