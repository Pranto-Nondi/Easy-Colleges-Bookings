

import { Link } from 'react-router-dom';


const EveryCollege = ({ selectedCollege }) => {
    return (
        <div className='px-5 py-5 mx-auto my-auto' >
            <div className="card lg:card-side bg-base-100 shadow-xl mt-5 p-5 ">

                <figure className=' w-full md:w-[70%] h-full'>
                    <img className='' src="https://images.unsplash.com/20/cambridge.JPG?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGFydmFyZCUyMHVuaXZlcnNpdHl8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="Album" />
                </figure>

                <div className="card-body">
                    <h2 className="card-title text-4xl">{selectedCollege.name}</h2>
                    <p className='text-3xl '>Admission process: </p>
                    <p className="text-md">Our Events:</p>
                    <ul className="text-md list-disc ml-6">
                        <li>{selectedCollege.events[0].name}</li>
                        <li>{selectedCollege.events[1].name}</li>
                    </ul>
                    <p className='text-xl '> Recipe Items: </p>
                    {/* <div className=' flex justify-center align-center'>
                        <FaThumbsUp className='text-blue-600 text-2xl'></FaThumbsUp>
                        <p className='text-xl pb-1'>&nbsp;&nbsp;{likes} </p>
                    </div> */}
                    {/* <div className="card-actions justify-start">
                        <Link to='/' className=' flex flex-row flex justify-center align-center' >
                            <FaArrowLeft className='text-blue-600 text-2xl pt-1'></FaArrowLeft>
                            <p className='text-xl pl-2 '>Go Back</p>
                        </Link>

                    </div> */}
                </div>
            </div>
            {/* <div>
                <h3 className='mt-10 mb-10 text-center text-4xl font-semibold'>Food Artisan</h3>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 mt-5 mx-auto container  
                '>

                    {recipes?.map((recipe, index) => <SingleChefDetails key={index} recipe={recipe} ></SingleChefDetails>)}
                </div>
            </div> */}
        </div>
    );
};

export default EveryCollege;