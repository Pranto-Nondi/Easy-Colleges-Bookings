import React from 'react';
import useEasyColleges from '../../../hooks/useEasyColleges';

const ResearchPaper = () => {
    const [colleges] = useEasyColleges();


    return (
        <section className="py-8 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4 text-center">Our Research Papers</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 ">
                {colleges.map((college, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-4">
                        <h3 className="text-lg font-semibold mb-2">{college?.name}</h3>

                        <h3 className="text-md font-semibold mb-2">Research Count:{college?.researchCount}</h3>
                        <h3 className="text-lg font-semibold mb-2">Some Research Info</h3>
                        <p className="text-gray-600">{college?.researchPapers[0].title}</p>
                        <p className="text-gray-600">{college?.researchPapers[1].title}</p>

                        <ul className="text-md list-disc ml-6">
                            {college?.researchPapers?.map((paper) => (
                                <li key={paper.id}>
                                    <a href={paper.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                        {paper.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ResearchPaper;
