


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
            const response = await axios.get(`https://easy-college-bookings-server.vercel.app/admission/search`);
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
                    </div>
                </div>
            ))}
        </div>

    );
};

export default MyCollege;



// import React, { useEffect, useState } from 'react';
// import useEasyColleges from '../../hooks/useEasyColleges';
// import axios from 'axios';
// import swal from 'sweetalert';
// import Rating from 'react-rating';
// const MyCollege = () => {
//     const [colleges] = useEasyColleges();
//     const [selectedColleges, setSelectedColleges] = useState([]);
//     const [rating, setRating] = useState(0);
//     const [reviewText, setReviewText] = useState('');

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//         try {
//             const response = await axios.get(`https://easy-college-bookings-server.vercel.app/admission/search`);
//             setSelectedColleges(response.data || []);
//             console.log(response.data);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };
//     const handleRatingChange = (value) => {
//         setRating(value);
//     };

//     const handleReviewTextChange = (event) => {
//         setReviewText(event.target.value);
//     };

//     const submitReview = async () => {
//         try {
//             // You should replace 'collegeId' with the actual ID of the college you are reviewing


//             // Your API endpoint for posting the review data
//             const apiUrl = `https://easy-college-bookings-server.vercel.app/admission/review`;

//             // The review data to be posted
//             const reviewData = {
//                 rating,
//                 reviewText,
//             };

//             // Make the API call to post the review data
//             const response = await axios.post(apiUrl, reviewData);
//             swal('Good job!', 'Review submitted successfully', 'success');
//             console.log('Review submitted successfully:', response.data);

//             // You can choose to refetch the data after submitting the review if necessary
//             // fetchData();
//         } catch (error) {
//             console.error('Error submitting review:', error);
//         }
//     };

//     const filteredColleges = colleges?.filter((college) =>
//         selectedColleges.some(
//             (selectedCollege) =>
//                 selectedCollege?.collegeName?.toLowerCase() === college?.name?.toLowerCase()
//         )
//     );

//     return (
//         <div className="px-5 py-5 mx-auto my-auto">
//             {filteredColleges?.map((college) => (
//                 <div key={college?._id} className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div className="bg-base-100 shadow-xl p-5 rounded-md mb-5">
//                         <figure>
//                             <img
//                                 className="w-full h-64 object-cover rounded-md"
//                                 src={college?.image}
//                                 alt="Album"
//                             />
//                         </figure>

//                         <div className="mt-4">
//                             <h2 className="text-4xl font-bold">{college?.name}</h2>
//                             <p className="text-md">Admission process:</p>
//                             <ul className="text-md list-disc ml-6">
//                                 <li>{college?.admissionProcess?.requirements}</li>
//                                 <li>{college?.admissionProcess?.procedures}</li>
//                             </ul>
//                         </div>
//                     </div>

//                     <div className="bg-base-100 shadow-xl p-5 rounded-md mb-5">
//                         <h3 className="text-2xl font-bold mb-4">College Information</h3>
//                         <p className="mt-4 text-md">{college?.details}</p>
//                         <p className="mt-4 text-md">Total Research Works: {college?.researchCount}</p>

//                         {/* Review Section */}
//                         <div className="mt-8">
//                             <h3 className="text-xl font-bold mb-2">Leave a Review</h3>
//                             <div className="flex items-center mb-2">
//                                 <label htmlFor="rating" className="mr-2">
//                                     Rating:
//                                 </label>
//                                 <Rating
//                                     id="rating"
//                                     initialRating={rating}
//                                     emptySymbol={<span>&#9734;</span>}
//                                     fullSymbol={<span>&#9733;</span>}
//                                     onChange={handleRatingChange} // Pass the handleRatingChange function as the onChange handler
//                                 />
//                             </div>
//                             <div className="mb-2">
//                                 <label htmlFor="reviewText">Review:</label>
//                                 <textarea
//                                     id="reviewText"
//                                     value={reviewText}
//                                     onChange={handleReviewTextChange}
//                                     rows="4"
//                                     className="w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                                 />
//                             </div>
//                             <button
//                                 className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//                                 onClick={submitReview}
//                             >
//                                 Submit Review
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default MyCollege;


