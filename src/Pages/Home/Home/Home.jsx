import React from 'react';
import SearchColleges from '../SearchColleges/SearchColleges';
import CollegesCards from '../CollegesCards/CollegesCards';
import CollegeGallery from '../CollegeGallery/CollegeGallery';

const Home = () => {
    return (
        <div>
            <SearchColleges />
            <CollegesCards />
            <CollegeGallery/>
        </div>
    );
};

export default Home;