import React from 'react';
import SearchColleges from '../SearchColleges/SearchColleges';
import CollegesCards from '../CollegesCards/CollegesCards';
import CollegeGallery from '../CollegeGallery/CollegeGallery';
import ResearchPaper from '../ResearchPaper/ResearchPaper';

const Home = () => {
    return (
        <div>
            <SearchColleges />
            <CollegesCards />
            <CollegeGallery/>
            <ResearchPaper/>
        </div>
    );
};

export default Home;