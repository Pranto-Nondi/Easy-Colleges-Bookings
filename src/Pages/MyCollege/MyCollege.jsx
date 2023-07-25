
import React, { useContext, useEffect, useState } from 'react';
import useEasyColleges from '../../hooks/useEasyColleges';
import axios from 'axios';
import { AuthContext } from '../../provider/AuthProvider';
import { RotatingLines } from 'react-loader-spinner';
import Swal from 'sweetalert2';

const MyCollege = () => {
    const [colleges] = useEasyColleges();
    const [getColleges, setGetColleges] = useState([]); // Use an object instead of an array
    const [selectedColleges, setSelectedColleges] = useState([]); // Use an object instead of an array

    const { loading } = useContext(AuthContext) || {};

    useEffect(() => {
        fetchData();
    }, []);

   

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `https://easy-college-bookings-server.vercel.app/admission/search`
            );
            setGetColleges(response.data || []);
            console.log(response.data);
            const selectedCollegesData = response.data.reduce((acc, college) => {
                acc.push({ // Push each college object into the array
                    collegeId: college._id,
                    reviewInput: '',
                    rating: 0,
                });
                return acc;
            }, []);
            setSelectedColleges(selectedCollegesData);
            console.log('selectedColleges:', selectedCollegesData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const filteredColleges = colleges?.filter((college) =>
        getColleges?.some((getCollege) =>
            getCollege?.collegeName?.toLowerCase() === college?.name?.toLowerCase()
        )
    );
    console.log(filteredColleges)


    const handleReviewSubmit = async (collegeId) => {
        // Validate collegeId
        if (!collegeId || typeof collegeId !== 'string') {
            console.error('Invalid collegeId:', collegeId);
            return;
        }

        const collegeData = selectedColleges[collegeId];

        // Validate collegeData
        if (!collegeData || typeof collegeData !== 'object' || !('reviewInput' in collegeData)) {
            console.error('Invalid collegeData:', collegeData);
            return;
        }

        const { reviewInput, rating } = collegeData || {};
        console.log(collegeData)

        // Validate reviewInput and rating
        if (!reviewInput || typeof rating !== 'number' || rating < 1 || rating > 5) {
            console.error('Invalid reviewInput or rating:', reviewInput, rating);
            return;
        }

        try {
            // Make an API call to store the review data in the backend
            await axios.post(`https://easy-college-bookings-server.vercel.app/reviews`, {
                collegeId,
                review: reviewInput,
                rating,
            });

            // Show success alert using SweetAlert2
            Swal.fire({
                icon: 'success',
                title: 'Review Added!',
                text: 'Your review has been added successfully.',
            });

            // Clear the review input and rating after successful submission
            setSelectedColleges((prevSelectedColleges) => ({
                ...prevSelectedColleges,
                [collegeId]: {
                    ...prevSelectedColleges[collegeId],
                    reviewInput: '',
                    rating: 0,
                },
            }));
        } catch (error) {
            console.error('Error adding review:', error);

            // Show error alert using SweetAlert2
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'An error occurred while adding the review.',
            });
        }
    };





    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                <RotatingLines strokeColor="grey" strokeWidth="5" animationDuration="0.75" width="96" visible={true} />
            </div>
        );
    }

    return (
        <div className="px-5 py-5 mx-auto my-auto">
            <h1 className="text-4xl text-center font-semibold pb-5">My colleges</h1>
            {filteredColleges?.map((college) => (
                <div key={college?._id} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-base-100 shadow-xl p-5 rounded-md mb-5 ">
                        <figure>
                            <img
                                className="w-full h-64 object-cover rounded-md"
                                src={college?.image}
                                alt="Album"
                            />
                        </figure>
                        <div className="mt-4">
                            <h2 className="text-3xl font-bold">{college?.name}</h2>
                            <p className="text-md font-semibold">Admission process:</p>
                            <ul className="text-md list-disc ml-6">
                                <li>{college?.admissionProcess?.requirements}</li>
                                <li>{college?.admissionProcess?.procedures}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-base-100 shadow-xl p-5 rounded-md mb-5">
                        <h3 className="text-2xl font-bold mb-4"> College Information</h3>
                        <p className="mt-4 text-md font-semibold"> {college?.details}</p>
                        <p className="mt-4 text-md font-semibold">Total Research Works: {college?.researchCount}</p>
                        <p className="text-md font-semibold">Our Events:</p>
                        <ul className="text-md list-disc ml-6">
                            <li>{college?.events[0]?.name}</li>
                            <li>{college?.events[1]?.name}</li>
                        </ul>
                        <p className="text-md font-semibold">Our Sports:</p>
                        <ul className="text-md list-disc ml-6">
                            <li>{college?.sports[0].name}</li>
                            <li>{college?.sports[1].name}</li>
                        </ul>
                        <div className="bg-base-100 shadow-xl p-5 rounded-md mb-5 ">
                            <h3 className="text-2xl font-bold mb-4">Add a Review</h3>
                            <input
                                type="text"
                                className="border border-gray-300 rounded-md w-full p-2 mb-2"
                                placeholder="Your Review"
                                value={selectedColleges[college._id]?.reviewInput || ''}
                                onChange={(e) => setSelectedColleges((prevSelectedColleges) => ({
                                    ...prevSelectedColleges,
                                    [college._id]: {
                                        ...prevSelectedColleges[college._id],
                                        reviewInput: e.target.value,
                                    },
                                }))}
                            />
                            <div className="mb-2">
                                <span className="mr-2">Rating:</span>
                                <select
                                    value={+selectedColleges[college._id]?.rating || 0}
                                    onChange={(e) => setSelectedColleges((prevSelectedColleges) => ({
                                        ...prevSelectedColleges,
                                        [college._id]: {
                                            ...prevSelectedColleges[college._id],
                                            rating: parseInt(e.target.value),
                                        },
                                    }))}
                                >
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                </select>
                            </div>
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                onClick={() => handleReviewSubmit(college._id)}
                            >
                                Submit Review
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MyCollege;



