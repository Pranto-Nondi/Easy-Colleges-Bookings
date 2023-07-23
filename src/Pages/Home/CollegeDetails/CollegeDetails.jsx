
import {  useParams } from 'react-router-dom';

import useEasyColleges from '../../../hooks/useEasyColleges';
import EveryCollege from '../EveryCollege/EveryCollege';


const CollegeDetails = () => {
    const [colleges] = useEasyColleges();
    const { id } = useParams()


    const selectedCollege = colleges.find(college => college._id == id)
    return (
        <div>
            <EveryCollege selectedCollege={selectedCollege} />
        </div>
    );
};

export default CollegeDetails;
