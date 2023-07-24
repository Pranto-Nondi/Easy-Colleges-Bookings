


import React, { useEffect, useState } from 'react';
import useEasyColleges from '../../hooks/useEasyColleges';
import axios from 'axios';

const MyCollege = () => {
    const [colleges] = useEasyColleges();
    const [selectedColleges, setSelectedColleges] = useState([]);

    useEffect(() => {

        const delay = setTimeout(() => {
            // setLoading(false);
        }, 300);

        return () => clearTimeout(delay);
    }, []);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/admission/search`);
            setSelectedColleges(response.data || []);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
   
    const filteredColleges = colleges?.filter((college) =>
    selectedColleges.some((selectedCollege) =>
            selectedCollege?.collegeName?.toLowerCase() === college?.name?.toLowerCase()
        )
    );
   
    return (
        <div className="px-5 py-5 mx-auto my-auto">
            {filteredColleges?.map((college) => (
                <div key={college?._id} className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <div className="bg-base-100 shadow-xl p-5 rounded-md mb-5">
                        <figure>
                            <img
                                className="w-full h-64 object-cover rounded-md"
                                src={college?.image}
                                alt="Album"
                            />
                        </figure>

                        <div className="mt-4">
                            <h2 className="text-4xl font-bold">{college?.name}</h2>
                            <p className="text-md">Admission process:</p>
                            <ul className="text-md list-disc ml-6">
                                <li>{college?.admissionProcess?.requirements}</li>
                                <li>{college?.admissionProcess?.procedures}</li>
                            </ul>

                        </div>
                    </div>

                    <div className="bg-base-100 shadow-xl p-5 rounded-md mb-5">
                        <h3 className="text-2xl font-bold mb-4">College Information</h3>
                        <p className="mt-4 text-md"> {college?.details}</p>
                        <p className="mt-4 text-md">Total Research Works: {college?.researchCount}</p>
                    </div>
                </div>
            ))}
        </div>
        
    );
};

export default MyCollege;


