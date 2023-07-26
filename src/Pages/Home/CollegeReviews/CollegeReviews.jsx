
// import React, { useState, useEffect, useContext } from 'react';
// import { AuthContext } from '../../../provider/AuthProvider';
// import axios from 'axios';

// const CollegeReviews = () => {
//     const { user } = useContext(AuthContext) || {};
//     const [reviews,setReviews]=useState([])
//     useEffect(() => {
//         fetchData();
//     }, []);



//     const fetchData = async () => {
//         try {
//             const response = await axios.get(
//                 `http://localhost:5000/reviews`
//             );
//             setReviews(response.data || []);
//             console.log(response.data);


//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };


//     return (
//         <div className="p-4">
//             <h2 className="text-2xl font-bold mb-4">College Reviews</h2>
//             {user ? (
//                 reviews.map((review) => (
//                     <div key={review?._id} className="bg-white p-4 rounded-md shadow mb-4">
//                         <p className="text-lg font-bold">{review.collegeName}</p>
//                         <p>Rating: {review?.rating}</p>
//                         <p>{review?.review}</p>
//                     </div>
//                 ))
//             ) : (
//                 <p>No reviews available .</p>
//             )}
//         </div>
//     );
// };

// export default CollegeReviews;


import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import axios from 'axios';

const CollegeReviews = () => {
    const { user } = useContext(AuthContext) || {};
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/reviews`);
            setReviews(response.data || []);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">College Reviews</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {user ? (
                    reviews.map((review) => (
                        <div key={review?._id} className="bg-white p-4 rounded-md shadow mb-4">
                            <p className="text-lg font-bold">{review.collegeName}</p>
                            <p>Rating: {review?.rating}</p>
                            <p>{review?.review}</p>
                        </div>
                    ))
                ) : (
                    <p>No reviews available.</p>
                )}
            </div>
        </div>
    );
};

export default CollegeReviews;
