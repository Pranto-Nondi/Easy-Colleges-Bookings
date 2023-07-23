import React from 'react';
import SearchColleges from '../SearchColleges/SearchColleges';
import CollegesCards from '../CollegesCards/CollegesCards';

const Home = () => {
    return (
        <div>
            <SearchColleges />
            <CollegesCards />
        </div>
    );
};

export default Home;