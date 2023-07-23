import React from 'react';
import useEasyColleges from '../../../hooks/useEasyColleges';

const CollegeGallery = () => {
    const [colleges] = useEasyColleges();
    return (
        <div className="container mx-auto my-10 px-2">
            <h2 className="text-3xl font-bold mb-6 text-center">College Graduate Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
                {colleges?.map((college, index) => (
                    <img
                        key={index}
                        src={college?.graduateImages}
                        alt={`College Graduate ${index + 1}`}
                        className="w-full h-48 object-cover rounded-md shadow-xl transition-transform duration-300 transform-gpu hover:scale-105"
                    />
                ))}
            </div>
        </div>
    );
};

export default CollegeGallery;