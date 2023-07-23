


import React, { useState, useEffect } from 'react';

const EveryCollege = ({ selectedCollege }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        const delay = setTimeout(() => {
            setLoading(false);
        }, 300);

        return () => clearTimeout(delay);
    }, []);

    return (
        <div className="px-5 py-5 mx-auto my-auto">
            {loading ? (
                <div className="text-center">
                    <p>Loading...</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-base-100 shadow-xl p-5 rounded-md">
                        <figure>
                            <img
                                className="w-full h-64 object-cover rounded-md"
                                src="https://images.unsplash.com/20/cambridge.JPG?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGFydmFyZCUyMHVuaXZlcnNpdHl8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                                alt="Album"
                            />
                        </figure>

                        <div className="mt-4">
                            <h2 className="text-4xl font-bold">{selectedCollege?.name}</h2>
                            <p className="text-md">Admission process:</p>
                            <ul className="text-md list-disc ml-6">
                                <li>{selectedCollege?.admissionProcess?.requirements}</li>
                                <li>{selectedCollege?.admissionProcess?.procedures}</li>
                            </ul>
                            <p className="text-md">Our Events:</p>
                            <ul className="text-md list-disc ml-6">
                                <li>{selectedCollege?.events[0]?.name}</li>
                                <li>{selectedCollege?.events[1]?.name}</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-base-100 shadow-xl p-5 rounded-md">
                        <h3 className="text-2xl font-bold mb-4">Research Works</h3>
                        <ul className="text-md list-disc ml-6">
                            {selectedCollege?.researchPapers?.map((paper) => (
                                <li key={paper.id}>
                                    <a href={paper.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                        {paper.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-4 text-md">Total Research Works: {selectedCollege?.researchCount}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EveryCollege;
